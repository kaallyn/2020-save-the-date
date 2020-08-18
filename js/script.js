// dropdown button below

// $('.dropbtn').on('click', function (e) {
//       e.preventDefault();
//   $('.dropdown-content').toggleClass('activeX');
  

// });

// end dropdown button

$(document).ready(function(){
    $(this).scrollTop(0);
});

$(document).ready(function(){

    $(".fade").hide(0).delay(100).fadeIn(200);
    // (".hero").delay(200).addClass('animated fadeInDown')
    $(".conf-logo").addClass('animated fadeInDown');
    $(".location").addClass('animated fadeInLeft');
    $(".sold-out-btn").addClass('animated fadeInUp');
    $(".sold-out-btn").addClass('animated not-hidden');
    $(".nineteen").addClass('animated fadeInUp');
    $(".bg").addClass('animated fadeIn');
    $(".memberRegistration").addClass('animated bounce');


    // $(function(){
    //    function show_popup(){
    //       $(".nineteen").slideUp();
    //    };
    //    window.setTimeout( show_popup, 5000 ); // 5 seconds
    // });

});





var speakers = [
{
  firstname: 'Jack',
  lastname: 'Dangermond',
  displayname: 'Jack Dangermond',
  title: 'Founder and President',
  company: 'Esri',
  panel: 'The Future of Market Analysis: A Conversation with Jack Dangermond | Monday, Oct. 14 at 8:30 a.m.',
  bio1: 'A landscape architect by training, Jack Dangermond founded Environmental Systems Research Institute (Esri) in 1969 with a vision that computer mapping and analysis could help us design a better future. Under Dangermond\'s leadership, that vision has continued to guide Esri in creating cutting-edge GIS and Geodesign technologies used in every industry to make a difference worldwide. Dangermond fostered the growth of Esri from a small research group to an organization recognized as the world leader in GIS software development. Esri employs more than 4,000 people worldwide; many who shared his passion for GIS in the early days are still with the company and remain dedicated to helping Esri users be successful.',
  bio2: '',
  special: 'Keynote Address'
},

{
  firstname: 'Carmela',
  lastname: 'Ma',
  displayname: 'Carmela Ma, CCIM',
  title: 'President',
  company: 'CJM Associates, Inc.',
  title2: 'Senior Instructor',
  company2: 'CCIM Institute',
  panel: 'Cross-Border Investment Primer | Monday, Oct. 14 at 9:45 a.m.',
  bio1: 'Carmela Ma, CCIM, is President/CEO of CJM Associates, Inc., which specializes in real estate investment, advisement, and global transactions. She has conducted business in more than 30 countries, including projects in Asia, Africa, Europe, and the Americas.',
  bio2: 'Educated at the University of Southern California and the University of Hong Kong, Ma regularly speaks at conferences and real estate events around the world.  She has been a senior instructor at CCIM Institute since 1994 and she has also held several faculty and committee positions with the National Association of REALTORS®. In 2009 Ma was awarded “Women at the Top” award Commercial Real Estate Women (CREW) and was named a World Top Broker by the Real Estate Global Summit.',
  special: ''
},
{
  firstname: 'Laura',
  lastname: 'Cataldo',
  displayname: 'Laura Cataldo',
  title: 'Senior Manager, Construction & Real Estate Services',
  company: 'Baker Tilly',
  panel: 'Succession Planning: Your Legacy and the Workforce of the Future | Monday, Oct. 14 at 1 p.m.',
  bio1: 'Laura Cataldo, senior manager with Baker Tilly, joined the firm in 2017. Cataldo works with real estate and construction firms of all sizes to evaluate business practices and assist with management challenges. Having worked in the real estate and construction industry for almost 25 years, she offers a depth of experience working with management teams to improve profitability and succeed in the changing marketplace. Cataldo excels at working with dynamic and demanding environments that require relationship building, versatility and challenge. She is a member of AGC’s Industry Recruitment Taskforce and is the Board Chair-Elect for the Workforce Development Board of South Central Wisconsin.',
    bio2: '',
  special: ''
},
{
  firstname: 'KC',
  lastname: 'Conway',
  displayname: 'K.C. Conway, MAI, CRE',
  title: 'Chief Economist',
  company: 'CCIM Institute',
  title2: 'Director of Research',
  company2: 'Alabama Center for Real Estate at The University of Alabama',
  panel: 'Preparing for a Market Correction: Exploring Exposure Risk | Monday, Oct. 14 at 2:25 p.m.',
  bio1: 'CCIM Institute Chief Economist Kiernan “K.C.” Conway is the director of research and corporate engagement at the Alabama Center for Real Estate (ACRE) housed within the University of Alabama\'s Culverhouse College of Business. Conway is a frequent speaker for the Federal Reserve, FDIC, FHLB, state bank commissioners, academic groups, professional organizations, and industry associations. He previously served as chief economist for Colliers International - US.',
  bio2: 'In addition to being a frequent lecturer at international conferences, Conway has consulted with major governmental agencies, most notably briefing former Federal Reserve Chairman Ben Bernanke and the Board of Governors on the burgeoning subprime lending and housing crisis and its impact on the commercial real estate industry.',
  special: ''
},
{
  firstname: 'Camille',
  lastname: 'Renshaw',
  displayname: 'Camille Renshaw, CCIM',
  title: 'CEO and Co-Founder',
  company: 'B+E',
  panel: 'Campfire Sessions: Lessons from CCIM Women of Influence | Monday, Oct. 14 at 1 p.m. <br><b>Session:</b> Innovation and Inclusion: Future-Proofing Your Commercial Real Estate Business | Monday, Oct. 14 at 2:55 p.m.',
  bio1: 'Camille Renshaw, CCIM, is the CEO and co-founder of B+E, the first tech-driven brokerage and trading platform for net lease real estate. B+E’s trading platform consists of user-friendly dashboards, real-time predictive pricing and an AI-driven exchange — all leveraging the largest data set in the industry. Buyers and sellers can conduct entire transactions online, reviewing real-time credit, news, and tenant data while they trade, much like online stock trading platforms. Prior to B+E, Renshaw was Head of Sales for Ten-X (a Google Capital company), a leading online marketplace for commercial real estate with products such as Auction.com. Prior to Ten-X, she founded the Stan Johnson Company’s New York office where she led their sales team as its top producer for five years.  Before this, she was Director of the US Capital Markets division of Colliers International and a Top 40 Worldwide Producer. Renshaw originally entered commercial real estate as an owner, after founding Dyzco Technologies and successfully selling it to American Financial Services Corp, Inc.',
  bio2: 'Renshaw was recently honored as a 2019 Real Estate Forum Women of Influence award recipient for achievement in innovation, selected from a record-breaking 350 submissions.  Since 1983, the Women of Influence award has recognized remarkable commercial real estate professionals who have significantly influenced the market or had outstanding successes in the past year.',
  special: ''
},
{
  firstname: 'Kenisha',
  lastname: 'Robnett',
  displayname: 'Kenisha Robnett, CCIM',
  title: 'Executive Vice President, Commercial',
  company: 'RE/MAX Platinum Access',
  title2: 'Workshop Leader',
  company2: 'CCIM Institute',
  panel: 'Capitalizing on Cannabis: Preparing for Legalization in Your Market | Monday, Oct. 14 at 9:45 a.m.',
  bio1: 'Kenisha Robnett, CCIM, is the Executive Vice President of Commercial at RE/MAX Platinum Access, with years of Real Estate Experience and a Master\'s Degree in Real Estate Development. She is currently on the Board of Directors for the Georgia CCIM Chapter over University Outreach and Scholarships. Robnett is serving as a 2019 Diversity Mentor for the Atlanta Commercial Board and she is a Business Broker, and a member of both the commercial and residential boards. ',
  bio2: 'Robnett has managed over 44 million square feet of Walmart Real Estate, assisted with new store development, lease negotiations, and selling excess land. She now represents numerous corporate clients and private investors with acquisitions, dispositions, lease negotiations, and development, as they build their real estate portfolios in retail, land, multifamily, restaurant, office, warehouse, flex space, and more.',
  special: ''
},
{
  firstname: 'Darrel',
  lastname: 'Fullbright',
  displayname: 'Darrel Fullbright, AIA, LEED GA',
  title: 'Principal and Design Director',
  company: 'Gensler',
  panel: 'A Closer Look: The Impact of Autonomous Vehicles | Monday, Oct. 14 at 1 p.m.',
  bio1: 'Darrel Fullbright is Gensler’s Firmwide Office Building Practice Area Leader and Principal in the San Diego office. Fullbright leads the firm’s global experts in the strategic planning and exploration of office design and its impact on development. A true client partner and advocate, he leads projects of various types and sizes, and has built a strong reputation as a strategic thinker in the real estate industry by helping his clients grow their commercial office portfolios. Fullbright has designed more than 3-million-square-feet of commercial office, life science, hospitality, and government projects. His vision is to create compelling and purposeful architecture focused on improving his clients’ business operations. Fullbright’s leadership has been recognized through design awards from the AIA, BOMA International, and Contract Magazine.',
  bio2: '',
  special: ''
},
{
  firstname: 'Chris',
  lastname: 'Lo',
  displayname: 'Chris Lo',
  title: 'Director, Los Angeles',
  company: 'Hong Kong Trade Development Council',
  panel: 'Global Connections Luncheon Keynote | Sunday, Oct. 13 at 12:15 p.m.',
  bio1: 'As Director of the Hong Kong Trade Development Council (HKTDC) in the West Coast, Chris Lo leads Hong Kong’s trade promotion programs and operations in the region, and he is responsible for facilitating enterprises in the United States to invest, trade and do business in Asia through partnership with Hong Kong.',
  bio2: 'Lo joined the HKTDC in 2000 and has proven experience in directing trade and investment promotion for various prioritized manufacturing sectors, financial services, tech commercialization, infrastructure investment as well as real estate-related services. He was posted to the HKTDC Paris Office from 2005-07 as Marketing Manager. Prior to his current role, Lo led HKTDC’s promotional program for Hong Kong’s creative industries including design, advertising and marketing services, and was actively engaged in capacity building program for mainland Chinese enterprises to upgrade and transform.',
  special: ''
},
{
  firstname: 'Jeff',
  lastname: 'Engelstad',
  displayname: 'Jeff Engelstad, Ph.D, FRICS, CCIM',
  title: 'Professor of the Practice, Daniels College of Business',
  company: 'University of Denver',
  title2: 'Senior Instructor',
  company2: 'CCIM Institute',
  panel: 'Beyond the Core: CCIM Institute’s Other Professional Development Resources | Monday, Oct. 14 at 9:45 a.m. <br><b>Session:</b> Splitting Profits in Commercial Real Estate | Monday, Oct. 14 at 1 p.m.',
  bio1: 'Jeff Engelstad Ph.D, FRICS, CCIM, is a professor at the University of Denver and has been active in commercial and investment real estate since 1980. In his capacity as professor, he has published articles in the area of real estate finance and investment and feasibility analysis.',
  bio2: 'Engelstad has been a CCIM Institute instructor since 2007. He has served as a director of the Colorado Association of Realtors® and as a director of NAIOP Colorado. Engelstad was awarded REALTOR® of the Year in 2001 and the 1996 Presidents Distinguished Service Award by the Aurora Association of REALTORS®. ',
  special: ''
},
{
  firstname: 'Bo',
  lastname: 'Barron',
  displayname: 'Bo Barron, CCIM',
  title: 'CEO and Managing Director',
  company: 'Barron Commercial Group',
  title2: 'Workshop Leader',
  company2: 'CCIM Institute',
  panel: 'Advanced Prospecting: Learn How to Leverage Storytelling to Win More Business | Monday, Oct. 14 at 9:45 a.m.',
  bio1: 'Bo Barron, CCIM, is the CEO and Managing Director of Barron Commercial Group. After five years of serving in the Marine Corps, Barron started working for his father at Wm. G. Barron Enterprises as a commercial real estate advisor, becoming the 3rd generation of his family to practice real estate. In October 2010, he purchased the brokerage company from his father and became managing director and owner. In 2013, he accepted a position as Vice President of Organizational Development with SVN International Corporation where he was responsible for growing the productivity and production of SVN advisors nationwide. Barron then worked for three years as COO of The Massimo Group, the leading coaching firm for the nation’s top real estate professionals. After an incredible experience with that team, he returned to lead the family business and rebranded it as Barron Commercial Group.',
  bio2: '',
  special: ''
},
{
  firstname: 'Barbara',
  lastname: 'Crane',
  displayname: 'Barbara Crane, CCIM',
  title: '2019 President and Senior Instructor',
  company: 'CCIM Institute',
  panel: 'Campfire Sessions: Lessons from CCIM Women of Influence | Monday, Oct. 14 at 1 p.m.',
  bio1: '2019 CCIM Institute President Barbara Crane, CCIM, also serves as the immediate past president of CCIM Foundation, an affiliate of CCIM Institute that raises funds for scholarships, and as a CCIM senior instructor. In addition, she is an independent broker in San Antonio, specializing in the sale and leasing of office properties and related development and consulting projects. During her 40 years in commercial real estate, Crane has worked on general brokerage, agency leasing services for property owners, tenant representation, and consultation for her clients – including small businesses, law firms, large corporate users, developers, and the Federal Reserve Bank – representing several million square feet of office space.',
  bio2: 'As a CCIM senior instructor, Crane belongs to an elite group of faculty with practical knowledge of the commercial real estate profession who are grooming the next generation of CRE professionals. For many years, she has helped to write new material for existing CCIM Institute’s core designation courses. During the last few years, Crane has assisted in developing the institute’s blended learning courses, which combine online and classroom study to accommodate busy students’ lives. Among many industry awards, Crane has received the “40 Women in Real Estate” award in 2017 from Connect Media; “Women of Influence” Award in 2013 from Real Estate Forum magazine; and the CCIM Institute “Robert L. Ward Instructor of the Year” Award in 2010. Her love of teaching springs from a mentor who helped her learn and grow. Crane wants to give her students the confidence to do new things and succeed in the commercial real estate profession.',
  special: ''
},
{
  firstname: 'Renee',
  lastname: 'Savage',
  displayname: 'Renee Savage, CCIM, CPM',
  title: 'President',
  company: 'Capital Growth Properties',
  panel: 'Campfire Sessions: Lessons from CCIM Women of Influence | Monday, Oct. 14 at 1 p.m.',
  bio1: 'As president of Capital Growth Properties, Renee Savage, with more than 30 years of experience in property management, is responsible for the risk management, strategic direction and overall operation of the firm. She leads CGP’s 40+ team members in the management of more than 110 commercial & residential properties totaling over 2.2 million square feet throughout San Diego County.',
  bio2: 'Savage has been actively involved in the property management industry. She is a past president of IREM San Diego, started and chairs the Student Outreach Committee in San Diego and currently serves as a senior vice president with IREM International. IREM has honored Savage with the CPM of the Year (2006), the Presidential Achievement Award (2009), and the Exceptional Contribution Award (2014) and officially recognized her as a “Woman Changing the World of Real Estate Management” in 2013. Savage is also a past president of the San Diego County Apartment Association and was honored with the President’s Award (1999) and Industry Achievement Award (2007). In 2019 Savage was the Gold winner of the Woman of Influence award for Property Management by GlobeSt.com. Savage is attempting to change the world of real estate management even further by passing on her knowledge and experience to others through teaching and mentoring. She has returned to her alma mater, the University of San Diego, where she earned a Bachelor of Science in Business Administration, to teach the Property Management course in the Master of Science in Real Estate program offered through USD’s Burnham Moore Center.',
  special: ''
},
{
  firstname: 'Helen',
  lastname: 'Thompson',
  displayname: 'Helen Thompson',
  title: 'Global Marketing Strategy Manager in Real Estate, Banking and Insurance',
  company: 'Esri',
  panel: 'The Power of Story Maps to Enhance Your Site Appeal | Monday, Oct. 14 at 11 a.m.',
  bio1: 'Helen Thompson is the global marketing strategy manager for real estate, banking and insurance for Esri Inc. A recognized thought leader, keynote speaker and expert on location-based data and spatial analysis, Thompson believes that to do intelligent business, the real estate industry first needs to be location intelligent. With more than 30 years’ experience in applying spatial analysis and data to market and tenant analysis, she has helped thousands of companies find new market opportunities by developing a better understanding of people and place.',
  bio2: 'Thompson is an advocate for advancing analytics and geographic literacy. While every twenty-first century dataset contains location, most businesses remain blind to the value and importance of geographic decision-making. The future of smart cities, drone delivery, autonomous vehicles, IoT, big data and e-commerce relies on our ability to develop better ways of making sense of the world and the changes brought by technology and digital transformation.',
  special: ''
},
{
  firstname: 'Mark',
  lastname: 'Vanark',
  displayname: 'Mark Van Ark, CCIM, SIOR',
  title: 'Director of Commercial Real Estate',
  company: 'KW Commercial Real Estate',
  title2: 'Senior Instructor',
  company2: 'CCIM Institute',
  panel: 'Beyond the Core: CCIM Institute’s Other Professional Development Resources | Monday, Oct. 14 at 11 a.m.',
  bio1: 'Mark Van Ark, CCIM, SIOR, is commercial director of KW Commercial in Boulder, Colo. A native of Boulder, CO, he first obtained his real estate license in 1969, and began learning the business while assisting in the family-owned real estate projects. Van Ark’s real estate business was placed on hold while he worked in the field of law enforcement from 1970-1980. During this period, he earned his undergraduate degree in both criminal justice, as well as real estate. His professional experience included working with the Boulder County Sheriff’s Department as an investigator, as well as a three-year undercover and intelligence assignment with the Drug Enforcement Administration’s (DEA) Denver office.',
  bio2: 'Van Ark has over thirty years of real estate experience in the commercial and investment field. Van Ark has broad experience in investment sales, office and industrial leasing, land sales and development, including multi-family projects and consulting. As a senior instructor for the CCIM Institute, Van Ark has trained real estate professionals both domestically as well as internationally. These training assignments have included such international locations as Taipei, Tokyo, Warsaw, Moscow and St. Petersburg.',
  special: ''
},
// {
//   firstname: 'Mark',
//   lastname: 'Cypert',
//   displayname: 'Mark Cypert, CCIM',
//   title: 'Partner',
//   company: 'Middleton Partners',
//   title2: 'Senior Instructor',
//   company2: 'CCIM Institute',
//   panel: 'The Future of Market Analysis: A Conversation with Jack Dangermond | Monday, Oct. 14 at 8:30 a.m.',
//   bio1: 'Mark Cypert, CCIM, is a partner with Middleton Partners, a private equity investment firm specializing in creating value in properties through acquiring, developing, leasing, managing, and repositioning quality properties in targeted markets. During his career, he has participated in 16.9 million square feet of office, industrial and retail acquisition and development ventures with a total market capitalization of $2.25 billion. Prior to joining Middleton, he was the chief investment officer and office division president for Encore Enterprises. Cypert also previously served as the managing director of Cawley Partners, where he directed the firm\'s commercial real estate investment funds, and as senior vice president of CRT Properties, a NYSE office REIT, where he oversaw operations for the firm\'s Southwestern and Mid-Atlantic regions.',
//   bio2: 'Cypert is an award-winning senior instructor for the CCIM Institute with a specialty focus on commercial property market analysis courses, which he teaches globally. He\'s a graduate of Texas Tech University with a degree in construction engineering technology. He holds the CCIM and RPA professional designations, and he is a licensed Texas real estate broker.',
//   special: ''
// },
{
  firstname: 'Todd',
  lastname: 'Kuhlmann',
  displayname: 'Todd Kuhlmann, CCIM',
  title: 'President/Founder',
  company: 'TheAnalyst PRO, a CRE Tech® company',
  title2: 'Senior Instructor',
  company2: 'CCIM Institute',
  panel: 'Cap Rate and Rent Setting: Analyzing a Proposed Development | Monday, Oct. 14 at 9:45 a.m.',
  bio1: 'Todd Kuhlmann, CCIM, has been in the commercial real estate industry over 28 years, closing over $1 billion in transactions. Kuhlmann is the founder and president of CRE Tech®, Inc., a technology company that developed TheAnalyst® PRO software platform to quickly perform investment, lease, location and demographic analysis on commercial real estate worldwide. Kuhlmann is a senior instructor for the CCIM Institute, teaching the 101 and 104 core courses, as well as the High Tech Marketing course for the CCIM Ward Center for Real Estate Studies.',
  bio2: '',
  special: ''
},
// {
//   firstname: 'Karl',
//   lastname: 'Landreneau',
//   displayname: 'Karl Landreneau, CCIM',
//   title: 'Director of Commercial Sales & Leasing',
//   company: 'NAI Latter & Blum',
//   title2: 'Senior Instructor',
//   company2: 'CCIM Institute',
//   panel: 'Cap Rate and Rent Setting: Analyzing a Proposed Development | Monday, Oct. 14 at 9:45 a.m.',
//   bio1: 'Karl Landreneau, CCIM, has been an active player in matters affecting commercial real estate in Louisiana for more than 16 years and is the current director of commercial sales and leasing for NAI Latter & Blum, part of Latter & Blum, Inc. — the largest independently-owned real estate firm in the Gulf South.',
//   bio2: 'Landreneau’s previous accomplishments include 2006 chair of the Commercial Business & Industry Team for the Louisiana Realtors Association (LREC), where he was recognized for his role in helping to create the first database of Louisiana commercial properties (LACDB) for commercial agents. He has served in multiple industry leadership positions, including past president of the Commercial Investment Division (CID) of East Baton Rouge Parish, 2006 graduate of the CCIM Jay Levine Leadership Academy, where he was awarded the Susan B. Groeneveld award, 2007 president of the Louisiana CCIM chapter, 2007 CCIM Region IV first vice-president, and 2009 CCIM presidential liaison. Landreneau is a current member of CCIM’s National Board of Directors. Since 2012, he has served in senior leadership positions within the organization, including first vice president, vice president, and was elected the 2014 president of the CCIM Institute.',
//   special: ''
// },
// {
//   firstname: 'Cynthia',
//   lastname: 'Shelton',
//   displayname: 'Cynthia Shelton, CCIM, CRE',
//   title: 'Senior Managing Director of Investments and Capital Markets',
//   company: 'LandQwest',
//   title2: 'Senior Instructor',
//   company2: 'CCIM Institute',
//   panel: 'Campfire Sessions: Lessons from CCIM Women of Influence | Monday, Oct. 14 at 1 p.m.',
//   bio1: 'Cynthia Shelton, CCIM, has extensive experience in the real estate industry since 1975, with a concentration on the disposition of retail investment properties, including grocery-anchored, power shopping centers, single-tenant, net leased (NNN) properties, and retail strip centers.',
//   bio2: 'Previously the director of investments sales for Colliers International, Shelton focused on acquisition and disposition services to private and institutional clients and distressed property lenders. She was also the former vice president of acquisitions for a NYSE Real Estate Investment Trust, where she acquired single tenant assets in excess of $300 million. Shelton has facilitated disposition and sale-leaseback services for tenants and owners, development and site selection, development; an unmatched contribution for sellers to help analyze, market, sell, and maximize asset value. Shelton stays abreast of capital market trends, which allow her to assist sellers and buyers with securing debt.',
//   special: ''
// },
// {
//   firstname: 'Sue',
//   lastname: 'Earnest',
//   displayname: 'Sue Earnest, CCIM',
//   title: 'Principal',
//   company: 'Avison Young Nashville',
//   panel: 'Campfire Sessions: Lessons from CCIM Women of Influence | Monday, Oct. 14 at 1 p.m.',
//   bio1: 'Sue Earnest, CCIM, specializes in assisting Fortune 500 companies, as well as owner-occupied properties, throughout Middle Tennessee with the leasing, acquisition and/or disposition of their real estate, with a focus on the sales and leasing of industrial and commercial properties. Her knowledge of the market, attention to detail, and strong work ethic have resulted in her success and representation of sales and leasing transactions.',
//   bio2: 'Prior to joining Avison Young\'s Nashville office, Sue was a principal and broker with Cushman & Wakefield | Cornerstone and previously Newmark Knight Frank. Sue was also vice president/affiliate broker for Hawkins Company Inc. (CORFAC International), where she spent six years in sales and leasing of commercial properties, both industrial parks and office buildings. Prior to entering the commercial real estate profession in 1999, Sue worked with National Material Company, a steel coil servicing company for ten years. Here she worked in inside sales, as well as implemented and manage the ISO 9000 standards program for their Middle Tennessee service center.',
//   special: ''
// },
// {
//   firstname: 'Eric',
//   lastname: 'Pollard',
//   displayname: 'Eric Pollard',
//   title: 'Commercial Services: Real Estate Practice Lead',
//   company: 'Esri',
//   panel: 'The Power of Story Maps to Enhance Your Site Appeal | Monday, Oct. 14 at 11 a.m.',
//   bio1: 'With 15 years of professional real estate and location intelligence experience, Eric Pollard serves as the real estate practice lead for Esri’s commercial services department out of Southern California. Prior to Esri, Pollard led multiple Fortune 500 companies in creating and operating market analysis and site selection systems, combining market intelligence and spatial analysis to better position fast-growing brands within regions across the world. Pollard founded and led a consultancy specializing in market analysis and site selection for real estate and retail companies while also working in land development analysis and tenant representation. While at Esri, Pollard has worked with dozens of Fortune 100 companies across many industries to better analyze their portfolio of locations, identify opportunity potential, optimize their growth strategies, and implement location intelligence systems.',
//   bio2: '',
//   special: ''
// },
// {
//   firstname: 'David',
//   lastname: 'Moore',
//   displayname: 'David Moore',
//   title: 'CEO and Co-Founder',
//   company: 'Equity Advantage',
//   panel: '1031 Tax-Deferred Exchange | Monday, Oct. 14 at 11 a.m.',
//   bio1: 'David Moore is chief executive officer of Equity Advantage, Incorporated, a nationally-recognized leader in 1031 Exchange facilitation. Moore founded Equity Advantage with his brother Tom in 1991 after a successful career in real estate investment. Since then, Equity Advantage has developed an outstanding reputation for partnering with their investment clients to develop unique strategies for the 1031 Exchange, reducing their clients’ tax risks and increasing the value of their property portfolios.',
//   bio2: 'Moore is a recognized 1031 Exchange expert and is regularly invited to share his knowledge with realtors, investors, attorneys and property owners through seminars and classes. He is a power sponsor of CCIM Institute and is a former board member of the Federation of Exchange Accommodators (FEA). Moore played an instrumental role in the FEA’s expansion throughout the Pacific Northwest and served as chairman of the FEA Ethics Committee. He is active in Rotary Club and serves on the boards of several charity organizations.',
//   special: ''
// },
{
  firstname: 'Chip',
  lastname: 'Watts',
  displayname: 'Chip Watts, CCIM, CPM',
  title: '2020 President-Elect',
  company: 'IREM',
  panel: 'Building Partnerships: Unlock the Value of Property Manager Referrals | Monday, Oct. 14 at 11 a.m.',
  bio1: 'Chip Watts, CCIM, CPM, is the 2020 president-elect of IREM (the Institute of Real Estate Management).  He is president and executive CPM for Watts Realty Co., Inc., AMO®, in Birmingham, Alabama. He started his real estate career in 1998 as general manager of Watts Realty, and earned his current title in 2006. During his tenure, he received the AMO accreditation on behalf of the company.',
  bio2: 'Watts earned his CPM designation in 2004 and his Certified Commercial Investment Member (CCIM) designation in 2002. He served as the 2008 president of IREM’s Alabama chapter and the 2009 president of the CCIM Institute’s Alabama chapter. Watts served for two years as an IREM regional vice president. He also chaired the IREM Chapter Leadership Forum, the AMO Taskforce, and has been a long-time member of the IREM Governing Council. Also in 2008, Watts was honored by the Birmingham Association of REALTORS® with its “REALTOR of the Year” award and served as its president in 2014. He also served as a trustee to the University of Alabama Center for Real Estate Board for ten years, happily wearing his Auburn orange and blue on the Alabama campus!',
  special: ''
},
// {
//   firstname: 'Eddie',
//   lastname: 'Blanton',
//   displayname: 'Eddie Blanton, CCIM',
//   title: '2019 President-Elect',
//   company: 'CCIM Institute',
//   title2: 'Principal and Senior Advisor',
//   company2: 'Tradd Commercial',
//   panel: 'Breakfast and Opening Remarks | Monday, Oct. 14 at 7:30 a.m.<br><b>Session:</b> Closing Reception | Monday, Oct. 14 at 3:15 p.m',
//   bio1: 'Eddie Blanton, CCIM, serves as a principal and senior advisor with Tradd Commercial’s Charlotte, North Carolina office. He began his commercial real estate career back in 1996. While initially operating as a leasing agent and property manager, he has since specialized in the areas of retail and investment brokerage. Blanton holds real estate broker licenses in both North and South Carolina. He was awarded the CCIM designation in May 2001. He currently serves on the North Carolina CCIM Chapter’s board as an ex-officio member, as he was the chapter’s president in 2010. He has served on the CCIM National Board of Directors since 2013 and serves as the CCIM Institute’s 2019 President-Elect.',
//   bio2: '',
//   special: ''
// },


]
var sponsors = [
  {
    sponsorname: 'NAI Global',
    sponsorlogo: 'nai-logo'
  },
  {
    sponsorname: 'Esri',
    sponsorlogo: 'esri-logo'
  },
  {
    sponsorname: 'RE/MAX',
    sponsorlogo: 'remax-logo'
  },
  {
    sponsorname: 'CoStar',
    sponsorlogo: 'costar-logo'
  },
  {
    sponsorname: 'National Association of Realtors (NAR) Commercial',
    sponsorlogo: 'nar-commercial-logo'
  },
  {
    sponsorname: 'Equity Advantage',
    sponsorlogo: 'equity-logo'
  },

  {
    sponsorname: 'Granite Properties',
    sponsorlogo: 'granite-logo'
  },
  {
    sponsorname: 'Biproxi',
    sponsorlogo: 'biproxi-logo'
  },
  {
    sponsorname: 'Lee & Associates',
    sponsorlogo: 'lee-logo'
  },



  {
    sponsorname: 'Buildout',
    sponsorlogo: 'buildout-logo'
  },
  {
    sponsorname: 'Century 21 Commercial',
    sponsorlogo: 'century21-logo'
  },
  {
    sponsorname: 'CompStak',
    sponsorlogo: 'compstak-logo'
  },
  {
    sponsorname: 'CrowdfundingLawyers.net | Trowbridge Sidoti LLP',
    sponsorlogo: 'crowdfunding-lawyers-logo'
  }, 
  {
    sponsorname: 'France Media',
    sponsorlogo: 'france-logo'
  },
  {
    sponsorname: 'Lightbox',
    sponsorlogo: 'lightbox-logo'
  },
  {
    sponsorname: 'Live Oak Bank',
    sponsorlogo: 'live-oak-logo'
  },
  {
    sponsorname: 'Reonomy',
    sponsorlogo: 'reonomy-logo'
  },
  {
    sponsorname: 'SVN',
    sponsorlogo: 'svn-logo'
  },
  {
    sponsorname: 'Ten-X',
    sponsorlogo: 'ten-x-logo'
  },
  {
    sponsorname: 'CREXi',
    sponsorlogo: 'crexi-logo'
  },
  {
    sponsorname: 'AREAA',
    sponsorlogo: 'areaa-logo'
  },
  {
    sponsorname: 'Corfac International',
    sponsorlogo: 'corfac-logo'
  },
  
  {
    sponsorname: 'IREM',
    sponsorlogo: 'irem-logo'
  },
  {
    sponsorname: 'iREOC',
    sponsorlogo: 'ireoc-logo'
  },
  {
    sponsorname: 'Walker & Dunlop',
    sponsorlogo: 'walker-dunlop-logo'
  },
  {
    sponsorname: 'Coldwell Banker Commercial',
    sponsorlogo: 'cbc-logo'
  },
  {
    sponsorname: 'KW Commercial',
    sponsorlogo: 'kw-logo'
  },
  {
    sponsorname: 'GlobeSt.',
    sponsorlogo: 'globest-logo'
  },


  
]
/*Generate Non-Keynote Speakers*/
var speakersGoHere = $('.speakers-wrap');
var photoDir = "img/speakers/speaker-";
var displayName;
var lastFirst;
var firstLast;
var speakTitle;
var speakCol;
var speakPanel;
var headshot;
var thisSpeaker;
var noPic = "headshot-no-pic.jpg";
var speakerPod;
var isSpecial;
var highClass;

