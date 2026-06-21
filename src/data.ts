import { Challenge, Icon, Partner, SchoolEvent } from "./types";

export const CHALLENGES: Challenge[] = [
  {
    id: 1,
    week: "Week 1",
    title: "STEAM Intro: Spark the Mind",
    category: "Intro",
    categoryColor: "red",
    teaser: "Ignite curiosities with a sampler of physics, engineering, and digital wizardry.",
    descriptionParagraphs: [
      "Welcome to the grand kick-off of STEAMFEST 2026! This premiere session is designed to break the ice with the wonderful world of science, technology, engineering, arts, and math. Kids will experience a rotating sampler of hands-on activities that demonstrate how these five distinct fields intersect to solve real-world problems.",
      "Guided by Coach Jacky Cheng, kids will establish their 'Festival Inventor Journal' which they'll use throughout the next 16 weeks, earn their first collectible STEAM stamp, and get safety-certified in our prototyping zone."
    ],
    activities: [
      "The Floating Globe: Build a simple electromagnetic balancer using coils and copper wires.",
      "Pop-Art Science: Combine vinegar, food dye, and heavy-density wax to create temporary visual light shows.",
      "Chain Reaction Basics: Set up a mini Rube Goldberg element that triggers a digital countdown camera."
    ],
    guestIconId: "coach-jacky-cheng"
  },
  {
    id: 2,
    week: "Week 2",
    title: "Science: Chemical Reaction Kinetics",
    category: "Science",
    categoryColor: "teal",
    teaser: "Watch states of matter shift before your eyes in a safe chemical lab.",
    descriptionParagraphs: [
      "Prepare your test tubes and goggles! Science Week is all about looking at chemical compounds, thermal releases, and state changes. Kids will discover how natural raw ingredients can yield breathtaking, energy-filled reactions when manipulated under different temperatures.",
      "Under the mentorship of Dr. Amalina Bakri, this week shifts focus from static book-learning to dynamic, real-world chemical discoveries, inspiring kids to think like molecular biologists."
    ],
    activities: [
      "Polymorphic Slime: Formulate synthetic cross-linked polymers with varying shear properties.",
      "Dry-Ice Fog Volcanoes: Explore thermal sublimation and vapor gas density dynamics safely.",
      "The pH Rainbow Spectrum: Extract natural indicators from red cabbage to test everyday acidic and alkaline substances."
    ],
    guestIconId: "dr-amalina-bakri"
  },
  {
    id: 3,
    week: "Week 3",
    title: "Coding: Architectural Thinking",
    category: "Coding",
    categoryColor: "navy",
    teaser: "Translate designs into solid lines of code using logic paths.",
    descriptionParagraphs: [
      "Coding isn't just about typing text into dark screens; it's about architectural thinking, logical pathways, and system communication. This week introduces kids to block-based logic sequences that command robots, trigger sounds, and construct algorithmic art.",
      "Tech entrepreneur Vivy Yusof inspires kids to see code as a medium to build platforms, business solutions, and express their modern digital creativity."
    ],
    activities: [
      "Loop-de-Loop Dancing: Program a digital character to perform custom dances using nested condition scripts.",
      "The Maze Solver: Guide a robotic cursor through virtual obstacles using sequential instructions.",
      "Sound Wave Builder: Use block logic to compose a 4-bar background track with visual equalizer feedback."
    ],
    guestIconId: "vivy-yusof"
  },
  {
    id: 4,
    week: "Week 4",
    title: "Engineering: Structural Strength",
    category: "Engineering",
    categoryColor: "amber",
    teaser: "Create ultra-strong miniature bridges and towers from simple geometric designs.",
    descriptionParagraphs: [
      "Why do skyscrapers stand so tall against the wind, and how do massive suspension bridges hold thousands of vehicles? Week 4 answers these questions through spatial construction mechanics and geometric physics.",
      "Karl Ho shares his years of technical structural mastery to show kids how simple toothpicks, modular blocks, and wooden strips can hold up to 50 times their own weight if configured inside optimized triangular trusses."
    ],
    activities: [
      "The 1-Meter Tower: Engineer the tallest standard card tower capable of supporting a tennis ball for 15 seconds.",
      "Truss Arch Bridges: Construct an interlocking wooden bridge without adhesives using compression physics.",
      "The Earth Tremor Test: Place structures on our mechanical shake-table to simulate a seismic wave."
    ],
    guestIconId: "karl-ho"
  },
  {
    id: 5,
    week: "Week 5",
    title: "Arts: Kinetic Sculptures",
    category: "Arts",
    categoryColor: "red",
    teaser: "Blend motion, wire, and canvas to construct art that moves with wind and weight.",
    descriptionParagraphs: [
      "Art is dynamic! Week 5 challenges students to abandon flat canvases and explore three-dimensional movement. Kids will craft beautiful sculptures that rely on delicate wind currents, gravity shifts, and mechanical joints.",
      "Academy Award winner Michelle Yeoh inspires children to find high emotional expression, physical storytelling, and kinetic balance in their mechanical artistic projects."
    ],
    activities: [
      "Wind Balancing Mobiles: Construct a suspended kinetic structure inspired by natural elements.",
      "Paper-Automata Puppetry: Create a cam-and-crank paper mechanism that lifts and lowers cardboard figures.",
      "The Color Splash Wheel: Utilize a spinning centrifuge to scatter acrylic paint drops across canvas."
    ],
    guestIconId: "michelle-yeoh"
  },
  {
    id: 6,
    week: "Week 6",
    title: "Math/Mindset: The Golden Symmetry",
    category: "Math",
    categoryColor: "teal",
    teaser: "Decrypt secrets of the Fibonacci sequence and geometric patterns in nature.",
    descriptionParagraphs: [
      "Math is the universal blueprint of life. This week, we throw away dry equations and focus on natural symmetry, fractal patterns, and the Golden Ratio. Kids will discover how mathematical ratios dictate flower petals, seashell curves, and sports trajectories.",
      "Olympic legend Lee Chong Wei shares his winning mindset, detailing how trajectory math, split-second speed ratios, and strategic grit coalesce into gold-medal athletic perfection."
    ],
    activities: [
      "The Shell Spiral: Map out the Golden Spiral using simple compass tools, ruler lines, and graph grids.",
      "Shuttlecock Aerodynamics: Measure the trajectory arc and landing precision of wind-loaded sports projectiles.",
      "Symmetry Mandalas: Construct complicated multi-axis geometry paintings using wooden stencils."
    ],
    guestIconId: "lee-chong-wei"
  },
  {
    id: 7,
    week: "Week 7",
    title: "Energy: Harvesting Solar & Wind",
    category: "Energy",
    categoryColor: "navy",
    teaser: "Catch sunlight and breeze to generate clean, measurable electrical power.",
    descriptionParagraphs: [
      "How do we unlock green energy from the invisible elements around us? Kids will delve into solar cells, electromagnetic turbines, and micro-generators. We'll capture current waves and feed them into low-wattage LED lights.",
      "Eco-pioneer Joe Fang works directly with students, offering insights on local environmental tech and how kids can turn wind currents into clean charge circuits."
    ],
    activities: [
      "Micro-Propeller Generators: Wire a small plastic rotor to a voltmeter and measure natural breeze output.",
      "Solar Cell Racers: Fabricate a lightweight toy vehicle propelled entirely by a miniature solar cell under light beams.",
      "Hydro-Wheel Dynamometer: Test water pressure and paddle angles to generate standard circuit illumination."
    ],
    guestIconId: "joe-fang"
  },
  {
    id: 8,
    week: "Week 8",
    title: "Robotics: Cognitive Motion",
    category: "Robotics",
    categoryColor: "amber",
    teaser: "Program robot rovers to navigate pathways and respond to proximity sensors.",
    descriptionParagraphs: [
      "Welcome to the middle of the festival! This is our flagship Robotics hub. Children will study proximity sensors, servo motors, and basic microcontroller command logic to give physical machines a simulated brain.",
      "Powered by MRANTI, Malaysia's leading technology innovation alliance, children are exposed to actual state-of-the-art agricultural and industrial robotics, programming machines to solve navigation challenges."
    ],
    activities: [
      "The Infrared Track Follower: Configure photodiode sensors pointing down to follow a high-contrast black line track.",
      "Ultrasonic Stop-Check: Code a vehicle to brake exactly 5 centimeters in front of a block obstacle.",
      "Mechanical Claw Claw-bot: Re-assemble gear configurations to increase lifting-torque for heavy items."
    ],
    guestIconId: "mranti"
  },
  {
    id: 9,
    week: "Week 9",
    title: "Machines: Simple Gear Ratios",
    category: "Machines",
    categoryColor: "red",
    teaser: "Master rotational speed, torque changes, and leverage pulleys.",
    descriptionParagraphs: [
      "Before computer chips, we had physical mechanisms that multiplied force and moved mountains. Week 9 is all about gears, levers, pulleys, and structural friction. Kids will see how trade-offs between distance and force can make a child lift an adult's weight.",
      "Structural engineering master Karl Ho returns to introduce gears and machinery, demonstrating how industrial cranes transfer physical rotational energy across cables."
    ],
    activities: [
      "The Heavy Lifter Block: Build a triple-pulley block that cuts the lifting effort of heavy bricks by 60%.",
      "Gear train Speed Shifter: Interlock 12-tooth, 24-tooth, and 36-tooth gears to trade speed for climbing torque.",
      "Catapult Calibrator: Adjust the lever fulcrum point to maximize the velocity of light clay balls."
    ],
    guestIconId: "karl-ho-machines"
  },
  {
    id: 10,
    week: "Week 10",
    title: "Media: Creative Digital Director",
    category: "Media",
    categoryColor: "teal",
    teaser: "Capture, edit, and orchestrate stop-motion animations with green-screen visuals.",
    descriptionParagraphs: [
      "In the age of social media, digital expression is a powerful tool to tell beautiful stories. Kids will jump into digital editing suites, microphones, chroma-key backdrops, and multi-frame animation software.",
      "Creative force Namewee inspires the next generation of youth directors. He'll share how to write catchy stories, sync sound effects, and construct rich, expressive audio-visual concepts on screen."
    ],
    activities: [
      "Stop-Motion Lego Epic: Produce a 10-second clay or Lego animation frame-by-frame with high-fidelity sound.",
      "Chroma-key Escape: Key out green-screen backdrops to place kids in virtual, active volcano settings.",
      "Foley Sound Stage: Capture physical sound effects—like coconut shells for horses—to match cinema visuals."
    ],
    guestIconId: "namewee"
  },
  {
    id: 11,
    week: "Week 11",
    title: "Data: Visualizing Patterns",
    category: "Data",
    categoryColor: "navy",
    teaser: "Collect real-time data from the crowd and render charts.",
    descriptionParagraphs: [
      "Data is everywhere, but how do we decode it? Kids learn how to extract observations, convert them into mathematical points, and render beautiful visual art that highlights human habits, crowd choices, or natural frequencies.",
      "Leading academic Dr. Eva Wong helps children discover the elegance of data, teaching them that statistics are powerful stories about how we live, eat, learn, and play."
    ],
    activities: [
      "The Festival Food Radar: Poll 100 visitors about their snack preferences and map custom radar charts on cardboards.",
      "M&M Candy Probability: Calculate the distribution variance of color ratios inside snack bags.",
      "Color-coded Pixel Maps: Translate local sound intensity data points onto multi-colored light matrices on screen."
    ],
    guestIconId: "dr-eva-wong"
  },
  {
    id: 12,
    week: "Week 12",
    title: "Human Body: Electrical Muscles",
    category: "Human Body",
    categoryColor: "amber",
    teaser: "Examine biomechanical pumps and electrical heart rhythms.",
    descriptionParagraphs: [
      "Our biological bodies are the most complex machines on earth! This week transitions kids into biomedical engineers, studying how our neural pathways deliver minute electrical current spikes to actuate muscle fiber contraction.",
      "Supported by KPJ Healthcare, kids get hands-on with realistic anatomical sensors, diagnostic stethoscopes, and lung capacity meters to map their personal vital metrics."
    ],
    activities: [
      "Electro-Bio Logger: Fasten surface sensor pads to watch actual EMG nerve contractions flicker on oscilloscopes.",
      "Syringe Lung Dynamics: Prototype a pair of functional, balloon-based model lungs using clear plastic bottles and tubing.",
      "The Heart-Pump Valve: Build a working plastic heart valve simulator demonstrating absolute fluid transport controls."
    ],
    guestIconId: "kpj-healthcare"
  },
  {
    id: 13,
    week: "Week 13",
    title: "AI: Training neural models",
    category: "AI",
    categoryColor: "red",
    teaser: "Deconstruct artificial intelligence by teaching camera models to recognize gestures.",
    descriptionParagraphs: [
      "Artificial Intelligence is changing the future of our planet, but how does an AI think? Kids demystify machines by constructing gesture-recognition programs, labeling dataset pictures, and training simple vision networks.",
      "Brought to life by MDEC, Malaysia's Digital Economy authority, kids will learn that AI is a tool trained by logical instructions, teaching them to lead the future with confidence rather than fear."
    ],
    activities: [
      "The Quick Classifier: Capture 50 snapshots of hand flags and train a local model to distinguish them instantly.",
      "Semantic Maze Walk: Guide a virtual explorer using vocal command triggers mapped into an AI model.",
      "The Pix-Art Generator: Use generative prompt constraints to construct virtual local architectural marvels."
    ],
    guestIconId: "mdec"
  },
  {
    id: 14,
    week: "Week 14",
    title: "Sustainability: Ecosystems",
    category: "Sustainability",
    categoryColor: "teal",
    teaser: "Construct micro-biomes and test water filtration designs from raw soil, moss, and gravel.",
    descriptionParagraphs: [
      "As we approach the end of the festival, we address the ultimate engineering challenge: saving our planet. Kids will study closed-loop biomes, natural carbon cycles, water purification systems, and bio-degradable manufacturing processes.",
      "Collaborating with WWF Malaysia, children explore local rainforest conservation models and build physical, functional water filters using natural layers of gravel, sand, activated carbon, and fine moss."
    ],
    activities: [
      "Clay Filtration Columns: Layer coarse and fine elements in custom funnel structures to filter dirty creek water.",
      "The Jar Biome: Assemble self-sustaining terrariums containing living sheet moss, red clay, and springtail bugs.",
      "Starch Prototyping: Melt corn-starch formulations into fully biodegradable spoons, plates, and action figures."
    ],
    guestIconId: "wwf-malaysia"
  },
  {
    id: 15,
    week: "Week 15",
    title: "Project: Invention Lab Integration",
    category: "Project",
    categoryColor: "navy",
    teaser: "Combine everything you learned into a single, polished physical invention layout.",
    descriptionParagraphs: [
      "Our penultimate week is a pure invention lab! No strict theme—kids review their journal, choose their favourite modules from Weeks 1-14, and construct their capstone STEAM project layout. We provide the glue, microchips, gears, and wires.",
      "Joe Fang returns to support this creative launchpad, walking through design-thinking patterns that help kids polish individual project layouts, ready for public showcases."
    ],
    activities: [
      "Inventor Draft boards: Sketch structural schematics on architectural rolls with functional inputs.",
      "Solderless Wire Hubs: Interconnect solar cells, toggle gates, and physical alarms onto clean laser-cut plates.",
      "The Prototyping Testbed: Stress-test capstones across simulated wind grids, vibration, and impact loads."
    ],
    guestIconId: "joe-fang-project"
  },
  {
    id: 16,
    week: "Week 16",
    title: "Showcase: Grand Expo Stage",
    category: "Showcase",
    categoryColor: "amber",
    teaser: "Present your finished build to judges, family, and our Malaysian Icon panel.",
    descriptionParagraphs: [
      "The grand finale of STEAMFEST 2026! Week 16 is our prestigious, public exhibition day. Kids set up their invention booths, presenting their capstones to parents, public visitors, and a panel of esteemed judges.",
      "Organised by Genius Minds, this showcase hosted by Coach Jacky Cheng rewards student grit, with every child receiving a gold commemorative medal, official certification, and feedback on their creations."
    ],
    activities: [
      "The Expo Booth: Decorate your display poster board and present live functional demonstrations.",
      "The Expert Panel Q&A: Explain your engineering choices and loop designs to our guest creators.",
      "Celebration Ceremony: March across the main stage to receive graduation badges under confettis!"
    ],
    guestIconId: "coach-jacky-cheng-panel"
  }
];

