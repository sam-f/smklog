import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import { Text } from 'ink';
import { editLog } from '../../lib/log';

// Adds a smoke to the log.
const Index = ({ count }) => {
  const [totalCount, setTotalCount] = useState(null);

  useEffect(() => {
    const toAdd = count || 1;

    editLog(toAdd, (newCount) => {
      setTotalCount(newCount)
    })

  }, [count])

  return (
    <Text>Added smoke! Your total count is {totalCount}</Text>
  )
}

Index.propTypes = {
  count: string,
}

export default Index;
