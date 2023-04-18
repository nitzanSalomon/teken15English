const DATA = { 
    // נוגדי אלרגיה
    "antiallergic": {
        // תרגול
        "questionsPractice": [
            {
                type: `multiple`,
                question: `What is histamine?`,
                ans1: `A substance that stimulates an immune response`,
                ans2: `Name of a medicine`,
                ans3: `Name of a virus`,
                ans4: `An essential vitamin for the body`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `What is the mechanism of action of antihistamines?`,
                ans1: `Blocking histamine receptors`,
                ans2: `Destroy histamine in the body`,
                ans3: `The same mechanism of action of histamine in the body, only that it is produced artificially`,
                ans4: `Duplication of histamine in the body`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `What is the main side effect of Allergics - Arius in high doses`,
                ans1: `Dizziness`,
                ans2: `Headaches`,
                ans3: `Sleepiness`,
                ans4: `Answers a + c are correct-*`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `What is the indication for giving Allergics - Arius?`,
                ans1: `Shortness of breath`,
                ans2: `Headaches`,
                ans3: `Eye infection`,
                ans4: `Urticaria (rash)`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `What is the indication for giving Optilast - Estelin?`,
                ans1: `Urticaria (rash)`,
                ans2: `Allergic eye inflammation`,
                ans3: `Dizziness`,
                ans4: `Muscle pains`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `What is a major but rare side effect of Optilast - Acetlin?`,
                ans1: `Strabismus`,
                ans2: `Asthma attack`,
                ans3: `Chronic rhinitis`,
                ans4: `Burning eyes`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `What is the indication for giving Prednisone?`,
                ans1: `Severe inflammation`,
                ans2: `Hormonal disorders`,
                ans3: `Allergic rhinitis`,
                ans4: `Answers a + b are correct`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `What is a major side effect of Prednisone?`,
                ans1: `Neurological phenomena such as convulsions`,
                ans2: `Severe inflammation`,
                ans3: `Allergic rhinitis`,
                ans4: `Answers a + c are correct`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `In what form of administration should Felixones be given?`,
                ans1: `Pill`,
                ans2: `Inhalation`,
                ans3: `Nasal spray`,
                ans4: `Oinment `,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `What is not a major side effect of Prednisone?`,
                ans1: `Increase in sugar levels`,
                ans2: `Blood pressure increase`,
                ans3: `Mineral balance disorders`,
                ans4: `Decrease in protein levels in the body`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `What are the Prednisone treatment instructions?`,
                ans1: `Do not stop the treatment suddenly`,
                ans2: `Do not take the medicine together with alcohol`,
                ans3: `Take on an empty stomach`,
                ans4: `Answers a + c are correct`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `What is the indication for administering Betacortan?`,
                ans1: `Chronic rhinitis`,
                ans2: `Psoriasis (scaly skin lesions)`,
                ans3: `Hormonal disorders`,
                ans4: `Answers b + c are correct`                ,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `What is the main side effect of giving Sinophed?`,
                ans1: `Difficulty sleeping`,
                ans2: `nervousness`,
                ans3: `Palpitations`,
                ans4: `All the answers are correct`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `What is the main side effect of Cinnolan?`,
                ans1: `Dryness/burning in the mucous membranes of the nose and throat`,
                ans2: `Worsening nasal congestion`,
                ans3: `High blood pressure`,
                ans4: `All the answers are correct`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `How many drops should be put in each nostril and how often?`,
                ans1: `Up to 2 drops per nostril, 3 times a day`,
                ans2: `Up to one drop per nostril, 3 times a day`,
                ans3: `Up to 2 drops per nostril, twice a day`,
                ans4: `Up to one drop per nostril, twice a day`,
                correctAns: `ans1`
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `multiple`,
                question: `What is the active ingredient in the drug Atrofen?`,
                ans1: `Etodolac`,
                ans2: `Ibuprofen`,
                ans3: `Paracetamol`,
                ans4: `Diclofenac`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `A patient suffering from abdominal pain, vomiting and diarrhea was prescribed Papavernine. What is the purpose of the drug?`,
                ans1: `Against vomiting`,
                ans2: `Headache prevention`,
                ans3: `Relieving pain originating from the urinary tract through muscle contraction`,
                ans4: `Pain relief originating from the digestive tract through muscle relaxation`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `What are the drugs of choice in a headache situation?`,
                ans1: `Acamol Focus`,
                ans2: `Laxadin`,
                ans3: `Pramin`,
                ans4: `Etopan`,
                correctAns: `ans1`
            },
        ],
        "amountOfQuestions": 1,
    },
    // אנטיביוטיקה
    "antibiotics": {
        // תרגול
        "questionsPractice": [
            {
                type: `multiple`,
                question: `In which mechanisms can antibiotics work?`,
                ans1: `Destroy the bacterium's cell nucleus.`,
                ans2: `Damage to the cell wall of the bacterium.`,
                ans3: `Damage to the entry of nutrients into the bacterial cell.`,
                ans4: `Damage to the body's heat regulation`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `Which of the following drugs is not an antibiotic?`,
                ans1: `Ceforal`,
                ans2: `Papaverine`,
                ans3: `Moxypen`,
                ans4: `Synthomycin`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `A soldier who received antibiotics due to bacterial sore throat contacted you after 3 days (out of 10) claiming that he feels better and wants to stop taking the medicine. How will you guide him?`,
                ans1: `If you feel well, you may stop the treatment.`,
                ans2: `He must complete half of the treatment (5 out of 10 days) and then he can stop.`,
                ans3: `He must complete the treatment as initially prescribed, even though he feels better.`,
                ans4: `The soldier will be referred to a doctor, it may be necessary to change medicine.`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `Which side effect of antibiotics may continue even after the end of the treatment and requires a visit to the doctor?`,
                ans1: `Abdominal pain`,
                ans2: `Heart rhythm disorders`,
                ans3: `Disorders in the balance of minerals in the blood`,
                ans4: `Prolonged diarrhea`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `Most antibiotics given P.O. Is it recommended to take...?`,
                ans1: `Before eating on an empty stomach.`,
                ans2: `Without having sex a week after the treatment.`,
                ans3: `After eating on a full stomach.`,
                ans4: `Before sleep.`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `What are common side effects of many of the antibiotics given P.O.?`,
                ans1: `Stomach aches and diarrhea`,
                ans2: `Heart rhythm disorders`,
                ans3: `Anaphylactic reaction`,
                ans4: `Cough`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `Which antibiotics can lead to heart rhythm disorders?`,
                ans1: `Ointments like synthomycin`,
                ans2: `The penicillin group (e.g. moxypen)`,
                ans3: `Only injectable antibiotics can lead to heart rhythm disturbances in rare situations`,
                ans4: `The macrolide group (e.g. roxythromycim-rulid)`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `How should we guide a female soldier who is taking ofloxacin (oflodex) (from the fluoroquinolones group)?`,
                ans1: `Be careful in activities that require relaxation such as sleep`,
                ans2: `It is allowed to stop the treatment in the middle if you feel better`,
                ans3: `Prolonged exposure to the sun should be avoided, use sunscreen`,
                ans4: `Abdominal pain is not part of the side effects of this medicine`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `How do we guide a soldier who received a prescription for mupirocin (bactroban)?`,
                ans1: `Swallow after food`,
                ans2: `Avoid contact with intimate areas.`,
                ans3: `Do not use cosmetic products on the application area.`,
                ans4: `The medicine does not treat infections of the skin but only of mucous membranes`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `Correct highlights for applying synthomycin ointment in the eye?`,
                ans1: `The ointment is intended for external use on the eyelids only`,
                ans2: `It is necessary to bandage the eye after using the ointment`,
                ans3: `Wash your hands before and after using the paste`,
                ans4: `It is forbidden to close the eye for one minute after use`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `What is the purpose of the drug Acyclovir?`,
                ans1: `Antibiotics`,
                ans2: `A drug that is both an antibiotic and a steroid (suppresses the immune system).`,
                ans3: `Antifungal`,
                ans4: `Anti-viral`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `A female soldier received a prescription for VAG TAB clotrimazole, what is the route of administration?`,
                ans1: `Candle for rectal use`,
                ans2: `Oinment`,
                ans3: `Vaginal`,
                ans4: `A capsule to swallow`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `What will we instruct a female soldier regarding the use of VAG TAB clotrimazole?`,
                ans1: `Avoid intercourse during treatment`,
                ans2: `It is allowed to stop the treatment in the middle if the symptoms decrease`,
                ans3: `Treatment should not be continued even during menstrual bleeding`,
                ans4: `Take after a meal only on a full stomach`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `When should mupirocin (bactroban) not be applied?`,
                ans1: `Allergy to the drug`,
                ans2: `under the age of 18`,
                ans3: `Answers a + d are correct`,
                ans4: `Extensive open wounds \ extensive burns.`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `What is the purpose of the drug undecyl?`,
                ans1: `Ointment for the treatment / prevention of foot fungus`,
                ans2: `Powder for the treatment / prevention of foot fungus`,
                ans3: `Powder for the treatment / prevention of fungi in the groin and scalp`,
                ans4: `"sun fungus" treatment`,
                correctAns: `ans2`
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `multiple`,
                question: `What is the effect of the drug Sedural?`,
                ans1: `Antifungal in the urinary tract`,
                ans2: `Antibiotics against urinary tract infection`,
                ans3: `Sensation of the urinary tract area`,
                ans4: `Relaxes the muscles of the urinary tract area`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `What is the mechanism of action of Ahiston?`,
                ans1: `Sputum thinning`,
                ans2: `Antihistamine`,
                ans3: `Antibiotics`,
                ans4: `Antifungal`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `What is the focus of administering Ibuprofen?`,
                ans1: `Do not take before activity that requires alertness`,
                ans2: `Must be taken before bed`,
                ans3: `Must be taken on a full stomach`,
                ans4: `Drink more after taking`,
                correctAns: `ans3`
            },
        ],
        "amountOfQuestions": 1,
    },
    // מחלות כרוניות
    "chronicDiseases": {
        // תרגול
        "questionsPractice": [
            {
                type: `multiple`,
                question: `What is cardiac output?`,
                ans1: `Heart rate X pulse volume`,
                ans2: `Heart rate X blood vessel diameter`,
                ans3: `Pulse volume X blood pressure`,
                ans4: `Blood vessel diameter X stroke volume`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `What are the three main factors that affect blood pressure?`,
                ans1: `Blood vessel volume, cardiac output, blood vessel diameter`,
                ans2: `The volume of the blood, the diameter of the blood vessels, the strength of the contraction of the heart`,
                ans3: `The heart rate, the strength of the contraction of the heart, the diameter of the blood vessels`,
                ans4: `Heart rate, cardiac output, blood volume`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `What type of antihypertensive drug will lower blood volume?`,
                ans1: `Diuretic drugs`,
                ans2: `Medicines that slow down the heart rate`,
                ans3: `Medicines that weaken the activity of the heart`,
                ans4: `Medicines that expand the diameter of blood vessels`                ,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `Which of the following will decrease cardiac output?`,
                ans1: `Diuretic drug`,
                ans2: `Weakening the intensity of the pulse`,
                ans3: `Dilation of blood vessels`,
                ans4: `Bronchial dilatation`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `What type of drug lowers cardiac output?`,
                ans1: `Diuretic drug`,
                ans2: `Weakening the intensity of the pulse`,
                ans3: `Dilation of blood vessels`,
                ans4: `A drug that relaxes muscles`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `What are the indications for amlodipine?`,
                ans1: `Hypertension, angina`,
                ans2: `Low blood pressure, pulmonary edema`,
                ans3: `Difficulty breathing, asthma`,
                ans4: `Vomiting and nausea`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `What are the main side effects of the drugs amlodipine teva and Norvasc?`,
                ans1: `A drop in blood pressure manifested by dizziness, tachycardia, etc`,
                ans2: `Shortness of breath resulting from bronchial constriction`,
                ans3: `Sensation of palpitations (feeling of strong heartbeats at rest).`,
                ans4: `Excessive absorption of calcium in the digestive system`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `What is the mechanism of action of enaladex (enalapril)?`,
                ans1: `Dilates blood vessels and increases excretion of fluids and salts in the urine.`,
                ans2: `Lowers the heart rate and pulse intensity`,
                ans3: `Urinates and lowers the heart's output`,
                ans4: `Dilation of blood vessels and bronchi`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `What are the indications for administering enaladex (enalapril)?`,
                ans1: `Sickle cell anemia`,
                ans2: `type ll diabetes`,
                ans3: `Excess blood lipids`,
                ans4: `Heart failure`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `What are the contraindications of the drug hydrochlorothiazide?`,
                ans1: `Allergy to the drug and lack of urination (less than 50 ml per day).`,
                ans2: `High blood pressure and kidney failure`,
                ans3: `Allergy to peanuts and nuts, peripheral edema`,
                ans4: `A patient is taking antiepileptic drugs`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `What are the contraindications for the drug enaladex (enalapril)?`,
                ans1: `Allergy to the drug and kidney failure`,
                ans2: `High blood pressure`,
                ans3: `Stomach ulcer or intestinal obstruction`,
                ans4: `G6PD hormone deficiency `,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `How would you instruct a patient to take disothiazide?`,
                ans1: `Drink at least 12 glasses of water a day to prevent dehydration`,
                ans2: `Avoid prolonged exposure to the sun without protective measures`,
                ans3: `Stop use if dizziness starts`,
                ans4: `Avoid eating or drinking sweets`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `What are the side effects of simvastatin?`,
                ans1: `Breakdown of muscle tissue and damage to the kidneys and liver`,
                ans2: `Decreased vision or double vision`,
                ans3: `Dizziness, headache and a tendency to faint`                ,
                ans4: `Muscle pain and increased sensitivity to light`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `How will you instruct a patient before taking the drug simvacor?`,
                ans1: `In the morning before the meal on an empty stomach`,
                ans2: `Together with the biggest meal of the day because cholesterol is most unnecessary after eating`,
                ans3: `Take in the evening, because cholesterol is most unnecessary during the night`,
                ans4: `A difference of two hours from any other medicine`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `What are the contraindications for taking ferrocal iron pills?`,
                ans1: `Stomach ulcer or intestinal obstruction`,
                ans2: `G6PD enzyme deficiency`,
                ans3: `Impaired liver or kidney function`,
                ans4: `Chronic dermatitis`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `How would you instruct a patient to take ferrous calcium citrate?`,
                ans1: `It is recommended to take together with fruit juices rich in vitamin C`,
                ans2: `To be taken separately from antihypertensive drugs`,
                ans3: `Take fifteen minutes before breakfast`,
                ans4: `Take after dinner and before bed`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `Which of the following is prohibited when taking ferrous calcium citrate?`,
                ans1: `It is forbidden to take the medicine together with a meal`,
                ans2: `It is forbidden to eat together with dairy products (at least two hours in between)`,
                ans3: `It is forbidden to perform sports activity at least one hour before taking it`,
                ans4: `Do not eat spinach during the entire period of taking it`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `What is hemoglobin?`,
                ans1: `The protein that carries oxygen in the blood`,
                ans2: `The protein that carries the glucose (sugar) in the blood`,
                ans3: `The protein which is responsible for acidity in the blood`,
                ans4: `The protein that is responsible for activating the immune system in the blood`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `What type of medicine should a patient be instructed not to take together with folic acid?`,
                ans1: `Antacids`,
                ans2: `Medicines to lower blood pressure`,
                ans3: `Medicines to lower blood lipids`,
                ans4: `Painkillers`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `What is the trade name of the drug acetylsalicylic acid?`,
                ans1: `Paracetamol`,
                ans2: `Advil`,
                ans3: `Opthalgin`,
                ans4: `Aspirin`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `Which of the following is a contraindication for administering acetylsalicylic acid?`,
                ans1: `Active gastric ulcer`,
                ans2: `Chronic arthritis`,
                ans3: `Gluten sensitivity`,
                ans4: `Save the TSH hormone`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `Who will not issue aspirin?`,
                ans1: `For the patient suffering from bloody stool`,
                ans2: `A patient with chronic renal failure`,
                ans3: `A patient with thyroid problems`,
                ans4: `A patient with a suspected herniated disc`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `Which of the following are side effects of the drug aspirin?`,
                ans1: `Chronic kidney failure`,
                ans2: `A temporary decrease in the sense of taste and smell`,
                ans3: `Heart rhythm disorders and mineral balance`,
                ans4: `Dizziness and nausea`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `When should the patient stop treatment with acetylsalicylic acid?`,
                ans1: `A month at the most from the start of the treatment`,
                ans2: `As a general rule, treatment should not be stopped without medical guidance`,
                ans3: `After about three months and depending on the inhibitor`,
                ans4: `Aspirin treatment is not mandatory and is therefore subject to the patient's decision`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `What is the form of taking simvastatin?`,
                ans1: `By swallowing only`,
                ans2: `By chewing`,
                ans3: `Powder in water`,
                ans4: `By a blow job`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `What should a patient be instructed to do during Norvasc treatment?`,
                ans1: `Carry out self-monitoring of blood pressure`,
                ans2: `Consume foods high in salts`,
                ans3: `Be sure to drink at least 12 glasses of water a day`,
                ans4: `Go to a doctor's follow-up every month`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `When will you instruct the patient to take hydrochlorothiazide (disothiazide)?`,
                ans1: `in the morning or afternoon in order to avoid having to urinate at night`,
                ans2: `on a completely empty stomach in the morning to prevent the formation of a stomach ulcer`,
                ans3: `Take before sleep`,
                ans4: `There is no specific guideline for taking the medicine`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `Which of the following is a major side effect of taking disothiazide?`,
                ans1: `Liver damage that requires medicinal balance`,
                ans2: `Migratory headaches and dizziness`,
                ans3: `Constipation and changes in stool color`,
                ans4: `Kidney failure and salt balance disorder`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `Which of the following is a contraindication for administering simvastatin?`,
                ans1: `Poor kidney function`,
                ans2: `Anemia treated with ferrocal`,
                ans3: `Liver dysfunction`,
                ans4: `Chronic low blood pressure`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `What is the purpose of folic acid treatment?`,
                ans1: `A nutritional supplement`,
                ans2: `Prevention of birth defects (treatment during pregnancy)`,
                ans3: `Treatment of anemia`,
                ans4: `All the answers are correct`,
                correctAns: `ans4`
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `multiple`,
                question: `What will you tell the soldier before dispensing the drug Allergyx?`,
                ans1: `Do not take before an activity that requires alertness such as driving`,
                ans2: `To be taken before going to bed`,
                ans3: `Must be taken on a full stomach`,
                ans4: `Drink more after taking`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `When is the purpose of Lyteers?`,
                ans1: `Prevention of diarrhea`,
                ans2: `Ointment for the treatment of skin infections`,
                ans3: `Sensation in the urinary tract`,
                ans4: `Eye drops, in case of dry eyes`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `How should the drug Abitren be administered?`,
                ans1: `Candle`,
                ans2: `inhalation`,
                ans3: `IM shot in the butt`,
                ans4: `Chewing`,
                correctAns: `ans3`
            },
        ],
        "amountOfQuestions": 1
    },
    // עיכול
    "digestion": {
        // תרגול
        "questionsPractice": [
            {
                type: `multiple`,
                question: `What can be caused by heartburn?`,
                ans1: `Esophageal damage`,
                ans2: `Intestinal damage`,
                ans3: `Stomach damage`,
                ans4: `Damage to the pancreas`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `In which of the following cases would the administration of antacids not be required?`,
                ans1: `Heartburn`,
                ans2: `Hyperacidity in the stomach`,
                ans3: `Acidic urine`,
                ans4: `Ulcers and inflammations in the stomach and duodenum`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `What is the mechanism of action of the drug omepra?`,
                ans1: `An antacid that makes the stomach contents basic`,
                ans2: `Inhibition of acid secretion in the stomach`,
                ans3: `Encouraging the digestion of stomach contents`,
                ans4: `Pain relief in the digestive system`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `To which group does the drug omepradex belong?`,
                ans1: `Antiemetics`,
                ans2: `Laxatives`,
                ans3: `Antidiarrheals`,
                ans4: `Antiacids`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `What are the instructions for taking the drug omepra?`,
                ans1: `Do not chew or crush the tablets`,
                ans2: `The tablet must be chewed`,
                ans3: `It should be taken half an hour to an hour after a meal`,
                ans4: `Must be taken after fasting for at least two hours`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `Which of the following is the authority of a medic?`,
                ans1: `Omepra`,
                ans2: `Rennie`,
                ans3: `Metoclopramide`,
                ans4: `Laxadin`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `What are the active ingredients in Rennie?`,
                ans1: `Calcium`,
                ans2: `Potassium`,
                ans3: `Natran`,
                ans4: `Sodum`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `What group does the drug rennie belong to?`,
                ans1: `Antiemetics`,
                ans2: `Laxatives`,
                ans3: `Antidiarrheals`,
                ans4: `Antiacids`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `What is the mechanism of action of the drug Rennie?`,
                ans1: `Contradicts acidity in the stomach`,
                ans2: `Encourages digestion`,
                ans3: `Lowers peristalsis`,
                ans4: `Esophageal pain reliever`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `How should Rennie be taken?`,
                ans1: `By swallowing`,
                ans2: `By chewing`,
                ans3: `By spraying`,
                ans4: `By a blow job`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `Which of the following is not a mechanism of action of antiemetics?`,
                ans1: `Increased motility and rapid emptying of the stomach`,
                ans2: `Increased secretion of hormones from the pancreas`,
                ans3: `Contraction of the lower valve in the esophagus (between the esophagus and the stomach).`,
                ans4: `Blocking receptors in the vomiting center in the brain`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `What is the active ingredient in Pramin?`,
                ans1: `Metoclopramide`,
                ans2: `Omeprazole`,
                ans3: `Bisacodyl`,
                ans4: `Loperamide`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `Which of the following should not be taken at the same time as drinking alcohol?`,
                ans1: `Omepra`,
                ans2: `Laxadin`,
                ans3: `Pramin`,
                ans4: `Paraffin`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `When should the drug pramin be taken?`,
                ans1: `Half an hour before a meal`,
                ans2: `Half an hour after a meal`,
                ans3: `In the morning`,
                ans4: `Before activity`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `Which of the following is pramin not given?`,
                ans1: `A patient who previously suffered from constipation`,
                ans2: `A patient suffering from urinary retention`,
                ans3: `A patient with simulated vomiting`,
                ans4: `A patient with chronic vomiting`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `What are the mechanisms of action of laxatives?`,
                ans1: `Encouraging liver activity`,
                ans2: `Accelerating the emptying of the lower digestive tract`,
                ans3: `Acceleration of gastric emptying`,
                ans4: `Acceleration of pancreatic activity`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `What is the active ingredient in the drug laxadin?`,
                ans1: `Bisacodyl`,
                ans2: `Laxadin`,
                ans3: `Omepra`,
                ans4: `Metoclopramide`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `What is the mechanism of action of the drug laxadin?`,
                ans1: `Accelerating peristalsis in the stomach`,
                ans2: `Acceleration of absorption in the stomach`,
                ans3: `acceleration of motility in the small intestine`,
                ans4: `Acceleration of motility in the colon`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `Which of the following should not be taken next to taking the drug laxadin?`,
                ans1: `alcohol`,
                ans2: `Other oral medications`,
                ans3: `milk`,
                ans4: `Medicines that affect the digestive system`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `To which group does the drug bisacodyl belong?`,
                ans1: `Antiacids`,
                ans2: `Laxatives`,
                ans3: `Antidiarrheals`,
                ans4: `Antiemetics`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `What is the mechanism of action of the drug paraffin?`,
                ans1: `Encourages fluid absorption from the intestine`,
                ans2: `Prevents absorption of fluids from the large intestine into the bloodstream`,
                ans3: `Encourages intestinal peristalsis`,
                ans4: `Encourages absorption of liquids in the stomach`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `How long in a row is it allowed to take paraffin (maximum time)?`,
                ans1: `4 days`,
                ans2: `5 days`,
                ans3: `1 week`,
                ans4: `2 weeks`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `How many doses of the drug paraffin can be taken per day?`,
                ans1: `3 `,
                ans2: `4`,
                ans3: `2`,
                ans4: `5`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `How long should one wait before giving a stool after inserting a fleet enema?`,
                ans1: `10-20 minutes`,
                ans2: `20-30 minutes`,
                ans3: `One hour`,
                ans4: `5-10 minutes`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `What is the active ingredient in the drug stopit?`,
                ans1: `Loperamide`,
                ans2: `Laxadin`,
                ans3: `Metoclopramide`,
                ans4: `Bisacodyl`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `What should be emphasized to the patient before taking the drug Stopit?`,
                ans1: `Do not take before sleep`,
                ans2: `Do not take before activities that require alertness`,
                ans3: `Must be taken on an empty stomach`,
                ans4: `2 pills should be taken at first, and one more after another diarrhea`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `What is the mechanism of the drug papaverine?`,
                ans1: `Rectal smooth muscle contraction`,
                ans2: `Encouraging fluid absorption in the intestine`,
                ans3: `Muscle relaxation in the digestive system`                ,
                ans4: `Prevention of acidity in the intestine`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `What is the mechanism of action of the drug rectozorin?`,
                ans1: `Local analgesia`,
                ans2: `Increasing intestinal motility`,
                ans3: `Relaxing the bowels`,
                ans4: `Pain relief in the digestive tract`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `When should the medicine rectozorin be applied?`,
                ans1: `Every morning`,
                ans2: `Every evening`,
                ans3: `Every morning and evening`,
                ans4: `Before every bowel movement`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `When should you stop applying the medicine rectozorin and consult a doctor?`,
                ans1: `If there is no improvement after 10 days`,
                ans2: `If it starts to itch`,
                ans3: `If bleeding starts`,
                ans4: `If there is no improvement after 5 days`,
                correctAns: `ans3`
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `multiple`,
                question: `What is true about Papaverine?`,
                ans1: `Must be taken on a full stomach`,
                ans2: `May cause a drop in blood pressure and dizziness`,
                ans3: `It should be taken before going to bed as it may cause drowsiness`,
                ans4: `The medicine should be taken in the morning`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `How should the drug Pink-Bismut be given?`,
                ans1: `Candle `,
                ans2: `Chewing `,
                ans3: `Inhalation `,
                ans4: `Sitting shot`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `What is the difference between Synthomycine 5% and Synthomycine 3%?`,
                ans1: `5% is intended for eye infections, 3% is intended for skin infections`,
                ans2: `5% comes in the form of a paste, 3% comes in the form of pills to swallow`,
                ans3: `5% comes in the form of a paste, 3% comes in the form of a syrup`,
                ans4: `There is no9 difference`,
                correctAns: `ans1`
            },
        ],
        "amountOfQuestions": 1
    },
    // משככי כאבים
    "painkillers": {
        // תרגול
        "questionsPractice": [
            {
                type: `multiple`,
                question: `What should not be done while taking the drug exidol?`,
                ans1: `Smoke `,
                ans2: `Drink alcohol`,
                ans3: `perform physical activity`,
                ans4: `Eat`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `What is the active ingredient of the drug dexamol?`,
                ans1: `dipyrone`,
                ans2: `acamol`,
                ans3: `paracetamol`,
                ans4: `nurofen`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `Which of the following drugs should not be given to a patient with liver function problems?`,
                ans1: `Optalgin`,
                ans2: `Acamol`,
                ans3: `Ibuprofen`,
                ans4: `Artofen`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `What is the active ingredient in the medicine called optalgin?`,
                ans1: ` Paracetamol`,
                ans2: `Exidol`,
                ans3: `Dipyrone`,
                ans4: `Ibuprofen`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `Which of the following drugs should not be given to a patient with bone marrow suppression?`,
                ans1: ` Optalgin`,
                ans2: ` Acamol`,
                ans3: ` Ibuprofen`,
                ans4: ` Atofen`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `Medicines from the NSAIDs family such as Ibufen, in addition to pain relief, will have the effect of _____`,
                ans1: `Muscle relaxation`,
                ans2: `soothing`,
                ans3: `Anti-inflammatory`,
                ans4: `Encouraging immune response`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `What is the mechanism of action of drugs from the NSAIDs family?`,
                ans1: `Inhibition of inflammatory processes`,
                ans2: `Muscle relaxation`,
                ans3: `Sedation of the patient`,
                ans4: `Unknown mechanism`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `What family does the drug ibuprofen belong to?`,
                ans1: `General analgesia`,
                ans2: `Anti-inflammatory pain relief`,
                ans3: `pain reliever relaxes muscles`,
                ans4: `Analgesia from an unknown mechanism`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `What is the name of the active substance in the drug artofen?`,
                ans1: `Paracetamol`,
                ans2: `Dipyrone`,
                ans3: `Ibufen`,
                ans4: `ibuprofen`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `When should Ibufen not be given?`,
                ans1: `After smoking`,
                ans2: `Before smoking`,
                ans3: `Liver function problems`,
                ans4: `Active gastric ulcer`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `Which of the following is not in the authority of a medic?`,
                ans1: `optalgin`,
                ans2: `ibufen`,
                ans3: `lemosin`,
                ans4: `deep heat`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `When is it recommended to take an ibufen pill?`,
                ans1: `Before a meal`,
                ans2: `After a meal`,
                ans3: `After fasting for two hours`,
                ans4: `It doesn't matter`                ,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `Which of the following is a side effect of ibufen?`,
                ans1: `Headache`,
                ans2: `General weakness`,
                ans3: `Nausea and vomiting`,
                ans4: `Abdorminal pain`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `What is the mechanism of action of the drug muscol?`,
                ans1: `Anti-inflammatory`,
                ans2: `soothing`,
                ans3: `unknown`,
                ans4: `Muscle relaxation`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `Which of the following must not be done while taking the medicine Muscol?`,
                ans1: `Drinking alcohol`,
                ans2: `smoking`,
                ans3: `taking medication P.O. others`,
                ans4: `go to sleep`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `What medicines should not be taken with the medicine Muscol?`,
                ans1: `drugs containing ibuprofen`,
                ans2: `drugs containing paracetamol`,
                ans3: `drugs containing dipyrone`,
                ans4: `drugs containing phenazopyridine`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `When should you not take the medicine Muscol?`,
                ans1: `before sleeping`,
                ans2: `before eating`,
                ans3: `after eating`,
                ans4: `Before an activity that requires alertness`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `How many times a day can deep heat / radian b be applied?`,
                ans1: `2-3 times`,
                ans2: `3-4 times`,
                ans3: `4-5 times`,
                ans4: `5-6 times`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `What is the active ingredient in the medicine sedural?`,
                ans1: `Ibuprofen`,
                ans2: `Dipyrone`,
                ans3: `Phenazopyridine`,
                ans4: `Benzocaine`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `What is the purpose of the medicine sedural?`,
                ans1: `Headache relief`,
                ans2: `Abdominal pain relief`,
                ans3: `Relief of joint pain`,
                ans4: `Urinary tract pain relief`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `What is the main side effect of the drug Sedural?`,
                ans1: `Coloring the body fluids in an orange shade`,
                ans2: `tiredness `,
                ans3: `Nausea and vomiting`,
                ans4: `Lack of urination`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `What instruction should be given to the patient taking sedural?`,
                ans1: `Be close to the bathroom`,
                ans2: `Do not eat foods containing legumes`,
                ans3: `Drink lots of water`,
                ans4: `Take the medicine before going to bed`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `What is the purpose of the drug lemosin?`,
                ans1: `Soothing throat pain`,
                ans2: `Headache relief`,
                ans3: `Pain relief in the urinary tract`,
                ans4: `Abdominal pain relief`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `What should be said to the patient before dispensing the drug lemosin?`,
                ans1: `Must be taken on a full stomach`,
                ans2: `The pill must be sucked`,
                ans3: `Spray twice into the mouth`,
                ans4: `The tablet must be chewed`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `What is the active ingredient in the drug Kalbeten?`,
                ans1: `Phenazopyridine`,
                ans2: `Benzocaine`,
                ans3: `Bismuth subsalicylate`,
                ans4: `Phenazone`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `What is the purpose of the drug Kalbeten?`,
                ans1: `Reducing abdominal pain and diarrhea`,
                ans2: `Reducing heartburn`,
                ans3: `Constipation pains`,
                ans4: `Reducing vomiting`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `Every how many hours (at most) is it allowed to take Kalbeten?`,
                ans1: `Two hours `,
                ans2: `Three hours`,
                ans3: `Four hours`,
                ans4: `Five hours`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `What is the purpose of the drug otidine?`,
                ans1: `Soothing throat pain`,
                ans2: `Abdominal pain relief`,
                ans3: `Relieving eye pain`,
                ans4: `Relieving ear pain`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `How often can you drip an otidin drop?`,
                ans1: `One hour`,
                ans2: `Two hours`,
                ans3: `Three hours`,
                ans4: `Four hours`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `Do not take the medicine otidine consecutively for more than _____ days.`,
                ans1: `1-2`,
                ans2: `2-3`,
                ans3: `3-4`,
                ans4: `4-5`,
                correctAns: `ans2`
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `multiple`,
                question: `How should a soldier with a prescription for Tevacutan be instructed?`,
                ans1: `The medicine must be taken at equal intervals`,
                ans2: `Do not apply the ointment on an open wound`,
                ans3: `Do not apply the ointment in an area with sensitive skin, such as the armpit`,
                ans4: `The medicine must be taken until the wound or lesion heals`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `Where should Rectozorin paste be applied?`,
                ans1: `lips`,
                ans2: `Palms`,
                ans3: `on pimples`,
                ans4: `anus`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `How should a soldier with a prescription for Ceforal be instructed?`,
                ans1: `Must be taken on an empty stomach`,
                ans2: `Do not take before activity that requires alertness`,
                ans3: `Do not take if you have a known allergy to soy`,
                ans4: `In combination with birth control pills, it is recommended to use an additional contraceptive method`,
                correctAns: `ans4`
            },
        ],
        "amountOfQuestions": 1
    },
    // נשימה
    "breathing": {
        // תרגול
        "questionsPractice": [
            {
                type: `multiple`,
                question: `The trade name of Salbutamol is:`,
                ans1: `Penicilin`,
                ans2: `Ibuprofin`,
                ans3: `Dactarin`,
                ans4: `Ventolin`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `The trade name of Ipratropium Bromide is:`,
                ans1: `Antipyridine`,
                ans2: `Benzocaine`,
                ans3: `Aerovent`,
                ans4: `Ofloxacin`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `The trade name of Budesonide is:`,
                ans1: `Mupirocin`,
                ans2: `Budicort`,
                ans3: `Omeprazole`,
                ans4: `Simvastatin`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `The trade name of Bromhexine is:`,
                ans1: `Movex`,
                ans2: `Bactorban`,
                ans3: `Doxylin`,
                ans4: `Agisten`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `The activity of the drug Bromhexine is:`,
                ans1: `Bronchial dilatation`,
                ans2: `Dilution of secretions in the respiratory tract`,
                ans3: `Increasing breathing volume`,
                ans4: `Increased breathing rate`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `The activity of the drug Salbutamol is:`,
                ans1: `Bronchial dilatation`,
                ans2: `Dilution of secretions in the respiratory tract`,
                ans3: `Treatment and prevention of asthma attacks`,
                ans4: `Increased breathing rate`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `The activity of the drug Budesonide is:`,
                ans1: `Bronchial dilatation`,
                ans2: `Dilution of secretions in the respiratory tract`,
                ans3: `Increasing breathing volume`,
                ans4: `Prophylactic (chronic) treatment for asthma patients`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `The contraindication to Salbutamol is:`,
                ans1: `Tachycardia`,
                ans2: `Shaking hands`,
                ans3: `Allergy to the drug`,
                ans4: `Paradoxical bronchospasm`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `One of the contraindications to Budesonide is:`,
                ans1: `Tachycardia`,
                ans2: `Dryness and fungal infection in the mouth`,
                ans3: `Allergy to milk proteins`,
                ans4: `Paradoxical bronchospasm`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `The contraindication to Bromhexine is:`,
                ans1: `Nausea and stomach aches`,
                ans2: `Shaking hands`,
                ans3: `Allergy to the drug`,
                ans4: `Paradoxical bronchospasm`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `Which of the following is not the goal of Standard 15 treatment for breathing problems:`,
                ans1: `Dilation of airways`,
                ans2: `Suppression of respiratory tract inflammation`,
                ans3: `Increasing the breathing rate`,
                ans4: `Treatment of respiratory symptoms`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `What is the mechanism of action of drugs that expand the airways?`,
                ans1: `Increases air entry into the airways and thus expands them`,
                ans2: `causes the lungs to expand during breathing`,
                ans3: `Expands the airways by relaxing the muscles around them`,
                ans4: `Relaxes the diaphragm and thus relaxes the entire respiratory system`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `What is the mechanism of action of drugs from the steroid group in the treatment of respiratory problems?`,
                ans1: `Speeding up processes in the body`,
                ans2: `Suppression of immune system activity`,
                ans3: `Increased breathing`,
                ans4: `Suppression of breathing`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `What are steroids?`,
                ans1: `An enzyme secreted from the adrenal gland`,
                ans2: `A hormone secreted by the adrenal gland`,
                ans3: `An enzyme secreted by the pituitary gland`,
                ans4: `A hormone secreted by the pituitary gland`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `In what other situations are steroids given?`,
                ans1: `Resuscitation`,
                ans2: `Allergic reaction`,
                ans3: `Morgue shock`,
                ans4: `Convulsions`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `Which of the following is patient instruction on Salbutamol?`,
                ans1: `If the patient uses several inhalers - wait 2 minutes between inhalers`,
                ans2: `Avoid contact with the eyes`,
                ans3: `Rinsing the mouth after using the inhaler`,
                ans4: `The drug is not intended for long-term use`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `Which of the following is patient instruction for Ipratropium Bromide?`,
                ans1: `A significant improvement will only appear after 1-2 weeks from the start of the treatment`,
                ans2: `Avoid contact with the eyes`,
                ans3: `Rinsing the mouth after using the inhaler`,
                ans4: `The drug is not intended for long-term use`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `Which of the following is patient instruction for Budesonide?`,
                ans1: `If the patient uses several inhalers - wait 2 minutes between inhalers`,
                ans2: `Avoid contact with the eyes`,
                ans3: `Rinsing the mouth after using the inhaler`,
                ans4: `The drug is not intended for long-term use`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `Which of the following is bromhexine patient instruction?`,
                ans1: `If the patient uses several inhalers - wait 2 minutes between inhalers`,
                ans2: `Avoid contact with the eyes`,
                ans3: `Rinsing the mouth after using the inhaler`,
                ans4: `The drug is not intended for long-term use`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `In what way of administration should Salbutamol be given?`,
                ans1: `Oinment`,
                ans2: `Inhalation/inhaler`,
                ans3: `through the muscle`,
                ans4: `Orally`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `What is not the indication for administering Ipratropium Bromide?`,
                ans1: `coughs`,
                ans2: `asthma `,
                ans3: `COPD (chronic lung disease)`,
                ans4: `Runny nose `,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `Which of the following is a major side effect of Budesonide?`,
                ans1: `Shaking hands`,
                ans2: `Blurred vision (in contact with the eyes)`,
                ans3: `Dryness and fungal infection in the mouth`,
                ans4: `Nausea and stomach aches`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `Which of the following is a major side effect of Bromhexine?`,
                ans1: `generalized rash`,
                ans2: `Tachycardia (increased heart rate)`,
                ans3: `Dryness and fungal infection in the mouth`,
                ans4: `Nausea and stomach aches`,
                correctAns: `ans4`
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `multiple`,
                question: `When should the drug Laxadin be issued?`,
                ans1: `constipation `,
                ans2: `diarrhea`,
                ans3: `Abdorminal pain`,
                ans4: `Bacterial infection in the stomach`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `What is the common indication for administration of Rectozorin?`,
                ans1: `Burning when passing stool`,
                ans2: `Stool with blood`,
                ans3: `hemorrhoids `,
                ans4: `Itching in the anus`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `A patient who received a prescription for Pramin apparently suffers from?`,
                ans1: `diarrhea`,
                ans2: `constipation`,
                ans3: `Runny nose and phlegm`,
                ans4: `Nausea and vomiting`,
                correctAns: `ans4`
            },
        ],
        "amountOfQuestions": 1
    },
    // תרופות אחרות
    "otherMeds": {
        // תרגול
        "questionsPractice": [
            {
                type: `multiple`,
                question: `What is the trade name of the drug petroleum?`,
                ans1: `Vaseline`,
                ans2: `Paracetamol`,
                ans3: `Opthalgin`,
                ans4: `Calgaron`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `What is the mechanism of action of the petroleum drug?`,
                ans1: `Lubrication and antibacterial`,
                ans2: `Lubrication and increasing heart rate`,
                ans3: `Increasing heart rate and stopping internal bleeding`,
                ans4: `Lubrication and shielding`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `What are the indications for administering petroleum?`,
                ans1: `Dry skin and lips + rubella`,
                ans2: `Dryness in the penis`,
                ans3: `Headaches`,
                ans4: `Nausea and vomiting`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `What are the contraindications for giving petroleum?`,
                ans1: `Use of bronchodilators`,
                ans2: `Use of steroids`,
                ans3: `allergy`,
                ans4: `Pregnant women`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `What are the main side effects of petroleum?`,
                ans1: `Palpitations`,
                ans2: `Anaphylactic reaction`,
                ans3: `Local stimulation`,
                ans4: `Headaches`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `What are the administration instructions for the petroleum drug? `,
                ans1: `Apply 8 times a day`,
                ans2: `Apply every 20 minutes`,
                ans3: `Apply once a day`,
                ans4: `Apply 4 times a day`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `What is the trade name of the medicine containing zinc oxide + iron oxide?`,
                ans1: `Calgaron`,
                ans2: `Vaseline`,
                ans3: `Papaverine`,
                ans4: `Calamine`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `What is the mechanism of action of the drug zinc oxide + iron oxide?`,
                ans1: `Dilation of blood vessels`,
                ans2: `Secretion of proteins`,
                ans3: `Drying and reducing itching, soothing irritated skin`,
                ans4: `Local peeling of the epidermis (the top layer of the skin)`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `What are the indications for administering zinc oxide + iron oxide?`,
                ans1: `Nausea and vomiting`,
                ans2: `an open fracture`,
                ans3: `Vaginal stimulation`,
                ans4: `Skin irritation by bites and mild allergy`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `Which of the following is not a contraindication for zinc oxide + iron oxide?`,
                ans1: `A contaminated and open wound`                ,
                ans2: `cuts`,
                ans3: `burns`,
                ans4: `Bee allergy`,
                correctAns: `ans4`
            },
            {
                type: `multiple`,
                question: `What is the trade name of the drug benzocaine + salicylic acid?`,
                ans1: `Noxacorn`,
                ans2: `Lemisil`,
                ans3: `Rafathricin`,
                ans4: `Adenosine`,
                correctAns: `ans1`
            },
            {
                type: `multiple`,
                question: `What are the main side effects of benzocaine + salicylic acid?`,
                ans1: `rectal bleeding`,
                ans2: `Bleeding from the cornea`,
                ans3: `Local graying of the skin`,
                ans4: `Groy of the mucous membranes of the respiratory tract`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `What are the contraindications to benzocaine + salicylic acid?`,
                ans1: `Pregnant or lactating women`,
                ans2: `Problems with bone marrow production`,
                ans3: `Allergy to the drug`,
                ans4: `Taking heartburn X`,
                correctAns: `ans4`
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `binary`,
                question: `Do not combine the drug Muscol with the drug Acamol`,
                correctAns: true
            },
            {
                type: `binary`,
                question: `Do not combine taking Etopan together with alcohol`,
                correctAns: false
            },
            {
                type: `binary`,
                question: `It is recommended to take the medicine Laxadin before going to bed`,
                correctAns: true
            },
            {
                type: `binary`,
                question: `Moxypen should be taken on an empty stomach only`,
                correctAns: false
            },
            {
                type: `multiple`,
                question: `What are the possible mechanisms of antihypertensive drugs?`,
                ans1: `Increased heart rate`,
                ans2: `Increased sodium concentration in the blood`,
                ans3: `Dilation of blood vessels`,
                ans4: `Constriction of blood vessels`,
                correctAns: `ans3`
            },
            {
                type: `multiple`,
                question: `A soldier with asthma probably uses the drug during an attack:`,
                ans1: `Prednisone`,
                ans2: `Ventolin`,
                ans3: `Sintomycin 5%`,
                ans4: `Movex`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `What do we instruct a patient receiving Budesonide inhaler?`,
                ans1: `Should be taken only when there is an asthma attack and not regularly.`,
                ans2: `The drug is intended for long-term chronic treatment.`,
                ans3: `avoid contact with the eyes.`,
                ans4: `Wash hands after using the inhaler.`,
                correctAns: `ans2`
            },
        ],
        "amountOfQuestions": 1
    },
};