export const ICONS: Icon[] = [
  {
    id: "coach-jacky-cheng",
    name: "Coach Jacky Cheng",
    role: "Lead STEAM Instructor & Festival Host",
    category: "STEAM Intro",
    isHeadliner: false,
    isOrg: false,
    bioParagraphs: [
      "Coach Jacky Cheng is a veteran STEM curriculum designer in Southeast Asia and the technical heartbeat of Genius Minds. With over 12 years of hands-on classroom coaching experience, Jacky has trained thousands of educators and developed award-winning robotics kits used across schools in Malaysia.",
      "At STEAMFest 2026, Jacky acts as the ultimate host and mentor, organizing the weekly challenges to ensure safety and max engagement, while leading the Week 1 Kick-Off and Week 16 Finals."
    ],
    achievements: [
      "Founder of the Genius Minds Inventor Syllabus",
      "Trainer of over 5,000 students in robotics",
      "Awarded Malaysian Youth Educator of the Year in 2023"
    ],
    weekId: 1,
    imagePlaceholder: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "dr-amalina-bakri",
    name: "Dr. Amalina Bakri",
    role: "Renowned Surgeon & Women-in-Stem Advocate",
    category: "Science",
    isHeadliner: false,
    isOrg: false,
    bioParagraphs: [
      "Dr. Amalina Bakri is a highly respected clinical surgeon and health advocate based in London. Widely celebrated in Malaysia for her academic excellence and surgical expertise, Dr. Amalina dedicates her time to lecturing children on healthy biological systems and medical biotechnology pathways.",
      "Dr. Amalina will be returning to Malaysia to lead our Science Week, helping children understand the scientific method, clinical trials, and biological chemistry through engaging spatial play experiments."
    ],
    achievements: [
      "Recognized clinical surgery fellow in the UK",
      "Renowned advocate with 1M+ followers on science communication",
      "Top SPM Scorer in Malaysian history"
    ],
    weekId: 2,
    imagePlaceholder: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "vivy-yusof",
    name: "Vivy Yusof",
    role: "Co-founder of FV Group & E-Commerce Tech Trailblazer",
    category: "Coding",
    isHeadliner: false,
    isOrg: false,
    bioParagraphs: [
      "Vivy Yusof is an e-commerce pioneer, tech founder, and prominent writer in Malaysia. She co-founded FashionValet and dUCK, scaling complex backend digital transactional portals to accommodate millions of global shoppers, thereby demonstrating the potential of engineering in modern lifestyle ventures.",
      "Vivy joins us for Coding Week, showing kids that coding is not just for math labs—it is a powerful tool to build brands, direct operations, structure databases, and spark business ideas."
    ],
    achievements: [
      "Co-founded one of SE Asia's premier digital lifestyle portal systems",
      "Listed in Forbes Under 30 Asia",
      "Lead voice inspiring Malaysian youth towards digital commerce startup models"
    ],
    weekId: 3,
    imagePlaceholder: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "karl-ho",
    name: "Karl Ho",
    role: "Senior Civil Structural Engineer",
    category: "Engineering",
    isHeadliner: false,
    isOrg: false,
    bioParagraphs: [
      "Karl Ho is a heavy-industry, multi-decade structural engineer who has spent 25 years designing skyscrapers, transport tunnels, and deep-river bridges across East Asia. He is renowned for translating complex, wind-loaded physical formulas into structures that withstand seismic shifts.",
      "Karl hosts Week 4 to show children how simple wooden bridges, columns, and triangles utilize tension, shear force, and down-drag weight to support incredible physical loads safely."
    ],
    achievements: [
      "Lead consultant engineer on several landmark high-rises in Kuala Lumpur",
      "Authored children's engineering guide sheets distributed globally",
      "Voted Lead Educator by the Malaysian Institution of Civil Engineers"
    ],
    weekId: 4,
    imagePlaceholder: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "michelle-yeoh",
    name: "Michelle Yeoh",
    role: "Academy Award-Winning Actress & Arts Visionary",
    category: "Arts",
    isHeadliner: true,
    isOrg: false,
    bioParagraphs: [
      "Michelle Yeoh is an Academy Award-winning actress, producer, and UN Goodwill Ambassador from Ipoh, Malaysia. Renowned worldwide for her highly kinetic physical martial arts moves and deep dramatic range, she acts as a true global icon representing high-level artistic discipline.",
      "As our Week 5 Arts Headliner, Michelle shares how movement, spatial flow, and structural physics merge directly into visual and performing arts, showing young minds that creative pursuits are powerful and essential streams of STEAM."
    ],
    achievements: [
      "Best Actress Winner at the 95th Academy Awards",
      "Recognized in Time's list of 100 Most Influential People in the World",
      "First Malaysian to capture global cinema's absolute highest honors"
    ],
    weekId: 5,
    imagePlaceholder: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "lee-chong-wei",
    name: "Lee Chong Wei",
    role: "Former World No.1 Badminton Player & Grit Mentor",
    category: "Math/Mindset",
    isHeadliner: true,
    isOrg: false,
    bioParagraphs: [
      "Datuk Wira Lee Chong Wei is an undisputed global badminton legend. He held the coveted World No.1 ranking for 349 weeks, capturing three Olympic silver medals and inspiring the nation of Malaysia through his unmatched speed, grace, and athletic endurance.",
      "As our Week 6 Math/Mindset Headliner, Lee Chong Wei details the calculations behind court angles, split-second speed ratios, shuttlecock drag physics, and the inner mental grit necessary to achieve excellence."
    ],
    achievements: [
      "Held World No. 1 status for a record-breaking 349 weeks",
      "Three-time Olympic Silver Medalic champion in singles badminton",
      "Recipient of the National Sports Icon award in Malaysia"
    ],
    weekId: 6,
    imagePlaceholder: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "joe-fang",
    name: "Joe Fang",
    role: "Renewable Energy Entrepreneur",
    category: "Energy",
    isHeadliner: false,
    isOrg: false,
    bioParagraphs: [
      "Joe Fang is a climate-tech advocate and founding partner of Malaysian eco-grids. For 15 years, Joe has developed miniature wind farms and rooftop solar systems to power rural communities outside major grids across Sabah and Sarawak.",
      "Joe leads Week 7, bringing miniature panels, voltmeters, and turbine blades to show kids how to convert wind, solar glow, and flowing rivers into functional charging circuits."
    ],
    achievements: [
      "Pioneered off-grid solar micro-grids for 40 remote communities in Borneo",
      "Spoke at ASEAN Eco-Summit on youth action on green energy development",
      "Engineered clean carbon-neutral thermal systems for urban workspaces"
    ],
    weekId: 7,
    imagePlaceholder: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "mranti",
    name: "MRANTI",
    role: "Malaysia Research Accelerator for Technology & Innovation",
    category: "Robotics",
    isHeadliner: false,
    isOrg: true,
    bioParagraphs: [
      "MRANTI is Malaysia's premier research agency accelerating tech ideas into commercial giants. Located in Bukit Jalil, MRANTI hosts massive testing grounds for commercial drones, autonomous driving algorithms, and precision automated farming machinery.",
      "During Week 8 Robotics, MRANTI engineers send actual inspection rovers and collaborative robotic arm systems to our festival grounds, letting kids test industrial automation controls up close."
    ],
    achievements: [
      "Launched Malaysia's first Drone Technology sandbox testbed",
      "Incubated over 300 pioneering technology startups in SE Asia",
      "Leading technical bridge between engineering universities and commercial space"
    ],
    weekId: 8,
    imagePlaceholder: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "karl-ho-machines",
    name: "Karl Ho",
    role: "Lead Machinery designer & Gear Master",
    category: "Machines",
    isHeadliner: false,
    isOrg: false,
    bioParagraphs: [
      "Karl Ho is our returning heavy-machinery expert, who spent decades designing factory conveyor belts, pulley assemblies, and lifting gears for Malaysia's logistics terminals. His life's work centers on mechanical advantage structures that simplify labor.",
      "Karl hosts Week 9, showing kids the simple joy of physical machines, teaching them that mechanical leverage bridges the gap between biological muscle limit and massive physical loads."
    ],
    achievements: [
      "Designed regional automated sorting systems powering major Malaysian delivery ports",
      "Authored standard academic guidebooks on gear torque distributions",
      "Supplied custom mechanical leverage structures featured in construction models"
    ],
    weekId: 9,
    imagePlaceholder: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "namewee",
    name: "Namewee",
    role: "Multi-Disciplinary filmmaker & Digital Creator",
    category: "Media",
    isHeadliner: false,
    isOrg: false,
    bioParagraphs: [
      "Namewee (Wee Meng Chee) is an incredibly creative Malaysian singer, director, and digital video pioneer. He has written, filmed, and produced hundreds of high-energy music videos and films, capturing hundreds of millions of views on social platforms globally.",
      "Namewee leads Week 10 Media, guiding kids to think like creative directors. He will share how stop-motion filming, lighting, and sound effects can turn simple table stories into cinematic features."
    ],
    achievements: [
      "Accumulated over 1 billion views on global social video sharing platforms",
      "Award-nominated feature film director in multiple regional film festivals",
      "A true cultural trendsetter for high-velocity internet media formats"
    ],
    weekId: 10,
    imagePlaceholder: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "dr-eva-wong",
    name: "Dr. Eva Wong",
    role: "Chief Data Analyst & AI Ethics Expert",
    category: "Data",
    isHeadliner: false,
    isOrg: false,
    bioParagraphs: [
      "Dr. Eva Wong is a leading computer science professor and chief analyst specializing in predictive model statistics. She advises public transport, health departments, and schools throughout SE Asia on how to visualize citizen habit grids, improving public life with minimal waste.",
      "Dr. Eva leads Week 11, introducing kids to interactive crowd polling, showing them how charts, colors, and graphs can simplify difficult facts and explain human behavior."
    ],
    achievements: [
      "Adviser on smart city transit pathways in Kuala Lumpur",
      "Recipient of ASEAN Data Science Pioneer Award",
      "Distinguished academic lecturer on database algorithms and modern ethics"
    ],
    weekId: 11,
    imagePlaceholder: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "kpj-healthcare",
    name: "KPJ Healthcare",
    role: "Premier Medical Services Partner",
    category: "Human Body",
    isHeadliner: false,
    isOrg: true,
    bioParagraphs: [
      "KPJ Healthcare is one of Malaysia's largest, most prestigious public healthcare networks, operating dozens of modern specialist hospitals. They are pioneers in introducing cardiac telemetry, fiber-optic keyhole surgeries, and robotic orthopedic tools to the nation.",
      "KPJ's professional pediatric technicians and nursing educators lead Week 12, allowing children to read real cardiograms and learn the complex bio-circuits of our heart muscle."
    ],
    achievements: [
      "Over 40 years of medical care leadership throughout Malaysia",
      "First healthcare developer in Malaysia to launch cybernetic clinical assistants",
      "Trained thousands of biomedical support staff and nurses in SE Asia"
    ],
    weekId: 12,
    imagePlaceholder: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "mdec",
    name: "MDEC",
    role: "Malaysia Digital Economy Corporation",
    category: "AI",
    isHeadliner: false,
    isOrg: true,
    bioParagraphs: [
      "MDEC is the government-backed agency responsible for directing Malaysia's digital acceleration. They run nationwide digital literacy campaigns, introduce coding and AI tools to rural campuses, and position Kuala Lumpur as a major tech hub in Asia.",
      "In Week 13, MDEC engineers bring safe, cloud-based visual training web apps, showing children how convolutional networks recognize shapes, colors, and hand signs."
    ],
    achievements: [
      "Spearheaded Malaysia's 20-year digital adoption programs",
      "Brought digital technology curriculums to over 1,500 local schools",
      "Leading coordinator for ASEAN digital trade summits"
    ],
    weekId: 13,
    imagePlaceholder: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "wwf-malaysia",
    name: "WWF Malaysia",
    role: "Global Conservation & Ecological Science Partner",
    category: "Sustainability",
    isHeadliner: false,
    isOrg: true,
    bioParagraphs: [
      "WWF Malaysia has been protecting the country's rich tropical ecosystems, marine reefs, and endangered hornbill populations since 1972. They integrate environmental science, clean water biology, and community farming into a single conservation strategy.",
      "WWF environmental guides host Week 14, sharing how tropical soil, river stones, charcoal, and forest moss are natural filters. They'll show children how to construct water cleaning jars."
    ],
    achievements: [
      "Over 50 years of preserving Malaysia's forests, oceans, and wildlife",
      "Key coordinator for sustainable peatland and mangrove preservation",
      "Pioneered school climate education workshops used nationwide"
    ],
    weekId: 14,
    imagePlaceholder: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "joe-fang-project",
    name: "Joe Fang",
    role: "Penultimate Project Lead Designer",
    category: "Project",
    isHeadliner: false,
    isOrg: false,
    bioParagraphs: [
      "Joe Fang returns as the Invention Advisor in Week 15. Known for his collaborative approach in structural planning, Joe will work with kids individually on their Invention Journals, helping them refine their final presentations.",
      "Joe will walk children through design prototyping, solderless circuit logic, and shell construction, helping them perfect their capstones before public expo day."
    ],
    achievements: [
      "Directed clean-energy industrial prototyping labs for active startups",
      "Featured speaker at Malaysian Maker Conventions for youth inventors",
      "Recipient of National Ecotech Innovation Medals"
    ],
    weekId: 15,
    imagePlaceholder: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "coach-jacky-cheng-panel",
    name: "Coach Jacky Cheng & Panel",
    role: "Grand Showcase Judges & Hosts",
    category: "Showcase",
    isHeadliner: false,
    isOrg: false,
    bioParagraphs: [
      "Week 16 brings our final panel! Lead host Coach Jacky Cheng gathers local engineers, brand experts, and educators to form a friendly feedback group for all graduating children.",
      "This panel focuses on reward and positive encouragement. Every single student receives constructive critiques, celebratory badges, and an official graduation certificate."
    ],
    achievements: [
      "Established the prestigious Southeast Asia Youth Maker Awards",
      "Coordinated with over 50 regional brands to foster early STEM internships",
      "A collective panel with 80+ combined years in design and technology pedagogy"
    ],
    weekId: 16,
    imagePlaceholder: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=300"
  }
];

