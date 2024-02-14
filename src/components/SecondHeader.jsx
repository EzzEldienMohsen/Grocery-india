import { LargeSubHeader, SmallSubHeader } from '../subComponents';

const SecondHeader = () => {
  return (
    <div className="w-full h-60 pt-4">
      <SmallSubHeader />
      <LargeSubHeader />
    </div>
  );
};

export default SecondHeader;
