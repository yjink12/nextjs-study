import { parseISO, format } from 'date-fns';
import dayjs from 'dayjs'

export default function Date({ dateString }) {
  const date = dayjs(dateString);
  return <time dateTime={dateString}>{date.format('YYYY-MM-DD')}</time>;
}