export const PARTNERS: Partner[] = [
  {
    id: "dji",
    name: "DJI",
    tagline: "Drones & Aerial Innovation",
    descriptionTeaser: "Explore aerodynamics, flight mechanics, and high-precision stabilization with the world's leading drone manufacturer.",
    descriptionParagraphs: [
      "DJI is a pioneer in aerial flight electronics, camera-stabilizing systems, and autonomous navigation robotics. They are passionate about helping the next generation understand aerodynamics and spatial tracking through safe, classroom-friendly aerial models.",
      "At STEAMFest 2026, DJI brings specialized coding-compatible drones that kids can program to hover, barrel-roll, and photograph. Kids will learn about pitch, yaw, roll, and sonar leveling instruments."
    ],
    products: [
      {
        name: "FT-Drones",
        description: "Beginner-friendly educational drone programmable with raw logical drag-and-drop code.",
        imagePlaceholder: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=400"
      },
      {
        name: "V-Pro Gimbal Systems",
        description: "Hands-on camera stabilize rig demonstrating multi-axis brushless motor balancing.",
        imagePlaceholder: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400"
      },
      {
        name: "Sonar Distance Modules",
        description: "Interactive smart sensors which automatically maintain exact elevations.",
        imagePlaceholder: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400"
      }
    ],
    logoPlaceholder: "DJI Logo"
  },
  {
    id: "lego-education",
    name: "LEGO Education",
    tagline: "Creative Building & Robotics",
    descriptionTeaser: "Transform childhood creativity into mechanical designs using structural elements, gears, and motors.",
    descriptionParagraphs: [
      "LEGO Education has been a cornerstone of classroom creative STEM play for over 40 years. They craft physical modules that merge bricks with interactive sensors to help school students understand mechanical ratios and digital commands.",
      "Students at STEAMFest will build motorized cranes and steering rovers. They will discover that complex mechanisms are built by linking small, reliable modules together."
    ],
    products: [
      {
        name: "LEGO Spike Prime",
        description: "The premier STEAM building toolkit incorporating multi-port hubs, color sensors, and motors.",
        imagePlaceholder: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=400"
      },
      {
        name: "Mechanical Wheels & Gears Kit",
        description: "A physical catalog of worm-gears, racks, pinnacles, and differentials to master speed shift designs.",
        imagePlaceholder: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=400"
      },
      {
        name: "Interactive Distance Sensor Hub",
        description: "A modular, plug-in ultrasonic sensor showing immediate distance measurements in centimeters.",
        imagePlaceholder: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=400"
      }
    ],
    logoPlaceholder: "LEGO Edu Logo"
  },
  {
    id: "lasy-malaysia",
    name: "LASY Malaysia",
    tagline: "Modular Construction Toys",
    descriptionTeaser: "Master structural strength and complex geometric links using legendary German-designed modular joints.",
    descriptionParagraphs: [
      "LASY elements are famous block kits developed to boost lateral thinking and shape coordination. With smart locking H-shapes and rounded joints, boys and girls can quickly construct robust spatial structures.",
      "LASY Malaysia's experienced coaches will support Week 4 and Week 9, helping young kids grasp bridge geometry and cantilever beams using simple, solid modular blocks."
    ],
    products: [
      {
        name: "LASY G-Inventor Packs",
        description: "Classic high-density interlocking locks featuring cylinders, square tubes, and flat beams.",
        imagePlaceholder: "/src/assets/images/lasy_toy_car_1782046818569.jpg"
      },
      {
        name: "The Cantilever Connector pack",
        description: "Flexible, hinged joint attachments enabling creation of adjustable structural trusses.",
        imagePlaceholder: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400"
      },
      {
        name: "Symmetric Base Mounts",
        description: "Sturdy foundation templates ensuring stable building layers for ambitious high-rise models.",
        imagePlaceholder: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=400"
      }
    ],
    logoPlaceholder: "LASY Logo"
  },
  {
    id: "makeblock",
    name: "Makeblock",
    tagline: "Educational Robotics Kits",
    descriptionTeaser: "Assemble aluminum-rail chassis and program programmable microcontrollers to solve pathways.",
    descriptionParagraphs: [
      "Makeblock is a leader in DIY structural mechanics, offering aircraft-grade aluminum parts and powerful computer circuit-boards. They support kids with a smooth path from simple blocks to advanced robotic structures.",
      "At our festival, Makeblock brings their famous 'mBot' and 'Ranger' rovers to our robotics arena, letting kids assemble components and write path-finding algorithms."
    ],
    products: [
      {
        name: "mBot Neo Explorer",
        description: "An aluminum-bodied robot fitted with WiFi smart chips, optical tracking, and encoder motors.",
        imagePlaceholder: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400"
      },
      {
        name: "Halocode Single Board",
        description: "A compact circular microcontroller equipped with built-in voice command sensors and LED arrays.",
        imagePlaceholder: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=400"
      },
      {
        name: "Multi-joint Aluminum Gripper",
        description: "A mechanical arm kit designed to mount on rover chassis and retrieve payload objects.",
        imagePlaceholder: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400"
      }
    ],
    logoPlaceholder: "Makeblock Logo"
  },
  {
    id: "microbit",
    name: "micro:bit",
    tagline: "Beginner-Friendly Coding Hardware",
    descriptionTeaser: "Develop skills on a credit-card-sized computer, reading compasses, temperature, and radio links.",
    descriptionParagraphs: [
      "The micro:bit is a pocket-sized programmable computer designed by the BBC. It is an incredibly powerful learning tool with built-in light panels, compass sensors, radio link capabilities, and accelerometers.",
      "During our Coding and Data weeks, children use micro:bits as interactive remotes and environmental data monitors, discovering that computer systems interact actively with the world."
    ],
    products: [
      {
        name: "micro:bit V2 Smart Board",
        description: "Enriched with built-in speakers, microphones, and touch-sensitive gold logo buttons.",
        imagePlaceholder: "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?auto=format&fit=crop&q=80&w=400"
      },
      {
        name: "Smart Climate Sensor Shield",
        description: "Direct plugin attachment measuring soil moisture, rainfall, and thermal levels.",
        imagePlaceholder: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400"
      },
      {
        name: "Radio Game Transmitter Pack",
        description: "Allows kids to transmit text messages and high-score signals across micro:bit nodes.",
        imagePlaceholder: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400"
      }
    ],
    logoPlaceholder: "micro:bit Logo"
  },
  {
    id: "sphero",
    name: "Sphero",
    tagline: "Programmable Robots for Kids",
    descriptionTeaser: "Program colorful, waterproof robotic spheres to roll through water and paint geometric tracks.",
    descriptionParagraphs: [
      "Sphero changes how kids think about robotics. They build highly impact-resistant, waterproof spherical robots that roll across floors, paint canvases, and float on water under user program control.",
      "Sphero joins our robotics and mathematics sessions, where students write code to guide spheres through mazes and draw precise geometric shapes with paint trails."
    ],
    products: [
      {
        name: "Sphero BOLT",
        description: "A transparent spherical robot featuring an 8x8 LED screen, light sensor, and compass.",
        imagePlaceholder: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=400"
      },
      {
        name: "Sphero RVR+",
        description: "Our rugged, off-road track rover built for custom sensors, microcontrollers, and payloads.",
        imagePlaceholder: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=400"
      },
      {
        name: "Specdrums Ring Kit",
        description: "Smart rings that convert colors on tap into dynamic audio notes and sample beats.",
        imagePlaceholder: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=400"
      }
    ],
    logoPlaceholder: "Sphero Logo"
  }
];

