import { Segment } from './segment.entity';
import { pgManager } from '../../postgres';

export async function segmentChart(query = {} as any) {
  return await pgManager.find(Segment, {
    typeUuid: query.typeUuid,
    criteriaUuid: query.criteriaUuid,
  });
}