// Generate Speakers
for (var prop in speakers) {
  thisSpeaker = speakers[prop];
  displayName = thisSpeaker.displayname;
  lastFirst = thisSpeaker.lastname + "-" + thisSpeaker.firstname;
  lastFirstLower = lastFirst.toLowerCase();
  photo = photoDir + lastFirstLower + ".jpg";
  speakTitle = thisSpeaker.title;
  speakCo = thisSpeaker.company;
  speakPanel = thisSpeaker.panel;
  special = thisSpeaker.special;
  if (special === '') {
    isSpecial = 'hidden';
    highClass= '';
  } else {
    isSpecial = 'highlight';
    highClass= 'feature';
  }
  speakerPod = '<div class="speaker check is-hidden '+highClass+'" id="'+lastFirstLower+'"><div class="headshot '+speakPanel+'"><img src="'+photo+'" alt="" onerror="imgError(this)"></div><div class="info"><h3 class="'+isSpecial+'"">'+special+'</h3><p class="name">'+displayName+'</p><p class="title">'+speakTitle+', '+speakCo+'</p></div></div>'
  speakersGoHere.append(speakerPod);
}
function imgError(source) {
  source.src =
  "img/no-headshot.jpg";
  source.onerror = "";
  return true;
}

// Speaker Bio Modals
var modalStart = '<div class="modal"><div class="modal-content cf"><p class="close-modal">x</p>';
var modalEnd = '</div></div>';
var showModal = function(){$(".modal").removeClass("fadeOut").addClass("fadeIn")}
var deleteModal = function(){
  this.remove();
};

