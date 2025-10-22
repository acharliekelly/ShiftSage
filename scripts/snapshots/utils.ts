// Test utilities
import { SNAPSHOT_BASE } from './constants';

function snapshotPath(pageName: string, 
  pageView: string = "default", 
  date: Date = new Date()): string {
    const dt = dateFormat(date);
    return `${SNAPSHOT_BASE}/${pageName}/${dt}_${pageName}-${pageView}.png`;
}

function dateFormat(date: Date): string {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

export {
  snapshotPath,
  dateFormat
};