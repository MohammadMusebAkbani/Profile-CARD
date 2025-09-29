import React from 'react'
import StatItem from './StatItem';
import Divider from './Divider';
// Stats Section (Likes, Comments, Shares)
const Stats = ({ stats }) => {
  return (
    <div className="flex gap-3 mt-5 items-center">
      {stats.map((stat, index) => (
        <React.Fragment key={index}>
          <StatItem icon={stat.icon} count={stat.count} />
          {index < stats.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stats