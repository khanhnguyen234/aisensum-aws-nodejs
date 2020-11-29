import { Segment } from './segment.entity';
import { pgManager } from '../../postgres';

export async function segmentChart() {
  const res = await pgManager.find(Segment);
  return { a: '1111', b: 2222, res };
}
