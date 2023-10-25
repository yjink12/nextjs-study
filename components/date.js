import dayjs from 'dayjs'
import { useEffect, useState } from 'react';

export default function Date({dateString}) {
    const date = dayjs(dateString).format('YYYY-MM-DD');

    return (
        <>
            <time dateTime={dateString}>{date}</time>
            {/* {dateString} */}
        </>
    )
}