export const SCHOOL_EVENTS: SchoolEvent[] = [
  {
    id: "robotics-battle",
    name: "Inter-School Robotics Battle",
    date: "A Sunday in September 2026",
    time: "10:00 AM - 4:00 PM (Main Stage)",
    teaser: "Schools across Malaysia go head-to-head in a live robotics arena on the festival's main stage.",
    descriptionParagraphs: [
      "Get ready for our loudest, high-energy event! The Inter-School Robotics Battle brings student-led robotics teams onto the Main Stage to solve navigation and delivery challenges in a live, timed arena.",
      "Teams will program autonomous rovers to retrieve cargo blocks and navigate complex obstacle paths under high-pressure timers. Over 40 school divisions from Selangor, KL, and nearby states will compete, with industry engineers judging speed, stability, and code quality."
    ],
    howToParticipate: [
      "Form a team of 3 to 5 students (Ages 10-15) representing your primary or secondary school.",
      "Register your team and secure an official Makeblock/LEGO robotics kit via our partner program.",
      "Submit your initial team roster and design sketch by 15 August 2026."
    ]
  },
  {
    id: "young-inventors",
    name: "Young Inventors Showcase",
    date: "A Sunday in October 2026",
    time: "11:00 AM - 5:00 PM (Exhibition Hall)",
    teaser: "A prestigious national stage where young creators display original inventions judged by tech leaders.",
    descriptionParagraphs: [
      "The ultimate showcase of youth ingenuity! The Young Inventors Exhibition gathers individual students and teams to present real, working prototypes that solve community, medical, or ecological challenges.",
      "Judged by leading engineers from MRANTI, MDEC, and KPJ Healthcare, this showcase highlights practical innovation. Selected high-scoring teams will receive youth incubation packages to help develop their projects into real commercial solutions."
    ],
    howToParticipate: [
      "Open to individual students or teams of up to 3 members (Ages 8-16).",
      "Submit an abstract detailing your prototype, materials, and target problem by 1 September 2026.",
      "Bring your working invention, display board, and pitch deck to the main exhibition hall on presentation day."
    ]
  },
  {
    id: "talent-night",
    name: "STEAMFest Talent Night",
    date: "A Sunday in October 2026",
    time: "6:00 PM - 9:00 PM (Amphitheatre)",
    teaser: "An arts-and-technology performance fusing dance, music, optical projections, and live code visuals.",
    descriptionParagraphs: [
      "Art merges with technology on Stage! This special night showcases student performances that incorporate digital projections, laser shapes, synthesizers, and live-coded backgrounds.",
      "From classical music performed on bio-conductive plants, to choreography synced with aerial drone paths, this event highlights the power of 'A' (Arts) in STEAM. Families can enjoy food-truck options under the stars."
    ],
    howToParticipate: [
      "Open to school orchestras, dance troupes, and visual design teams.",
      "Audition piece must fuse an artistic discipline with an active tech/engineering element.",
      "Audition video submissions (3 mins) close on 10 September 2026."
    ]
  }
];

