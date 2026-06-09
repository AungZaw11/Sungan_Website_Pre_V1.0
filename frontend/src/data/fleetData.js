// data/fleetData.js

// 1. ပုံတွေကို import လုပ်ပါ
import HSGloryImg from '../ship/HS.png';
import FrontierImg from '../ship/Fronttier.png';
import EnterpriseImg from '../ship/EnterPrise.png';
import CrystalImg from '../ship/Crystal.png';
import EasternDreamImg from '../ship/Eastern Dream.png';
import OceanLeaderImg from '../ship/Ocean Leader.png';
import SunStarImg from '../ship/Sun Star.png';
import Pride1Img from '../ship/Pride 1.png';
import SunRioImg from '../ship/Sun Rio.png';
import VenusImg from '../ship/Venus.png';

export const bulkFleet = [
  {
    name: 'HS GLORY',
    type: 'Bulk',
    built: '2008',
    gt: '11,743',
    dwt: '18,978',
    class: 'KR',
    country: 'Korea',
    image: HSGloryImg,
  },
  {
    name: 'ORIENTAL FRONTIER',
    type: 'Bulk',
    built: '2000',
    gt: '39,052',
    dwt: '74,366',
    class: 'KR',
    country: 'Korea',
    image: FrontierImg,
  },
  {
    name: 'ORIENTAL ENTERPRISE',
    type: 'Bulk',
    built: '2004',
    gt: '48,042',
    dwt: '88,125',
    class: 'KR',
    country: 'Korea',
    image: EnterpriseImg,
  },
  {
    name: 'CS CRYSTAL',
    type: 'Bulk',
    built: '2010',
    gt: '19,972',
    dwt: '30,477',
    class: 'KR',
    country: 'Marshall',
    image: CrystalImg,
  },
];

export const passengerFleet = [
  {
    name: 'EASTERN DREAM (PASSENGER)',
    type: 'Passenger',
    built: '1993',
    gt: '11,478',
    dwt: '3,408',
    class: 'KR',
    country: 'Korea',
    image: EasternDreamImg,
  },
  {
    name: 'OCEAN LEADER',
    type: ' Passenger',
    built: '2002',
    gt: '9,004',
    dwt: '9,756',
    class: 'KR',
    country: 'Korea',
    image: OceanLeaderImg,
  },
  {
    name: 'SUN STAR',
    type: ' Passenger',
    built: '2000',
    gt: '6,555',
    dwt: '3,294',
    class: 'KR',
    country: 'Korea',
    image: SunStarImg,
  },
  {
    name: 'OCEAN PRIDE1',
    type: ' Passenger',
    built: '1987',
    gt: '6,542',
    dwt: '3,450',
    class: 'IBS',
    country: 'PANAMA',
    image: Pride1Img,
  },
  {
    name: 'SUN RIO',
    type: ' Passenger',
    built: '1991',
    gt: '7,578',
    dwt: '2,577',
    class: 'OMCS',
    country: 'PANAMA',
    image: SunRioImg,
  },
  {
    name: 'EASTERN VENUS (PASSENGER, PURE CRUSER)',
    type: 'Passenger',
    built: '1998',
    gt: '26,594',
    dwt: '4,202 MT',
    class: 'RS',
    country: 'PANAMA',
    image: VenusImg,
  },
];