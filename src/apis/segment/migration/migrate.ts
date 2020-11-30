import { Segment } from '../segment.entity';
import { SegmentCriteria } from '../segment-criteria.entity';
import { SegmentType } from '../segment-type.entity';
import { SEGMENT_TYPES } from './segment-type.data';
import { SEGMENT_CRITERIAS } from './segment-criteria.data';
import { SEGMENTS } from './segment.data';
import { pgManager, connectPostgres } from '../../../postgres';
import { random100 } from './ultils';

async function migrate() {
  await connectPostgres();
  // await migrateSegmentCriteria();
  // await migrateSegmentType();
  await migrateSegment();
}

// migrate();

async function migrateSegment() {
  let records = [];
  for (const type of SEGMENT_TYPES) {
    const typeUuid = type.uuid;
    for (const criteria of SEGMENT_CRITERIAS) {
      const criteriaUuid = criteria.uuid;
      for (const segment of SEGMENTS) {
        records = [
          ...records,
          {
            ...segment,
            typeUuid,
            criteriaUuid,
            index: random100(),
          },
        ];
      }
    }
  }
  return await pgManager.save(Segment, records);
}

async function migrateSegmentType() {
  return await pgManager.save(SegmentType, SEGMENT_TYPES);
}

async function migrateSegmentCriteria() {
  return await pgManager.save(SegmentCriteria, SEGMENT_CRITERIAS);
}