export const FAQS = [
  {
    question: "What is STEAMFEST 2026?",
    answer: "STEAMFEST 2026 is Asia's longest STEAM education festival for kids organized by Genius Minds. It runs for 16 consecutive Sundays from 1 July to 18 October 2026 at Southplace Residences, Tropicana Metropark, Malaysia. Every Sunday, we offer hands-on challenge stations centering on single themes, featuring Malaysian guest icons, industry partners, and school showcases."
  },
  {
    question: "When and where is it held?",
    answer: "The festival takes place every Sunday from 1 July to 18 October 2026 from 10:00 AM to 5:00 PM. The venue is Southplace Residences, Tropicana Metropark, Subang Jaya, Selangor, Malaysia. It boasts a beautiful, family-friendly space with lakes, parking, and cafes."
  },
  {
    question: "What age group is it for?",
    answer: "Our challenge stations are designed for children aged 5 to 16. Activities are divided into three tiers: Junior Explorers (Ages 5-8), Tech Innovators (Ages 9-12), and Future Masters (Ages 13-16), ensuring every challenge is highly age-appropriate and engaging."
  },
  {
    question: "Do we attend every Sunday or pick specific weeks?",
    answer: "You have complete flexibility! You can sign up for a Single-Sunday pass for specific themes (e.g., Week 3 for Coding, or Week 8 for Robotics), or purchase the 'Mega-STEAM Scholar Pass' which unlocks all 16 Sundays, complete with a physical Inventor Journal and stamp catalog."
  },
  {
    question: "How much does it cost, and what does registration include?",
    answer: "A Single-Sunday Pass is RM 45 per child. The Mega-STEAM Scholar Pass (all 16 weeks) is RM 480 (saving over RM 240). Every ticket includes full access to all engineering assets, partner kits (LEGO, DJI, Sphero), guest discussions, and a take-home build item."
  },
  {
    question: "Are parents allowed to join the activities?",
    answer: "Yes, absolutely! STEAMFEST is designed as a family-friendly festival. We encourage parents to stand alongside their kids in block zones, watch drone flights, and cheer them on. We also have a cozy parent rest lounge with free high-speed WiFi and local coffee."
  },
  {
    question: "What should children bring to the festival?",
    answer: "Just bringing their healthy curiosity is enough! All components, protective goggles, writing pads, and material boards are provided by Genius Minds. Kids with Mega Passes should bring their custom 'Festival Inventor Journal' each Sunday to earn stamps."
  },
  {
    question: "Is food and refreshment available at the venue?",
    answer: "Yes, Southplace at Tropicana Metropark offers several local cafes, bake shops, and convenience stalls. Additionally, the festival hosts a weekly 'STEAM Bites Food Street' with food trucks serving Halal local and international dishes."
  },
  {
    question: "Can my child meet the Malaysia Icons?",
    answer: "Yes! The Malaysia Icons joining us (like Michelle Yeoh, Lee Chong Wei, Dr. Amalina, etc.) will participate in scheduled guest panel discussions and walk through the engineering booths. Children with scholar passes get priority access to meet-and-greets."
  },
  {
    question: "How do I register?",
    answer: "Registration is simple! Click any 'Register Now' button on this website to go to our official Eventbrite checkout portal. Select your ticket types (Scholar Pass or Single-Sunday options) and complete your payment to secure your ticket immediately."
  }
];