// varubals
let currentQuestion = 0;
let nPracticeCorrectAnswer = 0;
let currentTestQuestion = 0;
let nExamCorrectAnswer = 0;
let strClickedPracticeQuestion;
let arrExamQuestions = [];
let arrExamChosenAnswer = [];
let strUserName;
let formerTestQuestion;
let bTimerListener = true;
// timer
let examTimer;
let timerMinutes;
let timerSecondes;
let sec = 0;
// const
const AMOUNT_OF_QUESTION_PRACTICE = 10;
const AMOUNT_OF_QUESTION_EXAM = 15;
const PASSING_GRADE = 50;

/* onClickPractice
--------------------------------------------------------------
Description: */
const onClickPractice  = () => {
    if (currentQuestion === AMOUNT_OF_QUESTION_PRACTICE) {
        endofPractice();
    } else {
        document.querySelector(`.practiceBottomButton`).removeEventListener("click", onClickPracticeCheck);
        strcurrentPage = "practicePage";
        // מעלים מדפים, סמלים בכותרת וכפתורים למטה
        document.querySelector(`.${strCurrentMedType}Shelf`).classList.add("hidden");
        document.querySelector(`.medTypeSymbol`).classList.add("hidden");
        document.querySelector(`.shelfsButtons`).classList.add("hidden");
        // משנה מאפיינים של כותרת
        document.querySelector(`.title`).classList.remove("titleMedShelfs");
        document.querySelector(`.titleConeiner`).classList.add("titleContainerPractice");
        document.querySelector(`.title`).innerHTML = "Practice";
        // משנה גל וכפתור עליון
        document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/practice/practice-wave.svg");
        document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/right-arrow.svg");
        document.querySelector('.topButton').classList.add("topButtonPractice");
        // מראה דמות ושאלה
        document.querySelector('.practicePage').classList.remove("hidden");
        document.querySelector('.question').innerHTML = QUESTIONS[currentQuestion]["question"];
        // הופך כפתור בדיקה לאפור
        document.querySelector(`.practiceBottomButton`).classList.add("gray");
        // משנה צבע של הריבועי תשובות, מכניס תשובות ושם עליהם מאזין
        for (let i = 1; i <= 4; i++) {
            document.querySelector(`.ans${i} img`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
            document.querySelector(`.ans${i} div`).innerHTML = QUESTIONS[currentQuestion][`ans${i}`];
            document.querySelector(`.ans${i}`).addEventListener("click", onClickAnswer);
        }
    }
}

/* onClickAnswer
--------------------------------------------------------------
Description: */
const onClickAnswer = (event) => {
    // שומר תשובה שנלחצה
    strClickedPracticeQuestion = event.currentTarget.classList[1];
    if (strcurrentPage === "practicePage") {
        // מוריד סימונים קודמים
        for (let i = 1; i <= 4; i++) {
            document.querySelector(`.ans${i} img`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-unmarked.svg");
        }
        // משנה תמונה של תשובה למסומנת
        document.querySelector(`.practiceQuestionSqure${strClickedPracticeQuestion.slice(3)}`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-marked.svg");
        // משנה צבע של כפתור בדיקה ושם עליו מאזין
        document.querySelector(`.practiceBottomButton`).classList.remove("gray");
        document.querySelector(`.practiceBottomButton`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
        document.querySelector(`.practiceBottomButton`).addEventListener("click", onClickPracticeCheck);
    } else if (strcurrentPage !== "reviewTest") {
        // מסמן שענו כבר על השאלה
        document.querySelector(`.answerPill${currentTestQuestion + 1}`).style.backgroundColor = "white";
        if (arrExamQuestions[currentTestQuestion].type === "binary") {
            // מוריד סימנים קודמים
            if (strClickedPracticeQuestion === "true") {
                document.querySelector(`.false`).style.backgroundColor = "white";
            } else {
                document.querySelector(`.true`).style.backgroundColor = "white";
            }
            document.querySelector(`.${strClickedPracticeQuestion}`).style.backgroundColor = "#79bee0bb";
        } else {
            // מוריד סימונים קודמים
            for (let i = 1; i <= 4; i++) {
                document.querySelector(`.examQuestionContainer .ans${i} img`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-unmarked.svg");
            }
            // משנה תמונה של תשובה למסומנת
            document.querySelector(`.examQuestionSqure${strClickedPracticeQuestion.slice(3)}`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-marked.svg");
        }
        arrExamChosenAnswer[currentTestQuestion] = strClickedPracticeQuestion;
       
        // בודק אם כול השאלות נענו
        let bTestComplete = true;
        for (let j = 0; j < AMOUNT_OF_QUESTION_EXAM; j++){
            if (arrExamChosenAnswer[j] === undefined) {
                bTestComplete = false;
            }
        }
        // אם כול השאלות נענו מאפשר כפתור הגש
        if (bTestComplete) {
            // מוריד פילטר מכפתור הגש ושם עליו מאזין
            document.querySelector(`.examSubmit`).classList.remove("gray");
            document.querySelector(`.examSubmit`).addEventListener("click", submitionPopUp);
        } else {
            // שם פילטר מכפתור הגש ומוריד מאזין
            document.querySelector(`.examSubmit`).classList.add("gray");
            document.querySelector(`.examSubmit`).removeEventListener("click", submitionPopUp);
        }
    }
}

/* onClickPracticeCheck
--------------------------------------------------------------
Description: */
const onClickPracticeCheck = () => {
    // בלחיצה על המשך
    if (document.querySelector(`.practiceBottomButton`).getAttribute("src") === "../assets/images/grapics/practice/practice_continue_button.svg") {
        // משנה צבע של כפתור בדיקה
        document.querySelector(`.practiceBottomButton`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
        for (let i = 1; i <= 4; i++) {
            document.querySelector(`.ans${i} img`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
        }
        // מוריד סימונים מהשאלות
        if (QUESTIONS[currentQuestion][`correctAns`] !== strClickedPracticeQuestion) {
            document.querySelector(`.${strClickedPracticeQuestion} div`).classList.remove("wrongAnswer");
        }
        document.querySelector(`.${QUESTIONS[currentQuestion][`correctAns`]} div`).classList.remove("correctAnswer");
        document.querySelector(`.practiceQuestionSqure${strClickedPracticeQuestion.slice(3)}`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-unmarked.svg");
        // משנה חזרה כפתור בדיקה
        document.querySelector(`.practiceBottomButton`).setAttribute("src", "../assets/images/grapics/practice/check_button.svg");
        // משנה שאלה נוכחית ושולח לפונקציה שיוצרת שאלה
        currentQuestion++;
        onClickPractice();
    } else if (document.querySelector(`.practiceBottomButton`).getAttribute("src") === "../assets/images/grapics/practice/check_button.svg") { //בלחיצה על בדיקה
        // מוריד מאזינים מהתשובות
        // משנה צבע של הריבועי תשובות, מכניס תשובות ושם עליהם מאזין
        for (let i = 1; i <= 4; i++) {
            document.querySelector(`.ans${i}`).removeEventListener("click", onClickAnswer);
        }
        // בודק אם נלחצה תשובה לא נכונה ואם כן מסמן שהיא לא נכונה
        if (QUESTIONS[currentQuestion][`correctAns`] !== strClickedPracticeQuestion) {
            document.querySelector(`.${strClickedPracticeQuestion} div`).classList.add("wrongAnswer");
        } else {
            nPracticeCorrectAnswer++;
        }
        // מסמן תשובה נכונה בירוק
        document.querySelector(`.${QUESTIONS[currentQuestion][`correctAns`]} div`).classList.add("correctAnswer");
        // משנה כפתור בדיקה להמשך 
        document.querySelector(`.practiceBottomButton`).setAttribute("src", "../assets/images/grapics/practice/practice_continue_button.svg");
    } else {
        nPracticeCorrectAnswer = 0;
        currentQuestion = 0;
        creatMedShelfs();
    }
}

/* endofPractice
--------------------------------------------------------------
Description: change hyphen to space */
const endofPractice = () => {
    // מעלים שאלות ומראה תשובות נכונות
    document.querySelector(`.practiceRightAnswersConteiner`).classList.remove("hidden");
    document.querySelector(`.answersContainer`).classList.add("hidden");
    // מכניס טקסט סיום
    document.querySelector('.question').innerHTML ="You have completed the practice on this topic. You are welcome to continue practicing with additional questions or continue to the test. Good Luck!";
    document.querySelector(`.practiceRightAnswers`).innerHTML = `${nPracticeCorrectAnswer}/${AMOUNT_OF_QUESTION_PRACTICE}`;
    // משנה צבע של חלונית תשובות ושל כפתור סיום
    document.querySelector(`.practiceBottomButton`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
    document.querySelector(`.practiceRightAnswersConteiner`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
    // מחליף תמונה של כפתור בדיקה לכפתור סיום
    document.querySelector(`.practiceBottomButton`).setAttribute("src", "../assets/images/grapics/practice/endPracticeButton.svg");
}

/* onClickExam
--------------------------------------------------------------
Description: */
const onClickExam = () => {
    // מאפס משתנים
    currentTestQuestion = 0;
    nExamCorrectAnswer = 0;
    arrExamQuestions = [];
    arrExamChosenAnswer = [];
    sec = 0;
    // שומר עמוד נוכחי
    strcurrentPage = "examPrePage";
    document.querySelector(`.examQuestionContainer`).classList.add("hidden"); 
    // מעלים דף פתיחה וכפתור אודות
    document.querySelector(`.homePageButtons`).classList.add("hidden");
    document.querySelector(`.aboutButton`).classList.add("hidden");
    // משנה מאפיינים של כותרת
    document.querySelector(`.title`).innerHTML = "Test";
    // כפתור עליון
    document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/right-arrow.svg");
    // מראה דף לפני מבחן
    document.querySelector(`.examPage`).classList.remove("hidden");
    document.querySelector(`.beforeExamPage`).classList.remove("hidden");  
    // הופך כפתור התחלה לאפור 
    document.querySelector(`.stratTest`).classList.add("gray");
    // שומר של משתמש ומוודא שהוא יותר מתו אחד 
    strUserName = document.querySelector('.examNameInput').value;
    if (strUserName.length > 1) {
        document.querySelector(`.stratTest`).classList.remove("gray");
    }
    document.querySelector('.examNameInput').addEventListener("input", () => {
        strUserName = document.querySelector('.examNameInput').value;
        if (strUserName.length > 1) {
            document.querySelector(`.stratTest`).classList.remove("gray");
            document.querySelector(`.stratTest`).addEventListener("click", startExam);
            if (bTimerListener) {// קורה רק פעם אחת
                bTimerListener = false;
                document.querySelector(`.stratTest`).addEventListener("click", () => {
                        // מתחיל טיימר
                        examTimer = setInterval(startTimerExam, 1000);
                        let arrAnswerPill = document.querySelectorAll('.answerPill');
                        for (let i = 0; i < arrAnswerPill.length; i++) {
                            // מסמן שלא ענו על השאלה
                            document.querySelector(`.answerPill${i + 1}`).style.backgroundColor = "#f4f4f4b8";
                            arrAnswerPill[i].addEventListener('click', () => {
                                currentTestQuestion = i;
                                startExam();
                        });
                    };
                });
            }
        }
    });
    // שומר שאלות למבחן
    for(key of Object.keys(DATA)) {
        // שומר את השאלות מהנושא הנוכחי במערך ומכניס למערך של השאלות למבחן
        let arrPracticeQuestion = shuffle(DATA[key]["questionsPractice"]);
        for (let i = 0; i < DATA[key].amountOfQuestions; i++) {
            arrExamQuestions.push(arrPracticeQuestion[i]);
        }
        // שומר את השאלות למבחן מהנושא הנוכחי במערך ומכניס למערך של השאלות למבחן
        let arrSubjExamQuestion = shuffle(DATA[key]["questionsExam"]);
        for (let j = 0; j < DATA[key]["questionsExam"].length; j++) {
            arrExamQuestions.push(arrSubjExamQuestion[j]);
        }
    }
    arrExamQuestions = shuffle(arrExamQuestions);
}

/* startExam
--------------------------------------------------------------
Description: */
const startExam = (event) => {
    if (strcurrentPage === "examPrePage") {
        // מעלים דף של לפני מבחן
        document.querySelector(`.beforeExamPage`).classList.add("hidden"); 
        // מראה מבחן
        document.querySelector(`.examQuestionContainer`).classList.remove("hidden"); 
        // משנה גל, מעלים כפתור עליון
        document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/test/test-wave.svg");
        document.querySelector('.topButton').classList.add("hidden");
        strcurrentPage = "examQuestion";
        formerTestQuestion = currentTestQuestion;
        // מוריד סימונים קודמים
        document.querySelector(`.false`).style.backgroundColor = "white";
        document.querySelector(`.true`).style.backgroundColor = "white";
        for (let i = 1; i <= 4; i++) {
            document.querySelector(`.examQuestionContainer .ans${i} img`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-unmarked.svg");
        }
    } else {
        if (arrExamChosenAnswer[formerTestQuestion] === undefined) {
            // מסמן שלא ענו על השאלה
            document.querySelector(`.answerPill${formerTestQuestion + 1}`).style.backgroundColor = "#f4f4f4b8";
        } else {
            // מסמן שענו כבר על השאלה
            document.querySelector(`.answerPill${formerTestQuestion + 1}`).style.backgroundColor = "white";
        }
        // מעלים שאלה קודמת
        if (event !== undefined) {
            document.querySelector(`.${arrExamQuestions[currentTestQuestion].type}`).classList.add("hidden");
            if (strcurrentPage === "reviewTest") {
                // בודק אם נלחצה תשובה לא נכונה ואם כן מוריד סימון תשובה לא נכונה
                if (arrExamChosenAnswer[currentTestQuestion] !== String(arrExamQuestions[currentTestQuestion]["correctAns"])) {
                    document.querySelector(`.answersContainers .${arrExamChosenAnswer[currentTestQuestion]} div`).classList.remove("wrongAnswer");
                }
                // מוריד סימון תשובה נכונה
                document.querySelector(`.answersContainers .${arrExamQuestions[currentTestQuestion]["correctAns"]} div`).classList.remove("correctAnswer");
            }
            if (event.currentTarget.classList[1] === "testArrowRight") {
                currentTestQuestion--;
            } else if (event.currentTarget.classList[1] === "testArrowLeft") {
                currentTestQuestion++;
            }
            formerTestQuestion = currentTestQuestion;
            document.querySelector(`.${arrExamQuestions[currentTestQuestion].type}`).classList.remove("hidden");
        } else { // תזוזה בין השאלות על ידי כפתורים
            document.querySelector(`.${arrExamQuestions[formerTestQuestion].type}`).classList.add("hidden");
            if (strcurrentPage === "reviewTest") {
                // בודק אם נלחצה תשובה לא נכונה ואם כן מוריד סימון תשובה לא נכונה
                if (arrExamChosenAnswer[formerTestQuestion] !== String(arrExamQuestions[formerTestQuestion]["correctAns"])) {
                   document.querySelector(`.answersContainers .${arrExamChosenAnswer[formerTestQuestion]} div`).classList.remove("wrongAnswer");
               }
               // מוריד סימון תשובה נכונה
               document.querySelector(`.answersContainers .${arrExamQuestions[formerTestQuestion]["correctAns"]} div`).classList.remove("correctAnswer");
            }
           //מעדכן מספר שאלה 
            formerTestQuestion = currentTestQuestion;
            document.querySelector(`.${arrExamQuestions[currentTestQuestion].type}`).classList.remove("hidden");
        }
        if (arrExamQuestions[currentTestQuestion].type === "binary") {
            // מוריד סימנים קודמים
            document.querySelector(`.false`).style.backgroundColor = "white";
            document.querySelector(`.true`).style.backgroundColor = "white";
            if (arrExamChosenAnswer[currentTestQuestion] !== undefined) {
                // משנה תמונה של תשובה למסומנת
                document.querySelector(`.${arrExamChosenAnswer[currentTestQuestion]}`).style.backgroundColor = "#79bee0bb";
            }
        } else {
            // מוריד סימונים קודמים
            for (let i = 1; i <= 4; i++) {
                document.querySelector(`.examQuestionContainer .ans${i} img`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-unmarked.svg");
            }
            if (arrExamChosenAnswer[currentTestQuestion] !== undefined) {
                // משנה תמונה של תשובה למסומנת
                document.querySelector(`.examQuestionSqure${arrExamChosenAnswer[currentTestQuestion].slice(3)}`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-marked.svg");
            }
        }
    }
    // מוריד חצים בשאלה הראשונה והאחרונה
    if (currentTestQuestion > 0 && currentTestQuestion < AMOUNT_OF_QUESTION_EXAM - 1) {
        // מראה חץ אחורה וקדימה
        document.querySelector(`.testArrowRight`).classList.remove("hidden"); 
        document.querySelector(`.testArrowLeft`).classList.remove("hidden");
    } else if (currentTestQuestion === AMOUNT_OF_QUESTION_EXAM - 1) {
        // מעלים חץ קדימה
        document.querySelector(`.testArrowLeft`).classList.add("hidden");
    } else {
        // מראה את השאלה
        document.querySelector(`.${arrExamQuestions[currentTestQuestion].type}`).classList.remove("hidden");
        // מעלים חץ אחורה
        document.querySelector(`.testArrowRight`).classList.add("hidden"); 
        document.querySelector(`.testArrowLeft`).classList.remove("hidden");
    }
    
    // מראה את סימוני השאלה הנוכחית
    document.querySelector('.testCurrentQuestionDisplay').innerHTML = ` Question ${currentTestQuestion + 1}`;
    document.querySelector(`.answerPill${currentTestQuestion + 1}`).style.backgroundColor = "#a3a2a2";
    // מראה את השאלה הנוכחית ומכניס אליה את התוכן
    document.querySelector('.examQuestionContainer .question').innerHTML = arrExamQuestions[currentTestQuestion].question;
    if (arrExamQuestions[currentTestQuestion].type === "binary") {
        // שם מאזינים לתשובות
        document.querySelector(`.examQuestionContainer .binary .true`).addEventListener("click", onClickAnswer);
        document.querySelector(`.examQuestionContainer .binary .false`).addEventListener("click", onClickAnswer);
    } else {
        for (let i = 1; i <= 4; i++) {
            // מכניס תוכן לתשובות ושם עליהן מאזין
            document.querySelector(`.examQuestionContainer .ans${i} div`).innerHTML = arrExamQuestions[currentTestQuestion][`ans${i}`];
            document.querySelector(`.examQuestionContainer .ans${i}`).addEventListener("click", onClickAnswer);
        }
    }
    // שם מאזינים לחצים
    document.querySelector(`.testArrowRight`).addEventListener("click", startExam);
    document.querySelector(`.testArrowLeft`).addEventListener("click", startExam);

    if (strcurrentPage === "reviewTest") {
        // בודק אם נלחצה תשובה לא נכונה ואם כן מסמן שהיא לא נכונה
        if (arrExamChosenAnswer[currentTestQuestion] !== String(arrExamQuestions[currentTestQuestion]["correctAns"])) {
            document.querySelector(`.answersContainers .${arrExamChosenAnswer[currentTestQuestion]} div`).classList.add("wrongAnswer");
        }
        // מסמן תשובה נכונה בירוק
        document.querySelector(`.answersContainers .${arrExamQuestions[currentTestQuestion]["correctAns"]} div`).classList.add("correctAnswer");
    }
}


/* submitionPopUp
--------------------------------------------------------------
Description:  */
const submitionPopUp = () => {
    if (strcurrentPage === "reviewTest") {
        endOfTest();
    } else {
       // מראה פופ אפ ושם מאזינים לכפתורים בפופ אפ
       document.querySelector(`.examSubmitionPopUp`).classList.remove("hidden");
       document.querySelector(`.popUpSubmit`).addEventListener("click", endOfTest);
       document.querySelector(`.popUpBackToExam`).addEventListener("click", () => {
           // מעלים פופ אפ
           document.querySelector(`.examSubmitionPopUp`).classList.add("hidden");
       });
    }
}

/* endOfTest
--------------------------------------------------------------
Description:  */
const endOfTest = () => {
    if (strcurrentPage === "reviewTest") {
        // בודק אם נלחצה תשובה לא נכונה ואם כן מוריד סימון תשובה לא נכונה
        if (arrExamChosenAnswer[formerTestQuestion] !== String(arrExamQuestions[formerTestQuestion]["correctAns"])) {
            document.querySelector(`.answersContainers .${arrExamChosenAnswer[formerTestQuestion]} div`).classList.remove("wrongAnswer");
        }
        // מוריד סימון תשובה נכונה
        document.querySelector(`.answersContainers .${arrExamQuestions[formerTestQuestion]["correctAns"]} div`).classList.remove("correctAnswer");
        document.querySelector(`.${arrExamQuestions[currentTestQuestion].type}`).classList.add("hidden");
        // משנה כפתור סיום להגש
        document.querySelector('.examSubmit').setAttribute("src", "../assets/images/grapics/test/submit-button.svg");
    } else {
        // עוצר טיימר
        clearInterval(examTimer)
        // שם מאזינים לכפתורים
        document.querySelector(`.reviewTest`).addEventListener("click", reviewTest);
        // בודק כמה שאלות נענו נכון
        nExamCorrectAnswer = 0;
        for (let j = 0; j < AMOUNT_OF_QUESTION_EXAM; j++){
            if (arrExamChosenAnswer[j] === arrExamQuestions[j]["correctAns"]) {
                nExamCorrectAnswer++;
            }
        }
        // מחשב ציון
        let nGrade = Math.round((nExamCorrectAnswer/AMOUNT_OF_QUESTION_EXAM) * 100);
        // מכניס שם משתמש
        document.querySelector(`.userNameBig`).innerHTML = strUserName;
        document.querySelector(`.userNameSmall`).innerHTML = strUserName;
        // מכניס תשובות נכונות וציון
        document.querySelector(`.ExamgradeBig`).innerHTML = nGrade;
        document.querySelector(`.ExamgradeSmall`).innerHTML = nGrade;
        document.querySelector(`.rightAnswers`).innerHTML = `${nExamCorrectAnswer}/15`;
        // נותן משוב ויוזאלי לפי הציון
        if (nGrade < PASSING_GRADE) {
            document.querySelector(`.examVerbalGrade`).innerHTML = "Maybe next time";
            document.querySelector('.ExamgradeConteiner').style.backgroundImage = `url("../assets/images/grapics/test/sad-smiley-face.svg")`;
        } else {
            document.querySelector(`.examVerbalGrade`).innerHTML = "Well done";
            document.querySelector('.ExamgradeConteiner').style.backgroundImage = `url("../assets/images/grapics/test/happy-smiley-face.svg")`;
        }
        // שומר תאריך ושעה
        let date = new Date();
        let todayDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        let currTime = date.getHours() + ":" + date.getMinutes();
        // מכניס תאריך ושעה
        document.querySelector(`.date`).innerHTML = todayDate;
        document.querySelector(`.time`).innerHTML = currTime;
        // מכניס אורך מבחן
        document.querySelector(`.timerConteiner`).innerHTML = `${timerSecondes} : ${timerMinutes}`;
    }
    document.querySelector(`.${arrExamQuestions[formerTestQuestion].type}`).classList.add("hidden");
    strcurrentPage = "endOfTest";
    // מעלים פופ אפ ואת המבחן ומראה את דף הסיום
    document.querySelector(`.examSubmitionPopUp`).classList.add("hidden");
    document.querySelector(`.examQuestionContainer`).classList.add("hidden");
    document.querySelector(`.afterExamPage`).classList.remove("hidden");
    // משנה גל ומראה כפתור חזור
    document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/home-page/opening-wave.svg");
    document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/right-arrow.svg");
    document.querySelector(`.topButton`).classList.remove("hidden");
}

/* reviewTest
--------------------------------------------------------------
Description:  */
const reviewTest = (event) => {
    // מעלים את הדף סיום ומראה את המבחן
    document.querySelector(`.examQuestionContainer`).classList.remove("hidden");
    document.querySelector(`.afterExamPage`).classList.add("hidden");
    // משנה גל ומעלים כפתור חזור
    document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/test/test-wave.svg");
    document.querySelector(`.topButton`).classList.add("hidden");
    // משנה כפתור הגש לסיום
    document.querySelector('.examSubmit').setAttribute("src", "../assets/images/grapics/test/test-review-end-button.svg");
    document.querySelector('.examSubmit').classList.add("blue");
    strcurrentPage = "reviewTest";
    currentTestQuestion = 0;
    startExam();
}

/* pad
--------------------------------------------------------------
Description:  */
const pad = (val) => {
    let valString = val + "";
    if(valString.length < 2)
    {
        return "0" + valString;
    }
    else
    {
        return valString;
    }
}

/* startTimerExam
--------------------------------------------------------------
Description:  */
const startTimerExam = () => {
    sec++;
    timerSecondes = pad(sec%60);
    timerMinutes = pad(parseInt(sec/60));
    // document.querySelector(`.testCurrentQuestionDisplay`).innerHTML = `${timerSecondes} : ${timerMinutes}`;
}

/*
shuffle
------------------------------------------------
Description: take orgnaiz array and shffel it
Parameters: array.
------------------------------------------------
Programer: Gal
------------------------------------------------
*/
function shuffle(arr) {
    let tmp = arr.slice();
    for (let i = 0; i < arr.length; i++) {
        let index = Math.floor(Math.random() * tmp.length);
        arr[i] = tmp[index];
        tmp = tmp.slice(0, index).concat(tmp.slice(index + 1));
    }
    return arr;
}
