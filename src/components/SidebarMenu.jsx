import { Link } from 'react-router-dom';

const SidebarMenu = () => {
  return (
    <ul className="menu bg-base-200 w-56 rounded-box">
      <li>
        <Link to={'/'}>All</Link>

        <ul>
          <li>
            <Link to={'/fruitsAndVegetables'}>Fruits & Vegetables</Link>
            <ul>
              <li>
                <Link to={'/fruits'}>fruits</Link>
              </li>
              <li>
                <Link to={'/vegetables'}>vegetables</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={'/babyFood'}>baby food</Link>
          </li>
          <li>
            <Link to={'/attaRiceOilDals'}>Atta, Rice, Oil & Dals</Link>
            <ul>
              <li>
                <Link to={'/atta'}>atta</Link>
              </li>
              <li>
                <Link to={'/rice'}>rice</Link>
              </li>
              <li>
                <Link to={'/oil'}>oil</Link>
              </li>
              <li>
                <Link to={'/dals'}>dals</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={'/teaCoffeeMore'}>Tea, Coffee & More</Link>
            <ul>
              <li>
                <Link to={'/tea'}>tea</Link>
              </li>
              <li>
                <Link to={'/coffee'}>coffee</Link>
              </li>
              <li>
                <Link to={'/more'}>more</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={'/paan'}>paan corner</Link>
          </li>
          <li>
            <Link to={'/masalaDryFruits'}>Masala & Dry Fruits</Link>
            <ul>
              <li>
                <Link to={'/masala'}>masala</Link>
              </li>
              <li>
                <Link to={'/dryFruits'}>Dry Fruits</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={'/sweets'}>Sweets</Link>
          </li>
          <li>
            <Link to={'/frozenFoodIceCreams'}>Frozen Food & Ice Cream</Link>
            <ul>
              <li>
                <Link to={'/frozenFood'}>Frozen Food</Link>
              </li>
              <li>
                <Link to={'/IceCream'}>Ice Cream</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={'/dairyBreadEggs'}>Dairy, Bread & Eggs</Link>
            <ul>
              <li>
                <Link to={'/dairy'}>Dairy</Link>
              </li>
              <li>
                <Link to={'/bread'}>Bread</Link>
              </li>
              <li>
                <Link to={'/eggs'}>Eggs</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={'/munchies'}>Munchies</Link>
          </li>
          <li>
            <Link to={'/meatsFishBirds'}>Meat, Fish & Birds</Link>
            <ul>
              <li>
                <Link to={'/meat'}>Meat</Link>
              </li>
              <li>
                <Link to={'/fish'}>Fish</Link>
              </li>
              <li>
                <Link to={'/birds'}>Birds</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={'/biscuits'}>Biscuits</Link>
          </li>
          <li>
            <Link to={'/cleaningEssentials'}>Cleaning Essentials</Link>
          </li>
          <li>
            <Link to={'/electronics'}>Electronics</Link>
          </li>
          <li>
            <Link to={'/hygieneGrooming'}>Hygiene & grooming</Link>
            <ul>
              <li>
                <Link to={'/hygiene'}>Hygiene</Link>
              </li>
              <li>
                <Link to={'/grooming'}>Grooming</Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default SidebarMenu;