// var closeModal = function(){$('.close-modal').on('click', function(){

//           $(this).parent().parent().removeClass("fadeIn").addClass("fadeOut").setTimeout(deleteModal, 500).remove();
//                   });
// }

var closeModal = function(){$('.close-modal').on('click', function(){
                    $("div[class^='modal']").removeClass("fadeIn").addClass("fadeOut").delay(800).remove();

                  });}



var closeModalBtn = '<a href="javascript:void(0)" class="btn btn-sm btn-primary close-modal">Close</a>'
var keynote = $('.keynote');
var speaker = $('.speaker');
var speakerBioName;
var speakerBio;
var speakerPos;
var speakerBioTitle;
var speakerBioCompany;
var speakerBioTitle2;
var speakerBioCompany2;
var speakerHeadshot;
var speakerPanel;
var secondTitle;

speaker.on('click', function(){
  speakerPos = ($(this).index('.speaker'));
  console.log(speakerPos);
  speakerBioName = $(this).find('.name').text();
  thisSpeaker = speakers[speakerPos];
  speakerBio = '<p>'+thisSpeaker.bio1+'</p><p>'+thisSpeaker.bio2+'</p>';
  speakerBioTitle = thisSpeaker.title;
  speakerBioCompany = thisSpeaker.company;
  speakerBioTitle2 = thisSpeaker.title2;
  speakerBioCompany2 = thisSpeaker.company2;
  speakerPanel = thisSpeaker.panel;
  speakerHeadshot = $(this).find('img').attr('src');
  secondTitle = thisSpeaker.secondTitle;
  if (speakerBioTitle2 === undefined) {
    secondTitle = 'hidden';
    highClass= '';
  } else {
    secondTitle = 'show';
    highClass= 'feature';
  }

  $b.append(modalStart+'<h1>'+speakerBioName+'</h1><h2>'+speakerBioTitle+' | '+speakerBioCompany+'</h2><h2 class="'+secondTitle+'">'+speakerBioTitle2+' | '+speakerBioCompany2+'</h2><img src="'+speakerHeadshot+'"><p>'+speakerBio+'</p><p class="speaker-session"><strong>Session: </strong>'+speakerPanel+'</p>'+modalEnd);
  showModal();
  closeModal();


});


/*Generate Sessions*/
// var sessionsGoHere = $('.the-sessions');
// var thisSession;
// var sessionId;
// var sessionTitle;
// var sessionDesc;
// var sessionSponsor;
// var sessionTime;
// var sessionDateTime;
// var eventPod;
// var isSponsored;
// var featuredSess;

// for (var prop in sessions) {
//   thisSession= sessions[prop];
//   sessionId = thisSession.id;
//   sessionTitle = thisSession.title; 
//   sessionDesc = thisSession.desc;
//   sessionSponsor = thisSession.sponsor;
//   sessionTime = thisSession.time;
//   sessionDateTime = thisSession.datetime;
//   featuredSess = thisSession.special
//   if (sessionSponsor  === '') {
//     isSponsored = 'hidden'
//   } else {
//     isSponsored = 'sponsored'
//   }
//   eventPod = '<section class="event cf" id="'+sessionId+'"><div class="left"><p><time datetime="'+sessionDateTime+'">'+sessionTime+'</time></p></div><div class="right"><h4>'+featuredSess+sessionTitle+'</h4><p>'+sessionDesc+'</p><p class="'+isSponsored+'">Sponsored by '+sessionSponsor+'</p></div></section>';
//   sessionsGoHere.append(eventPod);
// }



/*Generate Sponsors*/
var sponsorsGoHere = $('.sponsor-logos');
var sponsorPod;
var thisSponsor;
var sponsorName;
var sponsorLogo;

