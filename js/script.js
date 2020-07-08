// dropdown button below

$('.dropbtn').on('click', function (e) {
      e.preventDefault();
  $('.dropdown-content').toggleClass('activeX');
  

});

// end dropdown button

var sessions = [
	{
		id: 'breakfast',
		title: 'Breakfast and Opening Remarks',
		datetime: '2017-10-16 07:30',
		time: '7:30 a.m. &ndash; 8:15 a.m.',
		desc: '',
		sponsor: 'Ten-X',
		special: ''
	},
	{
		id: 'financing',
		title: 'Keepers of the Capital',
		datetime: '2017-10-16 08:15',
		time: '8:15 a.m. &ndash; 9 a.m.',
		desc: 'From the global debt crisis to local regulations, what factors will affect financing in 2018?',
		sponsor: '',
		special: ''
	},
	{
		id: 'demography',
		title: 'The Upside of Global Upheaval with Kenneth Gronbach',
		datetime: '2017-10-16 09:00',
		time: '9:05 a.m. &ndash; 10 a.m.',
		desc: 'Learn how to profit from the coming demographic storm.',
		sponsor: '',
		special: '<span>Special Presentation</span>'
	},
	{
		id: 'tech',
		title: 'The Women Optimizing Our World',
		datetime: '2017-10-16 10:15',
		time: '10:15 a.m. &ndash; 11:05 a.m.',
		desc: 'Commercial real estate tech executives discuss how they\'re revolutionizing the industry — whether you like it or not.',
		sponsor: '',
		special: ''
	},
	{
		id: 'brokerage',
		title: 'Transforming Brokerage',
		datetime: '2017-10-16 11:15',
		time: '11:15 a.m. &ndash; 12 noon',
		desc: 'As transparency increases, commercial real estate firms will be forced to adapt. Senior executives from top brokerage firms weigh in.',
		sponsor: '',
		special: ''
	},
	{
		id: 'break',
		title: 'Sponsor Networking Break',
		datetime: '2017-10-16 12:00',
		time: '12 noon &ndash; 12:30 p.m.',
		desc: '',
		sponsor: '',
		special: ''
	},
	{
		id: 'lunch',
		title: 'Lunch and Special Address',
		datetime: '2017-10-16 12:35',
		time: '12:30 p.m. &ndash; 1:30 p.m.',
		desc: '',
		sponsor: '',
		special: ''
	},

	{
		id: 'keynote',
		title: 'A Conversation with Steve Forbes',
		datetime: '2017-10-16 13:30',
		time: '1:30 p.m. &ndash; 2:30 p.m.',
		desc: '',
		sponsor: '',
		special: '<span>Keynote Address</span>'
	},
	{
		id: 'reception',
		title: 'Closing Reception',
		datetime: '2017-10-16 14:30',
		time: '2:30 p.m. &ndash; 3:00 p.m.',
		desc: '',
		sponsor: '',
		special: ''
	}
]
var speakers = [
{
  firstname: 'Steve',
  lastname: 'Forbes',
  displayname: 'Steve Forbes',
  title: 'Editor-in-Chief',
  company: 'Forbes Media',
  panel: 'Keynote Address | Monday, Oct. 16 at 1:30 p.m.',
  bio1: 'Steve Forbes is Chairman and Editor-in-Chief of Forbes Media. Forbes writes editorials for each issue of Forbes under the heading of “Fact and Comment.” A widely respected economic prognosticator, he is the only writer to have won the highly prestigious Crystal Owl Award four times. The prize was formerly given by U.S. Steel Corporation to the financial journalist whose economic forecasts for the coming year proved most accurate.',
  bio2: 'In both 1996 and 2000, Forbes campaigned vigorously for the Republican nomination for the U.S. Presidency. Key to his platform were a flat tax, medical savings accounts, a new Social Security system for working Americans, parental choice of schools for their children, term limits, and a strong national defense. Forbes continues to energetically promote this agenda.',
  special: 'Keynote Address'
},
{
  firstname: 'Ken',
  lastname: 'Gronbach',
  displayname: 'Kenneth W. Gronbach',
  title: 'President',
  company: 'KGC Direct LLC',
  panel: 'Special Presentation: The Upside of Global Upheaval | Monday, Oct. 16 at 9 a.m.',
  bio1: 'Kenneth W. Gronbach is a gifted keynote speaker and nationally recognized author, expert and futurist in the field of Demography and Generational Marketing. He makes the science of shifting demography come alive with real life examples which make it relevant to today’s culture, business climate and economy. With nearly three decades experience in retail advertising and marketing, Ken saw the direct results of shifting demographics in his clients’ profits. Eventually, his passion for the subject changed the direction of his career, to the benefit of readers of his books and attendees of his keynotes and other presentations.',
  bio2: '<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/qZyk7v3cJdo?rel=0?ecver=2" width="504" height="283.5" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>',
  special: 'Special Presentation'
},
{
  firstname: 'Mark',
  lastname: 'Rose',
  displayname: 'Mark E. Rose',
  title: 'CEO',
  company: 'Avison Young',
  panel: 'Transforming Brokerage | Monday, Oct. 16 at 11:15 a.m.',
  bio1: 'Mark E. Rose is Chief Executive Officer of Avison Young and Chairman of the Board of Directors of Avison Young (Canada) Inc. He manages all strategic, financial, and operational activities of this full-service commercial real estate company, which provides solutions to real estate investors, owners, and occupiers throughout the world. In his nine years with the Toronto, Canada-based firm, Mark has overseen its growth from 290 real estate professionals in 11 offices in Canada to more than 2,400 professionals in 79 offices in Canada, the U.S., Mexico, and Europe.',
  bio2: '',
  special: ''
},
{
  firstname: 'Jay',
  lastname: 'Olshonsky',
  displayname: 'Jay Olshonsky',
  title: 'President',
  company: 'NAI Global',
  panel: 'Transforming Brokerage | Monday, Oct. 16 at 11:15 a.m.',
  bio1: 'Jay Olshonsky is President of NAI Global, a leading commercial real estate brokerage firm with more than 400 offices strategically located throughout North America, Latin America, and the Caribbean, Europe, Africa, and Asia Pacific, including over 7,000 local market professionals. Annually, NAI Global completes in excess of $20 billion in commercial real estate transactions throughout the world.',
  bio2: '',
  special: ''
},
{
  firstname: 'Mike',
  lastname: 'Regan',
  displayname: 'Mike Reagan',
  title: 'Senior Vice President',
  company: 'RE/MAX Commercial',
  panel: 'Transforming Brokerage | Monday, Oct. 16 at 11:15 a.m.',
  bio1: 'Mike Reagan oversees the global alliance programs that have helped make RE/MAX one of the most recognized real estate brands in the world. He also leads The RE/MAX Collection luxury real estate division, which serves affluent buyers and sellers around the world; and RE/MAX Commercial, which under his direction has grown into one of the top 20 commercial brokerage networks in the world.',
  bio2: '',
  special: ''
},
{
  firstname: 'Brian',
  lastname: 'Stoffers',
  displayname: 'Brian Stoffers',
  title: 'Global President, Debt & Structured Finance',
  company: 'CBRE',
  panel: 'Keepers of the Capital | Monday, Oct. 16 at 8:15 a.m',
  bio1: 'Brian Stoffers is Global President, Debt & Structured Finance at CBRE. Under his leadership, nearly 140 professionals have originated approximately $216 billion in loan volume since 2007. Additionally, this practice maintains a loan services portfolio of more than $120 billion in the United States, while CBRE’s EMEA servicing portfolio has grown by an additional $24 billion.',
  bio2: 'Stoffers has extensive experience in the origination, structuring, placement, closing and servicing of commercial real estate debt for life insurance companies, pension funds, banks, savings, and loans, Freddie Mac, Fannie Mae, FHA, and Wall Street sources.',
  special: ''
},
{
  firstname: 'Lindsay',
  lastname: 'Baker',
  displayname: 'Lindsay Baker',
  title: 'President',
  company: 'Comfy',
  panel: 'The Women Optimizing Our World | Monday, Oct. 16 at 10:15 a.m.',
  bio1: 'Lindsay Baker leads relationship building and serves as Comfy\'s chief brand evangelist. Comfy is a simple-to-use app that employees put on their phones and use to request warm or cool air in a zone where they work. The app uses employee-contributed data, and combines it with usage data and patterns, to tune every zone in an office building based on the routine preferences of people who work in each zone there.',
  bio2: 'An established writer in the green building community, Baker was previously a Sustainable Operations Consultant at Google. She is a Ph.D. Candidate in Building Science at University of California Berkeley, and was on the original staff team developing the LEED Rating System at USGBC.<br><iframe width="560" height="315" src="https://www.youtube.com/embed/NO92aZDb52E?start=145&rel=0&amp;controls=0" frameborder="0" allowfullscreen></iframe>',
  special: ''
},
{
  firstname: 'Yan',
  lastname: 'Khamish',
  displayname: 'Yan Khamish',
  title: 'Managing Director',
  company: 'Ten-X',
  panel: 'Transforming Brokerage | Monday, Oct. 16 at 11:15 a.m.',
  bio1: 'As the head of the Broker Channel, Yan is expanding Ten-X’s engagement with the top commercial brokerage firms, industry associations and technology partners. He brings a strong CRE skill set that encompasses Acquisitions, Disposition, Debt Structuring, Leasing, Portfolio Management, Equity, and overall Capital Markets strategy, developed during a career encompassing over 20 years in Commercial Real Estate.',
  bio2: 'Khamish comes to Ten-X from New York-based Fortress Investment Group, where he served as Senior Vice President managing a diverse commercial real estate, infrastructure, and transportation portfolio valued at $3.5 billion. His previous positions include Chief Operating Officer and Managing Director for The STG Group, Senior Vice President at Fowler Property Acquisitions, and Director and commercial broker at Marcus & Millichap. Khamish started his career in public accounting with Arthur Andersen.',
  special: ''
},
{
  firstname: 'Naveen',
  lastname: 'Jaggi',
  displayname: 'Naveen Jaggi',
  title: 'President, Retail Brokerage',
  company: 'JLL',
  panel: 'Transforming Brokerage | Monday, Oct. 16 at 11:15 a.m.',
  bio1: 'Naveen Jaggi joined JLL in 2014 and leads the retail brokerage business comprising of tenant rep, agency leasing, and capital markets for the America’s where he is responsible for overall strategy, business development and the growth of the platform. In addition to overseeing all of JLL’s retail tenant rep, agency leasing and capital markets brokers across the United States, Jaggi is Chairman of the Global Retail Leasing Board which coordinates JLL’s retail brokerage activity Globally.',
  bio2: 'With more than 20 years of retail real estate experience, Jaggi brings a client-focus and familiarity with all aspects of retail in the U.S and abroad. He specializes in multi-market entry strategy, site selection analytics, acquisition underwriting, portfolio optimization and disposition strategy.',
  special: ''
},
{
  firstname: 'Susie',
  lastname: 'Algard',
  displayname: 'Susie Algard',
  title: 'CEO',
  company: 'OfficeSpace.com',
  panel: 'The Women Optimizing Our World | Monday, Oct. 16 at 10:15 a.m.',
  bio1: 'Susie Algard is the CEO and co-founder of OfficeSpace.com, an online database company for commercial real estate. Since their launch in 2012, they have created an efficient and effective marketing platform connecting tenants to brokers and listing agents. Tenants and real estate professionals can use the site to peruse commercial listings throughout the U.S. and, for the latter, add listings to the database. OfficeSpace.com is building a better search experience for tenants to make finding the right office, retail, and industrial space easier. Algard has a proven track record of driving new consumer web services from zero to $50 million in revenue.',
  bio2: '',
  special: ''
},
{
  firstname: 'Jeremy',
  lastname: 'Wedgbury',
  displayname: 'Jeremy Wedgbury',
  title: 'Senior Vice President, Commercial Mortgages',
  company: 'First National',
  panel: 'Keepers of the Capital | Monday, Oct. 16 at 8:15 a.m',
  bio1: 'Jeremy Wedgbury is the Senior Vice President, Commercial Mortgages for First National and is responsible for the sales and marketing of First National’s commercial mortgage products.  This role includes the management of approximately 25 mortgage originators located in offices nationally and the credit review of the commercial loan products, including CMHC-insured fixed and floating rate loans, CMBS loans, small commercial loans, second mortgages and interim/construction loans.',
  bio2: 'Prior to joining First National in 2004, Wedgbury worked with other leading commercial mortgage lenders for 14 years, including Manulife Financial and Merrill Lynch Financial.  Wedgbury’s educational background includes a Bachelor of Arts from Wilfrid Laurier University and the Urban Land Economics Diploma (Real Estate) from the University of British Columbia.',
  special: ''
},
{
  firstname: 'Grant',
  lastname: 'Murray',
  displayname: 'Grant Murray',
  title: 'Senior Vice President',
  company: 'Concord Pacific Developments, Inc.',
  panel: 'Global Connections Luncheon | Sunday, Oct. 15 at 12:15 p.m.',
  bio1: 'Grant Murray is the Senior Vice President, Sales at Concord Pacific Developments Inc. In his executive position, Murray leads staff and sales at the company’s multiple presentation centers, and oversees sales in excess of $10 billion in high-rise complexes in major cities. Murray was also Vice President of Sales at MGM Resorts’ $10 billion City Center project in Las Vegas, the largest privately funded development project in U.S. history.',
  bio2: '',
  special: ''
},
{
  firstname: 'Poonam',
  lastname: 'Mathis',
  displayname: 'Poonam Mathis',
  title: 'CEO',
  company: 'StealthForce',
  panel: 'The Women Optimizing Our World | Monday, Oct. 16 at 10:15 a.m.',
  bio1: 'Poonam Mathis spent over a decade in real estate private equity and development. Currently, Mathis is Founder and CEO of StealthForce.com, a global consultant network, providing project-based real estate investment insights and customized consulting on-demand. StealthForce has been called the rolodex of a real estate investor’s dreams.',
  bio2: 'A Harvard BA and Wharton MBA, Mathis was previously Deputy Head of Global Real Estate Asset Mgmt. for Partners Group ($40 billion AUM), and early in her career was the 13th Employee at The Gerson Lehrman Group (GLG), now valued at over $1 billion.',
  special: ''
},
{
  firstname: 'Julia',
  lastname: 'Davis',
  displayname: 'Julia Davis',
  title: 'VP, Global Head of Broker & Real Estate Partnerships',
  company: 'WeWork',
  panel: 'The Women Optimizing Our World | Monday, Oct. 16 at 10:15 a.m.',
  bio1: 'Julia Davis is VP, Global Head of Broker & Real Estate Partnerships at WeWork, where her team is responsible for the development, management, and operations of the programs. Davis\'s career spans over 14 years focused primarily in commercial real estate. She received her MBA from UNC and her BA from Meredith College.',
  bio2: '<iframe width="560" height="315" src="https://www.youtube.com/embed/l5tSINazw78?rel=0&amp;controls=0" frameborder="0" allowfullscreen></iframe>',
  special: ''
},
{
  firstname: 'John',
  lastname: 'Miron',
  displayname: 'John Miron',
  title: 'Managing Director, Head of Canadian Real Estate Corporate Banking',
  company: 'RBC Capital Markets ',
  panel: 'Keepers of the Capital | Monday, Oct. 16 at 8:15 a.m',
  bio1: 'John Miron is a Managing Director and Head of Canadian Real Estate Corporate Banking at RBC Capital Markets. Miron has over 25 years of experience in corporate lending and real estate. He currently has responsibility for managing RBC CM’s corporate lending and commercial mortgage exposure in Canada.',
  bio2: 'RBC Capital Markets, as principal lender to the Canadian real estate industry, offers a full suite of corporate banking products including secured and unsecured revolving credit facilities, term loans, bridge loans, construction loans, margin stock loans etc. as well as conventional commercial mortgages.',
  special: ''
},
{
  firstname: 'Roy',
  lastname: 'Abrams',
  displayname: 'Roy Abrams',
  title: 'CEO and Founder',
  company: 'RealConnex',
  panel: 'Keepers of the Capital | Monday, Oct. 16 at 8:15 a.m',
  bio1: '',
  bio2: '<iframe width="560" height="315" src="https://www.youtube.com/embed/XFE-oMg5Uws?rel=0&amp;controls=0" frameborder="0" allowfullscreen></iframe>',
  special: ''
},
{
  firstname: 'Emily',
  lastname: 'Line',
  displayname: 'Emily Line',
  title: 'VP of Commercial Services',
  company: 'Realtors Property Resource®',
  panel: 'The Women Optimizing Our World | Monday, Oct. 16 at 10:15 a.m.',
  bio1: 'Emily Line is Vice President of Commercial Services for the Realtors Property Resource® (RPR), a wholly owned subsidiary of the NATIONAL ASSOCIATION OF REALTORS® (NAR). She is passionate about educating on data driven solutions and exercises her background in Interdisciplinary Research to strengthen the information and analysis available to REALTORS® as a members-only benefit through RPR. From site selection and investment analysis tools to demographic and psychographic insights about communities, RPR Commercial is a database designed to validate a practitioner’s local expertise when working with a broad range of clients.',
  bio2: 'Prior to RPR, Line managed Development and Outreach for the Commercial Real Estate Division of NAR. She serves on the Board of Advisors for CommissionTrac, an Atlanta based company that delivers cloud-computing solutions for commercial real estate commission tracking, as well as the Board of Directors for Special Days Camp, the second longest running pediatric oncology camp in the world. Line earned a Masters degree from the University of Michigan and a Bachelor of Arts degree from Albion College.',
  special: ''
},
{
  firstname: 'KC',
  lastname: 'Conway',
  displayname: 'KC Conway',
  title: 'Director of Research',
  company: 'Alabama Center for Real Estate at The University of Alabama',
  panel: 'Keynote Address | Monday, Oct. 16 at 1:30 p.m.',
  bio1: '',
  bio2: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1R8muCS2D00?rel=0&amp;controls=0" frameborder="0" allowfullscreen></iframe>',
  special: ''
}
]
var sponsors = [
	{
		sponsorname: 'Ten-X',
		sponsorlogo: 'ten-x-logo'
	},
	{
		sponsorname: 'NAI Global',
		sponsorlogo: 'nai-logo'
	},
	{
		sponsorname: 'RE/MAX',
		sponsorlogo: 'remax-logo'
	},
	{
		sponsorname: 'National Association of Realtors (NAR) Commercial',
		sponsorlogo: 'nar-commercial-logo'
	},
	{
		sponsorname: 'Sperry Commercial Global Affiliates',
		sponsorlogo: 'sperry-cga-logo'
	},
    {
    sponsorname: 'Xceligent',
    sponsorlogo: 'xceligent-logo'
  },
	{
		sponsorname: 'Silver Portal Capital',
		sponsorlogo: 'silver-portal-capital-logo'
	},
	{
		sponsorname: 'RealConnex',
		sponsorlogo: 'realconnex-logo'
	},
	{
		sponsorname: 'CrowdfundingLawyers.net | Trowbridge Sidoti LLP',
		sponsorlogo: 'crowdfunding-lawyers-logo'
	},
    {
    sponsorname: 'WeWork',
    sponsorlogo: 'wework-logo'
  },
	{
		sponsorname: 'Avison Young',
		sponsorlogo: 'avison-young-logo'
	},
	{
		sponsorname: 'Lexis Nexis',
		sponsorlogo: 'lexis-nexis-logo'
	},
	{
		sponsorname: 'Esri',
		sponsorlogo: 'esri-logo'
	},
  {
    sponsorname: 'SVN',
    sponsorlogo: 'svn-logo'
  },
	{
		sponsorname: 'CRE Tech',
		sponsorlogo: 'cre-tech-logo'
	},
	{
		sponsorname: 'Stewart Title',
		sponsorlogo: 'stewart-title-logo'
	},
	{
		sponsorname: 'Corfac International',
		sponsorlogo: 'corfac-logo'
	},
	{
		sponsorname: 'The News Funnel',
		sponsorlogo: 'news-funnel-logo'
	},
	{
		sponsorname: 'Coldwell Banker Commercial',
		sponsorlogo: 'cbc-logo'
	}
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
  speakerPod = '<div class="speaker '+highClass+'" id="'+lastFirstLower+'"><div class="headshot '+speakPanel+'"><img src="'+photo+'" alt="" onerror="imgError(this)"></div><div class="info"><h3 class="'+isSpecial+'"">'+special+'</h3><p class="name">'+displayName+'</p><p class="title">'+speakTitle+', '+speakCo+'</p></div></div>'
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
var showModal = function(){$(".modal").css("display", "initial")}
var closeModal = function(){$('.close-modal').on('click', function(){
                    $("div[class^='modal']").css('display', 'none').remove();});}
var closeModalBtn = '<a href="javascript:void(0)" class="btn btn-sm btn-primary close-modal">Close</a>'
var keynote = $('.keynote');
var speaker = $('.speaker');
var speakerBioName;
var speakerBio;
var speakerPos;
var speakerBioTitle;
var speakerBioCompany;
var speakerHeadshot;
var speakerPanel;

speaker.on('click', function(){
	speakerPos = ($(this).index('.speaker'));
	console.log(speakerPos);
	speakerBioName = $(this).find('.name').text();
	thisSpeaker = speakers[speakerPos];
	speakerBio = '<p>'+thisSpeaker.bio1+'</p><p>'+thisSpeaker.bio2+'</p>';
	speakerBioTitle = thisSpeaker.title;
	speakerBioCompany = thisSpeaker.company;
	speakerPanel = thisSpeaker.panel;
	speakerHeadshot = $(this).find('img').attr('src');
	$b.append(modalStart+'<h1>'+speakerBioName+'</h1><h2>'+speakerBioTitle+'<br>'+speakerBioCompany+'</h2><img src="'+speakerHeadshot+'"><p>'+speakerBio+'</p><p class="speaker-session"><strong>Session: </strong>'+speakerPanel+'</p>'+modalEnd);
	showModal();
	closeModal();
});


/*Generate Sessions*/
var sessionsGoHere = $('.the-sessions');
var thisSession;
var sessionId;
var sessionTitle;
var sessionDesc;
var sessionSponsor;
var sessionTime;
var sessionDateTime;
var eventPod;
var isSponsored;
var featuredSess;

for (var prop in sessions) {
  thisSession= sessions[prop];
  sessionId = thisSession.id;
	sessionTitle = thisSession.title; 
	sessionDesc = thisSession.desc;
	sessionSponsor = thisSession.sponsor;
	sessionTime = thisSession.time;
	sessionDateTime = thisSession.datetime;
	featuredSess = thisSession.special
	if (sessionSponsor  === '') {
		isSponsored = 'hidden'
	} else {
		isSponsored = 'sponsored'
	}
	eventPod = '<section class="event cf" id="'+sessionId+'"><div class="left"><p><time datetime="'+sessionDateTime+'">'+sessionTime+'</time></p></div><div class="right"><h4>'+featuredSess+sessionTitle+'</h4><p>'+sessionDesc+'</p><p class="'+isSponsored+'">Sponsored by '+sessionSponsor+'</p></div></section>';
	sessionsGoHere.append(eventPod);
}



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
	sponsorPod = '<img src="img/sponsors/'+sponsorLogo+'.jpg" alt="'+sponsorName+'"/>'
	sponsorsGoHere.append(sponsorPod);
}

