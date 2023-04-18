var winFeature =
        'location=no,toolbar=no,menubar=no,scrollbars=yes,resizable=yes';

let objMedInfo = {
    // antiallergic-----------------------------------------------------------------------------------------------------------------------
    // אנטיהיסטמינים – נוגדי אלרגיה
    "Loratadine-Desloratadine": {
        medType: "antiallergic",
        type : "withoutMechanism",
        pic : "antiallergic/aerius", 
        genericName : "Loratadine-Desloratadine.",
        commercialName : "Allergyx.<br>Aerius.",
        indication : "<ol class=list><li>Allergic rhinitis.</li><li>Urticaria (rash in the form of prominent red surfaces of various shapes, accompanied by itching).</li></ol>",
        contraindication : "Allergy to the drug",
        sideEffect : "<ol class=list><li>Drowsiness in high doses.</li><li>dizziness.</li>",
        patientGuidelines : "Use beyond the accepted dose may cause drowsiness",
    },
    "Azelastine": {
        medType: "antiallergic",
        type : "withoutMechanism",
        pic : "antiallergic/optilast", 
        genericName : "Azelastine.",
        commercialName : "Optilast.<br>Astelin.",
        indication : "<ol class=list><li>Allergic rhinitis.</li><li>Allergic eye inflammation.</li><li>Vasomotor Rhinitis – Rhinitis as a result of dilation of blood vessels in the nasal mucosa.</li></ol>",
        contraindication : "Allergy to the drug",
        sideEffect : "<ol class=list><li>Drowsiness (used through the nose)</li><li>Asthma attack (used through the nose, rare)</li></ol>",
        patientGuidelines : "<ol class=list><li>Before using eye drops, be sure to wash your hands</li><li>While using eye drops, do not touch the vial with the eye</li><li>Do not perform actions that require vigilance after using the medicine through the nose.</li></ol>",
    },
    // סטרואידים – מדכאי תגובה חיסונית 
    "Predisone": {
        medType: "antiallergic",
        type : "withoutMechanism",
        pic : "antiallergic/predninsone", 
        genericName : "Predisone.",
        commercialName : "Predisone.",
        indication : "<ol class=list><li>Severe inflammation (due to infection/tumor/other)</li><li>Hormonal disorders</li></ol>",
        contraindication : "<ol class=list><li>Allergy to the drug</li><li>Specific serious infections (fungal infection in the blood, herpes infection in the eye...)</li></ol>",
        sideEffect : "<ol class=list><li>Neurological and psychiatric phenomena (convulsions, psychosis, sleep difficulties, etc.)</li><li>Cardiac symptoms (heart failure, heart rhythm disorders, blood clots, etc.)</li><li>Symptoms in the digestive system (abdominal pain, stomach ulcer, pancreatitis, etc.)</li><li>increase in sugar levels</li><li>increase in blood pressure</li><li>Disorders in the mineral balance</li></ol>",
        patientGuidelines : "<ol class=list><li>Do not stop the treatment suddenly, but only according to the doctor's instructions.</li><li>consume with food.</li><li>Be alert for non-healing wounds/infections</li></ol>",
    },
    "Fluticasone-nasal": {
        medType: "antiallergic",
        type : "withoutMechanism",
        pic : "antiallergic/flixonase", 
        genericName : "Fluticasone.",
        commercialName : "Flixonase.",
        indication : "Rhinitis (allergic and non-allergic).",
        contraindication : "Allergy to the drug",
        sideEffect : "None",
        patientGuidelines : "<ol class=list><li>Avoid spraying into the eyes.</li><li>Shake before use.</li></ol>",
    },
    "Betamethasone-ointment": {
        medType: "antiallergic",
        type : "withoutMechanism",
        pic : "antiallergic/betacorten", 
        genericName : "Betamethasone 0.1%.",
        commercialName : "Betacaroten.",
        indication : "<ol class=list><li>Inflammatory skin lesions.</li><li>Psoriasis (a skin disease that manifests itself in multiple scaly lesions).</li></ol>",
        contraindication : "Allergy to the drug and other steroids.",
        sideEffect : "None",
        patientGuidelines : "<ol class=list><li>for external use only.</li><li>Wash hands after application.</li><li>Apply a thin layer without massaging the application area and wait for absorption.</li><li>Maintaining skin hygiene</li><li>Go see a doctor if there is skin irritation or a secondary infection of the skin.</li></ol>",
    },
    "Pseudoephedrine": {
        medType: "antiallergic",
        type : "withMechanism",
        pic : "antiallergic/sinufed", 
        genericName : "Pseudoephedrine.",
        commercialName : "Sinufed.",
        indication : "Nasal congestion",
        contraindication : "Allergy to the drug",
        sideEffect : "<ol class=list><li>Difficulty sleeping, nervousness.</li><li>Palpitations </li></ol>",
        patientGuidelines : "not recommended to take two hours before bedtime.",
        mechanismOfAction : "Narrowing blood vessels in the nose and thus reducing congestion.",
    },
    "Oxymetazoline-nasal": {
        medType: "antiallergic",
        type : "withoutMechanism",
        pic : "antiallergic/otrivine", 
        genericName : "Oxymetazoline.",
        commercialName : "Sinulen.",
        indication : "Nasal congestion",
        contraindication : "<ol class=list><li>Allergy to the drug</li><li>After surgery in the nose/mouth/pharynx area.</li><li>Hypertension and other heart/vascular diseases (the drug causes vasoconstriction and therefore may cause an increase in blood pressure)</li></ol>",
        sideEffect : "<ol class=list><li>Dryness/burning in the mucous membranes of the nose and throat.</li><li>Worsening of nasal congestion.</li><li>Rare - increase in blood pressure and palpitations (the medicine causes blood vessels to constrict and therefore may cause an increase in blood pressure).</li></ol>",
        patientGuidelines : "<ol class=list><li>Up to 2 drops per nostril, 3 times a day, if necessary.</li><li>Do not use more than 3 days in a row (physiological dependence on the drug may occur)</li></ol>",
    },
    // antibiotics-----------------------------------------------------------------------------------------------------------------------
    // אנטיביוטיקה
    "Penicillins": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/moxypen", 
        genericName : "Penicillins VK.<br>Amoxicillin.",
        commercialName : "Rafapen, Pen-Rafa.<br>Moxypen.",
        indication : "A variety of bacterial infections.",
        contraindication : "Allergy to the drug",
        sideEffect : "common:<br><ol class=list><li>Abdominal pain.</li><li>diarrhea</li><li>rash</li></ol>rare:<br><ol class=list><li>Suppression of blood cell production in the bone marrow.</li><li>Disorders in the balance of minerals in the blood.</li><li>Neurological symptoms (confusion, sleepiness, etc.) (mainly in patients with renal failure, because the drug is not cleared well in the urine).</li><li>Liver and kidney damage (mainly in high doses and/or prolonged treatments)</li></ol>",
        patientGuidelines : "<ol class=list><li>Do not stop the treatment in the middle, even if you feel better.</li><li>It is recommended to take on a full stomach (to reduce side effects in the digestive system).</li><li>Seek a medical examination in case of prolonged diarrhea (even in the weeks after the end of treatment) - may indicate a certain infection in the large intestine that requires treatment (CDAD).</li><li>Seek medical attention if an allergic reaction appears, even a mild allergic reaction such as a rash.</li></ol>",
        mechanismOfAction : "Damage to the construction of the cell wall of the bacteria and therefore killing the bacteria.",
    },
    "Cephalosporines": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/zinnat", 
        genericName : "Cephalexin.<br>Cefuroxime.",
        commercialName : "Ceforal, Cefovit.<br>Zinnat.",
        indication : "A variety of bacterial infections.",
        contraindication : "Allergy to the drug",
        sideEffect : "common:<br><ol class=list><li>Abdominal pain.</li><li>diarrhea</li><li>rash</li></ol>rare:<br><ol class=list><li>Suppression of blood cell production in the bone marrow.</li><li>Liver (mild) and kidney damage (mainly in elderly patients and/or those with chronic kidney disease).</li></ol>",
        patientGuidelines : "<ol class=list><li>Do not stop the treatment in the middle, even if you feel better.</li><li>It is recommended to take on a full stomach (to reduce side effects in the digestive system).</li><li>Seek a medical examination in case of prolonged diarrhea (even in the weeks after the end of treatment) - may indicate a certain infection in the large intestine that requires treatment (CDAD).</li><li>Seek medical attention if an allergic reaction appears, even a mild allergic reaction such as a rash.</li></ol>",
        mechanismOfAction : "Damage to the construction of the cell wall of the bacteria and therefore killing the bacteria.",
    },
    "Macrolides": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/klaridex", 
        genericName : "Clarithromycin (TAB).<br>Roxythromycin (TAB).<br>Erythromycin.",
        commercialName : "Klarin, Klaridex.<br>Rulid, Roxo.<br>Acnetrim, Acnemycin.",
        indication : "A variety of bacterial infections.",
        contraindication : "<ol class=list><li>Allergy to the drug</li><li>Deficient liver functions in the past due to a drug from the family.</li></ol>",
        sideEffect : "<ol class=list><li>Digestive system - abdominal pain, diarrhea and more.</li><li>Heart rhythm disorders.</li><li>Rash and increased sensitivity of the skin to the sun.</li></ol>",
        patientGuidelines : "<ol class=list><li>Do not stop the treatment in the middle, even if you feel better.</li><li>It is not necessary to take after a meal, but it can reduce side effects in the digestive system.</li><li>Seek a medical examination in case of prolonged diarrhea (even in the weeks after the end of treatment) - may indicate a certain infection in the large intestine that requires treatment (CDAD).</li><li>Acnetrim/Acnemycin solution is intended for external use only, and before applying, wash your face with soap and water and wait for it to dry.</li></ol>",
        mechanismOfAction : "Inhibiting the construction of proteins in bacteria. Depending on the dose, there is an effect of killing the bacteria or stopping their growth.",
    },
    "Fluoroquinolones": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/ofloxacin", 
        genericName : "Ofloxacin.",
        commercialName : "Oflodex.",
        indication : "A variety of bacterial infections.",
        contraindication : "<ol class=list><li>Allergy to the drug</li><li>A nerve disease called Myasthenia Gravis.</li></ol>",
        sideEffect : "<ol class=list><li>Digestive system - abdominal pain, diarrhea and more.</li><li>Neurological side effects are common (dizziness, headaches, difficulty sleeping...) and rare (convulsions, hallucinations, muscle weakness...).</li><li>Liver injury.</li><li>Inflammation and ruptures of tendons.</li><li>Increased sensitivity of the skin to the sun.</li><li>Suppression of blood cell formation in bone marrow.</li></ol>",
        patientGuidelines : `<ol class=list><li>Do not stop the treatment in the middle, even if you feel better.</li><li>It is not necessary to take after a meal, but it can reduce side effects in the digestive system.</li><li>Seek a medical examination in case of prolonged diarrhea (even in the weeks after the end of treatment) - may indicate a certain infection in the large intestine that requires treatment (CDAD).</li><li>Do not take together with antacids and vitamins.</li><li>Avoid activities that require alertness and concentration after taking the medicine (because of the risk of neurological side effects).</li><li>Prevention of prolonged exposure to the sun and use of sunscreen (the drug increases the sensitivity of the skin to the sun).</li><li>Seek medical attention if an allergic reaction appears, even a mild allergic reaction such as a rash. Likewise if significant neurological side effects appear.</li></ol>`,
        mechanismOfAction : "Inhibiting the replication of the hereditary material (DNA) of bacteria, thereby harming the reproduction of the bacteria.",
    },
    "Tetracyclines": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/minocycline", 
        genericName : "Doxyxycline.<br>Minocycline.",
        commercialName : "Doxylin.<br>Minocycline.",
        indication : "A variety of bacterial infections.",
        contraindication : "<ol class=list><li>Allergy to the drug</li><li>Pregnancy and breastfeeding (the drugs may irreversibly harm the fetus).</li></ol>",
        sideEffect : "<ol class=list><li>Digestive system - abdominal pain, diarrhea, mucosal damage for example in the esophagus and more.</li><li>Increased sensitivity of the skin to the sun.</li><li>Permanent discoloration of the teeth (especially in children).</li><li>Suppression of blood cell formation in bone marrow.</li><li>Renal failure (Minocycline).</li><li>Increased intracranial pressure.</li></ol>",
        patientGuidelines : "<ol class=list><li>It is not necessary to take after a meal, but it can reduce side effects in the digestive system.</li><li>Seek a medical examination in case of prolonged diarrhea (even in the weeks after the end of treatment) - may indicate a certain infection in the large intestine that requires treatment (CDAD).</li><li>Drink more and take the medicine with a full glass of water.</li><li>Do not lie down for about an hour after taking the medicine (there is a risk of damage to the lining of the esophagus).</li><li>Prevention of prolonged exposure to the sun and use of sunscreen (because the medicine increases the sensitivity of the skin to the sun).</li></ol>",
        mechanismOfAction : `Inhibiting the construction of proteins in bacteria. They usually cause the reproduction of the bacteria to stop, and sometimes to kill them.`,
    },
    // אנטיביוטיקה - אחר
    "Sulfamethoxazole-Trimethoprim": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/diseptyl", 
        genericName : "Sulfamethoxazole-Trimethoprim.",
        commercialName : "Resprim.<br>Diseptyl.",
        indication : "A variety of bacterial infections.",
        contraindication : "<ol class=list><li>Allergy to the drug</li><li>Renal failure.</li><li>Damage to liver functions.</li><li>Anemia due to folic acid deficiency.</li></ol>",
        sideEffect : "<ol class=list><li>Abdominal pain, diarrhea.</li><li>Pancreatitis - inflammation of the pancreas.</li><li>Renal damage.</li><li>Liver damage that leads to jaundice.</li><li>Suppression of blood cell formation in bone marrow.</li><li>Skin reactions such as rash.</li></ol>",
        patientGuidelines : "<ol class=list><li>Do not stop the treatment in the middle, even if you feel better.</li><li>Drinking lots of water.</li><li>Prevention of prolonged exposure to the sun and use of sunscreen (because the medicine increases the sensitivity of the skin to the sun).</li><li>Seek medical attention if there is a rash. It may indicate the onset of anaphylaxis or another dangerous reaction to the treatment.</li></ol>",
        mechanismOfAction : "Inhibiting the production of folic acid in the bacteria (an aid to their survival) and thereby killing them.",
    },
    "Mupirocin": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/bactroban", 
        genericName : "Mupirocin.",
        commercialName : "Bactorban CRM.",
        indication : "A variety of bacterial skin infections, including impetigo.",
        contraindication : "<ol class=list><li>Allergy to the drug</li><li>Large open wounds and extensive burns.</li></ol>",
        sideEffect : "local irritation of the skin.",
        patientGuidelines : "<ol class=list><li>for external use only.</li><li>Contact with the eyes should be avoided, if the medicine has penetrated the eye, it should be thoroughly washed with running water.</li><li>Do not use other skin preparations in the treatment area (including cosmetic preparations).</li><li>Return to the doctor's examination if there is no improvement or there is aggravation after 3-5 days.</li></ol>",
        mechanismOfAction : "Inhibiting the construction of proteins in bacteria.",
    },
    "Chloramphenicol": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/synthomycine5", 
        genericName : "Chloramphenicol 3% \ 5%.",
        commercialName : "Synthomycine.",
        indication : "Bacterial infections of the skin or eyes.",
        contraindication : "Allergy to the drug",
        sideEffect : "Local irritation of the skin or eyes (in the eyes can be manifested in visual disturbance).",
        patientGuidelines : "<ol class=list><li>Wash hands with soap and water before and after use.</li><li>Eyes - put a little ointment in the eye when the head is tilted back, and close the eye for at least a minute for optimal absorption.</li><li>Dressing after use - according to individual doctor's instructions.</li></ol>",
        mechanismOfAction : "Antibiotic ointment for the skin / eyes (also available in the form of eye drops).",
    },
    "Gentamycin": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/lacromycin", 
        genericName : "Gentamycin.",
        commercialName : "Lacromycin eye drops.",
        indication : "A variety of bacterial infections.",
        contraindication : "Allergy to the drug",
        sideEffect : "Local irritation of the eyes that manifests itself in itching, pain, visual disturbances, etc.",
        patientGuidelines : "<ol class=list><li>Wash hands with soap and water before and after use.</li><li>Drip into the eye while the head is tilted back without touching the eye with the vial.</li><li>Make sure that the vision is normal and not blurred before actions such as driving.</li></ol>",
        mechanismOfAction : "Antibiotic eye drops.",
    },
    // תרופות אנטי-ויראליות
    "Acyclovir": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/zovirax", 
        genericName : " Acyclovir (TAB\CRM).",
        commercialName : "Zovirax.",
        indication : "Cutaneous and genital viral infections (mainly herpes) and others as well.",
        contraindication : "Allergy to the drug",
        sideEffect : "<ol class=list><li>Neurological symptoms - decreased level of consciousness, confusion, hallucinations, convulsions.</li><li>Renal failure.</li><li>Suppression of blood cell formation in bone marrow.</li><li>Skin reaction (ointment - local irritation).</li></ol>",
        patientGuidelines : "<ol class=list><li>The medicine does not prevent others from being infected with herpes and therefore, direct or indirect contact with other people should be avoided during an active infection of the lips or genitals.</li><li>Herpes infection tends to break out again several times during life and as a rule, the sooner treatment is started, the more effective the treatment is - preliminary symptoms of the outbreak of the infection include circumcision and tingling in the area of ​​the lips or genitals (depending on the location of the infection).</li><li>It is recommended to drink a lot of water.</li></ol>",
        mechanismOfAction : "Inhibiting the creation of genetic material (DNA) in viruses and thus inhibiting virus replication.",
    },
    // תרופות אנטי-פטרייתיות
    "Clotrimazole-VAG-CRM": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/agisten", 
        genericName : " Clotrimazole (VAG CRM).",
        commercialName : "Agisten (Vag. Tab.).",
        indication : "Vaginal fungal infection.",
        contraindication : "Allergy to the drug",
        sideEffect : "Local irritation.",
        patientGuidelines : "<ol class=list><li>Repeated or prolonged infections will require further medical investigation.</li><li>Avoid intercourse during treatment.</li><li>The medicine may stain clothes and therefore, it is advisable to use an absorbent pad in the underwear. </li><li>The treatment should be continued even during menstruation.</li><li>Finish the treatment and do not stop in the middle, even if you feel better.</li></ol>",
        mechanismOfAction : "Damage to the cell wall of the fungi, thus killing them or delaying their reproduction.",
    },
    "Clotrimazole-CRM": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/clotrimaderm", 
        genericName : " Clotrimazole (CRM).",
        commercialName : "Clotrimaderm, Pitrion (CRM).",
        indication : "Cutaneous fungal infection.",
        contraindication : "Allergy to the drug",
        sideEffect : "Local irritation.",
        patientGuidelines : "<ol class=list><li>Washing hands before and after application.</li><li>Clean the contaminated area with soap and water before use and wait for it to dry before applying the paste.</li><li>Dressing - according to individual doctor's instructions.</li></ol>",
        mechanismOfAction : "Damage to the cell wall of the fungi, thus killing them or delaying their reproduction.",
    },
    "Clotrimazole-Neomycin-Dexamethasone": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/polycutan-tevacutan", 
        genericName : " Clotrimazole + Neomycin + Dexamethasone (CRM).",
        commercialName : "Tevacutan CRM, Polycutan CRM.",
        indication : "A fungal skin infection that combines a bacterial infection.",
        contraindication : "<ol class=list><li>Allergy to the drug</li><li>Viral skin infection for example herpes.</li><li>Use of the outer ear is prohibited if there is a tear in the eardrum.</li></ol>",
        sideEffect : "Local irritation.",
        patientGuidelines : "<ol class=list><li>Washing hands before and after application.</li><li>Clean the contaminated area with soap and water before use and wait for it to dry before applying the paste.</li><li>Dressing - according to individual doctor's instructions.</li></ol>",
        mechanismOfAction : "<ol class=list><li>Clotrimazole - antifungal effect.</li><li>Neomycin – antibiotic effect.</li><li>Dexamethasone – steroids, anti-inflammatory effect.</li></ol>",
    },
    "Undeceonic-Acid": {
        medType: "antibiotics",
        type : "withoutMechanism",
        pic : "antibiotics/fungmon", 
        genericName : "Undeceonic Acid.",
        commercialName : "Undecyl, Fungimon (powder/CRM).",
        indication : "Fungus on the feet.",
        contraindication : "Allergy to the drug",
        sideEffect : "Local irritation.",
        patientGuidelines : "<ol class=list><li>Can be used up to 5 times a day, after washing the feet with soap and water and drying.</li><li>Instruction regarding maintaining the hygiene of the feet (daily washing with soap and water, drying also between the toes, etc.).</li></ol>",
    },
    // breathing-----------------------------------------------------------------------------------------------------------------------
    // הרחבת דרכי נשימה
    "Salbutamol-Albuterol": {
        medType: "breathing",
        type : "withoutMechanism",
        pic : "breathing/ventolin-inhaler", 
        genericName : "Salbutamol / Albuterol.",
        commercialName : "Ventolin (liquid for inhalation or inhaler)",
        indication : "<ol class=list><li>Treatment and prevention of asthma attacks (the medical term is called bronchospasm).</li><li>bronchodilation.</li>",
        contraindication : "Allergy to the drug",
        sideEffect : "<ol class=list><li>Tachycardia.</li><li>Shaking hands.</li><li>Paradoxical bronchospasm.</li></ol>",
        patientGuidelines : "<ol class=list><li>If the patient uses several inhalers - wait 2 minutes between inhalers.</li><li>If the patient also uses a steroid inhaler, Ventolin should be used first and after 5 minutes a steroid inhaler (the goal first is to cause relaxation and expansion of the airways in order to maximize the effectiveness of the second inhaler).</li></ol>",
    },
    "Ipratropium-Bromide": {
        medType: "breathing",
        type : "withoutMechanism",
        pic : "breathing/aerovent", 
        genericName : "Ipratropium Bromide.",
        commercialName : "aerovent (liquid for inhalation or inhaler).",
        indication : "<ol class=list><li>Asthma attacks (together with Ventolin).</li><li>COPD (chronic lung disease).</li><li>Runny nose.</li></ol>",
        contraindication : "Allergy to the drug",
        sideEffect : "<ol class=list><li>Dry mouth and mucous.</li><li>Blurred vision (in contact with the eyes).</li></ol>",
        patientGuidelines : "<ol class=list><li>The drug alone is not enough to treat asthma attacks.</li><li>avoid contact with eyes.</li><li>If the patient uses several inhalers - wait 2 minutes between inhalers.</li><li>If the patient also uses a steroid inhaler, Ventolin should be used first and after 5 minutes a steroid inhaler (the goal first is to cause relaxation and expansion of the airways in order to maximize the effectiveness of the second inhaler).</li></ol>",
    },
    // דיכוי דלקת בדרכי הנשימה 
    "Budesonide": {
        medType: "breathing",
        type : "withoutMechanism",
        pic : "breathing/budecort", 
        genericName : "Budesonide.",
        commercialName : "Budicort (inhaler).",
        indication : "Preventive (chronic) treatment for asthma patients.",
        contraindication : "<ol class=list><li>Allergy to the drug and milk proteins.</li><li>A period of significant acute exacerbation of asthma.</li></ol>",
        sideEffect : "<ol class=list><li>Dryness and fungal infection in the mouth.</li><li>Paradoxical bronchospasm.</li></ol>",
        patientGuidelines : "<ol class=list><li>The drug is not intended to treat asthma attacks.</li><li>A significant improvement was observed only after 1-2 weeks from the start of the treatment.</li><li>You should rinse your mouth after using the inhaler.</li></ol>",
    },
    "Bromhexine": {
        medType: "breathing",
        type : "withMechanism",
        pic : "breathing/mokes", 
        genericName : "Bromhexine.",
        commercialName : "Movex.",
        indication : "Inflammation of the respiratory tract causing multiple secretions (cold, bronchitis, etc.).",
        contraindication : "Allergy to the drug",
        sideEffect : "Nausea and abdominal pain.",
        patientGuidelines : "<ol class=list><li>The drug is not intended for long-term use.</li><li>Continuation/appearance of fever and hacking cough requires a doctor's examination to rule out pneumonia.</li></ol>",
        mechanismOfAction : "Thins secretions in the respiratory tract (this makes it easier to expel phlegm through coughing).",
    },
    // chronic-diseases-----------------------------------------------------------------------------------------------------------------------
    // יתר לחץ דם 
    "Amlodipine": {
        medType: "chronicDiseases",
        type : "withMechanism",
        pic : "chronic-diseases/norvasc", 
        genericName : "Amlodipine.",
        commercialName : "Norvasc.<br>Amlodipine Teva.",
        indication : "Hypertension.<br> Angina.",
        contraindication : "Allergy to the drug",
        sideEffect : "<ol class=list><li>A drop in blood pressure that manifests itself in dizziness, tachycardia and more.</li><li>pulmonary edema and shortness of breath.</li></ol>",
        patientGuidelines : "<ol class=list><li>Self-monitoring of blood pressure.</li><li>Do not stop the medicine suddenly (so as not to cause a rebound effect that can manifest itself in high blood pressure, chest pains, etc.).</li></ol>",
        mechanismOfAction : "dilation of blood vessels.",
    },
    "Enalapril": {
        medType: "chronicDiseases",
        type : "withMechanism",
        pic : "chronic-diseases/enaladex20",
        genericName : "Enalapril.",
        commercialName : "Enaladex.",
        indication : "<ol class=list><li>Hypertension.</li><li>heart failure.</li></ol>",
        contraindication : "<ol class=list><li>Allergy to the drug</li><li>renal failure.</li></ol>",
        sideEffect : "<ol class=list><li>A drop in blood pressure that manifests itself in dizziness, tachycardia and more.</li><li>A disturbance in the balance of minerals in the blood.</li></ol>",
        patientGuidelines : "<ol class=list><li>Self-monitoring of blood pressure.</li><li>Slow posture changes (in order to prevent a sudden drop in blood pressure that will lead to fainting).</li><li>לשתות מספיק מים כדי להימנע מהתייבשות.</li></ol>",
        mechanismOfAction : "Expansion of blood vessels + increased secretion of water and salts in the urine.",
    },
    "Hydrochlorothiazide": {
        medType: "chronicDiseases",
        type : "withoutMechanism",
        pic : "chronic-diseases/disothiazide", 
        genericName : "Hydrochlorothiazide.",
        commercialName : "Disothiazide.",
        indication : "<ol class=list><li>Hypertension.</li><li>Edemas.</li></ol>",
        contraindication : `<ol class=list><li>Allergy to the drug</li><li>Anuria (absence of urination, less than 50 ml per day).</li></ol>`,
        sideEffect : "<ol class=list><li>A disturbance in the balance of minerals in the blood.</li><li>Pneumonia.</li><li>rash</li><li>Suppression of blood cell production in the bone marrow.</li><li>Pancreatitis (inflammation of the pancreas)<br>renal failure.</li></ol>",
        patientGuidelines : "<ol class=list><li>Self-monitoring of blood pressure.</li><li>Slow posture changes (in order to prevent a sudden drop in blood pressure that will lead to fainting).</li><li>Take in the morning or afternoon with a meal.</li><li>Use of sunscreen when exposed to the sun.</li></ol>",
    },
    // יתר שומנים בדם (היפרליפידיה) 
    "Simvastatin": {
        medType: "chronicDiseases",
        type : "withoutMechanism",
        pic : "chronic-diseases/simvastatin",  
        genericName : "Simvastatin.",
        commercialName : "Simvacor.<br>Simvaxon.<br>Simvastatin Teva.",
        indication : "<ol class=list><li>High level of cholesterol/fats in the blood.</li><li>Reducing the risk of mortality from cardiovascular disease.</li></ol>",
        contraindication : "<ol class=list><li>Allergy to the drug</li><li>Liver dysfunction.</li></ol>",
        sideEffect : "<ol class=list><li>breakdown of muscle tissue.</li><li>renal failure.</li><li>Liver damage.</li></ol>",
        patientGuidelines : "<ol class=list><li>Take in the evening (most cholesterol production in the body takes place at night).</li><li>Maintaining a healthy lifestyle - proper nutrition, exercise and more...</li></ol>",
    },
    // אנמיה
    "Ferrous-Calcium-Citrate": {
        medType: "chronicDiseases",
        type : "withoutMechanism",
        pic : "chronic-diseases/ferrocal", 
        genericName : "Ferrous Calcium Citrate.",
        commercialName : "ferrocal.",
        indication : "Treatment and prevention of iron deficiency anemia.",
        contraindication : "<ol class=list><li>Allergy to the drug</li><li>Stomach ulcer.</li><li>Intestinal obstruction/ other intestinal problems.</li></ol>",
        sideEffect : "<ol class=list><li>Abdominal pain and constipation/diarrhea.</li><li>Bleeding in the digestive system (in severe cases).</li></ol>",
        patientGuidelines : "<ol class=list><li>It is recommended to take it on an empty stomach, but if the medicine causes stomach pain, then it is possible to take it with food.</li><li>Fruit juices rich in vitamin C improve the absorption of the medicine.</li><li>Do not take together with dairy products (wait at least two hours).</li></ol>",
    },
    "Folic-Acid-VitaminB9": {
        medType: "chronicDiseases",
        type : "withoutMechanism",
        pic : "chronic-diseases/polic-acid", 
        genericName : "Folic Acid (Vitamin B9).",
        commercialName : "Folic Acid.",
        indication : "<ol class=list><li>Dietary supplement.</li><li>Treatment and prevention of anemia due to folic acid deficiency.</li><li>Nutritional supplement during pregnancy (prevention of birth defects).</li></ol>",
        contraindication : "Allergy to the drug",
        sideEffect : "None",
        patientGuidelines : "It must not be taken together with antacids (such as Rani).",
    },
    // דילול דם
    "Acetylsalicylic-Acid": {
        medType: "chronicDiseases",
        type : "withoutMechanism",
        pic : "chronic-diseases/aspirin-cardio",
        genericName : "Acetylsalicylic Acid.",
        commercialName : "Aspirin.",
        indication : "<ol class=list><li>Myocardial infarction (MI).</li><li>Preventive treatment in patients with cardiovascular diseases.</li><li>Obstructive cerebrovascular accident (CVA) or transient ischemic attack (TIA).</li><li>Prevention of stroke.</li><li>After open heart surgery, catheterization, carotid artery surgery.</li><li>Arthritis and other inflammatory conditions.</li><li>Mild/aching pains.</li><li>Fever</li></ol>",
        contraindication : "<ol class=list><li>Allergy to the drug</li><li>Deficient in G6PD.</li><li>Stomach ulcer.</li><li>Blood diseases that are characterized by poor coagulation function or a tendency to bleed.</li><li>Liver function disorders.</li></ol>",
        sideEffect : "<ol class=list><li>Bleeding - intracranial, gastrointestinal, gynecological and more...</li><li>Heart rhythm disorders.</li><li>Pancreatitis (inflammation of the pancreas) and hepatitis (inflammation of the liver).</li><li>Mineral balance disorders</li><li>Suppression of bone marrow blood cell production.</li></ol>",
        patientGuidelines : "<ol class=list><li>Extreme care for a low-salt diet in patients who are supposed to avoid salt consumption because the medicine contains a lot of sodium.</li><li>Do not chew or crush the tablets.</li><li>It is forbidden to drink alcohol near the treatment (two hours before and one hour after).</li><li>Do not stop treatment without medical guidance.</li><li>Be alert for signs of bleeding in various body systems.</li><li>It is recommended to use a soft toothbrush and an electric shaver to prevent bleeding.</li><li>Drinking lots of water.</li></ol>",
    },
    // digestion-----------------------------------------------------------------------------------------------------------------------
    // סותרי חומצה 
    "Omeprazole": {
        medType: "digestion",
        type : "withMechanism",
        pic : "digestion/omepradex", 
        genericName : "Omeprazole.",
        commercialName : "Omepra.<br>Omepradex.",
        indication : "<ol class=list><li>heartburn.</li><li>Esophagitis.</li><li>Stomach/duodenal ulcer.</li><li>Other diseases that are manifested by excessive secretion of acid in the stomach.</li><li>Bacterial infection of the stomach by Helicobacter Pylori.</li></ol>",
        contraindication : "Allergy to the drug",
        sideEffect : "<ol class=list><li>Lack of vitamin B12 (some of the substances secreted from the stomach wall help in the absorption of B12, and the drug also inhibits them).</li><li>Lack of magnesium and weak bones.</li></ol>",
        patientGuidelines : "<ol class=list><li>Do not chew or crush tablets.</li><li>Take 30-60 minutes before a meal, on an empty stomach.</li></ol>",
        mechanismOfAction : "Inhibition of appropriate acid secretion in the stomach wall.",
    },
    "Calcium-Magnesium-Carbonate": {
        medType: "digestion",
        type : "withMechanism",
        pic : "digestion/rennie", 
        genericName : "Calcium + Magnesium Carbonate.",
        commercialName : "rennie.",
        indication : "<ol class=list><li>heartburn.</li><li>Other conditions of hyperacidity in the stomach.</li><li>Certain disturbances in fluid balance.</li></ol>",
        contraindication : "<ol class=list><li>Allergy to the drug</li><li>Renal failure.</li></ol>",
        sideEffect : "<ol class=list><li>diarrhea or constipation.</li><li>Disorders in the mineral balance</li></ol>",
        patientGuidelines : "Tablets for sucking and not intended for chewing/swallowing <br>. You can take a tablet every 3 hours if necessary.",
        mechanismOfAction : "Directly contradicting the acidic stomach contents and making it more basic.",
    },
    // נוגדי הקאה 
    "Metoclopramide": {
        medType: "digestion",
        type : "withoutMechanism",
        pic : "digestion/pramin", 
        genericName : "Metoclopramide.",
        commercialName : "Pramin.",
        indication : "<ol class=list><li>heartburn.</li><li>Treatment and prevention of nausea and vomiting.</li><li>Stomach emptying is too slow (usually happens because of nerve damage).</li></ol>",
        contraindication : "<ol class=list><li>Allergy to the drug</li><li>Convulsions and/or involuntary movements of the facial muscles.</li><li>Pheochromocytoma - a tumor in the adrenal gland.</li><li>Bleeding or blockage in the digestive tract.</li></ol>",
        sideEffect : "<ol class=list><li>Convulsions and/or involuntary movements of the facial muscles.</li><li>Heart rhythm disorders.</li><li>suppression of blood cell production in the bone marrow.</li></ol>",
        patientGuidelines : "<ol class=list><li>It should be taken half an hour before a meal on an empty stomach and/or before going to bed.</li><li>t is recommended not to perform activities that require alertness two hours after taking the medicine (the medicine may cause drowsiness and other neurological effects).</li><li>Do not drink alcohol at the same time as treatment.</li></ol>",
    },
    // משלשלים
    "Bisacodyl": {
        medType: "digestion",
        type : "withMechanism",
        pic : "digestion/laxadin", 
        genericName : "Bisacodyl.",
        commercialName : "Laxadin.",
        indication : "<ol class=list><li>constipation.</li><li>Bowel emptying before tests, surgeries, etc...</li></ol>",
        contraindication : "<ol class=list><li>Allergy to the drug</li><li>Intestinal infections including appendicitis (inflammation of the appendix) and inflammation of the colon.</li><li>Bleeding from the digestive system.</li><li>Bowel obstruction .</li><li>Nausea/vomiting.</li></ol>",
        sideEffect : "<ol class=list><li>Diarrhea.</li><li>Abdominal pain.</li></ol>",
        patientGuidelines : "Do not take near the consumption of dairy products (milk will cause rapid dissolution of the drug and more serious side effects).",
        mechanismOfAction : "Increasing motility in the large intestine and accelerating emptying.",
    },
    "Sodium-Phoshate-PR": {
        medType: "digestion",
        type : "withMechanism",
        pic : "digestion/fleet", 
        genericName : "Sodium Phoshate.",
        commercialName : "Fleet Enema.",
        indication : "<ol class=list><li>constipation.</li><li>Bowel emptying before tests, surgeries, etc...</li></ol>",
        contraindication : "<ol class=list><li>Allergy to the drug</li><li>Severe inflammations in the large intestine.</li><li>Bleeding from the digestive system.</li><li>Bowel obstruction .</li><li>Nausea/vomiting.</li></ol>",
        sideEffect : "<ol class=list><li>Diarrhea.</li><li>Abdominal pain.</li><li>Disorders in the mineral balance.</li></ol>",
        patientGuidelines : "After inserting the enema, hold back for at least 5-10 minutes before emptying the toilet.",
        mechanismOfAction : "Adsorption of liquids into the intestinal cavity and softening of intestinal contents.",
    },
    "Parrafin": {
        medType: "digestion",
        type : "withMechanism",
        pic : "digestion/liquid-parafin", 
        genericName : "Parrafin.",
        commercialName : "Parrafin.",
        indication : "<ol class=list><li>constipation.</li><li>Bowel emptying before tests, surgeries, etc...</li></ol>",
        contraindication : "<ol class=list><li>Allergy to the drug</li><li>Intestinal infections including appendicitis (inflammation of the appendix) and inflammation of the colon.</li><li>Difficulty swallowing (danger of aspiration).</li><li>Bowel obstruction .</li><li>Nausea/vomiting.</li></ol>",
        sideEffect : "<ol class=list><li>Diarrhea.</li><li>Abdominal pain.</li></ol>",
        patientGuidelines : "<ol class=list><li>It should be taken one hour before a meal or two hours after a meal, on an empty stomach.</li><li>The drug is not intended for prolonged use of more than a week.</li><li>Can be given up to twice a day, 2 teaspoons each time.</li></ol>",
        mechanismOfAction : "Softening the stool through water absorption and preventing the absorption of water from the intestine into the blood.",
    },
    // נוגדי שלשול
    "Loperamide": {
        medType: "digestion",
        type : "withMechanism",
        pic : "digestion/imodiom", 
        genericName : "Loperamide.",
        commercialName : "Stopit.<br>Imodium.",
        indication : "diarrhea",
        contraindication : "<ol class=list><li>Allergy to the drug</li><li>Constipation.</li><li>Diarrhea accompanied by high fever.</li><li>Bloody diarrhea or diarrhea as a side effect of antibiotics.</li></ol>",
        sideEffect : "<ol class=list><li>Constipation and nausea.</li><li>Abdominal pain.</li></ol>",
        patientGuidelines : "<ol class=list><li>Drinking plenty of water and a dedicated diet (dry, low fiber).</li><li>The drug is not intended for prolonged use.</li><li>Start by taking 2 capsules/tablets immediately and one more after each additional diarrhea up to 4 in total.</li></ol>",
        mechanismOfAction : "Slowing the emptying of the large intestine by slowing down motility.",
    },
    // אחר
    "Papaverine": {
        medType: "digestion",
        type : "withMechanism",
        pic : "digestion/stopit", 
        genericName : "Papaverine.",
        commercialName : "Stopit.<br>Imodium.",
        indication : "Pains resulting from spasms in the digestive tract, urine and bile.",
        contraindication : "<ol class=list><li>Allergy to the drug</li><li>Heart rhythm disorders / background of heart attack.</li><li>Increased intracranial pressure.</li></ol>",
        sideEffect : "<ol class=list><li>Constipation.</li><li>A drop in blood pressure that manifests itself in dizziness, fainting and more...</li><li>Heart rhythm disturbances, tachycardia.</li></ol>",
        patientGuidelines : "<ol class=list><li>It is recommended to take after a meal, on a full stomach.</li><li>Be careful with changes in posture and actions that require alertness and concentration (the drug may lower blood pressure).</li></ol>",
        mechanismOfAction : "Relaxing muscles and stopping spasms in the digestive tract, urinary tract, bile ducts and blood vessels.",
    },
    "Benzocaine-Bismuth-Zinc": {
        medType: "digestion",
        type : "withMechanism",
        pic : "digestion/rectozoirn", 
        genericName : "Benzocaine + Bismuth + Zinc.",
        commercialName : "Rectozorin (oinment).",
        indication : "hemorrhoids.",
        contraindication : "<ol class=list><li>Allergy to the drug</li><li>Bleeding or an open wound.</li></ol>",
        sideEffect : "Bleeding or an open wound.",
        patientGuidelines : "<ol class=list><li>Apply every morning and evening and also after every bowel movement.</li><li>If bleeding occurs, stop applying and consult a doctor.</li></ol>",
        mechanismOfAction : "Relief of pain and itching caused by hemorrhoids, locally (Benzocaine is a local anesthetic like lidocaine).",
    },
    // painkillers-----------------------------------------------------------------------------------------------------------------------
    // שיכוך כאבים כללי 
    "Paracetamol": {
        medType: "painkillers",
        type : "withoutMechanism",
        pic : "painkillers/acamol", 
        genericName : "Paracetamol.",
        commercialName : "Acamol, Dexamol.<br>Acamol Focus, Exidol.",
        indication : "<ol class=list><li>Mild/moderate pain.</li><li>Fever.</li></ol>",
        contraindication : "<ol class=list><li>Allergy to the drug</li><li>Liver function problem.</li></ol>",
        sideEffect : "None.",
        patientGuidelines : `<ol class=list><li>It is forbidden to drink alcohol at the same time as the treatment.</li><li>You can take 1-2 pills (500-1000 mg) every 4-6 hours, if necessary.</li></ol>`,
    },
    "Dipyrone": {
        medType: "painkillers",
        type : "withoutMechanism",
        pic : "painkillers/optalgin", 
        genericName : "Dipyrone.",
        commercialName : "Optalgin.",
        indication : "<ol class=list><li>Mild/moderate pain.</li><li>Fever.</li></ol>",
        contraindication : "<ol class=list><li>Allergy to the drug.</li><li>bone marrow suppression.</li></ol>",
        sideEffect : "Bone marrow suppression (mainly in prolonged treatment).",
        patientGuidelines : "<ol class=list><li>The drug is not recommended for prolonged use.</li><li>You can take 1-2 pills every 6-8 hours, if necessary.</li></ol>",
    },
    // שיכוך כאבים + השפעה אנטי דלקתית  
    "Iburofen": {
        medType: "painkillers",
        type : "withoutMechanism",
        pic : "painkillers/ibuprofen-ibufen", 
        genericName : "Iburofen.",
        commercialName : "Ibufen.<br>Atrofen.",
        indication : "<ol class=list><li>Mild/moderate pain.</li><li>Fever.</li></ol>",
        contraindication : "<ol class=list><li>Allergy to the drug.</li><li>Renal failure.</li><li>Stomach ulcer.</li></ol>",
        sideEffect : "<ol class=list><li>Abdominal pain (damage to the stomach lining).</li><li>Renal failure.</li></ol>",
        patientGuidelines : "<ol class=list><li>It is recommended to take after a meal.</li><li>It is forbidden to drink alcohol during the treatment (alcohol increases the side effects).</li><li>A pill can be swallowed every 4-6 hours, if necessary.</li></ol>",
    },
    // שיכוך כאבים + הרפיית שרירים 
    "Paracetamol-Orphenadrine": {
        medType: "painkillers",
        type : "withoutMechanism",
        pic : "painkillers/muscol", 
        genericName : "Paracetamol + Orphenadrine.",
        commercialName : "Muscol.",
        indication : "Muscle aches.",
        contraindication : "<ol class=list><li>Allergy to the drug.</li><li>Liver function problem.</li></ol>",
        sideEffect : "None.",
        patientGuidelines : "<ol class=list><li>Do not take another medicine containing Paracetamol (such as Dexamol) during the treatment.</li><li>It is forbidden to drink alcohol during the treatment.</li><li>Do not take before activities that require alertness, for example driving (the medicine may cause fatigue and/or muscle weakness).</li></ol>",
    },
    "Radian-B-Tiger-Balm-Deep-Heat": {
        medType: "painkillers",
        type : "withoutMechanism",
        pic : "painkillers/radian-b", 
        genericName : "There is no specific active ingredient.",
        commercialName : "Radian B.<br>Tiger Balm.<br>Deep Heat.",
        indication : "Muscle and/or joint pain.",
        contraindication : "Allergy to the drug.",
        sideEffect : "None.",
        patientGuidelines : "<ol class=list><li>Do not apply in areas with delicate skin such as groin, face, etc....</li><li>Apply a thin layer and wait for absorption without massaging the area.</li><li>Can be applied 3-4 times a day, if necessary.</li></ol>",
    },
    "Phenazopyridine": {
        medType: "painkillers",
        type : "withoutMechanism",
        pic : "painkillers/sedural", 
        genericName : "Phenazopyridine.",
        commercialName : "Sedural.",
        indication : "Pain relief resulting from urinary tract infection or an invasive procedure in the urinary tract.",
        contraindication : "<ol class=list><li>Allergy to the drug.</li><li>Deficient in G6PD.</li><li>Renal failure.</li><li>Liver failure or inflammation of the liver.</li><li>Inflammation that has risen to the renal pelvis/kidney.</li></ol>",
        sideEffect : "Coloring body fluids in orange.",
        patientGuidelines : "<ol class=list><li>The drug gives an orange tint to urine and other body fluids.</li><li>t is recommended to drink a lot of water (note - drinking a lot of water relieves the pains resulting from inflammation of the urinary tract, kidney stones, etc...)</li></ol>",
    },
    "Benzocaine-Thyrotrycine": {
        medType: "painkillers",
        type : "withMechanism",
        pic : "painkillers/strepsils", 
        genericName : "Benzocaine + Thyrotrycine.",
        commercialName : "Lemosin.<br>Strepsils.",
        indication : "Sore throat/laryngitis.",
        contraindication : "Allergy to the drug.",
        sideEffect : "None.",
        patientGuidelines : "<ol class=list><li>One tablet can be taken every 4 hours, if necessary.</li><li>The tablets are for sucking and not for swallowing/chewing.</li></ol>",
        mechanismOfAction : "Throat pain relief through anesthesia and local disinfection.",
    },
    "Bismuth-Subsalicylate": {
        medType: "painkillers",
        type : "withMechanism",
        pic : "painkillers/kalbeten", 
        genericName : "Bismuth Subsalicylate.",
        commercialName : "Kalbeten.",
        indication : "Abdominal pain.",
        contraindication : "Allergy to the drug.",
        sideEffect : "None.",
        patientGuidelines : "A pill can be swallowed every 3 hours, if necessary.",
        mechanismOfAction : "<ol class=list><li>Reduction of abdominal pain (suppression of inflammatory process in the digestive tract).</li><li>Reducing diarrhea (reducing bowel motility).</li></ol>",
    },
    "Tetracaine-Phenazone": {
        medType: "painkillers",
        type : "withMechanism",
        pic : "painkillers/otidin", 
        genericName : "Tetracaine + Phenazone.",
        commercialName : "Otidin.",
        indication : "Earaches/ear infections.",
        contraindication : "<ol class=list><li>Allergy to the drug.</li><li>Rupture of the eardrum.</li></ol>",
        sideEffect : "None.",
        patientGuidelines : "<ol class=list><li>You can drip a drop into the ear every hour, if necessary and tilt your head to the side for several minutes after the drip.</li><li>The drug is not intended for long-term use beyond 2-3 days.</li></ol>",
        mechanismOfAction : "<ol class=list><li>Tetracaine is a local anesthetic.</li><li>Phenazone is an analgesic and anti-inflammatory agent from the NSAID group.</li></ol>",
    },
    // other-meds-----------------------------------------------------------------------------------------------------------------------
    "Petroleum-Gel": {
        medType: "otherMeds",
        type : "withMechanism",
        pic : "other-meds/vaseline", 
        genericName : "Petroleum.",
        commercialName : "Vaseline.",
        indication : "<ol class=list><li>Dry skin or lips.</li><li>Jock itch.</li></ol>",
        contraindication : "Allergy to the drug.",
        sideEffect : "local irritation of the skin.",
        patientGuidelines : "Apply to the relevant area up to 4 times a day.",
        mechanismOfAction : "lubrication and shielding.",
    },
    "Zinc-Oxide-Iron-Oxide": {
        medType: "otherMeds",
        type : "withMechanism",
        pic : "other-meds/calamine", 
        genericName : "Zinc Oxide + Iron Oxide.",
        commercialName : "Calamine (solution).",
        indication : "Local skin irritation by minor bites and mild allergic reactions.",
        contraindication : "<ol class=list><li>Allergy to the drug.</li><li>Open wounds and cuts / burns.</li></ol>",
        sideEffect : "local irritation of the skin.",
        patientGuidelines : "Apply to the relevant area up to 6 times a day and wait for it to dry.",
        mechanismOfAction : "Soothing irritated skin through drying and reducing itching.",
    },
    "Benzocaine-Salicylic-Acid": {
        medType: "otherMeds",
        type : "withMechanism",
        pic : "other-meds/noxacorn-liquiod", 
        genericName : "Benzocaine + Salicylic Acid.",
        commercialName : "Naxacorn (liquid sol or Trans-Dermal skin patches).",
        indication : "Warts and thickened/hard/dry skin on the feet.",
        contraindication : "Allergy to the drug.",
        sideEffect : "local irritation of the skin.",
        patientGuidelines : "Apply to the relevant area up to 1-3 times a day.",
        mechanismOfAction : `<ol class=list><li>Benzocaine is a local anesthetic like lidocaine.</li><li>Salicylic Acid is a substance that causes the "breaking" of proteins in skin cells and the peeling of dead skin cells, warts and thickened/hard/dry skin.</li></ol>`,
    },
    "Cetomacrogol-CRM": {
        medType: "otherMeds",
        type : "withMechanism",
        pic : "other-meds/cetomag", 
        genericName : "Cetomacrogol.",
        commercialName : "Cetomag.<br>Dermacol.",
        indication : "Dry skin.",
        contraindication : "Allergy to the drug.",
        sideEffect : "local irritation of the skin.",
        patientGuidelines : "<ol class=list><li>Apply to the relevant area if necessary.</li><li>Do not apply to injured skin.</li></ol>",
        mechanismOfAction : "Keeping the skin moist.",
    },
    "Benzoyl-Peroxide-Gel": {
        medType: "otherMeds",
        type : "withMechanism",
        pic : "other-meds/benzac", 
        genericName : "Benzoyl Peroxide.",
        commercialName : "Benzoyl.<br>Peroxide.",
        indication : "Treatment and prevention of acne.",
        contraindication : "<ol class=list><li>Treatment and prevention of acne.</li><li>Serious wounds and severe scarring.</li></ol>",
        sideEffect : "local irritation of the skin.",
        patientGuidelines : "<ol class=list><li>Apply twice a day after washing your face with soap and water.</li><li>Do not apply to injured skin.</li></ol>",
        mechanismOfAction : "<ol class=list><li>Local antibacterial activity.</li><li>Reducing skin oils locally.</li></ol>",
    },
    "Tertinoin-CRM": {
        medType: "otherMeds",
        type : "withMechanism",
        pic : "other-meds/retavit", 
        genericName : "Tertinoin.",
        commercialName : "Retavit.",
        indication : "Treatment and prevention of acne.",
        contraindication : "<ol class=list><li>Allergy to the drug.</li><li>injured skin.</li><li>Pregnancy/breastfeeding (including pregnancy planning) (medications containing/derivatives of vitamin A increase the risk of birth defects in the fetus.)</li></ol>",
        sideEffect : "<ol class=list><li>local irritation of the skin.</li><li>Change in skin color.</li><li>Increased sensitivity of the skin to the sun.</li></ol>",
        patientGuidelines : "<ol class=list><li>Apply according to the doctor's instructions after washing the face with soap and water.</li><li>Do not apply to injured skin.</li><li>Contraception must be used during intercourse.</li><li>Reducing exposure to the sun and using sunscreen (the medicine increases the skin's sensitivity to the sun).</li></ol>",
        mechanismOfAction : "A derivative of vitamin A (prevents blockage of hair canals in the skin and thus reduces acne scars).",
    },
    // "med-name-6": { דוגמא לאובייקט של ת.ז שלא מופיע בו מנגנון הגנה
    //     type : "withoutMechanism",
    //     pic : "other-meds/pitrion", 
    //     genericName : "check",
    //     commercialName : "check",
    //     indication : "",
    //     contraindication : "",
    //     sideEffect : "check",
    //     patientGuidelines : "check",
    // },
    // "med-name-7": { דוגמא לאובייקט של ת.ז שמופיע בו מנגנון הגנה
    //     type : "withMechanism",
    //     pic : "other-meds/pitrion", 
    //     genericName : "check",
    //     commercialName : "check",
    //     indication : "",
    //     contraindication : "",
    //     sideEffect : "check",
    //     patientGuidelines : "check",
    //     mechanismOfAction : "check",
    // },
};

let objMedsShelfsColors = {//צבע, מספר מדפים, כותרת
    antiallergic : ["pink", 3, "Anti-allergics"], 
    antibiotics : ["darkGreen", 4, "Antibiotics"], 
    breathing : ["orange", 3, "Breathing"],
    chronicDiseases : ["teal", 4, "Chronic diseases"],
    digestion : ["yellow", 5, "Digestion"],
    painkillers : ["purple", 4, "Painkillers"],
    otherMeds : ["lightGreen", 1, "Other medications"],
}

// varubal
let strCurrentMedType;
let strMedTypeFromSearch;
let strcurrentPage = "homePage";
let bSearchScreen = false;
let QUESTIONS = [];

/* loading function
--------------------------------------------------------------
Description: */
window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("fade");
    // place listeners on search button, about button and med buttons
    document.querySelector('.searchButton').addEventListener('click', onClickSearch);
    document.querySelector('.aboutButton').addEventListener('click', onClickAbout);
    let arrMedsButtons = document.querySelectorAll('.mainPageButton');
    for (let i = 0; i < arrMedsButtons.length; i++) {
        arrMedsButtons[i].addEventListener('click', creatMedShelfs);
    };
    document.querySelector(`.testButton`).addEventListener("click", onClickExam);
});

/* onClickAbout
--------------------------------------------------------------
Description: Adds about page */
const onClickAbout = () => {
    // מראה דף אודות ומעלים כפתור אודות ודף בית 
    document.querySelector('.aboutPage').classList.remove("hidden");
    document.querySelector('.aboutButton').classList.add("hidden");
    document.querySelector('.homePageButtons').classList.add("hidden");
    // משנה את התמונה של הכפתור העליון
    document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/right-arrow.svg");
    strcurrentPage = "aboutPage"
}

