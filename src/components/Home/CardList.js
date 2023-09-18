import React from "react";
import Card from "./Card";
import philippa from "../../Assets/philippa.jpg";
import matthew from "../../Assets/MatthewMcKay.jpg";
import emanuele from "../../Assets/Emanuele-Viterbo.jpg";
import steven from "../../Assets/StevenWeller.jpg";

const cardData = [
  {
    id: 1,
    image: philippa,
    title: "Philippa Martin",
    affiliation: "University of Canterbury, NZ",
    description: "Prof. Philippa Martin received the B.E. (Hons.) and Ph.D. degrees in electrical and electronic engineering from Te Whare Wānanga o Waitahi | University of Canterbury (UC), Ōtautahi | Christchurch, Aotearoa | New Zealand, in 1997 and 2001, respectively. She was a Postdoctoral Fellow there in 2001-2004. In 2002, she was a Visiting Researcher at the University of Hawaii at Manoa, USA. Since 2004, she has been an Academic with UC, where she is currently a Professor. She is a Fellow of Engineering New Zealand, Senior Member of IEEE and a Senior Fellow of the Higher Education Academy, UK. Her communications research interests include error correction coding, decoding and detection algorithms, equalization, multiple antenna systems, channel modelling, and 5G-6G communications, in particular for wireless communications. She served as an Editor of the IEEE Transactions on Wireless Communications in 2005-2008 and 2014-2016. She was a member of the IEEE Communication Society Board of Governors in 2019-2021 and currently serves on their Financial standing committee.  In addition, Philippa has a Certificate of Arts in Te Reo Māori and Māori and Indigenous Studies, Postgraduate Certificate in Counselling Studies, Postgraduate Certificate in Strategic Leadership and Postgraduate Certificate in Tertiary Teaching. Her research interests include engineering education as well as diversity, equity and inclusion. She set up an award-winning peer mentoring program at UC called ENG ME! (ENVI 2023 Engineering Education award from Engineering New Zealand), while being Dean of Engineering (First Year) in 2017-2021. In 2023, she received the national Te Whatu Kairangi Aotearoa Tertiary Teaching Award for transforming engineering education for students, institutions and community benefit. "
  },
  {
    id: 2,
    image: matthew,
    title: "Matthew McKay",
    affiliation: "University of Melbourne",
    description: "Matthew McKay is an ARC Future Fellow and Professor at the University of Melbourne.  He holds a joint appointment in the Department of Electrical and Electronic Engineering and the Department of Microbiology and Immunology in the Peter Doherty Institute for Infection and Immunity. Matthew was previously an Assistant Professor, Hari Harilela Associate Professor, and Full Professor at the Hong Kong University of Science and Technology (HKUST), where he continues to hold an Adjunct Professor position. He has been a Research Scientist with the Institute for Medical Engineering & Science (IMES) at MIT and with the Department of Statistics at Stanford.  He received his Ph.D. in electrical engineering from The University of Sydney. He is a Fellow of the IEEE, and has served as a Young Scientist of the World Economic Forum and the World Laureates Forum. In 2021, he was awarded the Australia-China Alumni Award for Research and Science by the Australia-China Alumni Association.  Matthew's areas of interest include machine learning and signal processing, and their applications to infectious diseases and vaccines."
  },
  {
    id: 3,
    image: steven,
    title: "Steven Weller",
    affiliation: "Australian Research Council",
    description: "Professor Steven Weller joined the ARC as Executive Director, Engineering, Information and Computing Sciences in March 2023. Prof. Weller received the B.E. (Hons. I) degree in Computer Engineering in 1988, the M.E. degree in Electrical Engineering in 1992, and the Ph.D. degree in Electrical Engineering in 1994, all from the University of Newcastle, Australia. During 1994–1997, he was a Lecturer in the Department of Electrical and Electronic Engineering, University of Melbourne, Australia. In 1997, he joined the University of Newcastle, where he served as Head of School of Electrical Engineering and Computer Science (2007–2009). He was also Assistant Dean Research (2011–2013) for the Faculty of Engineering and Built Environment, where he served as Deputy Head of Faculty (2013-2020). Over the period 2020–2023 he was Director of the Science and Engineering Challenge (SEC) a national outreach program inspiring young people to study science, technology, engineering and mathematics subjects in senior high school. Currently he is Professor of Electrical Engineering at the University of Newcastle. Highly awarded, Professor Weller is also an elected Fellow of the Royal Society of New South Wales. Prof. Weller's research interests are in control theory and its applications. He is especially interested in applications of control theory to energy systems, climate economics, and in cyber-security of modern power systems"
  },
  {
    id: 4,
    image: emanuele,
    title: "Emanuele Viterbo",
    affiliation: "Monash University",
    description: "Emanuele Viterbo",
  },
  // Add more card data objects here
];

function CardList() {
  return (
    <div className="flex flex-wrap -mx-4">
      {cardData.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}

export default CardList;