// Show pricing details
var prices = $('.pricing');
var ticket = $('.tickets');
prices.on('click', function(){
  $b.append(modalStart+'<h1>Pricing</h1><h2>Main Conference | Oct. 16</h2><p>CCIM Member: $295 USD<br>Non-member: $350 USD</p><h2>Related Events | Oct. 15</h2><ul><li>Global Connections Luncheon (Oct. 15): $50 USD</li><li>Official Opening Reception (Oct. 15): Free, but registration is required</li><li>Central Canada CCIM Chapter Networking Event (Oct. 15): $50 USD</li></ul><p>You can register for the related events as part of the main conference registration process.</p><br><p></p><br>'+modalEnd);
	$('.modal-content').addClass('price-info');
	showModal();
	closeModal();
});

// ID of the Google Spreadsheet
 // var spreadsheetID = "1gGv7kVPNNyV7EjxozK2WkPa2hfqotvT0UZ-X3VM4vqU";

 // // Make sure it is public or set to Anyone with link can view 
 // var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";

 // $.getJSON(url, function(data) {

 //  var entry = data.feed.entry;

 //  $(entry).each(function(){
 //    // Column names are name, age, etc.
 //    $('.results').prepend('<h2>'+this.gsx$name.$t+'</h2><p>'+this.gsx$age.$t+'</p>');
 //  });

 // });
