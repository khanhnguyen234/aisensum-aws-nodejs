import { Segment } from './segment.entity';
import { SegmentCriteria } from './segment-criteria.entity';
import { SegmentType } from './segment-type.entity';
import { pgManager } from '../../postgres';

export async function getSegmentChart(query = {} as any) {
  return await pgManager.find(Segment, {
    where: { typeUuid: query.typeUuid, criteriaUuid: query.criteriaUuid },
    take: query.limit || 8,
  });
}

export async function getSegmentCriterias(query = {} as any) {
  return await pgManager.find(SegmentCriteria, {
    take: query.limit || 8,
  });
}

export async function getSegmentTypes(query = {} as any) {
  return await pgManager.find(SegmentType, {
    take: query.limit || 8,
  });
}
