import { RecentServiceItem } from '.';

const RecentServiceTable = () => {
  return (
    <div>
      <p>Recent services</p>
      <div className='grid grid-cols-2'>
        <div>Service</div>
        <div>Date</div>
      </div>
      <RecentServiceItem />
    </div>
  );
};

export default RecentServiceTable;