for (var prop in sponsors) {
  thisSponsor = sponsors[prop];
  sponsorName= thisSponsor.sponsorname;
  sponsorLogo = thisSponsor.sponsorlogo; 
  sponsorPod = '<img src="img/sponsors/'+sponsorLogo+'.jpg" alt="'+sponsorName+'" class=" check is-hidden"/>'
  sponsorsGoHere.append(sponsorPod);
}

// Show pricing details
var prices = $('.pricing');
var ticket = $('.tickets');
prices.on('click', function(){
  $b.append(modalStart+'<h1>Pricing</h1><h2>Main Conference | Oct. 14</h2><p><span>CCIM Member: $295 USD</span><span class="no-sale"> SOLD OUT</span><br><span>Non-member: $345 USD</span> <span class="no-sale"> SOLD OUT</span></p><h2>Related Events | Oct. 13</h2><ul><li>Global Connections Luncheon (Oct. 13): $100</li><li><span>Official Opening Reception (Oct. 13): Free for Conference Registrants</span> <span class="no-sale"> SOLD OUT</span></li><li><span>San Diego Chapter Networking Event (Oct. 13): $85</span><span class="no-sale"> SOLD OUT</span></li></ul><br><p></p><br>'+modalEnd);
  $('.modal-content').addClass('price-info');
  showModal();
  closeModal();
});

