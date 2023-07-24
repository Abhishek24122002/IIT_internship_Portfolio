// target the table cells responsible for the books
const books = document.querySelectorAll(".container__table td");
// target the div in which to display the snippet connected to the book
const snippet = document.querySelector(".accordion");

// define an object which details the different snippet to showcase, according to the book which is clicked
const snippets = {
  grid:
    'Peer Reviewed \n • Kumar, A., Varshney, Y., Gupta., & Khan, A. (2022). Effectiveness of Intervention for Improvement of Reading Ability by Combining Visual and Haptic Modality. Journal of Research in Reading.\n • Redkar, M., Khan, A. (2022). Prospective Memory and Poly-Cystic Ovarian Syndrome and Among Woman in Tribal Population of India: An Empirical Investigation. Health Care for Women International,\n •  & Khan, A. (2022). Code switching among multilingual university students in Kazakhstan Evidence from a mixed-methods study. Journal of Psycholinguistic Research. \n • Mishra, A, & Khan, A. (2022). Domain-General and Domain-Specific Cognitive Correlates of Developmental Dyscalculia: A Systematic Review of Last Two Decades Literature. Child Neuropsychology. \n • Sharma, S.N., & Khan, A. (2022). The interactive effect of time pressure and incidental emotion on intertemporal choice.  Journal of Risk and Uncertainty (Submitted).\n • Hasan, A., Khan, A, & Khan, A. (2022). Parasocial Relationships and Repeated Viewing of YouTube and TV Channels: A Mediated Moderated Framework\n • Khan, A. (2022). " Effect of Extreme Environment and Isolation on Subjective Time Estimation in Antarctica During Summer: A Cross Sectional Investigation. EcoPsychology, (Under review). \n • Nanditha, K., & Khan, A. (2021). Response Inhibition and Neurological Soft Sign among Children with Attention Deficit and Hyperactivity Disorder, Polish Psychological Bulletin (Under view \n •  Khan, A. (2021). Prospective Memory Performance and Emotional Regulation During Wintering at Bharati Station in Antarctica, Polar Science (Accepted). \n •  Prabir G. D., & Khan, A. (2021). Do Penguins Possess Self-Awareness and Social Instincts? The First study in Natural Environment of Antarctica. Animal Cognition. Under-review (First revision). ANCO-D-20-00281.\n •   Garg, P., & Khan, A. (2021). Mindfulness as a Function of Stress Resiliency and Psychological well-being: Building an Empirical Case of Medical Practitioners. Journal of Advances in Management Research. \n •  Sharma, S. N. & Khan, A. (2022). Self-other differences in intertemporal decision making: An eye-tracking investigation. Consciousness and Cognition. 102, 103356.  https://doi.org/10.1016/j.concog.2022.103356 \n •  Ahmad Mir, F., & Khan, A. (2022). The Role of Proficiency in Kashmiri Language in Phonological Processing Skills: A Cognitive-linguistic Approach. East European Journal of Psycholinguistics, 9(1). https://doi.org/10.29038/eejpl.2022.9.1.ahm. \n •  Warda, S., & Khan, A. (2022). Interval Timing in a Hierarchical Violation of Expectation Task: Dissociating Local and Global Predictions in Perceived Time, Attention, Perception, & Psychophysics (Accepted). \n •  Hasan, A., Nair, Ranjit., & Khan, A. (2022). Analyzing Hate Speech Against Migrants and Woman through Tweets Using Deep Learning Model. Computational Intelligence and Neuroscience. Article ID 8153791, https://doi.org/10.1155/2022/8153791. IF 4.40. \n •  Varshney, Y.V., & Khan, A. (2022). Decoding Imagined speech of phonetically distributed words using EEG, Frontiers Signal Process. - Biomedical Signal Processing, https://doi.org/10.3389/frsip.2022.760643 \n •  Varshney, Y.V., & Khan, A. (2021). Audio assisted EEG segmentation for training of Imagined speech classification mode. Proc. of the International Conference on Electrical, Computer and Energy Technologies (ICECET) 9-10 December 2021, Cape Town-South Africa \n •  Sharma, S. N. & Khan, A. (2021). Intertemporal preference reversals are associated with early activation of insula and sustained preferential processing of immediate rewards in visual cortex. Scientific Reports 11, 22277 (2021). https://doi.org/10.1038/s41598-021-01579-7. \n •  Khan, A., Khasanova, K.., & Akhmedova, S.B. (2021).  Assessing the quality of education through the Eyes of students during a Pandemic. The American Journal of Social Science and Education Innovations, 3(9), 5-7. \n •  Girnyk, А.М., Krylova-Grek Y.M., & Khan, A. (2021). Concept of Conflict in India and Ukraine: Psycholinguistic Approach to Comparative Cultural Studies, East European Journal of Psycholinguistics. Vol 8 (2). \n •  Mandal, M & Khan, A. (2021). Attention switching deficit in patients of Parkinson’s disease who experience freezing of gait, Applied Neuropsychology: Adult, DOI:10.1080/23279095.2021.1951268. \n •  Fazli, S., Chaudhari, P., & Khan, A. (2021).    Effect of risk perception, perceived susceptibility and trustworthiness of information sources on maladaptive behavioural during COVID-19: An investigation of psychological well-being.  Journal of Psychosocial Well-being. Vol-2 (1). \n •  Mandal, M., & Khan, A. (2021).Cognitive assessments in Parkinson’s disease: A review of a decade. Science, Technology and Development, 189-196. \n •  Hasan, A., Pandey, D. & Khan, A. (2021).  Application of EEG Time-Varying Networks in the Evaluation of Dynamic Functional Brain Networks. Augment Hum Res 6, 8 (2021). https://doi.org/10.1007/s41133-021-00046-2. \n •  Mandal, M., & Khan, A. (2020). Freezing of gait in Parkinsons disease: A sustained attention failure. Parkinsonism & Related Disorders, 79(1), e24. https://doi.org/10.1016/j.parkreldis.2020.06.110.',
  
  flex: 'Edited Book\n• K.K. Sarna., Khan, A., Khan, W., & Saini, S. (2023). Neurocognitive Underpinning of Neurological Disorders: Role of Default Mode Network. Hormone Related Cancer Mechanistic and Nanomedicines: Challenges and Prospects (Edited). ISBN-13:9789811955570, Publisher: Springer Nature Singapore. \n• Husain, A., & Khan, A. (2022). Emotion Prediction through EEG recordings using Computational Intelligence. Computational Intelligence for Information Retrieval.CRC Press, Tayler & Francis. ISBN 9780367680800. \n •Sharma N., Khan A. (2021). Assessing Relationship Between Drivers Behavior and Cognitive Failure-Categorizing Sub-groups of Drivers. \n• Mora-Fernandez J., Khan A., EstÃ©vez F., Webster F., FÃ¡rez M.I., Torres F. (2020) IMotionsâ€™ Automatic Facial Recognition \n & Text-Based Content Analysis of Basic Emotions & Empathy in the Application of the Interactive Neurocommunicative Technique LNCBT (Line & Numbered Concordant Basic Text). In: Duffy V. (eds) Digital Human\n Modeling and Applications in Health, Safety, Ergonomics and Risk Management. Human Communication, Organization and Work. HCII 2020. Lecture Notes in Computer Science, vol 12199. Springer Nature, Cham. \n• Pereirs, D., & Khan, A (2016).Brain lateralization of emotional processing in depression. In Depression, Edited by DagmarBreznoÅ¡ÄÃ¡kovÃ¡INTECH Publishing, Crotia. \n• Kapoor, H. & Khan, A. (2015). Double negatives: The Dark Triad and negative creativity. In F. Reisman (Ed.), 2015 KIE Handbook of Creativity: Research Papers on Knowledge, Innovation and Enterprise, Volume III(pp. 98--113). Istanbul, Turkey.doi:10.13140/RG.2.1.1809.3925\n Kapoor, H & Khan, A. (2015). THE Dark Triad and Negative Creativity,KIE Handbook of Creativity, 98-113. \n• Khan, Azizuddin (2009. DevelopmentalDyslexia: Current Scenario (Eds.), Kalpaz Publishing Publishing House, New Delhi. \n• Khan, Azizuddin & Khan A (2009.Cognitive Style and Mentoring: An Approach for Organizational Development (Eds.), Global Publishing House, New Delhi. \n• Khan, Azizuddin, Qazi T, & Khan A (2008.Cognitive Skills in Sport Performance (Eds.), Global Vision Publishing House, New Delhi. \n• Khan, Azizuddin, Qazi T, & Khan A (2007.Psychological Disease and Immune Function: Psychoneuroimmunological Perspective (Eds.), Global Vision Publishing House, New Delhi. \n• Hussain, Khan, Azizuddin. & Ahuja R. (2005). Stress: An Overview, Human Stress Management (Eds.), Global Vision Publishing House, New Delhi. ',
  float: '1. Khan, Azizuddin (2011). Prospective Memory: Realization of Delayed Intention. University Book House Publication, Jaipur, Funded by Indian Council of Social Science (ICSSR), New Delhi. \n 2. Husain, Akbar., Khan, Azizuddin., Kirmani, M.N., & Khatoon, Z. (2020). Psychological Perspectives in Islam and Sufism. Global Vision Publishing House, ISBN-10: 8194771668; ISBN-13: 978-8194771661.',
  table: 'Shyam R & Khan Azizuddin (2009). Clinical Child Psychology, Kalpaz Publishing House, New Delhi.',
  thesis:'Thesis Supervision: (M. Tech) \n Amit Kumar (173100031). “Development of Multisensory technique for intervention of developmental dyslexia: An electrophysiological and behavioural approach”. (2017-2019). Completed \n \n Thesis Supervision: (M. Phil) \n Akash Shekapure (208080010). Work from Home Experiences of Persons with Physical disabilities in the Mumbai & Thane area”(2020-2022) Completed. \n Neelam Lakra (208080005), “A Comparative Study of School Readiness and Quality of Education in Government and Private Pre-School”. (2020-2022), Completed. \n Fazli Salim (198080001), Environment Risk Perception and decision making, 2019-21(Completed). \n Anupam Sharma (158080005), An Investigation into the relationship between Cognitive Styles, Personality and Multimedia Learning Preference among College students, 2017-2019 (Completed) \n Sohinee Ganguly, Stress and its Consequences in Undergraduate at IIT Bombay, 2008 (Completed) Co-guide with Prof. Pooja Purang.'
} 

// add an event listener for a click event on all books
books.forEach(book => book.addEventListener("click", handleClick));

// define a function which appends to the selected div the tags required to showcase a snippet
function handleClick(e) {
  let id = e.target.getAttribute("id");
  console.log(id);
  snippet.innerHTML = `<pre><code>${snippets[id]}</code></pre>`
}