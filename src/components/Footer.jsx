import {
  CardsFooter,
  CategoryFooter,
  LargeLastFooter,
  SmallLastFooter,
} from '../subComponents';

const Footer = () => {
  return (
    <div className="w-full ">
      <CardsFooter />
      <CategoryFooter />
      <SmallLastFooter />
      <LargeLastFooter />
    </div>
  );
};

export default Footer;