var $w = $(window);
var $b= $('body');
var $this = $(this);
var menu = $('header .burger');
var nav = $('header nav');
var navA = $('body>header nav a');
var navBtn = $('body>header nav ul li .btn')
var header = $('body>header');
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
      backgroundSize: '90px'
    });
    headerLogo.css({
      maxWidth: '200px',
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
      maxWidth: '300px',
      marginTop: '20px'
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
      maxWidth: '340px',
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
      width: '275px',
      marginTop: '6px'
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
  // else if ($w.width() <= 471) {
  //   console.log('this');
  //   header.css({
  //     height: '40px',
  //     backgroundSize: '90px'
  //   });
  //   headerLogo.css({
  //     width: '265px',
  //     marginTop: '5px'
  //   });
  //   menu.css({
  //     width: '50px',
  //     height: '50px',
  //     marginTop: '10px'
  //   });
  //   nav.css('top', '40px');
  //   nav.removeClass('margin-nav-small-heading');
  //   navA.removeClass('nav-items-new-padding');
  //   navBtn.removeClass('register-btn-small-heading');
  // }
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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtc2Vzc2lvbnMuanMiLCJlZGl0LXNwZWFrZXJzLmpzIiwiZWRpdC1zcG9uc29ycy5qcyIsImdlbmVyYXRlLmpzIiwiZ29vZ2xlLXNoZWV0cy5qcyIsIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBzZXNzaW9ucyA9IFtcclxuXHR7XHJcblx0XHRpZDogJ2JyZWFrZmFzdCcsXHJcblx0XHR0aXRsZTogJ0JyZWFrZmFzdCBhbmQgT3BlbmluZyBSZW1hcmtzJyxcclxuXHRcdGRhdGV0aW1lOiAnMjAxNy0xMC0xNiAwNzozMCcsXHJcblx0XHR0aW1lOiAnNzozMCBhLm0uICZuZGFzaDsgODoxNSBhLm0uJyxcclxuXHRcdGRlc2M6ICcnLFxyXG5cdFx0c3BvbnNvcjogJ1Rlbi1YJyxcclxuXHRcdHNwZWNpYWw6ICcnXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogJ2ZpbmFuY2luZycsXHJcblx0XHR0aXRsZTogJ0tlZXBlcnMgb2YgdGhlIENhcGl0YWwnLFxyXG5cdFx0ZGF0ZXRpbWU6ICcyMDE3LTEwLTE2IDA4OjE1JyxcclxuXHRcdHRpbWU6ICc4OjE1IGEubS4gJm5kYXNoOyA5IGEubS4nLFxyXG5cdFx0ZGVzYzogJ0Zyb20gdGhlIGdsb2JhbCBkZWJ0IGNyaXNpcyB0byBsb2NhbCByZWd1bGF0aW9ucywgd2hhdCBmYWN0b3JzIHdpbGwgYWZmZWN0IGZpbmFuY2luZyBpbiAyMDE4PycsXHJcblx0XHRzcG9uc29yOiAnJyxcclxuXHRcdHNwZWNpYWw6ICcnXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogJ2RlbW9ncmFwaHknLFxyXG5cdFx0dGl0bGU6ICdUaGUgVXBzaWRlIG9mIEdsb2JhbCBVcGhlYXZhbCB3aXRoIEtlbm5ldGggR3JvbmJhY2gnLFxyXG5cdFx0ZGF0ZXRpbWU6ICcyMDE3LTEwLTE2IDA5OjAwJyxcclxuXHRcdHRpbWU6ICc5IGEubS4gJm5kYXNoOyAxMCBhLm0uJyxcclxuXHRcdGRlc2M6ICdMZWFybiBob3cgdG8gcHJvZml0IGZyb20gdGhlIGNvbWluZyBkZW1vZ3JhcGhpYyBzdG9ybS4nLFxyXG5cdFx0c3BvbnNvcjogJycsXHJcblx0XHRzcGVjaWFsOiAnPHNwYW4+U3BlY2lhbCBQcmVzZW50YXRpb248L3NwYW4+J1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6ICd0ZWNoJyxcclxuXHRcdHRpdGxlOiAnVGhlIFdvbWVuIE9wdGltaXppbmcgT3VyIFdvcmxkJyxcclxuXHRcdGRhdGV0aW1lOiAnMjAxNy0xMC0xNiAxMDoxNScsXHJcblx0XHR0aW1lOiAnMTA6MTUgYS5tLiAmbmRhc2g7IDExOjE1IGEubS4nLFxyXG5cdFx0ZGVzYzogJ0NvbW1lcmNpYWwgcmVhbCBlc3RhdGUgdGVjaCBleGVjdXRpdmVzIGRpc2N1c3MgaG93IHRoZXlcXCdyZSByZXZvbHV0aW9uaXppbmcgdGhlIGluZHVzdHJ5IOKAlCB3aGV0aGVyIHlvdSBsaWtlIGl0IG9yIG5vdC4nLFxyXG5cdFx0c3BvbnNvcjogJycsXHJcblx0XHRzcGVjaWFsOiAnJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6ICdicm9rZXJhZ2UnLFxyXG5cdFx0dGl0bGU6ICdUcmFuc2Zvcm1pbmcgQnJva2VyYWdlJyxcclxuXHRcdGRhdGV0aW1lOiAnMjAxNy0xMC0xNiAxMToxNScsXHJcblx0XHR0aW1lOiAnMTE6MTUgYS5tLiAmbmRhc2g7IDEyIG5vb24nLFxyXG5cdFx0ZGVzYzogJ0FzIHRyYW5zcGFyZW5jeSBpbmNyZWFzZXMsIGNvbW1lcmNpYWwgcmVhbCBlc3RhdGUgZmlybXMgd2lsbCBiZSBmb3JjZWQgdG8gYWRhcHQuIFNlbmlvciBleGVjdXRpdmVzIGZyb20gdG9wIGJyb2tlcmFnZSBmaXJtcyB3ZWlnaCBpbi4nLFxyXG5cdFx0c3BvbnNvcjogJycsXHJcblx0XHRzcGVjaWFsOiAnJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6ICdicmVhaycsXHJcblx0XHR0aXRsZTogJ1Nwb25zb3IgTmV0d29ya2luZyBCcmVhaycsXHJcblx0XHRkYXRldGltZTogJzIwMTctMTAtMTYgMTI6MDAnLFxyXG5cdFx0dGltZTogJzEyIG5vb24gJm5kYXNoOyAxMjozMCBwLm0uJyxcclxuXHRcdGRlc2M6ICcnLFxyXG5cdFx0c3BvbnNvcjogJycsXHJcblx0XHRzcGVjaWFsOiAnJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6ICdsdW5jaCcsXHJcblx0XHR0aXRsZTogJ0x1bmNoIGFuZCBTcGVjaWFsIEFkZHJlc3MnLFxyXG5cdFx0ZGF0ZXRpbWU6ICcyMDE3LTEwLTE2IDEyOjM1JyxcclxuXHRcdHRpbWU6ICcxMjozMCBwLm0uICZuZGFzaDsgMTozMCBwLm0uJyxcclxuXHRcdGRlc2M6ICcnLFxyXG5cdFx0c3BvbnNvcjogJycsXHJcblx0XHRzcGVjaWFsOiAnJ1xyXG5cdH0sXHJcblxyXG5cdHtcclxuXHRcdGlkOiAna2V5bm90ZScsXHJcblx0XHR0aXRsZTogJ0EgQ29udmVyc2F0aW9uIHdpdGggU3RldmUgRm9yYmVzJyxcclxuXHRcdGRhdGV0aW1lOiAnMjAxNy0xMC0xNiAxMzozMCcsXHJcblx0XHR0aW1lOiAnMTozMCBwLm0uICZuZGFzaDsgMjozMCBwLm0uJyxcclxuXHRcdGRlc2M6ICcnLFxyXG5cdFx0c3BvbnNvcjogJycsXHJcblx0XHRzcGVjaWFsOiAnPHNwYW4+S2V5bm90ZSBBZGRyZXNzPC9zcGFuPidcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiAncmVjZXB0aW9uJyxcclxuXHRcdHRpdGxlOiAnQ2xvc2luZyBSZWNlcHRpb24nLFxyXG5cdFx0ZGF0ZXRpbWU6ICcyMDE3LTEwLTE2IDE0OjMwJyxcclxuXHRcdHRpbWU6ICcyOjMwIHAubS4gJm5kYXNoOyAzOjAwIHAubS4nLFxyXG5cdFx0ZGVzYzogJycsXHJcblx0XHRzcG9uc29yOiAnJyxcclxuXHRcdHNwZWNpYWw6ICcnXHJcblx0fSxcclxuXSIsInZhciBzcGVha2VycyA9IFtcclxue1xyXG4gIGZpcnN0bmFtZTogJ1N0ZXZlJyxcclxuICBsYXN0bmFtZTogJ0ZvcmJlcycsXHJcbiAgZGlzcGxheW5hbWU6ICdTdGV2ZSBGb3JiZXMnLFxyXG4gIHRpdGxlOiAnRWRpdG9yLWluLUNoaWVmJyxcclxuICBjb21wYW55OiAnRm9yYmVzIE1lZGlhJyxcclxuICBwYW5lbDogJ0tleW5vdGUgQWRkcmVzcyB8IE1vbmRheSwgT2N0LiAxNiBhdCAxOjMwIHAubS4nLFxyXG4gIGJpbzE6ICdTdGV2ZSBGb3JiZXMgaXMgQ2hhaXJtYW4gYW5kIEVkaXRvci1pbi1DaGllZiBvZiBGb3JiZXMgTWVkaWEuIEZvcmJlcyB3cml0ZXMgZWRpdG9yaWFscyBmb3IgZWFjaCBpc3N1ZSBvZiBGb3JiZXMgdW5kZXIgdGhlIGhlYWRpbmcgb2Yg4oCcRmFjdCBhbmQgQ29tbWVudC7igJ0gQSB3aWRlbHkgcmVzcGVjdGVkIGVjb25vbWljIHByb2dub3N0aWNhdG9yLCBoZSBpcyB0aGUgb25seSB3cml0ZXIgdG8gaGF2ZSB3b24gdGhlIGhpZ2hseSBwcmVzdGlnaW91cyBDcnlzdGFsIE93bCBBd2FyZCBmb3VyIHRpbWVzLiBUaGUgcHJpemUgd2FzIGZvcm1lcmx5IGdpdmVuIGJ5IFUuUy4gU3RlZWwgQ29ycG9yYXRpb24gdG8gdGhlIGZpbmFuY2lhbCBqb3VybmFsaXN0IHdob3NlIGVjb25vbWljIGZvcmVjYXN0cyBmb3IgdGhlIGNvbWluZyB5ZWFyIHByb3ZlZCBtb3N0IGFjY3VyYXRlLicsXHJcbiAgYmlvMjogJ0luIGJvdGggMTk5NiBhbmQgMjAwMCwgRm9yYmVzIGNhbXBhaWduZWQgdmlnb3JvdXNseSBmb3IgdGhlIFJlcHVibGljYW4gbm9taW5hdGlvbiBmb3IgdGhlIFUuUy4gUHJlc2lkZW5jeS4gS2V5IHRvIGhpcyBwbGF0Zm9ybSB3ZXJlIGEgZmxhdCB0YXgsIG1lZGljYWwgc2F2aW5ncyBhY2NvdW50cywgYSBuZXcgU29jaWFsIFNlY3VyaXR5IHN5c3RlbSBmb3Igd29ya2luZyBBbWVyaWNhbnMsIHBhcmVudGFsIGNob2ljZSBvZiBzY2hvb2xzIGZvciB0aGVpciBjaGlsZHJlbiwgdGVybSBsaW1pdHMsIGFuZCBhIHN0cm9uZyBuYXRpb25hbCBkZWZlbnNlLiBGb3JiZXMgY29udGludWVzIHRvIGVuZXJnZXRpY2FsbHkgcHJvbW90ZSB0aGlzIGFnZW5kYS4nLFxyXG4gIHNwZWNpYWw6ICdLZXlub3RlIEFkZHJlc3MnXHJcbn0sXHJcbntcclxuICBmaXJzdG5hbWU6ICdLZW4nLFxyXG4gIGxhc3RuYW1lOiAnR3JvbmJhY2gnLFxyXG4gIGRpc3BsYXluYW1lOiAnS2VubmV0aCBXLiBHcm9uYmFjaCcsXHJcbiAgdGl0bGU6ICdQcmVzaWRlbnQnLFxyXG4gIGNvbXBhbnk6ICdLR0MgRGlyZWN0IExMQycsXHJcbiAgcGFuZWw6ICdTcGVjaWFsIFByZXNlbnRhdGlvbjogVGhlIFVwc2lkZSBvZiBHbG9iYWwgVXBoZWF2YWwgfCBNb25kYXksIE9jdC4gMTYgYXQgOSBhLm0uJyxcclxuICBiaW8xOiAnS2VubmV0aCBXLiBHcm9uYmFjaCBpcyBhIGdpZnRlZCBrZXlub3RlIHNwZWFrZXIgYW5kIG5hdGlvbmFsbHkgcmVjb2duaXplZCBhdXRob3IsIGV4cGVydCBhbmQgZnV0dXJpc3QgaW4gdGhlIGZpZWxkIG9mIERlbW9ncmFwaHkgYW5kIEdlbmVyYXRpb25hbCBNYXJrZXRpbmcuIEhlIG1ha2VzIHRoZSBzY2llbmNlIG9mIHNoaWZ0aW5nIGRlbW9ncmFwaHkgY29tZSBhbGl2ZSB3aXRoIHJlYWwgbGlmZSBleGFtcGxlcyB3aGljaCBtYWtlIGl0IHJlbGV2YW50IHRvIHRvZGF54oCZcyBjdWx0dXJlLCBidXNpbmVzcyBjbGltYXRlIGFuZCBlY29ub215LiBXaXRoIG5lYXJseSB0aHJlZSBkZWNhZGVzIGV4cGVyaWVuY2UgaW4gcmV0YWlsIGFkdmVydGlzaW5nIGFuZCBtYXJrZXRpbmcsIEtlbiBzYXcgdGhlIGRpcmVjdCByZXN1bHRzIG9mIHNoaWZ0aW5nIGRlbW9ncmFwaGljcyBpbiBoaXMgY2xpZW50c+KAmSBwcm9maXRzLiBFdmVudHVhbGx5LCBoaXMgcGFzc2lvbiBmb3IgdGhlIHN1YmplY3QgY2hhbmdlZCB0aGUgZGlyZWN0aW9uIG9mIGhpcyBjYXJlZXIsIHRvIHRoZSBiZW5lZml0IG9mIHJlYWRlcnMgb2YgaGlzIGJvb2tzIGFuZCBhdHRlbmRlZXMgb2YgaGlzIGtleW5vdGVzIGFuZCBvdGhlciBwcmVzZW50YXRpb25zLicsXHJcbiAgYmlvMjogJzxkaXYgc3R5bGU9XCJwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6MDtwYWRkaW5nLWJvdHRvbTo1Ni4yNSVcIj48aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3FaeWs3djNjSmRvP3JlbD0wP2VjdmVyPTJcIiB3aWR0aD1cIjUwNFwiIGhlaWdodD1cIjI4My41XCIgZnJhbWVib3JkZXI9XCIwXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2xlZnQ6MFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT48L2Rpdj4nLFxyXG4gIHNwZWNpYWw6ICdTcGVjaWFsIFByZXNlbnRhdGlvbidcclxufSxcclxue1xyXG4gIGZpcnN0bmFtZTogJ01hcmsnLFxyXG4gIGxhc3RuYW1lOiAnUm9zZScsXHJcbiAgZGlzcGxheW5hbWU6ICdNYXJrIEUuIFJvc2UnLFxyXG4gIHRpdGxlOiAnQ0VPJyxcclxuICBjb21wYW55OiAnQXZpc29uIFlvdW5nJyxcclxuICBwYW5lbDogJ1RyYW5zZm9ybWluZyBCcm9rZXJhZ2UgfCBNb25kYXksIE9jdC4gMTYgYXQgMTE6MTUgYS5tLicsXHJcbiAgYmlvMTogJ01hcmsgRS4gUm9zZSBpcyBDaGllZiBFeGVjdXRpdmUgT2ZmaWNlciBvZiBBdmlzb24gWW91bmcgYW5kIENoYWlybWFuIG9mIHRoZSBCb2FyZCBvZiBEaXJlY3RvcnMgb2YgQXZpc29uIFlvdW5nIChDYW5hZGEpIEluYy4gSGUgbWFuYWdlcyBhbGwgc3RyYXRlZ2ljLCBmaW5hbmNpYWwsIGFuZCBvcGVyYXRpb25hbCBhY3Rpdml0aWVzIG9mIHRoaXMgZnVsbC1zZXJ2aWNlIGNvbW1lcmNpYWwgcmVhbCBlc3RhdGUgY29tcGFueSwgd2hpY2ggcHJvdmlkZXMgc29sdXRpb25zIHRvIHJlYWwgZXN0YXRlIGludmVzdG9ycywgb3duZXJzLCBhbmQgb2NjdXBpZXJzIHRocm91Z2hvdXQgdGhlIHdvcmxkLiBJbiBoaXMgbmluZSB5ZWFycyB3aXRoIHRoZSBUb3JvbnRvLCBDYW5hZGEtYmFzZWQgZmlybSwgTWFyayBoYXMgb3ZlcnNlZW4gaXRzIGdyb3d0aCBmcm9tIDI5MCByZWFsIGVzdGF0ZSBwcm9mZXNzaW9uYWxzIGluIDExIG9mZmljZXMgaW4gQ2FuYWRhIHRvIG1vcmUgdGhhbiAyLDQwMCBwcm9mZXNzaW9uYWxzIGluIDc5IG9mZmljZXMgaW4gQ2FuYWRhLCB0aGUgVS5TLiwgTWV4aWNvLCBhbmQgRXVyb3BlLicsXHJcbiAgYmlvMjogJycsXHJcbiAgc3BlY2lhbDogJydcclxufSxcclxue1xyXG4gIGZpcnN0bmFtZTogJ0pheScsXHJcbiAgbGFzdG5hbWU6ICdPbHNob25za3knLFxyXG4gIGRpc3BsYXluYW1lOiAnSmF5IE9sc2hvbnNreScsXHJcbiAgdGl0bGU6ICdQcmVzaWRlbnQnLFxyXG4gIGNvbXBhbnk6ICdOQUkgR2xvYmFsJyxcclxuICBwYW5lbDogJ1RyYW5zZm9ybWluZyBCcm9rZXJhZ2UgfCBNb25kYXksIE9jdC4gMTYgYXQgMTE6MTUgYS5tLicsXHJcbiAgYmlvMTogJ0pheSBPbHNob25za3kgaXMgUHJlc2lkZW50IG9mIE5BSSBHbG9iYWwsIGEgbGVhZGluZyBjb21tZXJjaWFsIHJlYWwgZXN0YXRlIGJyb2tlcmFnZSBmaXJtIHdpdGggbW9yZSB0aGFuIDQwMCBvZmZpY2VzIHN0cmF0ZWdpY2FsbHkgbG9jYXRlZCB0aHJvdWdob3V0IE5vcnRoIEFtZXJpY2EsIExhdGluIEFtZXJpY2EsIGFuZCB0aGUgQ2FyaWJiZWFuLCBFdXJvcGUsIEFmcmljYSwgYW5kIEFzaWEgUGFjaWZpYywgaW5jbHVkaW5nIG92ZXIgNywwMDAgbG9jYWwgbWFya2V0IHByb2Zlc3Npb25hbHMuIEFubnVhbGx5LCBOQUkgR2xvYmFsIGNvbXBsZXRlcyBpbiBleGNlc3Mgb2YgJDIwIGJpbGxpb24gaW4gY29tbWVyY2lhbCByZWFsIGVzdGF0ZSB0cmFuc2FjdGlvbnMgdGhyb3VnaG91dCB0aGUgd29ybGQuJyxcclxuICBiaW8yOiAnJyxcclxuICBzcGVjaWFsOiAnJ1xyXG59LFxyXG57XHJcbiAgZmlyc3RuYW1lOiAnTWlrZScsXHJcbiAgbGFzdG5hbWU6ICdSZWdhbicsXHJcbiAgZGlzcGxheW5hbWU6ICdNaWtlIFJlYWdhbicsXHJcbiAgdGl0bGU6ICdTZW5pb3IgVmljZSBQcmVzaWRlbnQnLFxyXG4gIGNvbXBhbnk6ICdSRS9NQVggQ29tbWVyY2lhbCcsXHJcbiAgcGFuZWw6ICdUcmFuc2Zvcm1pbmcgQnJva2VyYWdlIHwgTW9uZGF5LCBPY3QuIDE2IGF0IDExOjE1IGEubS4nLFxyXG4gIGJpbzE6ICdNaWtlIFJlYWdhbiBvdmVyc2VlcyB0aGUgZ2xvYmFsIGFsbGlhbmNlIHByb2dyYW1zIHRoYXQgaGF2ZSBoZWxwZWQgbWFrZSBSRS9NQVggb25lIG9mIHRoZSBtb3N0IHJlY29nbml6ZWQgcmVhbCBlc3RhdGUgYnJhbmRzIGluIHRoZSB3b3JsZC4gSGUgYWxzbyBsZWFkcyBUaGUgUkUvTUFYIENvbGxlY3Rpb24gbHV4dXJ5IHJlYWwgZXN0YXRlIGRpdmlzaW9uLCB3aGljaCBzZXJ2ZXMgYWZmbHVlbnQgYnV5ZXJzIGFuZCBzZWxsZXJzIGFyb3VuZCB0aGUgd29ybGQ7IGFuZCBSRS9NQVggQ29tbWVyY2lhbCwgd2hpY2ggdW5kZXIgaGlzIGRpcmVjdGlvbiBoYXMgZ3Jvd24gaW50byBvbmUgb2YgdGhlIHRvcCAyMCBjb21tZXJjaWFsIGJyb2tlcmFnZSBuZXR3b3JrcyBpbiB0aGUgd29ybGQuJyxcclxuICBiaW8yOiAnJyxcclxuICBzcGVjaWFsOiAnJ1xyXG59LFxyXG57XHJcbiAgZmlyc3RuYW1lOiAnQnJpYW4nLFxyXG4gIGxhc3RuYW1lOiAnU3RvZmZlcnMnLFxyXG4gIGRpc3BsYXluYW1lOiAnQnJpYW4gU3RvZmZlcnMnLFxyXG4gIHRpdGxlOiAnR2xvYmFsIFByZXNpZGVudCwgRGVidCAmIFN0cnVjdHVyZWQgRmluYW5jZScsXHJcbiAgY29tcGFueTogJ0NCUkUnLFxyXG4gIHBhbmVsOiAnS2VlcGVycyBvZiB0aGUgQ2FwaXRhbCB8IE1vbmRheSwgT2N0LiAxNiBhdCA4OjE1IGEubScsXHJcbiAgYmlvMTogJ0JyaWFuIFN0b2ZmZXJzIGlzIEdsb2JhbCBQcmVzaWRlbnQsIERlYnQgJiBTdHJ1Y3R1cmVkIEZpbmFuY2UgYXQgQ0JSRS4gVW5kZXIgaGlzIGxlYWRlcnNoaXAsIG5lYXJseSAxNDAgcHJvZmVzc2lvbmFscyBoYXZlIG9yaWdpbmF0ZWQgYXBwcm94aW1hdGVseSAkMjE2IGJpbGxpb24gaW4gbG9hbiB2b2x1bWUgc2luY2UgMjAwNy4gQWRkaXRpb25hbGx5LCB0aGlzIHByYWN0aWNlIG1haW50YWlucyBhIGxvYW4gc2VydmljZXMgcG9ydGZvbGlvIG9mIG1vcmUgdGhhbiAkMTIwIGJpbGxpb24gaW4gdGhlIFVuaXRlZCBTdGF0ZXMsIHdoaWxlIENCUkXigJlzIEVNRUEgc2VydmljaW5nIHBvcnRmb2xpbyBoYXMgZ3Jvd24gYnkgYW4gYWRkaXRpb25hbCAkMjQgYmlsbGlvbi4nLFxyXG4gIGJpbzI6ICdTdG9mZmVycyBoYXMgZXh0ZW5zaXZlIGV4cGVyaWVuY2UgaW4gdGhlIG9yaWdpbmF0aW9uLCBzdHJ1Y3R1cmluZywgcGxhY2VtZW50LCBjbG9zaW5nIGFuZCBzZXJ2aWNpbmcgb2YgY29tbWVyY2lhbCByZWFsIGVzdGF0ZSBkZWJ0IGZvciBsaWZlIGluc3VyYW5jZSBjb21wYW5pZXMsIHBlbnNpb24gZnVuZHMsIGJhbmtzLCBzYXZpbmdzLCBhbmQgbG9hbnMsIEZyZWRkaWUgTWFjLCBGYW5uaWUgTWFlLCBGSEEsIGFuZCBXYWxsIFN0cmVldCBzb3VyY2VzLicsXHJcbiAgc3BlY2lhbDogJydcclxufSxcclxue1xyXG4gIGZpcnN0bmFtZTogJ0xpbmRzYXknLFxyXG4gIGxhc3RuYW1lOiAnQmFrZXInLFxyXG4gIGRpc3BsYXluYW1lOiAnTGluZHNheSBCYWtlcicsXHJcbiAgdGl0bGU6ICdQcmVzaWRlbnQnLFxyXG4gIGNvbXBhbnk6ICdDb21meScsXHJcbiAgcGFuZWw6ICdUaGUgV29tZW4gT3B0aW1pemluZyBPdXIgV29ybGQgfCBNb25kYXksIE9jdC4gMTYgYXQgMTA6MTUgYS5tLicsXHJcbiAgYmlvMTogJ0xpbmRzYXkgQmFrZXIgbGVhZHMgcmVsYXRpb25zaGlwIGJ1aWxkaW5nIGFuZCBzZXJ2ZXMgYXMgQ29tZnlcXCdzIGNoaWVmIGJyYW5kIGV2YW5nZWxpc3QuIENvbWZ5IGlzIGEgc2ltcGxlLXRvLXVzZSBhcHAgdGhhdCBlbXBsb3llZXMgcHV0IG9uIHRoZWlyIHBob25lcyBhbmQgdXNlIHRvIHJlcXVlc3Qgd2FybSBvciBjb29sIGFpciBpbiBhIHpvbmUgd2hlcmUgdGhleSB3b3JrLiBUaGUgYXBwIHVzZXMgZW1wbG95ZWUtY29udHJpYnV0ZWQgZGF0YSwgYW5kIGNvbWJpbmVzIGl0IHdpdGggdXNhZ2UgZGF0YSBhbmQgcGF0dGVybnMsIHRvIHR1bmUgZXZlcnkgem9uZSBpbiBhbiBvZmZpY2UgYnVpbGRpbmcgYmFzZWQgb24gdGhlIHJvdXRpbmUgcHJlZmVyZW5jZXMgb2YgcGVvcGxlIHdobyB3b3JrIGluIGVhY2ggem9uZSB0aGVyZS4nLFxyXG4gIGJpbzI6ICdBbiBlc3RhYmxpc2hlZCB3cml0ZXIgaW4gdGhlIGdyZWVuIGJ1aWxkaW5nIGNvbW11bml0eSwgQmFrZXIgd2FzIHByZXZpb3VzbHkgYSBTdXN0YWluYWJsZSBPcGVyYXRpb25zIENvbnN1bHRhbnQgYXQgR29vZ2xlLiBTaGUgaXMgYSBQaC5ELiBDYW5kaWRhdGUgaW4gQnVpbGRpbmcgU2NpZW5jZSBhdCBVbml2ZXJzaXR5IG9mIENhbGlmb3JuaWEgQmVya2VsZXksIGFuZCB3YXMgb24gdGhlIG9yaWdpbmFsIHN0YWZmIHRlYW0gZGV2ZWxvcGluZyB0aGUgTEVFRCBSYXRpbmcgU3lzdGVtIGF0IFVTR0JDLjxicj48aWZyYW1lIHdpZHRoPVwiNTYwXCIgaGVpZ2h0PVwiMzE1XCIgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvTk85MmFaRGI1MkU/c3RhcnQ9MTQ1JnJlbD0wJmFtcDtjb250cm9scz0wXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPicsXHJcbiAgc3BlY2lhbDogJydcclxufSxcclxue1xyXG4gIGZpcnN0bmFtZTogJ1lhbicsXHJcbiAgbGFzdG5hbWU6ICdLaGFtaXNoJyxcclxuICBkaXNwbGF5bmFtZTogJ1lhbiBLaGFtaXNoJyxcclxuICB0aXRsZTogJ01hbmFnaW5nIERpcmVjdG9yJyxcclxuICBjb21wYW55OiAnVGVuLVgnLFxyXG4gIHBhbmVsOiAnVHJhbnNmb3JtaW5nIEJyb2tlcmFnZSB8IE1vbmRheSwgT2N0LiAxNiBhdCAxMToxNSBhLm0uJyxcclxuICBiaW8xOiAnQXMgdGhlIGhlYWQgb2YgdGhlIEJyb2tlciBDaGFubmVsLCBZYW4gaXMgZXhwYW5kaW5nIFRlbi1Y4oCZcyBlbmdhZ2VtZW50IHdpdGggdGhlIHRvcCBjb21tZXJjaWFsIGJyb2tlcmFnZSBmaXJtcywgaW5kdXN0cnkgYXNzb2NpYXRpb25zIGFuZCB0ZWNobm9sb2d5IHBhcnRuZXJzLiBIZSBicmluZ3MgYSBzdHJvbmcgQ1JFIHNraWxsIHNldCB0aGF0IGVuY29tcGFzc2VzIEFjcXVpc2l0aW9ucywgRGlzcG9zaXRpb24sIERlYnQgU3RydWN0dXJpbmcsIExlYXNpbmcsIFBvcnRmb2xpbyBNYW5hZ2VtZW50LCBFcXVpdHksIGFuZCBvdmVyYWxsIENhcGl0YWwgTWFya2V0cyBzdHJhdGVneSwgZGV2ZWxvcGVkIGR1cmluZyBhIGNhcmVlciBlbmNvbXBhc3Npbmcgb3ZlciAyMCB5ZWFycyBpbiBDb21tZXJjaWFsIFJlYWwgRXN0YXRlLicsXHJcbiAgYmlvMjogJ0toYW1pc2ggY29tZXMgdG8gVGVuLVggZnJvbSBOZXcgWW9yay1iYXNlZCBGb3J0cmVzcyBJbnZlc3RtZW50IEdyb3VwLCB3aGVyZSBoZSBzZXJ2ZWQgYXMgU2VuaW9yIFZpY2UgUHJlc2lkZW50IG1hbmFnaW5nIGEgZGl2ZXJzZSBjb21tZXJjaWFsIHJlYWwgZXN0YXRlLCBpbmZyYXN0cnVjdHVyZSwgYW5kIHRyYW5zcG9ydGF0aW9uIHBvcnRmb2xpbyB2YWx1ZWQgYXQgJDMuNSBiaWxsaW9uLiBIaXMgcHJldmlvdXMgcG9zaXRpb25zIGluY2x1ZGUgQ2hpZWYgT3BlcmF0aW5nIE9mZmljZXIgYW5kIE1hbmFnaW5nIERpcmVjdG9yIGZvciBUaGUgU1RHIEdyb3VwLCBTZW5pb3IgVmljZSBQcmVzaWRlbnQgYXQgRm93bGVyIFByb3BlcnR5IEFjcXVpc2l0aW9ucywgYW5kIERpcmVjdG9yIGFuZCBjb21tZXJjaWFsIGJyb2tlciBhdCBNYXJjdXMgJiBNaWxsaWNoYXAuIEtoYW1pc2ggc3RhcnRlZCBoaXMgY2FyZWVyIGluIHB1YmxpYyBhY2NvdW50aW5nIHdpdGggQXJ0aHVyIEFuZGVyc2VuLicsXHJcbiAgc3BlY2lhbDogJydcclxufSxcclxue1xyXG4gIGZpcnN0bmFtZTogJ05hdmVlbicsXHJcbiAgbGFzdG5hbWU6ICdKYWdnaScsXHJcbiAgZGlzcGxheW5hbWU6ICdOYXZlZW4gSmFnZ2knLFxyXG4gIHRpdGxlOiAnUHJlc2lkZW50LCBSZXRhaWwgQnJva2VyYWdlJyxcclxuICBjb21wYW55OiAnSkxMJyxcclxuICBwYW5lbDogJ1RyYW5zZm9ybWluZyBCcm9rZXJhZ2UgfCBNb25kYXksIE9jdC4gMTYgYXQgMTE6MTUgYS5tLicsXHJcbiAgYmlvMTogJ05hdmVlbiBKYWdnaSBqb2luZWQgSkxMIGluIDIwMTQgYW5kIGxlYWRzIHRoZSByZXRhaWwgYnJva2VyYWdlIGJ1c2luZXNzIGNvbXByaXNpbmcgb2YgdGVuYW50IHJlcCwgYWdlbmN5IGxlYXNpbmcsIGFuZCBjYXBpdGFsIG1hcmtldHMgZm9yIHRoZSBBbWVyaWNh4oCZcyB3aGVyZSBoZSBpcyByZXNwb25zaWJsZSBmb3Igb3ZlcmFsbCBzdHJhdGVneSwgYnVzaW5lc3MgZGV2ZWxvcG1lbnQgYW5kIHRoZSBncm93dGggb2YgdGhlIHBsYXRmb3JtLiBJbiBhZGRpdGlvbiB0byBvdmVyc2VlaW5nIGFsbCBvZiBKTEzigJlzIHJldGFpbCB0ZW5hbnQgcmVwLCBhZ2VuY3kgbGVhc2luZyBhbmQgY2FwaXRhbCBtYXJrZXRzIGJyb2tlcnMgYWNyb3NzIHRoZSBVbml0ZWQgU3RhdGVzLCBKYWdnaSBpcyBDaGFpcm1hbiBvZiB0aGUgR2xvYmFsIFJldGFpbCBMZWFzaW5nIEJvYXJkIHdoaWNoIGNvb3JkaW5hdGVzIEpMTOKAmXMgcmV0YWlsIGJyb2tlcmFnZSBhY3Rpdml0eSBHbG9iYWxseS4nLFxyXG4gIGJpbzI6ICdXaXRoIG1vcmUgdGhhbiAyMCB5ZWFycyBvZiByZXRhaWwgcmVhbCBlc3RhdGUgZXhwZXJpZW5jZSwgSmFnZ2kgYnJpbmdzIGEgY2xpZW50LWZvY3VzIGFuZCBmYW1pbGlhcml0eSB3aXRoIGFsbCBhc3BlY3RzIG9mIHJldGFpbCBpbiB0aGUgVS5TIGFuZCBhYnJvYWQuIEhlIHNwZWNpYWxpemVzIGluIG11bHRpLW1hcmtldCBlbnRyeSBzdHJhdGVneSwgc2l0ZSBzZWxlY3Rpb24gYW5hbHl0aWNzLCBhY3F1aXNpdGlvbiB1bmRlcndyaXRpbmcsIHBvcnRmb2xpbyBvcHRpbWl6YXRpb24gYW5kIGRpc3Bvc2l0aW9uIHN0cmF0ZWd5LicsXHJcbiAgc3BlY2lhbDogJydcclxufSxcclxue1xyXG4gIGZpcnN0bmFtZTogJ1N1c2llJyxcclxuICBsYXN0bmFtZTogJ0FsZ2FyZCcsXHJcbiAgZGlzcGxheW5hbWU6ICdTdXNpZSBBbGdhcmQnLFxyXG4gIHRpdGxlOiAnQ0VPJyxcclxuICBjb21wYW55OiAnT2ZmaWNlU3BhY2UuY29tJyxcclxuICBwYW5lbDogJ1RoZSBXb21lbiBPcHRpbWl6aW5nIE91ciBXb3JsZCB8IE1vbmRheSwgT2N0LiAxNiBhdCAxMDoxNSBhLm0uJyxcclxuICBiaW8xOiAnU3VzaWUgQWxnYXJkIGlzIHRoZSBDRU8gYW5kIGNvLWZvdW5kZXIgb2YgT2ZmaWNlU3BhY2UuY29tLCBhbiBvbmxpbmUgZGF0YWJhc2UgY29tcGFueSBmb3IgY29tbWVyY2lhbCByZWFsIGVzdGF0ZS4gU2luY2UgdGhlaXIgbGF1bmNoIGluIDIwMTIsIHRoZXkgaGF2ZSBjcmVhdGVkIGFuIGVmZmljaWVudCBhbmQgZWZmZWN0aXZlIG1hcmtldGluZyBwbGF0Zm9ybSBjb25uZWN0aW5nIHRlbmFudHMgdG8gYnJva2VycyBhbmQgbGlzdGluZyBhZ2VudHMuIFRlbmFudHMgYW5kIHJlYWwgZXN0YXRlIHByb2Zlc3Npb25hbHMgY2FuIHVzZSB0aGUgc2l0ZSB0byBwZXJ1c2UgY29tbWVyY2lhbCBsaXN0aW5ncyB0aHJvdWdob3V0IHRoZSBVLlMuIGFuZCwgZm9yIHRoZSBsYXR0ZXIsIGFkZCBsaXN0aW5ncyB0byB0aGUgZGF0YWJhc2UuIE9mZmljZVNwYWNlLmNvbSBpcyBidWlsZGluZyBhIGJldHRlciBzZWFyY2ggZXhwZXJpZW5jZSBmb3IgdGVuYW50cyB0byBtYWtlIGZpbmRpbmcgdGhlIHJpZ2h0IG9mZmljZSwgcmV0YWlsLCBhbmQgaW5kdXN0cmlhbCBzcGFjZSBlYXNpZXIuIEFsZ2FyZCBoYXMgYSBwcm92ZW4gdHJhY2sgcmVjb3JkIG9mIGRyaXZpbmcgbmV3IGNvbnN1bWVyIHdlYiBzZXJ2aWNlcyBmcm9tIHplcm8gdG8gJDUwIG1pbGxpb24gaW4gcmV2ZW51ZS4nLFxyXG4gIGJpbzI6ICcnLFxyXG4gIHNwZWNpYWw6ICcnXHJcbn0sXHJcbntcclxuICBmaXJzdG5hbWU6ICdKZXJlbXknLFxyXG4gIGxhc3RuYW1lOiAnV2VkZ2J1cnknLFxyXG4gIGRpc3BsYXluYW1lOiAnSmVyZW15IFdlZGdidXJ5JyxcclxuICB0aXRsZTogJ1NlbmlvciBWaWNlIFByZXNpZGVudCwgQ29tbWVyY2lhbCBNb3J0Z2FnZXMnLFxyXG4gIGNvbXBhbnk6ICdGaXJzdCBOYXRpb25hbCcsXHJcbiAgcGFuZWw6ICdLZWVwZXJzIG9mIHRoZSBDYXBpdGFsIHwgTW9uZGF5LCBPY3QuIDE2IGF0IDg6MTUgYS5tJyxcclxuICBiaW8xOiAnSmVyZW15IFdlZGdidXJ5IGlzIHRoZSBTZW5pb3IgVmljZSBQcmVzaWRlbnQsIENvbW1lcmNpYWwgTW9ydGdhZ2VzIGZvciBGaXJzdCBOYXRpb25hbCBhbmQgaXMgcmVzcG9uc2libGUgZm9yIHRoZSBzYWxlcyBhbmQgbWFya2V0aW5nIG9mIEZpcnN0IE5hdGlvbmFs4oCZcyBjb21tZXJjaWFsIG1vcnRnYWdlIHByb2R1Y3RzLiAgVGhpcyByb2xlIGluY2x1ZGVzIHRoZSBtYW5hZ2VtZW50IG9mIGFwcHJveGltYXRlbHkgMjUgbW9ydGdhZ2Ugb3JpZ2luYXRvcnMgbG9jYXRlZCBpbiBvZmZpY2VzIG5hdGlvbmFsbHkgYW5kIHRoZSBjcmVkaXQgcmV2aWV3IG9mIHRoZSBjb21tZXJjaWFsIGxvYW4gcHJvZHVjdHMsIGluY2x1ZGluZyBDTUhDLWluc3VyZWQgZml4ZWQgYW5kIGZsb2F0aW5nIHJhdGUgbG9hbnMsIENNQlMgbG9hbnMsIHNtYWxsIGNvbW1lcmNpYWwgbG9hbnMsIHNlY29uZCBtb3J0Z2FnZXMgYW5kIGludGVyaW0vY29uc3RydWN0aW9uIGxvYW5zLicsXHJcbiAgYmlvMjogJ1ByaW9yIHRvIGpvaW5pbmcgRmlyc3QgTmF0aW9uYWwgaW4gMjAwNCwgV2VkZ2J1cnkgd29ya2VkIHdpdGggb3RoZXIgbGVhZGluZyBjb21tZXJjaWFsIG1vcnRnYWdlIGxlbmRlcnMgZm9yIDE0IHllYXJzLCBpbmNsdWRpbmcgTWFudWxpZmUgRmluYW5jaWFsIGFuZCBNZXJyaWxsIEx5bmNoIEZpbmFuY2lhbC4gIFdlZGdidXJ54oCZcyBlZHVjYXRpb25hbCBiYWNrZ3JvdW5kIGluY2x1ZGVzIGEgQmFjaGVsb3Igb2YgQXJ0cyBmcm9tIFdpbGZyaWQgTGF1cmllciBVbml2ZXJzaXR5IGFuZCB0aGUgVXJiYW4gTGFuZCBFY29ub21pY3MgRGlwbG9tYSAoUmVhbCBFc3RhdGUpIGZyb20gdGhlIFVuaXZlcnNpdHkgb2YgQnJpdGlzaCBDb2x1bWJpYS4nLFxyXG4gIHNwZWNpYWw6ICcnXHJcbn0sXHJcbntcclxuICBmaXJzdG5hbWU6ICdHcmFudCcsXHJcbiAgbGFzdG5hbWU6ICdNdXJyYXknLFxyXG4gIGRpc3BsYXluYW1lOiAnR3JhbnQgTXVycmF5JyxcclxuICB0aXRsZTogJ1NlbmlvciBWaWNlIFByZXNpZGVudCcsXHJcbiAgY29tcGFueTogJ0NvbmNvcmQgUGFjaWZpYyBEZXZlbG9wbWVudHMsIEluYy4nLFxyXG4gIHBhbmVsOiAnR2xvYmFsIENvbm5lY3Rpb25zIEx1bmNoZW9uIHwgU3VuZGF5LCBPY3QuIDE1IGF0IDEyOjE1IHAubS4nLFxyXG4gIGJpbzE6ICdHcmFudCBNdXJyYXkgaXMgdGhlIFNlbmlvciBWaWNlIFByZXNpZGVudCwgU2FsZXMgYXQgQ29uY29yZCBQYWNpZmljIERldmVsb3BtZW50cyBJbmMuIEluIGhpcyBleGVjdXRpdmUgcG9zaXRpb24sIE11cnJheSBsZWFkcyBzdGFmZiBhbmQgc2FsZXMgYXQgdGhlIGNvbXBhbnnigJlzIG11bHRpcGxlIHByZXNlbnRhdGlvbiBjZW50ZXJzLCBhbmQgb3ZlcnNlZXMgc2FsZXMgaW4gZXhjZXNzIG9mICQxMCBiaWxsaW9uIGluIGhpZ2gtcmlzZSBjb21wbGV4ZXMgaW4gbWFqb3IgY2l0aWVzLiBNdXJyYXkgd2FzIGFsc28gVmljZSBQcmVzaWRlbnQgb2YgU2FsZXMgYXQgTUdNIFJlc29ydHPigJkgJDEwIGJpbGxpb24gQ2l0eSBDZW50ZXIgcHJvamVjdCBpbiBMYXMgVmVnYXMsIHRoZSBsYXJnZXN0IHByaXZhdGVseSBmdW5kZWQgZGV2ZWxvcG1lbnQgcHJvamVjdCBpbiBVLlMuIGhpc3RvcnkuJyxcclxuICBiaW8yOiAnJyxcclxuICBzcGVjaWFsOiAnJ1xyXG59LFxyXG57XHJcbiAgZmlyc3RuYW1lOiAnUG9vbmFtJyxcclxuICBsYXN0bmFtZTogJ01hdGhpcycsXHJcbiAgZGlzcGxheW5hbWU6ICdQb29uYW0gTWF0aGlzJyxcclxuICB0aXRsZTogJ0NFTycsXHJcbiAgY29tcGFueTogJ1N0ZWFsdGhGb3JjZScsXHJcbiAgcGFuZWw6ICdUaGUgV29tZW4gT3B0aW1pemluZyBPdXIgV29ybGQgfCBNb25kYXksIE9jdC4gMTYgYXQgMTA6MTUgYS5tLicsXHJcbiAgYmlvMTogJ1Bvb25hbSBNYXRoaXMgc3BlbnQgb3ZlciBhIGRlY2FkZSBpbiByZWFsIGVzdGF0ZSBwcml2YXRlIGVxdWl0eSBhbmQgZGV2ZWxvcG1lbnQuIEN1cnJlbnRseSwgTWF0aGlzIGlzIEZvdW5kZXIgYW5kIENFTyBvZiBTdGVhbHRoRm9yY2UuY29tLCBhIGdsb2JhbCBjb25zdWx0YW50IG5ldHdvcmssIHByb3ZpZGluZyBwcm9qZWN0LWJhc2VkIHJlYWwgZXN0YXRlIGludmVzdG1lbnQgaW5zaWdodHMgYW5kIGN1c3RvbWl6ZWQgY29uc3VsdGluZyBvbi1kZW1hbmQuIFN0ZWFsdGhGb3JjZSBoYXMgYmVlbiBjYWxsZWQgdGhlIHJvbG9kZXggb2YgYSByZWFsIGVzdGF0ZSBpbnZlc3RvcuKAmXMgZHJlYW1zLicsXHJcbiAgYmlvMjogJ0EgSGFydmFyZCBCQSBhbmQgV2hhcnRvbiBNQkEsIE1hdGhpcyB3YXMgcHJldmlvdXNseSBEZXB1dHkgSGVhZCBvZiBHbG9iYWwgUmVhbCBFc3RhdGUgQXNzZXQgTWdtdC4gZm9yIFBhcnRuZXJzIEdyb3VwICgkNDAgYmlsbGlvbiBBVU0pLCBhbmQgZWFybHkgaW4gaGVyIGNhcmVlciB3YXMgdGhlIDEzdGggRW1wbG95ZWUgYXQgVGhlIEdlcnNvbiBMZWhybWFuIEdyb3VwIChHTEcpLCBub3cgdmFsdWVkIGF0IG92ZXIgJDEgYmlsbGlvbi4nLFxyXG4gIHNwZWNpYWw6ICcnXHJcbn0sXHJcbntcclxuICBmaXJzdG5hbWU6ICdKdWxpYScsXHJcbiAgbGFzdG5hbWU6ICdEYXZpcycsXHJcbiAgZGlzcGxheW5hbWU6ICdKdWxpYSBEYXZpcycsXHJcbiAgdGl0bGU6ICdWUCwgR2xvYmFsIEhlYWQgb2YgQnJva2VyICYgUmVhbCBFc3RhdGUgUGFydG5lcnNoaXBzJyxcclxuICBjb21wYW55OiAnV2VXb3JrJyxcclxuICBwYW5lbDogJ1RoZSBXb21lbiBPcHRpbWl6aW5nIE91ciBXb3JsZCB8IE1vbmRheSwgT2N0LiAxNiBhdCAxMDoxNSBhLm0uJyxcclxuICBiaW8xOiAnSnVsaWEgRGF2aXMgaXMgVlAsIEdsb2JhbCBIZWFkIG9mIEJyb2tlciAmIFJlYWwgRXN0YXRlIFBhcnRuZXJzaGlwcyBhdCBXZVdvcmssIHdoZXJlIGhlciB0ZWFtIGlzIHJlc3BvbnNpYmxlIGZvciB0aGUgZGV2ZWxvcG1lbnQsIG1hbmFnZW1lbnQsIGFuZCBvcGVyYXRpb25zIG9mIHRoZSBwcm9ncmFtcy4gRGF2aXNcXCdzIGNhcmVlciBzcGFucyBvdmVyIDE0IHllYXJzIGZvY3VzZWQgcHJpbWFyaWx5IGluIGNvbW1lcmNpYWwgcmVhbCBlc3RhdGUuIFNoZSByZWNlaXZlZCBoZXIgTUJBIGZyb20gVU5DIGFuZCBoZXIgQkEgZnJvbSBNZXJlZGl0aCBDb2xsZWdlLicsXHJcbiAgYmlvMjogJzxpZnJhbWUgd2lkdGg9XCI1NjBcIiBoZWlnaHQ9XCIzMTVcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9sNXRTSU5henc3OD9yZWw9MCZhbXA7Y29udHJvbHM9MFwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nLFxyXG4gIHNwZWNpYWw6ICcnXHJcbn0sXHJcbntcclxuICBmaXJzdG5hbWU6ICdSb3knLFxyXG4gIGxhc3RuYW1lOiAnQWJyYW1zJyxcclxuICBkaXNwbGF5bmFtZTogJ1JveSBBYnJhbXMnLFxyXG4gIHRpdGxlOiAnQ0VPIGFuZCBGb3VuZGVyJyxcclxuICBjb21wYW55OiAnUmVhbENvbm5leCcsXHJcbiAgcGFuZWw6ICdLZWVwZXJzIG9mIHRoZSBDYXBpdGFsIHwgTW9uZGF5LCBPY3QuIDE2IGF0IDg6MTUgYS5tJyxcclxuICBiaW8xOiAnJyxcclxuICBiaW8yOiAnPGlmcmFtZSB3aWR0aD1cIjU2MFwiIGhlaWdodD1cIjMxNVwiIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1hGRS1vTWc1VXdzP3JlbD0wJmFtcDtjb250cm9scz0wXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPicsXHJcbiAgc3BlY2lhbDogJydcclxufSxcclxue1xyXG4gIGZpcnN0bmFtZTogJ0VtaWx5JyxcclxuICBsYXN0bmFtZTogJ0xpbmUnLFxyXG4gIGRpc3BsYXluYW1lOiAnRW1pbHkgTGluZScsXHJcbiAgdGl0bGU6ICdWUCBvZiBDb21tZXJjaWFsIFNlcnZpY2VzJyxcclxuICBjb21wYW55OiAnUmVhbHRvcnMgUHJvcGVydHkgUmVzb3VyY2XCricsXHJcbiAgcGFuZWw6ICdUaGUgV29tZW4gT3B0aW1pemluZyBPdXIgV29ybGQgfCBNb25kYXksIE9jdC4gMTYgYXQgMTA6MTUgYS5tLicsXHJcbiAgYmlvMTogJ0VtaWx5IExpbmUgaXMgVmljZSBQcmVzaWRlbnQgb2YgQ29tbWVyY2lhbCBTZXJ2aWNlcyBmb3IgdGhlIFJlYWx0b3JzIFByb3BlcnR5IFJlc291cmNlwq4gKFJQUiksIGEgd2hvbGx5IG93bmVkIHN1YnNpZGlhcnkgb2YgdGhlIE5BVElPTkFMIEFTU09DSUFUSU9OIE9GIFJFQUxUT1JTwq4gKE5BUikuIFNoZSBpcyBwYXNzaW9uYXRlIGFib3V0IGVkdWNhdGluZyBvbiBkYXRhIGRyaXZlbiBzb2x1dGlvbnMgYW5kIGV4ZXJjaXNlcyBoZXIgYmFja2dyb3VuZCBpbiBJbnRlcmRpc2NpcGxpbmFyeSBSZXNlYXJjaCB0byBzdHJlbmd0aGVuIHRoZSBpbmZvcm1hdGlvbiBhbmQgYW5hbHlzaXMgYXZhaWxhYmxlIHRvIFJFQUxUT1JTwq4gYXMgYSBtZW1iZXJzLW9ubHkgYmVuZWZpdCB0aHJvdWdoIFJQUi4gRnJvbSBzaXRlIHNlbGVjdGlvbiBhbmQgaW52ZXN0bWVudCBhbmFseXNpcyB0b29scyB0byBkZW1vZ3JhcGhpYyBhbmQgcHN5Y2hvZ3JhcGhpYyBpbnNpZ2h0cyBhYm91dCBjb21tdW5pdGllcywgUlBSIENvbW1lcmNpYWwgaXMgYSBkYXRhYmFzZSBkZXNpZ25lZCB0byB2YWxpZGF0ZSBhIHByYWN0aXRpb25lcuKAmXMgbG9jYWwgZXhwZXJ0aXNlIHdoZW4gd29ya2luZyB3aXRoIGEgYnJvYWQgcmFuZ2Ugb2YgY2xpZW50cy4nLFxyXG4gIGJpbzI6ICdQcmlvciB0byBSUFIsIExpbmUgbWFuYWdlZCBEZXZlbG9wbWVudCBhbmQgT3V0cmVhY2ggZm9yIHRoZSBDb21tZXJjaWFsIFJlYWwgRXN0YXRlIERpdmlzaW9uIG9mIE5BUi4gU2hlIHNlcnZlcyBvbiB0aGUgQm9hcmQgb2YgQWR2aXNvcnMgZm9yIENvbW1pc3Npb25UcmFjLCBhbiBBdGxhbnRhIGJhc2VkIGNvbXBhbnkgdGhhdCBkZWxpdmVycyBjbG91ZC1jb21wdXRpbmcgc29sdXRpb25zIGZvciBjb21tZXJjaWFsIHJlYWwgZXN0YXRlIGNvbW1pc3Npb24gdHJhY2tpbmcsIGFzIHdlbGwgYXMgdGhlIEJvYXJkIG9mIERpcmVjdG9ycyBmb3IgU3BlY2lhbCBEYXlzIENhbXAsIHRoZSBzZWNvbmQgbG9uZ2VzdCBydW5uaW5nIHBlZGlhdHJpYyBvbmNvbG9neSBjYW1wIGluIHRoZSB3b3JsZC4gTGluZSBlYXJuZWQgYSBNYXN0ZXJzIGRlZ3JlZSBmcm9tIHRoZSBVbml2ZXJzaXR5IG9mIE1pY2hpZ2FuIGFuZCBhIEJhY2hlbG9yIG9mIEFydHMgZGVncmVlIGZyb20gQWxiaW9uIENvbGxlZ2UuJyxcclxuICBzcGVjaWFsOiAnJ1xyXG59XHJcblxyXG5dIiwidmFyIHNwb25zb3JzID0gW1xyXG5cdHtcclxuXHRcdHNwb25zb3JuYW1lOiAnVGVuLVgnLFxyXG5cdFx0c3BvbnNvcmxvZ286ICd0ZW4teC1sb2dvJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0c3BvbnNvcm5hbWU6ICdOQUkgR2xvYmFsJyxcclxuXHRcdHNwb25zb3Jsb2dvOiAnbmFpLWxvZ28nXHJcblx0fSxcclxuXHR7XHJcblx0XHRzcG9uc29ybmFtZTogJ1JFL01BWCcsXHJcblx0XHRzcG9uc29ybG9nbzogJ3JlbWF4LWxvZ28nXHJcblx0fSxcclxuXHR7XHJcblx0XHRzcG9uc29ybmFtZTogJ05hdGlvbmFsIEFzc29jaWF0aW9uIG9mIFJlYWx0b3JzIChOQVIpIENvbW1lcmNpYWwnLFxyXG5cdFx0c3BvbnNvcmxvZ286ICduYXItY29tbWVyY2lhbC1sb2dvJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0c3BvbnNvcm5hbWU6ICdTcGVycnkgQ29tbWVyY2lhbCBHbG9iYWwgQWZmaWxpYXRlcycsXHJcblx0XHRzcG9uc29ybG9nbzogJ3NwZXJyeS1jZ2EtbG9nbydcclxuXHR9LFxyXG5cdHtcclxuXHRcdHNwb25zb3JuYW1lOiAnU2lsdmVyIFBvcnRhbCBDYXBpdGFsJyxcclxuXHRcdHNwb25zb3Jsb2dvOiAnc2lsdmVyLXBvcnRhbC1jYXBpdGFsLWxvZ28nXHJcblx0fSxcclxuXHR7XHJcblx0XHRzcG9uc29ybmFtZTogJ1JlYWxDb25uZXgnLFxyXG5cdFx0c3BvbnNvcmxvZ286ICdyZWFsY29ubmV4LWxvZ28nXHJcblx0fSxcclxuXHR7XHJcblx0XHRzcG9uc29ybmFtZTogJ0Nyb3dkZnVuZGluZ0xhd3llcnMubmV0IHwgVHJvd2JyaWRnZSBTaWRvdGkgTExQJyxcclxuXHRcdHNwb25zb3Jsb2dvOiAnY3Jvd2RmdW5kaW5nLWxhd3llcnMtbG9nbydcclxuXHR9LFxyXG5cdHtcclxuXHRcdHNwb25zb3JuYW1lOiAnQXZpc29uIFlvdW5nJyxcclxuXHRcdHNwb25zb3Jsb2dvOiAnYXZpc29uLXlvdW5nLWxvZ28nXHJcblx0fSxcclxuXHR7XHJcblx0XHRzcG9uc29ybmFtZTogJ0xleGlzIE5leGlzJyxcclxuXHRcdHNwb25zb3Jsb2dvOiAnbGV4aXMtbmV4aXMtbG9nbydcclxuXHR9LFxyXG5cdHtcclxuXHRcdHNwb25zb3JuYW1lOiAnRXNyaScsXHJcblx0XHRzcG9uc29ybG9nbzogJ2VzcmktbG9nbydcclxuXHR9LFxyXG5cdHtcclxuXHRcdHNwb25zb3JuYW1lOiAnQ1JFIFRlY2gnLFxyXG5cdFx0c3BvbnNvcmxvZ286ICdjcmUtdGVjaC1sb2dvJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0c3BvbnNvcm5hbWU6ICdTdGV3YXJ0IFRpdGxlJyxcclxuXHRcdHNwb25zb3Jsb2dvOiAnc3Rld2FydC10aXRsZS1sb2dvJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0c3BvbnNvcm5hbWU6ICdDb3JmYWMgSW50ZXJuYXRpb25hbCcsXHJcblx0XHRzcG9uc29ybG9nbzogJ2NvcmZhYy1sb2dvJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0c3BvbnNvcm5hbWU6ICdUaGUgTmV3cyBGdW5uZWwnLFxyXG5cdFx0c3BvbnNvcmxvZ286ICduZXdzLWZ1bm5lbC1sb2dvJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0c3BvbnNvcm5hbWU6ICdDb2xkd2VsbCBCYW5rZXIgQ29tbWVyY2lhbCcsXHJcblx0XHRzcG9uc29ybG9nbzogJ2NiYy1sb2dvJ1xyXG5cdH1cclxuXSIsIi8qR2VuZXJhdGUgTm9uLUtleW5vdGUgU3BlYWtlcnMqL1xyXG52YXIgc3BlYWtlcnNHb0hlcmUgPSAkKCcuc3BlYWtlcnMtd3JhcCcpO1xyXG52YXIgcGhvdG9EaXIgPSBcImltZy9zcGVha2Vycy9zcGVha2VyLVwiO1xyXG52YXIgZGlzcGxheU5hbWU7XHJcbnZhciBsYXN0Rmlyc3Q7XHJcbnZhciBmaXJzdExhc3Q7XHJcbnZhciBzcGVha1RpdGxlO1xyXG52YXIgc3BlYWtDb2w7XHJcbnZhciBzcGVha1BhbmVsO1xyXG52YXIgaGVhZHNob3Q7XHJcbnZhciB0aGlzU3BlYWtlcjtcclxudmFyIG5vUGljID0gXCJoZWFkc2hvdC1uby1waWMuanBnXCI7XHJcbnZhciBzcGVha2VyUG9kO1xyXG52YXIgaXNTcGVjaWFsO1xyXG52YXIgaGlnaENsYXNzO1xyXG5cclxuLy8gR2VuZXJhdGUgU3BlYWtlcnNcclxuZm9yICh2YXIgcHJvcCBpbiBzcGVha2Vycykge1xyXG4gIHRoaXNTcGVha2VyID0gc3BlYWtlcnNbcHJvcF07XHJcbiAgZGlzcGxheU5hbWUgPSB0aGlzU3BlYWtlci5kaXNwbGF5bmFtZTtcclxuICBsYXN0Rmlyc3QgPSB0aGlzU3BlYWtlci5sYXN0bmFtZSArIFwiLVwiICsgdGhpc1NwZWFrZXIuZmlyc3RuYW1lO1xyXG4gIGxhc3RGaXJzdExvd2VyID0gbGFzdEZpcnN0LnRvTG93ZXJDYXNlKCk7XHJcbiAgcGhvdG8gPSBwaG90b0RpciArIGxhc3RGaXJzdExvd2VyICsgXCIuanBnXCI7XHJcbiAgc3BlYWtUaXRsZSA9IHRoaXNTcGVha2VyLnRpdGxlO1xyXG4gIHNwZWFrQ28gPSB0aGlzU3BlYWtlci5jb21wYW55O1xyXG4gIHNwZWFrUGFuZWwgPSB0aGlzU3BlYWtlci5wYW5lbDtcclxuICBzcGVjaWFsID0gdGhpc1NwZWFrZXIuc3BlY2lhbDtcclxuICBpZiAoc3BlY2lhbCA9PT0gJycpIHtcclxuXHRcdGlzU3BlY2lhbCA9ICdoaWRkZW4nO1xyXG5cdFx0aGlnaENsYXNzPSAnJztcclxuXHR9IGVsc2Uge1xyXG5cdFx0aXNTcGVjaWFsID0gJ2hpZ2hsaWdodCc7XHJcblx0XHRoaWdoQ2xhc3M9ICdmZWF0dXJlJztcclxuXHR9XHJcbiAgc3BlYWtlclBvZCA9ICc8ZGl2IGNsYXNzPVwic3BlYWtlciAnK2hpZ2hDbGFzcysnXCIgaWQ9XCInK2xhc3RGaXJzdExvd2VyKydcIj48ZGl2IGNsYXNzPVwiaGVhZHNob3QgJytzcGVha1BhbmVsKydcIj48aW1nIHNyYz1cIicrcGhvdG8rJ1wiIGFsdD1cIlwiIG9uZXJyb3I9XCJpbWdFcnJvcih0aGlzKVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJpbmZvXCI+PGgzIGNsYXNzPVwiJytpc1NwZWNpYWwrJ1wiXCI+JytzcGVjaWFsKyc8L2gzPjxwIGNsYXNzPVwibmFtZVwiPicrZGlzcGxheU5hbWUrJzwvcD48cCBjbGFzcz1cInRpdGxlXCI+JytzcGVha1RpdGxlKycsICcrc3BlYWtDbysnPC9wPjwvZGl2PjwvZGl2PidcclxuICBzcGVha2Vyc0dvSGVyZS5hcHBlbmQoc3BlYWtlclBvZCk7XHJcbn1cclxuZnVuY3Rpb24gaW1nRXJyb3Ioc291cmNlKSB7XHJcblx0c291cmNlLnNyYyA9XHJcblx0XCJpbWcvbm8taGVhZHNob3QuanBnXCI7XHJcblx0c291cmNlLm9uZXJyb3IgPSBcIlwiO1xyXG5cdHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vLyBTcGVha2VyIEJpbyBNb2RhbHNcclxudmFyIG1vZGFsU3RhcnQgPSAnPGRpdiBjbGFzcz1cIm1vZGFsXCI+PGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnQgY2ZcIj48cCBjbGFzcz1cImNsb3NlLW1vZGFsXCI+eDwvcD4nO1xyXG52YXIgbW9kYWxFbmQgPSAnPC9kaXY+PC9kaXY+JztcclxudmFyIHNob3dNb2RhbCA9IGZ1bmN0aW9uKCl7JChcIi5tb2RhbFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiaW5pdGlhbFwiKX1cclxudmFyIGNsb3NlTW9kYWwgPSBmdW5jdGlvbigpeyQoJy5jbG9zZS1tb2RhbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcImRpdltjbGFzc149J21vZGFsJ11cIikuY3NzKCdkaXNwbGF5JywgJ25vbmUnKS5yZW1vdmUoKTt9KTt9XHJcbnZhciBjbG9zZU1vZGFsQnRuID0gJzxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXByaW1hcnkgY2xvc2UtbW9kYWxcIj5DbG9zZTwvYT4nXHJcbnZhciBrZXlub3RlID0gJCgnLmtleW5vdGUnKTtcclxudmFyIHNwZWFrZXIgPSAkKCcuc3BlYWtlcicpO1xyXG52YXIgc3BlYWtlckJpb05hbWU7XHJcbnZhciBzcGVha2VyQmlvO1xyXG52YXIgc3BlYWtlclBvcztcclxudmFyIHNwZWFrZXJCaW9UaXRsZTtcclxudmFyIHNwZWFrZXJCaW9Db21wYW55O1xyXG52YXIgc3BlYWtlckhlYWRzaG90O1xyXG52YXIgc3BlYWtlclBhbmVsO1xyXG5cclxuc3BlYWtlci5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdHNwZWFrZXJQb3MgPSAoJCh0aGlzKS5pbmRleCgnLnNwZWFrZXInKSk7XHJcblx0Y29uc29sZS5sb2coc3BlYWtlclBvcyk7XHJcblx0c3BlYWtlckJpb05hbWUgPSAkKHRoaXMpLmZpbmQoJy5uYW1lJykudGV4dCgpO1xyXG5cdHRoaXNTcGVha2VyID0gc3BlYWtlcnNbc3BlYWtlclBvc107XHJcblx0c3BlYWtlckJpbyA9ICc8cD4nK3RoaXNTcGVha2VyLmJpbzErJzwvcD48cD4nK3RoaXNTcGVha2VyLmJpbzIrJzwvcD4nO1xyXG5cdHNwZWFrZXJCaW9UaXRsZSA9IHRoaXNTcGVha2VyLnRpdGxlO1xyXG5cdHNwZWFrZXJCaW9Db21wYW55ID0gdGhpc1NwZWFrZXIuY29tcGFueTtcclxuXHRzcGVha2VyUGFuZWwgPSB0aGlzU3BlYWtlci5wYW5lbDtcclxuXHRzcGVha2VySGVhZHNob3QgPSAkKHRoaXMpLmZpbmQoJ2ltZycpLmF0dHIoJ3NyYycpO1xyXG5cdCRiLmFwcGVuZChtb2RhbFN0YXJ0Kyc8aDE+JytzcGVha2VyQmlvTmFtZSsnPC9oMT48aDI+JytzcGVha2VyQmlvVGl0bGUrJzxicj4nK3NwZWFrZXJCaW9Db21wYW55Kyc8L2gyPjxpbWcgc3JjPVwiJytzcGVha2VySGVhZHNob3QrJ1wiPjxwPicrc3BlYWtlckJpbysnPC9wPjxwIGNsYXNzPVwic3BlYWtlci1zZXNzaW9uXCI+PHN0cm9uZz5TZXNzaW9uOiA8L3N0cm9uZz4nK3NwZWFrZXJQYW5lbCsnPC9wPicrbW9kYWxFbmQpO1xyXG5cdHNob3dNb2RhbCgpO1xyXG5cdGNsb3NlTW9kYWwoKTtcclxufSk7XHJcblxyXG5cclxuLypHZW5lcmF0ZSBTZXNzaW9ucyovXHJcbnZhciBzZXNzaW9uc0dvSGVyZSA9ICQoJy50aGUtc2Vzc2lvbnMnKTtcclxudmFyIHRoaXNTZXNzaW9uO1xyXG52YXIgc2Vzc2lvbklkO1xyXG52YXIgc2Vzc2lvblRpdGxlO1xyXG52YXIgc2Vzc2lvbkRlc2M7XHJcbnZhciBzZXNzaW9uU3BvbnNvcjtcclxudmFyIHNlc3Npb25UaW1lO1xyXG52YXIgc2Vzc2lvbkRhdGVUaW1lO1xyXG52YXIgZXZlbnRQb2Q7XHJcbnZhciBpc1Nwb25zb3JlZDtcclxudmFyIGZlYXR1cmVkU2VzcztcclxuXHJcbmZvciAodmFyIHByb3AgaW4gc2Vzc2lvbnMpIHtcclxuICB0aGlzU2Vzc2lvbj0gc2Vzc2lvbnNbcHJvcF07XHJcbiAgc2Vzc2lvbklkID0gdGhpc1Nlc3Npb24uaWQ7XHJcblx0c2Vzc2lvblRpdGxlID0gdGhpc1Nlc3Npb24udGl0bGU7IFxyXG5cdHNlc3Npb25EZXNjID0gdGhpc1Nlc3Npb24uZGVzYztcclxuXHRzZXNzaW9uU3BvbnNvciA9IHRoaXNTZXNzaW9uLnNwb25zb3I7XHJcblx0c2Vzc2lvblRpbWUgPSB0aGlzU2Vzc2lvbi50aW1lO1xyXG5cdHNlc3Npb25EYXRlVGltZSA9IHRoaXNTZXNzaW9uLmRhdGV0aW1lO1xyXG5cdGZlYXR1cmVkU2VzcyA9IHRoaXNTZXNzaW9uLnNwZWNpYWxcclxuXHRpZiAoc2Vzc2lvblNwb25zb3IgID09PSAnJykge1xyXG5cdFx0aXNTcG9uc29yZWQgPSAnaGlkZGVuJ1xyXG5cdH0gZWxzZSB7XHJcblx0XHRpc1Nwb25zb3JlZCA9ICdzcG9uc29yZWQnXHJcblx0fVxyXG5cdGV2ZW50UG9kID0gJzxzZWN0aW9uIGNsYXNzPVwiZXZlbnQgY2ZcIiBpZD1cIicrc2Vzc2lvbklkKydcIj48ZGl2IGNsYXNzPVwibGVmdFwiPjxwPjx0aW1lIGRhdGV0aW1lPVwiJytzZXNzaW9uRGF0ZVRpbWUrJ1wiPicrc2Vzc2lvblRpbWUrJzwvdGltZT48L3A+PC9kaXY+PGRpdiBjbGFzcz1cInJpZ2h0XCI+PGg0PicrZmVhdHVyZWRTZXNzK3Nlc3Npb25UaXRsZSsnPC9oND48cD4nK3Nlc3Npb25EZXNjKyc8L3A+PHAgY2xhc3M9XCInK2lzU3BvbnNvcmVkKydcIj5TcG9uc29yZWQgYnkgJytzZXNzaW9uU3BvbnNvcisnPC9wPjwvZGl2Pjwvc2VjdGlvbj4nO1xyXG5cdHNlc3Npb25zR29IZXJlLmFwcGVuZChldmVudFBvZCk7XHJcbn1cclxuXHJcblxyXG5cclxuLypHZW5lcmF0ZSBTcG9uc29ycyovXHJcbnZhciBzcG9uc29yc0dvSGVyZSA9ICQoJy5zcG9uc29yLWxvZ29zJyk7XHJcbnZhciBzcG9uc29yUG9kO1xyXG52YXIgdGhpc1Nwb25zb3I7XHJcbnZhciBzcG9uc29yTmFtZTtcclxudmFyIHNwb25zb3JMb2dvO1xyXG5cclxuZm9yICh2YXIgcHJvcCBpbiBzcG9uc29ycykge1xyXG4gIHRoaXNTcG9uc29yID0gc3BvbnNvcnNbcHJvcF07XHJcbiAgc3BvbnNvck5hbWU9IHRoaXNTcG9uc29yLnNwb25zb3JuYW1lO1xyXG5cdHNwb25zb3JMb2dvID0gdGhpc1Nwb25zb3Iuc3BvbnNvcmxvZ287IFxyXG5cdHNwb25zb3JQb2QgPSAnPGltZyBzcmM9XCJpbWcvc3BvbnNvcnMvJytzcG9uc29yTG9nbysnLmpwZ1wiIGFsdD1cIicrc3BvbnNvck5hbWUrJ1wiLz4nXHJcblx0c3BvbnNvcnNHb0hlcmUuYXBwZW5kKHNwb25zb3JQb2QpO1xyXG59XHJcblxyXG4vLyBTaG93IHByaWNpbmcgZGV0YWlsc1xyXG52YXIgcHJpY2VzID0gJCgnLnByaWNpbmcnKTtcclxudmFyIHRpY2tldCA9ICQoJy50aWNrZXRzJyk7XHJcbnByaWNlcy5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICRiLmFwcGVuZChtb2RhbFN0YXJ0Kyc8aDE+UHJpY2luZzwvaDE+PGgyPk1haW4gQ29uZmVyZW5jZSB8IE9jdC4gMTY8L2gyPjxwPkNDSU0gTWVtYmVyOiAkMjk1IFVTRDxicj5Ob24tbWVtYmVyOiAkMzUwIFVTRDwvcD48aDI+UmVsYXRlZCBFdmVudHMgfCBPY3QuIDE1PC9oMj48dWw+PGxpPkdsb2JhbCBDb25uZWN0aW9ucyBMdW5jaGVvbiAoT2N0LiAxNSk6ICQ1MCBVU0Q8L2xpPjxsaT5PZmZpY2lhbCBPcGVuaW5nIFJlY2VwdGlvbiAoT2N0LiAxNSk6IEZyZWUsIGJ1dCByZWdpc3RyYXRpb24gaXMgcmVxdWlyZWQ8L2xpPjxsaT5DZW50cmFsIENhbmFkYSBDQ0lNIENoYXB0ZXIgTmV0d29ya2luZyBFdmVudCAoT2N0LiAxNSk6ICQ1MCBVU0Q8L2xpPjwvdWw+PHA+WW91IGNhbiByZWdpc3RlciBmb3IgdGhlIHJlbGF0ZWQgZXZlbnRzIGFzIHBhcnQgb2YgdGhlIG1haW4gY29uZmVyZW5jZSByZWdpc3RyYXRpb24gcHJvY2Vzcy48L3A+PGJyPjxwPjxhIGhyZWY9XCJodHRwczovL2NjaW0ucGVyc29uaWZ5Y2xvdWQuY29tL1BlcnNvbmlmeUVidXNpbmVzcy9EZWZhdWx0LmFzcHg/VGFiSUQ9MTYyMCZhbXA7cHJvZHVjdElkPTEzNTQzMTc3NVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+UmVnaXN0ZXIgTm93PC9hPjwvcD48YnI+Jyttb2RhbEVuZCk7XHJcblx0JCgnLm1vZGFsLWNvbnRlbnQnKS5hZGRDbGFzcygncHJpY2UtaW5mbycpO1xyXG5cdHNob3dNb2RhbCgpO1xyXG5cdGNsb3NlTW9kYWwoKTtcclxufSk7XHJcbiIsIi8vIElEIG9mIHRoZSBHb29nbGUgU3ByZWFkc2hlZXRcclxuIC8vIHZhciBzcHJlYWRzaGVldElEID0gXCIxZ0d2N2tWUE5OeVY3RWp4b3pLMldrUGEyaGZxb3R2VDBVWi1YM1ZNNHZxVVwiO1xyXG5cclxuIC8vIC8vIE1ha2Ugc3VyZSBpdCBpcyBwdWJsaWMgb3Igc2V0IHRvIEFueW9uZSB3aXRoIGxpbmsgY2FuIHZpZXcgXHJcbiAvLyB2YXIgdXJsID0gXCJodHRwczovL3NwcmVhZHNoZWV0cy5nb29nbGUuY29tL2ZlZWRzL2xpc3QvXCIgKyBzcHJlYWRzaGVldElEICsgXCIvb2Q2L3B1YmxpYy92YWx1ZXM/YWx0PWpzb25cIjtcclxuXHJcbiAvLyAkLmdldEpTT04odXJsLCBmdW5jdGlvbihkYXRhKSB7XHJcblxyXG4gLy8gIHZhciBlbnRyeSA9IGRhdGEuZmVlZC5lbnRyeTtcclxuXHJcbiAvLyAgJChlbnRyeSkuZWFjaChmdW5jdGlvbigpe1xyXG4gLy8gICAgLy8gQ29sdW1uIG5hbWVzIGFyZSBuYW1lLCBhZ2UsIGV0Yy5cclxuIC8vICAgICQoJy5yZXN1bHRzJykucHJlcGVuZCgnPGgyPicrdGhpcy5nc3gkbmFtZS4kdCsnPC9oMj48cD4nK3RoaXMuZ3N4JGFnZS4kdCsnPC9wPicpO1xyXG4gLy8gIH0pO1xyXG5cclxuIC8vIH0pOyIsInZhciAkdyA9ICQod2luZG93KTtcclxudmFyICRiPSAkKCdib2R5Jyk7XHJcbnZhciAkdGhpcyA9ICQodGhpcyk7XHJcbnZhciBtZW51ID0gJCgnaGVhZGVyIC5idXJnZXInKTtcclxudmFyIG5hdiA9ICQoJ2hlYWRlciBuYXYnKTtcclxudmFyIG5hdkEgPSAkKCdib2R5PmhlYWRlciBuYXYgYScpO1xyXG52YXIgbmF2QnRuID0gJCgnYm9keT5oZWFkZXIgbmF2IHVsIGxpIC5idG4nKVxyXG52YXIgaGVhZGVyID0gJCgnYm9keT5oZWFkZXInKTtcclxudmFyIHNwZWFrZXIgPSAkKCcuc3BlYWtlcicpO1xyXG52YXIgaGVhZGVyTG9nbyA9ICQoJ2hlYWRlciAubG9nbycpO1xyXG5cclxuLy8gSGlkZXMgb3IgU2hvd3MgbmF2IGluIG1vYmlsZVxyXG5tZW51Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0bmF2LnRvZ2dsZUNsYXNzKCd1bmhpZGUtbmF2Jyk7XHJcbiAgICBtZW51LnRvZ2dsZUNsYXNzKCdtZW51LWNsb3NlJyk7XHJcbn0pO1xyXG5cclxuLy9NYWtlIGhlYWRlciBnZXQgY29tcGFjdCBvbiBzY3JvbGxcclxuLy9XYXRjaCB0aGUgc2Nyb2xsaW5nIGluIHRoZSBicm93c2VyLCBhbmQgZG8gdGhpcyBmdW5jdGlvblxyXG52YXIgYWRqdXN0TmF2ID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuIC8vIElmIHVzZXIgaGFzIHNjcm9sbGVkIHBhc3QgMzAwcHhcclxuICBpZiAoJHRoaXMuc2Nyb2xsVG9wKCkgPiAzMDAgJiYgJHcud2lkdGgoKSA+IDExNDUpIHtcclxuICAgIGhlYWRlci5jc3Moe1xyXG4gICAgICBoZWlnaHQ6ICc0MHB4JyxcclxuICAgICAgYmFja2dyb3VuZFNpemU6ICc5MHB4J1xyXG4gICAgfSk7XHJcbiAgICBoZWFkZXJMb2dvLmNzcyh7XHJcbiAgICAgIG1heFdpZHRoOiAnMjAwcHgnLFxyXG4gICAgICBtYXJnaW5Ub3A6ICc3cHgnXHJcbiAgICB9KTtcclxuICAgIG1lbnUuYWRkQ2xhc3MoJ2F1dG9XSCcpO1xyXG4gICAgbmF2LmFkZENsYXNzKCdtYXJnaW4tbmF2LXNtYWxsLWhlYWRpbmcnKTtcclxuICAgIG5hdkEuYWRkQ2xhc3MoJ25hdi1pdGVtcy1uZXctcGFkZGluZycpO1xyXG4gICAgbmF2QnRuLmFkZENsYXNzKCdyZWdpc3Rlci1idG4tc21hbGwtaGVhZGluZycpO1xyXG4gIH0gZWxzZSBpZiAoJHRoaXMuc2Nyb2xsVG9wKCkgPD0gMzAwICYmICR3LndpZHRoKCkgPiAxMTQ1KSB7XHJcbiAgIGhlYWRlci5jc3Moe1xyXG4gICAgICBoZWlnaHQ6ICc4MHB4JyxcclxuICAgICAgYmFja2dyb3VuZFNpemU6ICcxNzBweCdcclxuICAgIH0pO1xyXG4gICBoZWFkZXJMb2dvLmNzcyh7XHJcbiAgICAgIG1heFdpZHRoOiAnMzAwcHgnLFxyXG4gICAgICBtYXJnaW5Ub3A6ICcyMHB4J1xyXG4gICAgfSk7XHJcbiAgIG1lbnUucmVtb3ZlQ2xhc3MoJ2F1dG9XSCcpO1xyXG4gICBuYXYucmVtb3ZlQ2xhc3MoJ21hcmdpbi1uYXYtc21hbGwtaGVhZGluZycpO1xyXG4gICBuYXZBLnJlbW92ZUNsYXNzKCduYXYtaXRlbXMtbmV3LXBhZGRpbmcnKTtcclxuICAgbmF2QnRuLnJlbW92ZUNsYXNzKCdyZWdpc3Rlci1idG4tc21hbGwtaGVhZGluZycpO1xyXG4gIH0gZWxzZSBpZiAoJHRoaXMuc2Nyb2xsVG9wKCkgPD0gMzAwICYmICR3LndpZHRoKCkgPD0gMTE0NSkge1xyXG4gICAgaGVhZGVyLmNzcyh7XHJcbiAgICAgIGhlaWdodDogJzcwcHgnLFxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJzEzMHB4J1xyXG4gICAgfSk7XHJcbiAgICBoZWFkZXJMb2dvLmNzcyh7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIG1heFdpZHRoOiAnMzQwcHgnLFxyXG4gICAgICBtYXJnaW5Ub3A6ICcxMHB4J1xyXG4gICAgfSk7XHJcbiAgICBtZW51LmNzcyh7XHJcbiAgICAgIHdpZHRoOiAnNTBweCcsXHJcbiAgICAgIGhlaWdodDogJzUwcHgnLFxyXG4gICAgICBtYXJnaW5Ub3A6ICcxMHB4J1xyXG4gICAgfSk7XHJcbiAgICBuYXYuY3NzKCd0b3AnLCAnNzBweCcpO1xyXG4gICAgbmF2LnJlbW92ZUNsYXNzKCdtYXJnaW4tbmF2LXNtYWxsLWhlYWRpbmcnKTtcclxuICAgIG5hdkEucmVtb3ZlQ2xhc3MoJ25hdi1pdGVtcy1uZXctcGFkZGluZycpO1xyXG4gICAgbmF2QnRuLnJlbW92ZUNsYXNzKCdyZWdpc3Rlci1idG4tc21hbGwtaGVhZGluZycpO1xyXG4gIH0gZWxzZSBpZiAoJHRoaXMuc2Nyb2xsVG9wKCkgPiAzMDAgJiYgJHcud2lkdGgoKSA8PSAxMTQ1KSB7XHJcbiAgICBoZWFkZXIuY3NzKHtcclxuICAgICAgaGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiAnOTBweCdcclxuICAgIH0pO1xyXG4gICAgaGVhZGVyTG9nby5jc3Moe1xyXG4gICAgICB3aWR0aDogJzI3NXB4JyxcclxuICAgICAgbWFyZ2luVG9wOiAnNnB4J1xyXG4gICAgfSk7XHJcbiAgICBtZW51LmNzcyh7XHJcbiAgICAgIHdpZHRoOiAnNDBweCcsXHJcbiAgICAgIGhlaWdodDogJzQwcHgnLFxyXG4gICAgICBtYXJnaW5Ub3A6ICc1cHgnXHJcbiAgICB9KTtcclxuICAgIG5hdi5jc3MoJ3RvcCcsICc1MHB4Jyk7XHJcbiAgICBuYXYucmVtb3ZlQ2xhc3MoJ21hcmdpbi1uYXYtc21hbGwtaGVhZGluZycpO1xyXG4gICAgbmF2QS5yZW1vdmVDbGFzcygnbmF2LWl0ZW1zLW5ldy1wYWRkaW5nJyk7XHJcbiAgICBuYXZCdG4ucmVtb3ZlQ2xhc3MoJ3JlZ2lzdGVyLWJ0bi1zbWFsbC1oZWFkaW5nJyk7XHJcbiAgfVxyXG4gIC8vIGVsc2UgaWYgKCR3LndpZHRoKCkgPD0gNDcxKSB7XHJcbiAgLy8gICBjb25zb2xlLmxvZygndGhpcycpO1xyXG4gIC8vICAgaGVhZGVyLmNzcyh7XHJcbiAgLy8gICAgIGhlaWdodDogJzQwcHgnLFxyXG4gIC8vICAgICBiYWNrZ3JvdW5kU2l6ZTogJzkwcHgnXHJcbiAgLy8gICB9KTtcclxuICAvLyAgIGhlYWRlckxvZ28uY3NzKHtcclxuICAvLyAgICAgd2lkdGg6ICcyNjVweCcsXHJcbiAgLy8gICAgIG1hcmdpblRvcDogJzVweCdcclxuICAvLyAgIH0pO1xyXG4gIC8vICAgbWVudS5jc3Moe1xyXG4gIC8vICAgICB3aWR0aDogJzUwcHgnLFxyXG4gIC8vICAgICBoZWlnaHQ6ICc1MHB4JyxcclxuICAvLyAgICAgbWFyZ2luVG9wOiAnMTBweCdcclxuICAvLyAgIH0pO1xyXG4gIC8vICAgbmF2LmNzcygndG9wJywgJzQwcHgnKTtcclxuICAvLyAgIG5hdi5yZW1vdmVDbGFzcygnbWFyZ2luLW5hdi1zbWFsbC1oZWFkaW5nJyk7XHJcbiAgLy8gICBuYXZBLnJlbW92ZUNsYXNzKCduYXYtaXRlbXMtbmV3LXBhZGRpbmcnKTtcclxuICAvLyAgIG5hdkJ0bi5yZW1vdmVDbGFzcygncmVnaXN0ZXItYnRuLXNtYWxsLWhlYWRpbmcnKTtcclxuICAvLyB9XHJcbn1cclxuXHJcbiR3LnNjcm9sbChmdW5jdGlvbigpe1xyXG4gIGFkanVzdE5hdigpO1xyXG59KTtcclxuJHcucmVzaXplKGZ1bmN0aW9uKCl7XHJcbiAgYWRqdXN0TmF2KCk7XHJcbiAgaWYgKCR3LndpZHRoKCkgPD0gMTE0NSkge1xyXG4gICBuYXYucmVtb3ZlQ2xhc3MoJ21hcmdpbi1uYXYtc21hbGwtaGVhZGluZycpO1xyXG4gICBuYXZBLnJlbW92ZUNsYXNzKCduYXYtaXRlbXMtbmV3LXBhZGRpbmcnKTtcclxuICAgbmF2QnRuLnJlbW92ZUNsYXNzKCdyZWdpc3Rlci1idG4tc21hbGwtaGVhZGluZycpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vL0lmIG1vYmlsZSwgaGlkZSBuYXYgb24gbWVudSBpdGVtIGNsaWNrXHJcbiQoJ25hdiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgaWYgKCR3LndpZHRoKCkgPCAxMTQ2KSB7XHJcbiAgICBuYXYudG9nZ2xlQ2xhc3MoJ3VuaGlkZS1uYXYnKTtcclxuICAgIG1lbnUudG9nZ2xlQ2xhc3MoJ21lbnUtY2xvc2UnKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy9TbW9vdGggU2Nyb2xsaW5nOiBodHRwczovL2Nzcy10cmlja3MuY29tL3NuaXBwZXRzL2pxdWVyeS9zbW9vdGgtc2Nyb2xsaW5nL1xyXG4vLyBTZWxlY3QgYWxsIGxpbmtzIHdpdGggaGFzaGVzXHJcbiQoJ2FbaHJlZio9XCIjXCJdJylcclxuICAvLyBSZW1vdmUgbGlua3MgdGhhdCBkb24ndCBhY3R1YWxseSBsaW5rIHRvIGFueXRoaW5nXHJcbiAgLm5vdCgnW2hyZWY9XCIjXCJdJylcclxuICAubm90KCdbaHJlZj1cIiMwXCJdJylcclxuICAuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIC8vIE9uLXBhZ2UgbGlua3NcclxuICAgIGlmIChcclxuICAgICAgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgXHJcbiAgICAgICYmIFxyXG4gICAgICBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lXHJcbiAgICApIHtcclxuICAgICAgLy8gRmlndXJlIG91dCBlbGVtZW50IHRvIHNjcm9sbCB0b1xyXG4gICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xyXG4gICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoID8gdGFyZ2V0IDogJCgnW25hbWU9JyArIHRoaXMuaGFzaC5zbGljZSgxKSArICddJyk7XHJcbiAgICAgIC8vIERvZXMgYSBzY3JvbGwgdGFyZ2V0IGV4aXN0P1xyXG4gICAgICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xyXG4gICAgICAgIC8vIE9ubHkgcHJldmVudCBkZWZhdWx0IGlmIGFuaW1hdGlvbiBpcyBhY3R1YWxseSBnb25uYSBoYXBwZW5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcFxyXG4gICAgICAgIH0sIDEwMDAsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgLy8gQ2FsbGJhY2sgYWZ0ZXIgYW5pbWF0aW9uXHJcbiAgICAgICAgICAvLyBNdXN0IGNoYW5nZSBmb2N1cyFcclxuICAgICAgICAgIHZhciAkdGFyZ2V0ID0gJCh0YXJnZXQpO1xyXG4gICAgICAgICAgJHRhcmdldC5mb2N1cygpO1xyXG4gICAgICAgICAgaWYgKCR0YXJnZXQuaXMoXCI6Zm9jdXNcIikpIHsgLy8gQ2hlY2tpbmcgaWYgdGhlIHRhcmdldCB3YXMgZm9jdXNlZFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkdGFyZ2V0LmF0dHIoJ3RhYmluZGV4JywnLTEnKTsgLy8gQWRkaW5nIHRhYmluZGV4IGZvciBlbGVtZW50cyBub3QgZm9jdXNhYmxlXHJcbiAgICAgICAgICAgICR0YXJnZXQuZm9jdXMoKTsgLy8gU2V0IGZvY3VzIGFnYWluXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiJdfQ==