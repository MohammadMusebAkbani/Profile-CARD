// Simple reusable stat item (icon + count)
const StatItem = ({ icon: Icon, count }) => {
  return (
    <div className="flex gap-1 items-center">
      {Icon && <Icon className="h-3.5" />}
      <p className="text-sm text-gray-700">{count}</p>
    </div>
  );
};

export default StatItem;