/* onClickSearch
--------------------------------------------------------------
Description: Adds search box and listener to input */
const onClickSearch = () => {
    if (strcurrentPage === "aboutPage") {
        sendToHomePage();
    } else if (strcurrentPage === "practicePage") {
        if(strClickedPracticeQuestion !== undefined) {
            // מוריד סימונים מהשאלות
            if (QUESTIONS[currentQuestion][`correctAns`] !== strClickedPracticeQuestion) {
                document.querySelector(`.practicePage .${strClickedPracticeQuestion} div`).classList.remove("wrongAnswer");
            }
            document.querySelector(`.${QUESTIONS[currentQuestion][`correctAns`]} div`).classList.remove("correctAnswer");
            document.querySelector(`.practiceQuestionSqure${strClickedPracticeQuestion.slice(3)}`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-unmarked.svg");
        }
            // משנה צבע של כפתור בדיקה ושל ריבועי התשובות
            document.querySelector(`.practiceBottomButton`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
            for (let i = 1; i <= 4; i++) {
                document.querySelector(`.ans${i} img`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
            }
            // משנה חזרה כפתור בדיקה
            document.querySelector(`.practiceBottomButton`).setAttribute("src", "../assets/images/grapics/practice/check_button.svg");
        currentQuestion = 0;
        creatMedShelfs();
    } else if (strcurrentPage === "examPrePage" || strcurrentPage === "endOfTest") {
        sendToHomePage();
    } else if (strcurrentPage !== "medId") {
        // מראה את תיבת החיפוש
        document.querySelector('.searchBoxHolder').classList.remove("hidden");
        document.querySelector('.searchBox').classList.remove("hidden");
        // מעלים כותרת וכפתורים ומשנה גל
        document.querySelector('.title').classList.add("hidden");
        document.querySelector('.aboutButton').classList.add("hidden");
        document.querySelector('.medTypeSymbol').classList.add("hidden");
        document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/home-page/search-wave.svg");
        // הופך את המסך לשחור
        document.querySelector('.searchScren').classList.add("darkScreen");
    
        document.querySelector('.darkScreen').addEventListener("click", () => {
            // מעלים מסך חיפוש
            document.querySelector('.searchBoxHolder').classList.add("hidden");
            document.querySelector('.searchBox').classList.add("hidden");
            document.querySelector('.dropDown').classList.add("hidden");
            document.querySelector('.searchScren').classList.remove("darkScreen");
            // מחזיר כותרת ומשנה בחזרה גל
            document.querySelector('.title').classList.remove("hidden");
            document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/home-page/opening-wave.svg");
            if (strcurrentPage === "medShelf") {
                // מחזיר מדפי תרופות
                document.querySelector('.medTypeSymbol').classList.remove("hidden");
            } else {
                // מחזיר מסך בית
                document.querySelector('.aboutButton').classList.remove("hidden");
            }
        });
        document.querySelector('.searchBox').addEventListener('input', onSearch);
    } 
}

/* onSearch
--------------------------------------------------------------
Description: cheack for search match and creat dropdown accordingly */
const onSearch = () => {
    document.querySelector('.dropDown').style.pointerEvents = "all";
    // Saves user input in a varuble and resets the dropdown html.
    let strUserInput = document.querySelector('.searchBox').value;
    document.querySelector('.dropDown').innerHTML = "";
    document.querySelector('.dropDown').style.zIndex = "2";
    document.querySelector('.dropDown').classList.remove("hidden");
    // Goes over the object to check for a search match.
    for (let key of Object.keys(objMedInfo)){
        //Push the current match to it.
        if(key.includes(strUserInput) && strUserInput !== ""){
            let div = document.createElement("div");
            div.innerHTML = addSpace(key);
            div.classList.add("dropDownItem", key);
            document.querySelector('.dropDown').append(div);
            document.querySelector(`.${key}`).addEventListener("click", creatMedID);
        }
    }
    bSearchScreen = true
}

/* creatMedID
--------------------------------------------------------------
Description: Shows medicine id, hides privios div and adds listener to retern button*/
const creatMedID = (event) => {
    // שומר את התרופה נוכחית ואת האובייקט שלה
    let strCurrentMed =  event.currentTarget.classList[1]
    let objCurrentMed =  objMedInfo[strCurrentMed];
    // מראה את הדיב של התעודת זהות
    document.querySelector(`.medicineId`).classList.remove("hidden");
    // משנה מסך בהתאם למסך ממנו באנו
    if (strcurrentPage === "medShelf") {
        // מעלים מדפי תרופות
        document.querySelector(`.${strCurrentMedType}Shelf`).classList.add("hidden");
        document.querySelector(`.shelfsButtons`).classList.add("hidden");
    } else {
        // מעלים את המסך בית
        document.querySelector('.homePageButtons').classList.add("hidden");
        document.querySelector('.aboutButton').classList.add("hidden");
    }
    if (bSearchScreen) {
        // מעלים מסך חיפוש
        document.querySelector('.searchBoxHolder').classList.add("hidden");
        document.querySelector('.searchBox').classList.add("hidden");
        document.querySelector('.dropDown').classList.add("hidden");
        document.querySelector('.searchScren').classList.remove("darkScreen");
        document.querySelector('.title').classList.remove("hidden");
        document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/home-page/opening-wave.svg");
        document.querySelector('.dropDown').style.pointerEvents = "none";
    }
    // משנה כפתור עליון
    document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/right-arrow.svg");
    // מחזיר מאזיני לחיצה, מאתחל גלילה ומוחק תעודות זהות קודמות
    document.querySelector('.medicineId').style.pointerEvents = "all";
    document.querySelector('.medicineId').innerHTML = "";
    document.querySelector('.medicineId').scrollTop = 0;
    // משנה כותרת
    document.querySelector(`.title`).classList.add("titelMedId");
    document.querySelector(`.title`).innerHTML = strCurrentMed;
    // משכפל טמפלט ומכניס את התעודת זהות
    let template = document.querySelector(`.${objCurrentMed.type}`);
    let clon = template.content.cloneNode(true);
    document.querySelector('.medicineId').appendChild(clon);
    // מכניס מידע מהאובייקט לתעודת זהות
    for (let key of Object.keys(objCurrentMed)){
        // Check which key and change html accordingly
        if (key === "pic"){
            document.querySelector(`.${key}`).setAttribute("src", `../assets/images/${objCurrentMed[key]}.png`)
        } else if (key === "mechanismOfAction" && objCurrentMed.type === "withMechanism") {
            document.querySelector(`.${key}`).innerHTML = `${objCurrentMed[key]}`;
        }
         else if (key !== "type" && key !== "medType") {
            document.querySelector(`.${key}`).innerHTML = `${objCurrentMed[key]}`;
        }
    }
    // שם מאזין לחץ חזור לפי הדף שהיה קודם
    if (strcurrentPage === "medShelf") {
        document.querySelector('.topButton').addEventListener("click", creatMedShelfs);
    } else {
        document.querySelector('.topButton').addEventListener("click", sendToHomePage);
    }
    // שומר את העמוד הנוכחי
    strcurrentPage = "medId"
    if (  bSearchScreen === true) {
        // משנה צבע
        if (strCurrentMedType !== undefined) {
            document.querySelector(`.wave`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
            document.querySelector(`.topButton`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
        }
        // שומר סוג תרופה
        strMedTypeFromSearch = objCurrentMed.medType;
        // משנה צבע של הגל והכפתור
        document.querySelector(`.wave`).classList.add(objMedsShelfsColors[strMedTypeFromSearch][0]);
        document.querySelector(`.topButton`).classList.add(objMedsShelfsColors[strMedTypeFromSearch][0]);
    }
}

/* addSpace
--------------------------------------------------------------
Description: change hyphen to space */
const addSpace = (phrase) => {
    return phrase.replace(/-/g, ' ');
}

/* creatMedShelfs
--------------------------------------------------------------
Description: */
const creatMedShelfs = (event) => {
    if (strcurrentPage === "medId") {
        //  מעלים תעודת זהות, משנה מאפיינים לכותרת ומראה סמל
        document.querySelector('.medicineId').classList.add("hidden");
        document.querySelector(`.title`).classList.remove("titelMedId");
        // משנה את הכפתור העליון ושם לו מאזין  
        document.querySelector('.medTypeSymbol').classList.remove("hidden");
        document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/search-button.svg");
        document.querySelector('.topButton').removeEventListener("click", creatMedShelfs);
        // משנה צבע של הגל והכפתור
        if (strMedTypeFromSearch !== undefined) {
            document.querySelector(`.wave`).classList.remove(objMedsShelfsColors[strMedTypeFromSearch][0]);
            document.querySelector(`.topButton`).classList.remove(objMedsShelfsColors[strMedTypeFromSearch][0]);
        }
    } else if (strcurrentPage === "homePage") {
        // שומר את סוג התרופות ומעלים מסך בית
        strCurrentMedType = event.currentTarget.classList[1]
        document.querySelector('.homePageButtons').classList.add("hidden");
        document.querySelector('.aboutButton').classList.add("hidden");
    } else if (strcurrentPage === "practicePage") {
        // משנה מאפיינים של כותרת
        document.querySelector(`.titleConeiner`).classList.remove("titleContainerPractice");
        // משנה גל וכפתור עליון
        document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/home-page/opening-wave.svg");
        document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/search-button.svg");
        document.querySelector('.topButton').classList.remove("topButtonPractice");
        // מעלים דמות ושאלה
        document.querySelector('.practicePage').classList.add("hidden");
        // משנה צבע של חלונית תשובות ושל כפתור סיום
        document.querySelector(`.practiceBottomButton`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
        document.querySelector(`.practiceRightAnswersConteiner`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
        // מחליף תמונה של כפתור סיום לכפתור בדיקה
        document.querySelector(`.practiceBottomButton`).setAttribute("src", "../assets/images/grapics/practice/check_button.svg");
        // מעלים שאלות ומראה תשובות נכונות
        document.querySelector(`.practiceRightAnswersConteiner`).classList.add("hidden");
        document.querySelector(`.answersContainer`).classList.remove("hidden");
    }
   
    // שומר את העמוד הנוכחי
    strcurrentPage = "medShelf"
    // משנה צבע לפי הסוג
    document.querySelector(`.wave`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
    document.querySelector(`.topButton`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
    document.querySelector(`.searchBoxHolder`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
    document.querySelector(`.shelfsButtons .homeButton`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
    document.querySelector(`.practiceButton`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
    // משנה כותרת
    document.querySelector(`.title`).innerHTML = objMedsShelfsColors[strCurrentMedType][2];
    document.querySelector(`.title`).classList.add("titleMedShelfs");
    // מראה מדפים, סמל בכותרת וכפתורים למטה
    document.querySelector(`.${strCurrentMedType}Shelf`).classList.remove("hidden");
    document.querySelector(`.medTypeSymbol`).classList.remove("hidden");
    document.querySelector(`.shelfsButtons`).classList.remove("hidden");
    document.querySelector(`.homeButton`).addEventListener("click", sendToHomePage);
    // שומר שאלות ושולח לתרגול
    QUESTIONS = shuffle(DATA[strCurrentMedType]["questionsPractice"]);
    document.querySelector(`.practiceButton`).addEventListener("click", onClickPractice);
    // משנה צבע מדפים ושם מאזין לפתיחה שלהם
    for (let i = 1; i <= objMedsShelfsColors[strCurrentMedType][1]; i++) {
        document.querySelector(`.${strCurrentMedType}Shelf > .shelf${i}`).addEventListener("click", controlShelfsDropDown)
        document.querySelector(`.${strCurrentMedType}Shelf .shelf${i} .downButton`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
        document.querySelector(`.${strCurrentMedType}Shelf .shelf${i} .shelf`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
    }
    bSearchScreen = false;
}

/* controlShelfsDropDown
--------------------------------------------------------------
Description: */
const controlShelfsDropDown = (event) => {
    // שומר מדף שנלחץ
    let strChosenShelf = event.currentTarget.classList[1];
    // סוגר מדף
    if (document.querySelector(`.${strCurrentMedType}Shelf >  .${strChosenShelf} .downButton`).getAttribute("src").includes("up")) {
        document.querySelector(`.${strCurrentMedType}Shelf >  .${strChosenShelf} .downButton`).setAttribute("src", "../assets/images/grapics/med-shelfs/down-button.svg");
        document.querySelector(`.${strCurrentMedType}Shelf >  .${strChosenShelf}dropDown`).classList.add("hidden");
    }else { // פותח מדף
        let arrMedIdButtons = document.querySelectorAll(`.${strCurrentMedType}Shelf >  .${strChosenShelf}dropDown .shelfMedPicContainer`);
        for (let i = 0; i < arrMedIdButtons.length; i++) {
            arrMedIdButtons[i].addEventListener('click', creatMedID);
        }
        document.querySelector(`.${strCurrentMedType}Shelf >  .${strChosenShelf}dropDown`).classList.remove("hidden");
        document.querySelector(`.${strCurrentMedType}Shelf >  .${strChosenShelf} .downButton`).setAttribute("src", "../assets/images/grapics/med-shelfs/up-button.svg");
    }
}

/* sendToHomePage
--------------------------------------------------------------
Description: */
const sendToHomePage = () => {
    if (strcurrentPage === "medId") {
        // מוריד צבע של הגל והכפתור
        document.querySelector(`.wave`).classList.remove(objMedsShelfsColors[strMedTypeFromSearch][0]);
        document.querySelector(`.topButton`).classList.remove(objMedsShelfsColors[strMedTypeFromSearch][0]);
        // לא מאפשר מאזיני לחיצה, מעלים תעודת זהות ומאפיינים של הכותרת
        document.querySelector('.medicineId').style.pointerEvents = "none";
        document.querySelector('.medicineId').classList.add("hidden");
        document.querySelector(`.title`).classList.remove("titelMedId");
        // משנה כפתור חץ לחיפוש ומוריד ממנו מאזין
        document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/search-button.svg");
        document.querySelector('.topButton').removeEventListener("click", sendToHomePage);
    } else if (strcurrentPage === "medShelf") {
        // מעלים מדפים, סמלים בכותרת וכפתורים למטה
        document.querySelector(`.${strCurrentMedType}Shelf`).classList.add("hidden");
        document.querySelector(`.medTypeSymbol`).classList.add("hidden");
        document.querySelector(`.shelfsButtons`).classList.add("hidden");
        // משנה מאפיינים של כותרת
        document.querySelector(`.title`).classList.remove("titleMedShelfs");
        // משנה חזרה צבעים לכחול
        document.querySelector(`.wave`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
        document.querySelector(`.topButton`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
        document.querySelector(`.searchBoxHolder`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
        document.querySelector(`.shelfsButtons .homeButton`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
        document.querySelector(`.practiceButton`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
    } else if (strcurrentPage === "examPrePage") {
        // מעלים דף התחלת מבחן, ומשנה כפתור עליו לחיפוש 
        document.querySelector(`.examPage`).classList.add("hidden");
        document.querySelector(`.beforeExamPage`).classList.add("hidden"); 
        document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/search-button.svg");
    }  else if (strcurrentPage === "endOfTest") {
        // מעלים דף סיום מבחן, ומשנה כפתור עליו לחיפוש 
        document.querySelector(`.afterExamPage`).classList.add("hidden");
        document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/search-button.svg");
    } else {
        // מעלים דף אודות, ומשנה כפתור עליו לחיפוש 
        document.querySelector('.aboutPage').classList.add("hidden");
        document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/search-button.svg");
    }
    // משנה כותרת, מראה דף בית וכפתור אודות 
    document.querySelector(`.title`).innerHTML = "Medicine Glossary";
    document.querySelector('.homePageButtons').classList.remove("hidden");
    document.querySelector('.aboutButton').classList.remove("hidden");
    // שומר דף נוכחי
    strcurrentPage = "homePage"
}
