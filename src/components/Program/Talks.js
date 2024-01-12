import React from 'react';
import { Container } from 'react-bootstrap';
import CardForSpeaker from './CardForSpeaker';
import 'bootstrap/dist/css/bootstrap.min.css';

function Talks() {
    return (
        <Container>
            <CardForSpeaker
            id="philippa"
            talk = "Keynote Talk" 
            name ="Prof. Philippa Martin, University of Canterbury"
            title = "Can bits and bytes make a difference? "
            abstract = "Just before we embark on the 2024 academic year, it is a good chance to step back and look at whether Australasian telecommunications researchers can make a difference in the year ahead. There are numerous white papers available forecasting potential telecommunications futures with 5G establishing itself and 6G under design. The UN sustainability goals provide a framework for directing global innovation across all sectors. This talk will be an interactive exploration of the pitfalls and potentials of our field framed through the speaker’s research lenses of telecommunication innovation, and diversity, equity and inclusion."
            bio = "Prof. Philippa Martin received the B.E. (Hons.) and Ph.D. degrees in electrical and electronic engineering from Te Whare Wānanga o Waitahi | University of Canterbury (UC), Ōtautahi | Christchurch, Aotearoa | New Zealand, in 1997 and 2001, respectively. She was a Postdoctoral Fellow there in 2001-2004. In 2002, she was a Visiting Researcher at the University of Hawaii at Manoa, USA. Since 2004, she has been an Academic with UC, where she is currently a Professor. She is a Fellow of Engineering New Zealand, Senior Member of IEEE and a Senior Fellow of the Higher Education Academy, UK. Her communications research interests include error correction coding, decoding and detection algorithms, equalization, multiple antenna systems, channel modelling, and 5G-6G communications, in particular for wireless communications. She served as an Editor of the IEEE Transactions on Wireless Communications in 2005-2008 and 2014-2016. She was a member of the IEEE Communication Society Board of Governors in 2019-2021 and currently serves on their Financial standing committee. In addition, Philippa has a Certificate of Arts in Te Reo Māori and Māori and Indigenous Studies, Postgraduate Certificate in Counselling Studies, Postgraduate Certificate in Strategic Leadership and Postgraduate Certificate in Tertiary Teaching. Her research interests include engineering education as well as diversity, equity and inclusion. She set up an award-winning peer mentoring program at UC called ENG ME! (ENVI 2023 Engineering Education award from Engineering New Zealand), while being Dean of Engineering (First Year) in 2017-2021. In 2023, she received the national Te Whatu Kairangi Aotearoa Tertiary Teaching Award for transforming engineering education for students, institutions and community benefit."
            />

            <CardForSpeaker 
            id="emanuele"
            talk = "Keynote Talk" 
            name ="Prof. Emanuele Viterbo, Monash University "
            title = "Reflections on OTFS and delay-Doppler Communications"
            abstract = "Orthogonal time frequency space (OTFS) modulation was presented by Hadani et al. at WCNC’17, San Francisco. Since then, its significant advantages over OFDM in doubly dispersive channels for high-mobility wireless communications have been well documented in the literature. The key idea of OTFS is to model mobile wireless channels in the delay Doppler domain, where the sparse geometry of the reflectors in the channel is captured. This talk will introduce the general notion of delay-Doppler communications, starting from the fundamentals of high-mobility wireless channels, followed by the transceiver architecture for detection and channel estimation, and finally discuss some implementation complexity trade-offs and future applications."
            bio = "Emanuele Viterbo received his degree (Laurea) in Electrical Engineering in 1989 and his Ph.D. in 1995 in Electrical Engineering, both from the Politecnico di Torino, Torino, Italy. From 1990 to 1992 he was with the European Patent Office, The Hague, The Netherlands, as a patent examiner in the field of dynamic recording and error-control coding. Between 1995 and 1997 he held a post-doctoral position in the Dip. di Elettronica of the Politecnico di Torino. In 1997-98 he was a post-doctoral research fellow in the Information Sciences Research Center of AT&T Research, Florham Park, NJ, USA. He became first Assistant Professor (1998) then Associate Professor (2005) in Dip. di Elettronica at Politecnico di Torino. In 2006 he became Full Professor in DEIS at University of Calabria, Italy. Since 2010 he has been Professor in the Electrical and Computer Systems Eng. Department and Associate Dean Graduate Research (2012-2020) of the Faculty of Engineering at Monash University, Melbourne, Australia. Prof. Emanuele Viterbo is a 2011 Fellow of the IEEE, a 2010 ISI Highly Cited Researcher and Member of the Board of Governors of the IEEE Information Theory Society (2011-2018) and Conference Committee Chair (2016-2018). He served as Associate Editor of IEEE Transactions on Information Theory, European Transactions on Telecommunications and Journal of Communications and Networks, Guest Editor for IEEE Journal of Selected Topics in Signal Processing: Special Issue Managing Complexity in Multiuser MIMO Systems, and Editor of Foundations and Trends® in Communications and Information Theory."
            />

            <CardForSpeaker 
            talk = "Keynote Talk" 
            id="weller"
            name ="Prof. Steven Weller, Australian Research Council"
            title = "Communications theory research, a perspective from the Australian Research Council (ARC)"
            abstract = "This presentation will consider recent patterns, trends and opportunities for future ARC funding of communications theory research. Recent changes to ARC funding schemes will also be considered, such as the new two-stage approach to the grant application process for the Discovery Projects Scheme 2025 round, involving a streamlined Expression of Interest stage."
            bio = "Professor Steven Weller joined the ARC as Executive Director, Engineering, Information and Computing Sciences in March 2023. Prof. Weller received the B.E. (Hons. I) degree in Computer Engineering in 1988, the M.E. degree in Electrical Engineering in 1992, and the Ph.D. degree in Electrical Engineering in 1994, all from the University of Newcastle, Australia. During 1994–1997, he was a Lecturer in the Department of Electrical and Electronic Engineering, University of Melbourne, Australia. In 1997, he joined the University of Newcastle, where he served as Head of School of Electrical Engineering and Computer Science (2007–2009). He was also Assistant Dean Research (2011–2013) for the Faculty of Engineering and Built Environment, where he served as Deputy Head of Faculty (2013-2020). Over the period 2020–2023 he was Director of the Science and Engineering Challenge (SEC) a national outreach program inspiring young people to study science, technology, engineering and mathematics subjects in senior high school. Currently he is Professor of Electrical Engineering at the University of Newcastle. Highly awarded, Professor Weller is also an elected Fellow of the Royal Society of New South Wales. Prof. Weller's research interests are in control theory and its applications. He is especially interested in applications of control theory to energy systems, climate economics, and in cyber-security of modern power systems."
            />


            <CardForSpeaker 
            leftColumnRatio={3}
            rightColumnRatio={2}
            id="mckay"
            talk = "Keynote Talk" 
            name ="Prof. Matthew McKay, University of Melbourne "
            title = "How information technologies can aid the rational design of variant-proof vaccines and drugs"
            abstract = "Complex dynamics and high genetic diversity of RNA viruses pose major challenges to vaccine and drug development. Intelligent models built using techniques from statistical physics, information theory, and machine learning, applied together with immunological and virological data, offer novel approaches to confront these challenges. This talk will introduce models for HIV, HCV and COVID-19 and will describe their use in predicting genomic “weak spots” that can guide vaccine and drug designs that seek to corner the viruses with targeted immune or therapeutic responses. A preclinical vaccine trial for HIV (conducted in monkeys) designed based on these models will be described. Generally, the talk will demonstrate how fundamental concepts in communication and information technologies, coupled with breakthrough programmable biotechnology innovations (e.g., mRNA technologies, used in the Pfizer/BioNTech and Moderna COVID-19 vaccines) can aid the rational design of future-generation vaccines and therapies."
            bio = "Matthew McKay is an ARC Future Fellow and Professor at the University of Melbourne. He holds a joint appointment in the Department of Electrical and Electronic Engineering and the Department of Microbiology and Immunology in the Peter Doherty Institute for Infection and Immunity. Matthew was previously an Assistant Professor, Hari Harilela Associate Professor, and Full Professor at the Hong Kong University of Science and Technology (HKUST), where he continues to hold an Adjunct Professor position. He has been a Research Scientist with the Institute for Medical Engineering & Science (IMES) at MIT and with the Department of Statistics at Stanford. He received his Ph.D. in electrical engineering from The University of Sydney. He is a Fellow of the IEEE, and has served as a Young Scientist of the World Economic Forum and the World Laureates Forum. In 2021, he was awarded the Australia-China Alumni Award for Research and Science by the Australia-China Alumni Association. Matthew's areas of interest include machine learning and signal processing, and their applications to infectious diseases and vaccines."
            />

            <CardForSpeaker 
            leftColumnRatio={3}
            rightColumnRatio={2}
            id="powel"
            talk = "Technical Talk" 
            name ="A/Prof. Pawel Dmochowski, Victoria University of Wellington, NZ"
            title = "Channel Separation for Low Complexity RIS Design"
            abstract = "The talk will outline simple techniques to enhance the performance of multi-user reconfigurable intelligent surface (RIS) aided wireless systems. Specifically, it will present a novel technique called channel separation which provides a better understanding of how the RIS phases affect the uplink sum rate and sum rates for zero-forcing (ZF) and minimum mean squared error (MMSE) linear receivers. Leveraging channel separation, we will propose a simple iterative algorithm to improve the uplink sum rate and the sum rates of ZF and MMSE linear receivers when discrete RIS phases are considered. For continuous RIS phases, we derive simple closed form solutions to enhance the uplink sum rate and reduce the total mean square error of the MMSE combiner. The latter metric is a tractable alternative to maximizing sum rates for ZF and MMSE. Numerical simulations are performed for all design techniques and the effectiveness of each technique is compared to a full numerical optimization procedure, namely an interior point (IP) algorithm."
            bio = "Pawel Dmochowski was born in Gdansk, Poland. He received a B.A.Sc (Engineering Physics) from the University of British Columbia, and M.Sc. and Ph.D. degrees from Queen s University, Kingston, Canada. He is currently an Assistant Professor in the School of Engineering and Computer Science at Victoria University of Wellington. Pawel is a Senior Member of the IEEE and has served as an Editor for IEEE Communications Letters and IEEE Wireless Communications Letters. His research interests include mmWave, THz communications, Massive MIMO and Cognitive Radio systems, with a particular emphasis on statistical performance characterisation."
            />


            <CardForSpeaker 
            id="margreta"
            talk = "Technical Talk" 
            name ="Prof. Margreta Kuijper, University of Melbourne"
            title = "Simple(x) coding for distributed storage"
            abstract = "This talk builds on earlier distributed storage research on the easy repair properties of simplex block erasure codes over fields (Kuijper & Napp 2014). We give an overview of those results and then turn our attention to convolutional erasure codes. Such codes lend themselves to sliding window decoding thus making them popular for streaming applications. Here we look at the usefulness of the sliding window decoder for easy repair of lost nodes in a distributed storage setting. We investigate and compare code properties and repair methods."
            bio = {`Margreta Kuijper is a Professor at the Department of Electrical and Electronic Engineering of the University of Melbourne (Australia) where she has been employed since 1995. From 1992 to 1995 she was a postdoctoral fellow in the area of behavioral systems & control at the Mathematics Department of the University of Groningen, the Netherlands.  From 1988 to 1992 she worked at the Centrum voor Wiskunde & Informatica (CWI), Amsterdam, where she obtained her PhD degree in the area of behavioral systems & control in 1992.  

            Her main research interests evolve around the interplay between systems theory and coding theory. Her research has addressed a diverse range of areas including behavioral system theory, polynomial matrix theory, convolutional coding, Reed-Solomon coding, distributed source coding, systems and codes over finite fields and rings, system cyber security, erasure coding for distributed storage and erasure coding for streaming applications.
            `}
            />


            <CardForSpeaker 
            leftColumnRatio={3}
            rightColumnRatio={2}
            id="tian"
            talk = "Technical Talk" 
            name ="Mr. Tian Han, University of Melbourne"
            title = "Radar Ambiguity Function Sidelobe Level Analysis of FSK-Based Joint Communications and Radar"
            abstract = "This paper considers the frequency shift keying (FSK) based waveform for joint communications and radar (JCR). An analysis of the probability distributions of its ambiguity function (AF) sidelobe level (SL) and peak sidelobe level (PSL) is conducted to study the radar sensing capability of random FSK. Numerical results show that the independent frequency modulation introduces uncontrollable AF PSL. In order to address this problem, the initial phases of waveform sub-pulses are designed by solving a min-max optimisation problem. Numerical results indicate that the optimisation-based phase design can effectively reduce the AF PSL while having an insignificant impact on the communications performance in terms of the data rate, the receiver complexity and the error probability."
            bio = {`Tian Han received a B.E. degree in communication engineering from Donghua University, Shanghai, China, in 2018, and an M.E. degree in electrical engineering from the University of Melbourne, Melbourne, Australia, in 2020, where he is currently pursuing a Ph.D. degree with the Department of Electrical and Electronic Engineering. His current research mainly focuses on waveform design for joint radar and communications.
            `}
            />

            <CardForSpeaker 
            leftColumnRatio={3}
            rightColumnRatio={2}
            id="wibowo"
            talk = "Technical Talk" 
            name ="Dr. Wibowo Hardjawana, University of Sydney"
            title = "AI-based Matrix Inversion Solver for Symbol Detection"
            abstract = "Abstract: Wireless symbol detection is commonly cast as a matrix inversion problem. Its effectiveness is limited when dealing with heavy non-Gaussian noise, such as inter-carrier and multi-user interference. This presentation will first explain the performance degradation in approximating posterior symbol distribution due to non-Gaussian noise. We will then look at our current symbol detection research, whereby we unfold classical iterative detection techniques and use artificial intelligence to improve the iterative processes. We present a novel approach using a Graph Neural Network framework to unfold a classical iterative detector and fine-tune its posterior distribution approximation. Simulation results show we could improve the best iterative detector based on the expectation projection concept, bringing it closer to maximum likelihood performance in the presence of heavy interference."
            bio = {`Dr. Wibowo Hardjawana received a PhD in electrical engineering from The University of Sydney, Australia. He is currently a Senior Lecturer in Telecommunications with the School of Electrical and Information Engineering at the University of Sydney. Before that, he was with Singapore Telecom Ltd., managing core and radio access networks. His current fundamental and applied research interests are in AI applications for 5/6G cellular radio access and WiFi networks. He focuses on system architectures, resource scheduling, interference, signal processing, and the development of wireless standard-compliant prototypes. He has also worked with several industries in the area of 5G and long-range WiFi. He was an Australian Research Council Discovery Early Career Research Award Fellow.
            `}
            />

            <CardForSpeaker 
            id="siuwai"
            talk = "Technical Talk" 
            name ="Dr. Siu Wai Ho, University of Adelaide"
            title = "Latent Structure Discovery by Automated Information Theoretic Inequality Prover"
            abstract = "Causal models, essential in scientific research, are mathematical models used to analyse and understand the causal relationships between variables in a system. They enable researchers to identify the driving factors behind phenomena and to make predictions. However, causal models often include latent variables that are not directly observable but are critical to the explanation of observed data. Latent variables are hidden and create latent structures, but they must still obey the laws of probability theory, including information-theoretic inequalities. This talk explores how to use information-theoretic inequalities to discover latent structures within causal models. By applying inequalities involving only observable variables, hypothetical latent structures can be tested. The derivation of these inequalities is illustrated using the Automated Information-Theoretic Inequality Prover (AITIP)."
            bio = {`Siu-Wai Ho received the B.Eng., M.Phil., and Ph.D. degrees in information engineering from The Chinese University of Hong Kong, Hong Kong, in 2000, 2003, and 2006, respectively. During 2006 - 2008, he was a Postdoctoral Research Fellow in the Department of Electrical Engineering, Princeton University, Princeton, NJ, USA. He joined the Institute for Telecommunications Research, University of South Australia (UniSA), Adelaide, S.A., Australia in 2009 and was a Senior Research Fellow since 2013. Since 2018, he is a Senior Research Fellow with the Teletraffic Research Centre, University of Adelaide, Adelaide, S.A., Australia. His current research interests include Shannon theory, information-theoretic security, machine learning, visible light communications and indoor positioning.

            Ho received the Croucher Foundation Fellowship from 2006 to 2008, the 2008 Young Scientist Award from the Hong Kong Institution of Science, the UniSA Research SA Fellowship from 2010 to 2013, and the Australian Post-Doctoral Fellowship from the Australian Research Council from 2010 to 2013. His project received the 2016 National Award—Consumer Category from the Australian Information Industry Association. He was a corecipient of the Best Paper Award from the 2016 IEEE/IET International Symposium on Communication Systems, Networks, and Digital Signal Processing, the Best Student Paper Award from the 2016 Australian Communication Theory Workshop and both the Best Paper Award and the Optoelectronic Technology Innovation Award from the 2023 IEEE/SPIE 8th Optoelectronics Global Conference.
            
            `}
            />

            <CardForSpeaker 
            leftColumnRatio={3}
            rightColumnRatio={2}
            id="huang"
            talk = "Technical Talk" 
            name ="Dr. Tao Huang, James Cook University"
            title = "V2X Cooperative Perception for Autonomous Driving: Recent Advances and Challenges"
            abstract = "Accurate perception is essential for advancing autonomous driving and addressing safety challenges in modern transportation systems. Despite significant advancements in computer vision for object recognition, current perception methods still face difficulties in complex real-world traffic environments. Challenges such as physical occlusion and limited sensor field of view persist for individual vehicle systems. Cooperative Perception (CP) with Vehicle-to-Everything (V2X) technologies has emerged as a solution to overcome these obstacles and enhance driving automation systems. While some research has explored CP's fundamental architecture and critical components, there remains a lack of comprehensive summaries of the latest innovations, particularly in the context of V2X communication technologies. To address this gap, this work provides a comprehensive overview of the evolution of CP technologies, spanning from early explorations to recent developments, including advancements in V2X communication technologies. Additionally, a contemporary generic framework is proposed to illustrate the V2X-based CP workflow, aiding in the structured understanding of CP system components. Furthermore, this work categorizes prevailing V2X-based CP methodologies based on the critical issues they address. An extensive literature review is conducted within this taxonomy, evaluating existing datasets and simulators. Finally, open challenges and future directions in CP for autonomous driving are discussed by considering both perception and V2X communication advancements."
            bio = {`Dr. Huang received his Ph.D. from The University of New South Wales, Sydney, Australia. He is currently a senior lecturer at James Cook University, Cairns. Dr. Huang received the IEEE Outstanding Leadership Award in 2022. He currently serves as the IEEE Northern Australia Section Vice-Chair and ComSoc Chapter Chair. He is an Associate Editor of the IEEE Open Journal of Communications Society, IEEE Access, and IET Communications. He is also a Topical Advisory Panel Member and guest editor of MDPI Electronics.
            `}
            />

            <CardForSpeaker 
            id="akram"
            talk = "Technical Talk" 
            name ="A/Prof. Akram Hourani, RMIT"
            title = "Mega Satellite Constellations: Challenges, Opportunities, and Performance Analysis"
            abstract = "Massive satellite constellations are currently being deployed in an unprecedented pace aiming to provide an integrated global coverage. In order to design and optimize such networks, it is important to perform both rapid and in-depth evaluations of their performance based on given design parameters. This presentation will provide an overview of the recent challenges and opportunities offered by mega satellite constellations and will explain the suitable performance analysis methods for these massive communication networks. It will present the main constellation models used in practical applications and further introduce theoretical models based on stochastic geometry that facilitate analytic solutions. The presentation then provides modeling examples for obtaining the statistics of satellites' pass duration, handover behavior, and both the downlink and uplink coverage performance."
            bio = {`Akram Hourani is an Associate Professor and the Telecommunication Program Manager (Masters) at RMIT University's School of Engineering, Melbourne, Australia. He obtained his PhD from RMIT University in 2016 and previously worked as an R&D Program Manager in the Satellite and Telecommunication industry, where he directed large scale industry projects. With his expertise, he is currently engaged in multiple research and industry projects related to satellite communications, synthetic aperture radar, and AI in wireless communications. As the Lead Investigator, A/Prof Al-Hourani played a crucial role in delivering the largest open Internet-of-Things (IoT) network in Victoria in collaboration with five local governments, the Northern Melbourne Smart Cities Network. This project won two prestigious industry awards: the Technology Awards for Excellence 2020 from the Municipal Association of Victoria (MAV) and the Smart Cities Award for 2020 from the IoT Alliance Australia (IoTAA). A/Prof Al-Hourani contributed to over 109 journal articles and conference proceedings. He was awarded the IEEE Sensors Council Paper Award for his contribution in hand-gesture recognition using neural networks. He is currently ranked in the top 2% of scientists worldwide according to Stanford University's latest rankings, in both the Career-Long and Single Year Impact categories. He is also a recipient of the Alexander von Humboldt Fellowship for Experienced Researchers 2024 in Synthetic Aperture Radar with the German Aerospace Center (DLR). A/Prof Al-Hourani is currently an Associate Editor in multiple high-impact journals, including IEEE Transactions of Aerospace and Electronics, IEEE Open Journal of the Communication Society, and Frontiers in Space Technologies. He is also an Editor in the MDPI Remote Sensing Journal. His research interests include Satellite Communications, Radar Systems, UAV Communication Systems, Signal Processing/Machine Learning, and Stochastic Geometry.
            `}
            />

            <CardForSpeaker 
            leftColumnRatio={3}
            rightColumnRatio={2}
            id="timothy"
            talk = "Technical Talk" 
            name ="Dr. Timothy Molloy, Australian National University"
            title = "Trajectory Entropies for Active State Estimation and Obfuscation in POMDPs"
            abstract = "The problem of controlling a system so that its state trajectory is either easy or difficult to infer is important in applications ranging from controlled sensing to robot navigation. We study the problem of controlling a partially observed Markov decision process (POMDP) to either aid or hinder the estimation of its state trajectory using several novel trajectory entropy concepts. We first encode the estimation objectives via the smoother entropy, which is the conditional entropy of the partially observed state trajectory given measurements and controls. By establishing novel expressions for the smoother entropy in terms of the POMDP belief state, we show that the problems of minimising and maximising the smoother entropy in POMDPs can surprisingly both be reformulated as belief-state Markov decision processes with concave cost and value functions. We further consider the joint entropy of the state, measurement, and control trajectories to encode competing estimation and memory-efficiency objectives. Minimisation of the joint entropy in POMDPs is shown to lead to reformulations with linear cost and value functions. Our reformulations render the smoother and joint entropy objectives that are amenable to optimise using standard POMDP solution techniques. Consideration of these trajectory entropies contrasts with previous active estimation and obfuscation approaches that instead resort to marginal (or instantaneous) state entropies due to tractability concerns."
            bio = {`Tim received the B.E. and Ph.D. degrees from the Queensland University of Technology (QUT) in 2010 and 2015, respectively. He is currently a Senior Lecturer in Mechatronics with the Australian National University (ANU). Prior to joining ANU in 2022,  he was a Research Fellow at the University of Melbourne (2020-2022), and an Advance Queensland Research Fellow at QUT (2016-2019). His research interests include signal processing and information theory for robotics and control. Tim is the recipient of a QUT University Medal, a QUT Outstanding Doctoral Thesis Award, a 2018 Boeing Wirraway Team Award, and an Advance Queensland Early-Career Research Fellowship.
            `}
            />

            <CardForSpeaker 
            id="ross"
            talk = "Technical Talk" 
            name ="Prof. Ross Murch, HKUST"
            title = "Linking Electromagnetic Modeling with Wireless System Design"
            abstract = "Using electromagnetic design to enhance wireless system performance has become an important area of research. For example, the development of electromagnetic information theory (EIT), reconfigurable intelligent surfaces (RISs), holographic MIMO, massive MIMO, RF imaging, and hybrid beamforming can all be enhanced by linking full electromagnetic modeling with them. However, using full electromagnetic modeling is usually inaccessible to wireless system researchers due to the specialized simulation tools and knowledge required. This talk suggests straightforward methods to link electromagnetic modeling with wireless systems so that research in this area can be more easily performed by systems researchers."
            bio = {`Prof. Murch is currently a Chair Professor in the Department of Electronic and Computer Engineering and a Senior Fellow at the Institute of Advanced Study both at the Hong Kong University of Science and Technology (HKUST). Professor Ross Murch received his Bachelor's and Ph.D. degrees in Electrical and Electronic Engineering from the University of Canterbury, New Zealand. From 1990-1992 he was a Post-Doctoral Fellow at the Department of Mathematics and Computer Science, University of Dundee, UK.

            His current research focus is creating new RF wave technology for making a better world.  His unique expertise lies in his combination of knowledge from both wireless communication systems and electromagnetics and he publishes widely in both areas. He has successfully supervised more than 50 graduate research students. He received the IEEE Communications Society WTC Recognition Award in 2023 and also has five teaching awards. Prof. Murch was Department Head at HKUST from 2009-2015 and is a Fellow of IEEE, IET, HKIE, and the Hong Kong Academy of Engineering Sciences. He is the inventor of over 20 patents and the author of over 200 journal papers. Prof. Murch has spent sabbaticals at MIT, USA; AT&T, USA; Allgon Mobile Communications, Sweden; Imperial College London, UK, and been a David Bensted Fellow at Simon Fraser University, Canada, and an HKTIIT Fellow at Southampton University, UK. He has served IEEE in various positions including IEEE Area Editor, Associate Editor and Technical Program Chair of conferences.
            
            `}
            />

            <CardForSpeaker 
            id="rong"
            talk = "Technical Talk" 
            name ="Prof. Yue Rong, Curtin University"
            title = "Undersea diver communication system using speech/text conversion"
            abstract = "Underwater acoustic communication system has low data rate due to the limited bandwidth of the underwater acoustic channel. This makes real-time speech communication challenging. In this talk, we present an undersea diver communication system which uses speech-to-text conversion at the transmitter to achieve speech compression. The text message is converted back to speech at the receiver end. The system design and initial field trial results are presented."
            bio = {`Yue Rong received the Ph.D. degree in electrical engineering from the Darmstadt University of Technology, Darmstadt, Germany, in 2005. He was a Postdoctoral Researcher with the Department of Electrical Engineering, University of California, Riverside, Riverside, CA, USA, from February 2006 to November 2007. Since December 2007, he has been with Curtin University, Bentley, WA, Australia, where he is currently a professor. 
            His research interests include signal processing for communications, underwater acoustic communications, underwater optical wireless communications, machine learning, speech recognition, and biomedical engineering. He has authored or coauthored over 200 journal and conference papers in these areas. He is a Senior Area Editor of the IEEE Transactions on Signal Processsing.
            
            `}
            />

            <CardForSpeaker 
            leftColumnRatio={3}
            rightColumnRatio={2}
            id="amin"
            talk = "Technical Talk" 
            name ="Dr. Amin Sakzad, Monash University"
            title = "High Throughput Lattice-based Signatures on GPUs: Comparing Falcon and Mitaka"
            abstract = "The US National Institute of Standards and Technology initiated a standardization process for post-quantum cryptography in 2017, with the aim of selecting key encapsulation mechanisms and signature schemes that can withstand the threat from emerging quantum computers. In 2022, Falcon was selected as one of the standard signature schemes, eventually attracting effort to optimize the implementation of Falcon on various hardware architectures for practical applications. Recently, Mitaka was proposed as an alternative to Falcon, allowing parallel execution of most of its operations. These recent advancements motivate us to develop high throughput implementations of Falcon and Mitaka signature schemes on Graphics Processing Units (GPUs), a massively parallel architecture widely available on cloud service platforms. In this paper, we propose the first parallel implementation of Falcon on variousGPUs. An iterative version of the sampling process in Falcon, which is also the most time-consuming Falcon operation, was developed. This allows us to implement Falcon signature generation without relying on expensive recursive function calls on GPUs. In addition, we propose a parallel random samples generation approach to accelerate the performance of Mitaka on GPUs. We evaluate our implementation techniques on state-of-the-art GPU architectures (RTX 3080, A100, T4 and V100). Experimental results show that our Falcon-512 implementation achieves 58, 595 signatures/second and 2, 721, 562 verifications/second on an A100 GPU, which is 20.03× and 29.51× faster than the highly optimized AVX2 implementation on CPU. Our Mitaka implementation achieves 161, 985 signatures/second and 1, 421, 046 verifications/second on the same GPU. Due to the adoption of a parallelizable sampling process, Mitaka signature generation enjoys ≈ 2 – 20× higher throughput than Falcon on various GPUs. The high throughput signature generation and verification achieved by this work can be very useful in various emerging applications, including the Internet of Things."
            bio = {`Dr. Amin Sakzad has got a Ph.D. degree in Applied Mathematics from Amirkabir University of Technology (AUT), Tehran, Iran, 2011. He was a research visitor and a lecturer at Carleton University, Ottawa, Canada, in 2010. He was a research lecturer at AUT in 2011. Starting from Jan. 2012, he was a research fellow at Software Defined Telecommunications (SDT) Laboratory in the Department of Electrical and Computer Systems Engineering at Monash University under supervision of Prof. Emanuele Viterbo. From Feb. 2015 to April 2017, he was a research fellow at Clayton School of Information Technology at Monash University under supervision of Dr. Ron Steinfeld. As of May 2017, he is a Lecturer (Assistant Professor) at Faculty of Information Technology at Monash University. As of July 2021, Amin is a Senior Lecturer (Associate Professor) at FIT. 
            Dr. Amin Sakzad is mainly interested in applications of lattices in cryptography and wireless communications. This includes applications of Algebraic Number Theory, Diophantine Approximation and Finite Fields in physical layer network coding and security, multiple-input multiple-output (MIMO) channels, lattice-based cryptography, and searchable encryption.`}
            />

            <CardForSpeaker 
            leftColumnRatio={3}
            rightColumnRatio={2}
            id="felix"
            talk = "Technical Talk" 
            name ="Dr. Felix Shen, University of Western Australia"
            title = "Forward Scatter Shadow Ratio in Spherical Wave and an Optimization Method for Shadow Profile Retrieval"
            abstract = "The forward scatter shadow ratio (FSSR), a novel parameter in forward scatter radar (FSR) systems, has been introduced recently for a plane wave. In contrast to conventional parameters like the forward scatter cross section (FSCS), FSSR utilizes the total electric field, providing a direct indicator of signal deviations from the direct path. A new study has overcome the limitations of the existing FSSR model by conducting a comprehensive mathematical and numerical analysis for a spherical wave with the Kirchhoff diffraction formula. By incorporating a point source and moving targets, the new approach extends the application scope of FSSR. A plane wave equivalent model is derived and compared to the point source model, demonstrating its accuracy in various scenarios. The optimization method for target shadow profile retrieval in moving targets is discussed using the plane wave equivalent model. It is shown mathematically that the discrete observations of FSSR can be utilized to retrieve the target's shadow profile, represented by a finite number of rectangular strips. It is suggested that employing dual receivers can eliminate the ambiguity associated with target localization and enhance shadow profile retrieval precision. The proposed method demonstrates abilities of retrieving the shadow profile of targets with various sizes and shapes, with good retrieval performance identified under two conditions: moderate distance between the two receivers and the target center’s projection on the observation plane being in close proximity to one of the receivers."
            bio = {`Dr. Xi (Felix) SHEN received the B.E.E.E. degree in electronic engineering from Tsinghua University, Beijing, China, in 2003, and the Ph.D. degree in electronic engineering from the Imperial College London, London, U.K., in 2006. He was with China Unicom as a Telecommunication Engineer and then a Senior Engineer for eight years. He joined the School of Electrical, Electronic, and Computer Engineering at UWA as a researcher in 2017. His research interests include passive forward scatter radar, environmental monitoring using microwave communication links and signal processing in satellite communication.
            `}
            />

            <CardForSpeaker 
            leftColumnRatio={3}
            rightColumnRatio={2}
            id="vu"
            talk = "Technical Talk" 
            name ="Dr. Thanh Tung Vu, Macquarie University"
            title = "User Association for Wide-Area mm-Wave Networks"
            abstract = "Next-generation communication systems need millimetre-wave (mm-wave) with massive bandwidth to support time-critical applications, such as autonomous cars, internet of things, and extended reality. This technical talk aims to address the key challenges of signal blockage and dynamic link management in providing wide-area seamless mm-wave services, a capability beyond current networks’ reach. A novel user association (UA) scheme that minimises the time required for clearing data traffic of users in the coverage area. We formulate the UA problem as a time allocation problem, allocating time to user-base station links. We provide an innovative two-stage approach to solve this problem. Stage one optimises a time fraction allocation for user-base station links. Then these time fractions are distributed across the radio frequency chains at each base station using a fully distributed algorithm. Stage two then schedules the user-base station links, provably solving the UA minimum clearing time problem. We then characterize the achievability of any set of target user rates. Numerical results show that our proposed UA scheme achieves significantly reduced clearing times in comparison to baseline schemes. The proposed UA scheme will help to develop further practical resource allocation algorithms and optimisation tools for network operators to plan their future ultra-reliable low-latency mm-wave network rollouts. This promises significant benefits across key sectors like healthcare, transportation, advanced manufacturing, and consumer entertainment."
            bio = {`Dr Thanh Tung Vu received a Ph.D. degree in wireless communications from The University of Newcastle, Australia, in 2021. He is currently a Postdoctoral Research Fellow at the School of Engineering, Macquarie University, Australia. His research interests include optimization, communication theories, and machine learning applications for 5G-and-beyond wireless networks, especially with massive MIMO, cell-free massive MIMO, federated learning, full-duplex communications, and physical layer security technologies. Dr. Thanh Tung Vu is serving as an Editor of Elsevier Physical Communication (PHYCOM). He has also served as a member of the technical program committee and the symposium/session chair at several IEEE international conferences such as GLOBECOM, ICCE, and ATC. He was an IEEE Wireless Communications Letters exemplary reviewer for 2020 and 2021, and an IEEE Transactions on Communications exemplary reviewer for 2021. He received the Best Poster Award at the AMSI Optimise Conference in 2018.
            `}
            />

            <CardForSpeaker 
            leftColumnRatio={3}
            rightColumnRatio={2}
            id="sean"
            talk = "Technical Talk" 
            name ="Prof. Xiangyun (Sean) Zhou, Australian National University"
            title = "From Perfect Secrecy to Partial Secrecy: A Quick Look at Physical-Layer Security Metrics"
            abstract = "In this talk, we will have a quick look at the various analytical frameworks that have been used to measure and quantify the performance of physical-layer security systems and designs, especially for wireless channels. We will first look at the most widely used performance metrics that are in the asymptotic perfect secrecy regime and understand their meaning and limitations. Then we will look at the more recent efforts in partial-secrecy based performance metrics and discuss their merits."
            bio = {`Sean Zhou is an Associate Professor at the Australian National University and a Fellow of the IEEE. His first AusCTW attendance was back in 2007 where he published his very first research paper.
            `}
            />
        </Container>
        
    );
  }
  
export default Talks;