var $w = $(window);
var $b= $('body');
var $this = $(this);
var menu = $('header .burger');
var nav = $('header nav');
var navA = $('.container>header nav a');
var navBtn = $('.container>header nav ul li .btn')
var header = $('.container>header');
var speaker = $('.speaker');
var headerLogo = $('header .logo');

// Hides or Shows nav in mobile
menu.on('click', function() {
    nav.toggleClass('unhide-nav');
    menu.toggleClass('menu-close');
});

//Make header get compact on scroll
//Watch the scrolling in the browser, and do this function
var adjustNav = function() {
  var $this = $(this);
 // If user has scrolled past 300px
  if ($this.scrollTop() > 300 && $w.width() > 1145) {
    header.css({
      height: '40px',
      backgroundSize: '70px'
      
    });
    headerLogo.css({
      maxWidth: '33px',
      marginTop: '7px'
    });
    menu.addClass('autoWH');
    nav.addClass('margin-nav-small-heading');
    navA.addClass('nav-items-new-padding');
    navBtn.addClass('register-btn-small-heading');
  } else if ($this.scrollTop() <= 300 && $w.width() > 1145) {
   header.css({
      height: '80px',
      backgroundSize: '170px'
    });
   headerLogo.css({
      maxWidth: '56px',
      marginTop: '16px'
    });
   menu.removeClass('autoWH');
   nav.removeClass('margin-nav-small-heading');
   navA.removeClass('nav-items-new-padding');
   navBtn.removeClass('register-btn-small-heading');
  } else if ($this.scrollTop() <= 300 && $w.width() <= 1145) {
    header.css({
      height: '70px',
      backgroundSize: '130px'
    });
    headerLogo.css({
      width: '100%',
      maxWidth: '56px',
      marginTop: '10px'
    });
    menu.css({
      width: '50px',
      height: '50px',
      marginTop: '10px'
    });
    nav.css('top', '70px');
    nav.removeClass('margin-nav-small-heading');
    navA.removeClass('nav-items-new-padding');
    navBtn.removeClass('register-btn-small-heading');
  } else if ($this.scrollTop() > 300 && $w.width() <= 1145) {
    header.css({
      height: '50px',
      backgroundSize: '90px'
    });
    headerLogo.css({
      width: '40px',
      marginTop: '9px'
    });
    menu.css({
      width: '40px',
      height: '40px',
      marginTop: '5px'
    });
    nav.css('top', '50px');
    nav.removeClass('margin-nav-small-heading');
    navA.removeClass('nav-items-new-padding');
    navBtn.removeClass('register-btn-small-heading');
  }
  else if ($w.width() <= 471) {
    console.log('this');
    header.css({
      height: '40px',
      backgroundSize: '90px'
    });
    headerLogo.css({
      width: '265px',
      marginTop: '5px'
    });
    menu.css({
      width: '50px',
      height: '50px',
      marginTop: '10px'
    });
    nav.css('top', '40px');
    nav.removeClass('margin-nav-small-heading');
    navA.removeClass('nav-items-new-padding');
    navBtn.removeClass('register-btn-small-heading');
  }
}

$w.scroll(function(){
  adjustNav();
});
$w.resize(function(){
  adjustNav();
  if ($w.width() <= 1145) {
   nav.removeClass('margin-nav-small-heading');
   navA.removeClass('nav-items-new-padding');
   navBtn.removeClass('register-btn-small-heading');
  }
});

//If mobile, hide nav on menu item click
$('nav a').on('click', function() {
  if ($w.width() < 1146) {
    nav.toggleClass('unhide-nav');
    menu.toggleClass('menu-close');
  }
});

//Smooth Scrolling: https://css-tricks.com/snippets/jquery/smooth-scrolling/
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

var card = $('.check'),
  offset = .9;

$(window).on('scroll', function(){
  (!window.requestAnimationFrame) 
    ? setTimeout(function(){ showBlocks(card, offset); }, 100)
    : window.requestAnimationFrame(function(){ showBlocks(card, offset); });
});

function showBlocks(blocks, offset) {
  blocks.each(function(){
    ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).hasClass('is-hidden') ) && $(this).removeClass('is-hidden').addClass('not-hidden');
  });
}
