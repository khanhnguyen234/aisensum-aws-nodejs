import { Segment } from '../segment.entity';
import { SegmentCriteria } from '../segment-criteria.entity';
import { SegmentType } from '../segment-type.entity';
import { SEGMENT_TYPES } from './segment-type.data';
import { SEGMENT_CRITERIAS } from './segment-criteria.data';
import { SEGMENT_SALES_SALES_TRENDS } from './segment.data';
import { pgManager, connectPostgres } from '../../../postgres';

async function migrate() {
  await connectPostgres();
  await migrateSegmentCriteria();
  await migrateSegmentType();
  await migrateSegment();
}

// migrate();
async function migrateSegment() {
  return await pgManager.save(Segment, SEGMENT_SALES_SALES_TRENDS);
}

async function migrateSegmentType() {
  return await pgManager.save(SegmentType, SEGMENT_TYPES);
}

async function migrateSegmentCriteria() {
  return await pgManager.save(SegmentCriteria, SEGMENT_CRITERIAS);
}
