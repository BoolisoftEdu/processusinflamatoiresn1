const assets={};
const QUESTIONS=[
  {
    "id": 1,
    "type": "QCS",
    "text": "Quel est le principal objectif d’un vaccin ?",
    "options": [
      {
        "key": "A",
        "text": "Provoquer une maladie"
      },
      {
        "key": "B",
        "text": "Induire une réponse immunitaire protectrice"
      },
      {
        "key": "C",
        "text": "Détruire les globules rouges"
      },
      {
        "key": "D",
        "text": "Augmenter la température corporelle"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Induire une réponse immunitaire protectrice"
  },
  {
    "id": 2,
    "type": "QCS",
    "text": "Le BCG est un vaccin :",
    "options": [
      {
        "key": "A",
        "text": "Vivant atténué"
      },
      {
        "key": "B",
        "text": "Inactivé"
      },
      {
        "key": "C",
        "text": "À ARN"
      },
      {
        "key": "D",
        "text": "Sous-unitaire"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. Vivant atténué"
  },
  {
    "id": 3,
    "type": "QCS",
    "text": "Quelle cellule joue un rôle clé dans la présentation de l’antigène ?",
    "options": [
      {
        "key": "A",
        "text": "Le globule rouge"
      },
      {
        "key": "B",
        "text": "La cellule musculaire"
      },
      {
        "key": "C",
        "text": "La cellule dendritique"
      },
      {
        "key": "D",
        "text": "La plaquette"
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "Selon le corrigé fourni : C. La cellule dendritique"
  },
  {
    "id": 4,
    "type": "QCS",
    "text": "Parmi les propositions suivantes, laquelle est vraie ?",
    "options": [
      {
        "key": "A",
        "text": "Un patient atteint de tuberculose pulmonaire ne peut pas sortir de sa chambre"
      },
      {
        "key": "B",
        "text": "Un patient atteint de tuberculose pulmonaire doit être mis en isolement respiratoire TYPE PRECAUTION AIR"
      },
      {
        "key": "C",
        "text": "Un patient atteint de tuberculose pulmonaire doit mettre un masque FFP2 lorsque l’infirmière entre dans sa chambre"
      },
      {
        "key": "D",
        "text": "patient atteint de tuberculose pulmonaire doit rester en isolement respiratoire 10 jours après la Négativation de la recherche de BAAR dans les expectorations"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Un patient atteint de tuberculose pulmonaire doit être mis en isolement respiratoire TYPE PRECAUTION AIR"
  },
  {
    "id": 5,
    "type": "QCS",
    "text": "La tuberculose est-elle une maladie à déclaration obligatoire ?",
    "options": [
      {
        "key": "A",
        "text": "Vrai"
      },
      {
        "key": "B",
        "text": "Faux"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. Vrai"
  },
  {
    "id": 6,
    "type": "QCS",
    "text": "Quel est l’outil diagnostique principal de la tuberculose ?",
    "options": [
      {
        "key": "A",
        "text": "L’ IDR"
      },
      {
        "key": "B",
        "text": "La prise de  sang"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. L’ IDR"
  },
  {
    "id": 7,
    "type": "QCS",
    "text": "Concernant les « 3 A » pour les crachats BK, quelle proposition est correcte ?",
    "options": [
      {
        "key": "A",
        "text": "Alité – À jeun – Au réveil"
      },
      {
        "key": "B",
        "text": "Assis – Après manger – À midi"
      },
      {
        "key": "C",
        "text": "Alité – Après manger – Au coucher"
      },
      {
        "key": "D",
        "text": "Actif – À jeun – Après-midi"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. Alité – À jeun – Au réveil"
  },
  {
    "id": 8,
    "type": "QCS",
    "text": "Chez un patient qui ne peut pas cracher, quel prélèvement peut être réalisé pour rechercher le BK ?",
    "options": [
      {
        "key": "A",
        "text": "Prélèvement sanguin"
      },
      {
        "key": "B",
        "text": "Prélèvement urinaire"
      },
      {
        "key": "C",
        "text": "Tubage gastrique"
      },
      {
        "key": "D",
        "text": "Écouvillon nasal"
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "Selon le corrigé fourni : C. Tubage gastrique"
  },
  {
    "id": 9,
    "type": "QCS",
    "text": "Quel est le premier antirétroviral (ARV) mis sur le marché ?",
    "options": [
      {
        "key": "A",
        "text": "Truvada"
      },
      {
        "key": "B",
        "text": "Dolutégravir"
      },
      {
        "key": "C",
        "text": "AZT"
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "Selon le corrigé fourni : C. AZT"
  },
  {
    "id": 10,
    "type": "QCS",
    "text": "Quel type de virus est le VIH ?",
    "options": [
      {
        "key": "A",
        "text": "Un virus à ADN"
      },
      {
        "key": "B",
        "text": "Un rétrovirus à ARN"
      },
      {
        "key": "C",
        "text": "Un virus bactérien"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Un rétrovirus à ARN"
  },
  {
    "id": 11,
    "type": "QCS",
    "text": "Quelles sont les trois enzymes majeures du VIH ?",
    "options": [
      {
        "key": "A",
        "text": "Transcriptase inverse, intégrase, protéase"
      },
      {
        "key": "B",
        "text": "ADN polymérase, ligase, hélicase"
      },
      {
        "key": "C",
        "text": "Amylase, lipase, protéase"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. Transcriptase inverse, intégrase, protéase"
  },
  {
    "id": 12,
    "type": "QCS",
    "text": "Quelle cellule est principalement ciblée par le VIH ?",
    "options": [
      {
        "key": "A",
        "text": "Lymphocyte T CD4"
      },
      {
        "key": "B",
        "text": "Lymphocyte T CD8"
      },
      {
        "key": "C",
        "text": "Globule rouge"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. Lymphocyte T CD4"
  },
  {
    "id": 13,
    "type": "QCS",
    "text": "Quelle est la principale voie de transmission du VIH ?",
    "options": [
      {
        "key": "A",
        "text": "Transmission alimentaire"
      },
      {
        "key": "B",
        "text": "Transmission sexuelle"
      },
      {
        "key": "C",
        "text": "Transmission aérienne"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Transmission sexuelle"
  },
  {
    "id": 14,
    "type": "QCS",
    "text": "Quel test est utilisé pour le dépistage du VIH ?",
    "options": [
      {
        "key": "A",
        "text": "Test ELISA"
      },
      {
        "key": "B",
        "text": "ECG"
      },
      {
        "key": "C",
        "text": "Scanner thoracique"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. Test ELISA"
  },
  {
    "id": 15,
    "type": "QCS",
    "text": "Qu’est-ce que l’immunité ?",
    "options": [
      {
        "key": "A",
        "text": "La capacité de l’organisme à produire uniquement des globules rouges"
      },
      {
        "key": "B",
        "text": "La capacité de l’organisme à se défendre contre les infections et certaines substances antigéniques"
      },
      {
        "key": "C",
        "text": "La capacité à digérer les aliments"
      },
      {
        "key": "D",
        "text": "La capacité à réguler la température corporelle"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. La capacité de l’organisme à se défendre contre les infections et certaines substances antigéniques"
  },
  {
    "id": 16,
    "type": "QCS",
    "text": "Quels sont les deux grands types d’immunité ?",
    "options": [
      {
        "key": "A",
        "text": "Immunité locale et générale"
      },
      {
        "key": "B",
        "text": "Immunité naturelle et artificielle uniquement"
      },
      {
        "key": "C",
        "text": "Immunité innée et immunité adaptative"
      },
      {
        "key": "D",
        "text": "Immunité cellulaire et nerveuse"
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "Selon le corrigé fourni : C. Immunité innée et immunité adaptative"
  },
  {
    "id": 17,
    "type": "QCS",
    "text": "Quels lymphocytes produisent notamment les anticorps ?",
    "options": [
      {
        "key": "A",
        "text": "Les lymphocytes T"
      },
      {
        "key": "B",
        "text": "Les lymphocytes B"
      },
      {
        "key": "C",
        "text": "Les globules rouges"
      },
      {
        "key": "D",
        "text": "Les plaquettes"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Les lymphocytes B"
  },
  {
    "id": 18,
    "type": "QCS",
    "text": "Qu’est-ce que l’immunodépression ?",
    "options": [
      {
        "key": "A",
        "text": "Une augmentation excessive des défenses immunitaires"
      },
      {
        "key": "B",
        "text": "Une diminution des capacités de défense du système immunitaire"
      },
      {
        "key": "C",
        "text": "Une réaction inflammatoire normale"
      },
      {
        "key": "D",
        "text": "Une production excessive d’anticorps"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Une diminution des capacités de défense du système immunitaire"
  },
  {
    "id": 19,
    "type": "QCS",
    "text": "Une allergie correspond à :",
    "options": [
      {
        "key": "A",
        "text": "Une réaction immunitaire excessive contre une substance généralement inoffensive"
      },
      {
        "key": "B",
        "text": "Une absence totale de réaction immunitaire"
      },
      {
        "key": "C",
        "text": "Une infection bactérienne"
      },
      {
        "key": "D",
        "text": "Une maladie exclusivement génétique"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. Une réaction immunitaire excessive contre une substance généralement inoffensive"
  },
  {
    "id": 20,
    "type": "QCS",
    "text": "Quel est l'antibiotique de première intention dans la majorité des pneumonies communautaires, car il cible le pneumocoque, bactérie la plus fréquente ?",
    "options": [
      {
        "key": "A",
        "text": "Rovamycine"
      },
      {
        "key": "B",
        "text": "Azithromycine"
      },
      {
        "key": "C",
        "text": "Amoxicilline"
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "Selon le corrigé fourni : C. Amoxicilline"
  },
  {
    "id": 21,
    "type": "QCM",
    "text": "Quelles sont les vaccins recommandés chez la femme enceinte",
    "options": [
      {
        "key": "A",
        "text": "Coqueluche"
      },
      {
        "key": "B",
        "text": "Grippe"
      },
      {
        "key": "C",
        "text": "BCG"
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. Coqueluche / B. Grippe"
  },
  {
    "id": 22,
    "type": "QCM",
    "text": "Concernant la contagiosité d’un patient atteint de la grippe, quelles propositions sont vraies",
    "options": [
      {
        "key": "A",
        "text": "Le patient peut être contagieux avant l'apparition des symptômes."
      },
      {
        "key": "B",
        "text": "La contagiosité persiste plusieurs jours après le début des symptômes."
      },
      {
        "key": "C",
        "text": "Le patient est contagieux uniquement le jour où apparaissent les symptômes."
      },
      {
        "key": "D",
        "text": "La contagiosité cesse systématiquement après 3 jours."
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. Le patient peut être contagieux avant l'apparition des symptômes. / B. La contagiosité persiste plusieurs jours après le début des symptômes."
  },
  {
    "id": 23,
    "type": "QCM",
    "text": "Concernant les signes cliniques de la grippe, quelles propositions sont exactes ?",
    "options": [
      {
        "key": "A",
        "text": "Le syndrome grippal est souvent d'apparition brutale."
      },
      {
        "key": "B",
        "text": "Les myalgies diffuses font partie des signes possibles."
      },
      {
        "key": "C",
        "text": "La grippe se manifeste toujours par une éruption cutanée."
      },
      {
        "key": "D",
        "text": "La vaccination exclut totalement le risque de grippe."
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. Le syndrome grippal est souvent d'apparition brutale. / B. Les myalgies diffuses font partie des signes possibles."
  },
  {
    "id": 24,
    "type": "QCM",
    "text": "Qu’elles sont les complications de la grippe ?",
    "options": [
      {
        "key": "A",
        "text": "Respiratoire"
      },
      {
        "key": "B",
        "text": "Myocardite"
      },
      {
        "key": "C",
        "text": "Encéphalite"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. Respiratoire / B. Myocardite / C. Encéphalite"
  },
  {
    "id": 25,
    "type": "QCM",
    "text": "Concernant la transmission du VIH, laquelle ou lesquelles de ces propositions sont exactes :",
    "options": [
      {
        "key": "A",
        "text": "Le mode de transmission le plus fréquent est la voie materno-fœtale"
      },
      {
        "key": "B",
        "text": "La césarienne est systématiquement proposée aux femmes enceintes séropositives pour limiter le risque de transmission au bébé lors de l’accouchement"
      },
      {
        "key": "C",
        "text": "L’obtention d’une charge virale indétectable permet d’empêcher la transmission sexuelle du VIH"
      },
      {
        "key": "D",
        "text": "La prophylaxie pré-exposition (PrEP) est recommandée uniquement chez les hommes homosexuels et les transsexuels à haut risque d’acquisition du VIH"
      },
      {
        "key": "E",
        "text": "Le rapport anal actif est la pratique sexuelle la plus à risque d’acquisition du VIH"
      }
    ],
    "correct": [
      "C",
      "E"
    ],
    "feedback": "Selon le corrigé fourni : C. L’obtention d’une charge virale indétectable permet d’empêcher la transmission sexuelle du VIH / E. Le rapport anal actif est la pratique sexuelle la plus à risque d’acquisition du VIH"
  },
  {
    "id": 26,
    "type": "QCM",
    "text": "Concernant l’épidémiologie du VIH, laquelle ou lesquelles de ces propositions sont exactes :",
    "options": [
      {
        "key": "A",
        "text": "Environ 50 millions de personnes vivent avec le VIH dans le monde"
      },
      {
        "key": "B",
        "text": "L’Afrique Sub-Saharienne est la zone du monde avec la prévalence du VIH la plus forte"
      },
      {
        "key": "C",
        "text": "Les toxicomanes sont le seul groupe de la population française au sein duquel le nombre de découvertes du VIH ne diminue pas d’année en année"
      },
      {
        "key": "D",
        "text": "Actuellement, environ 5000 infections par le VIH sont découvertes chaque année en France"
      },
      {
        "key": "E",
        "text": "L’absence d’utilisation du préservatif explique à elle seule un plus fort risque de transmission du VIH chez les hommes ayant des rapports sexuels avec d’autres hommes (HSH)"
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "feedback": "Selon le corrigé fourni : B. L’Afrique Sub-Saharienne est la zone du monde avec la prévalence du VIH la plus forte / D. Actuellement, environ 5000 infections par le VIH sont découvertes chaque année en France"
  },
  {
    "id": 27,
    "type": "QCM",
    "text": "Parmi ces propositions, lesquelles doivent conduire à l’hospitalisation d’un patient ayant une pneumonie ?",
    "options": [
      {
        "key": "A",
        "text": "Patient de 75 ans"
      },
      {
        "key": "B",
        "text": "Antécédent de pneumonie"
      },
      {
        "key": "C",
        "text": "Patient confus"
      },
      {
        "key": "D",
        "text": "Prise d’antibiotique il y a 6 mois"
      },
      {
        "key": "E",
        "text": "Tension artérielle à 85/50 mmHg"
      },
      {
        "key": "F",
        "text": "Fréquence respiratoire à 20/min"
      }
    ],
    "correct": [
      "A",
      "C",
      "E"
    ],
    "feedback": "Selon le corrigé fourni : A. Patient de 75 ans / C. Patient confus / E. Tension artérielle à 85/50 mmHg"
  },
  {
    "id": 28,
    "type": "QCM",
    "text": "Dans la liste suivante lesquelles font parties des signes clinique de la grippe ?",
    "options": [
      {
        "key": "A",
        "text": "Myalgie"
      },
      {
        "key": "B",
        "text": "Céphalée"
      },
      {
        "key": "C",
        "text": "Asthénie"
      },
      {
        "key": "D",
        "text": "Fièvre"
      },
      {
        "key": "E",
        "text": "Rhinorrhée"
      }
    ],
    "correct": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "feedback": "Selon le corrigé fourni : A. Myalgie / B. Céphalée / C. Asthénie / D. Fièvre / E. Rhinorrhée"
  },
  {
    "id": 29,
    "type": "QCM",
    "text": "Quels éléments de ce dossier clinique doivent faire envisager une prise en charge hospitalière d'une pneumonie ?",
    "options": [
      {
        "key": "A",
        "text": "Patient âgé de 96 ans"
      },
      {
        "key": "B",
        "text": "Épisode de pneumonie ancien"
      },
      {
        "key": "C",
        "text": "Traitement antibiotique reçu il y a 6 mois"
      },
      {
        "key": "D",
        "text": "Pression artérielle basse"
      }
    ],
    "correct": [
      "A",
      "D"
    ],
    "feedback": "Selon le corrigé fourni : A. Patient âgé de 96 ans / D. Pression artérielle basse"
  },
  {
    "id": 30,
    "type": "QCM",
    "text": "Qu’elles sont les personnes à risque ?",
    "options": [
      {
        "key": "A",
        "text": "Personne qui a le Vih"
      },
      {
        "key": "B",
        "text": "Personnes nées dans un pays de haute incidence de tuberculose"
      },
      {
        "key": "C",
        "text": "Résident de certaines de collectivités"
      },
      {
        "key": "D",
        "text": "Patient immunodéprimé"
      }
    ],
    "correct": [
      "A",
      "B",
      "C",
      "D"
    ],
    "feedback": "Selon le corrigé fourni : A. Personne qui a le Vih / B. Personnes nées dans un pays de haute incidence de tuberculose / C. Résident de certaines de collectivités / D. Patient immunodéprimé"
  },
  {
    "id": 31,
    "type": "QCM",
    "text": "Parmi les affirmations suivantes concernant la tuberculose multirésistante, lesquelles sont vraies ?",
    "options": [
      {
        "key": "A",
        "text": "Elle est définie par une résistance à l'INH et à la rifampicine."
      },
      {
        "key": "B",
        "text": "Elle représente plus de 20 % des cas en France."
      },
      {
        "key": "C",
        "text": "Elle peut être liée à une mauvaise observance du traitement."
      },
      {
        "key": "D",
        "text": "Elle ne nécessite pas de traitement spécifique."
      }
    ],
    "correct": [
      "A",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. Elle est définie par une résistance à l'INH et à la rifampicine. / C. Elle peut être liée à une mauvaise observance du traitement."
  },
  {
    "id": 32,
    "type": "QCM",
    "text": "Concernant l'isolement d'un patient atteint ou suspect de tuberculose pulmonaire, quelles propositions sont exactes ?",
    "options": [
      {
        "key": "A",
        "text": "Le patient doit être placé en chambre individuelle porte fermée."
      },
      {
        "key": "B",
        "text": "Les déplacements doivent être limités."
      },
      {
        "key": "C",
        "text": "Aucun masque n'est nécessaire pour les visiteurs."
      },
      {
        "key": "D",
        "text": "L'isolement peut être levé immédiatement après la mise sous traitement."
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. Le patient doit être placé en chambre individuelle porte fermée. / B. Les déplacements doivent être limités."
  },
  {
    "id": 33,
    "type": "QCM",
    "text": "Concernant la surveillance du traitement antituberculeux, quelles affirmations sont vraies ?",
    "options": [
      {
        "key": "A",
        "text": "Les transaminases doivent être surveillées régulièrement."
      },
      {
        "key": "B",
        "text": "Une radiographie thoracique peut être réalisée à J15-J30 puis à M2 et M6."
      },
      {
        "key": "C",
        "text": "Aucun contrôle biologique n'est nécessaire après le début du traitement."
      },
      {
        "key": "D",
        "text": "Le contrôle des crachats n'a aucun intérêt pour la levée de l'isolement."
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. Les transaminases doivent être surveillées régulièrement. / B. Une radiographie thoracique peut être réalisée à J15-J30 puis à M2 et M6."
  },
  {
    "id": 34,
    "type": "QCM",
    "text": "Concernant les formes extra-pulmonaires de la tuberculose, quelles localisations sont possibles ?",
    "options": [
      {
        "key": "A",
        "text": "Ganglionnaire"
      },
      {
        "key": "B",
        "text": "Osseuse"
      },
      {
        "key": "C",
        "text": "Rénale"
      },
      {
        "key": "D",
        "text": "Thyroïdienne"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. Ganglionnaire / B. Osseuse / C. Rénale"
  },
  {
    "id": 35,
    "type": "QCM",
    "text": "Concernant les populations à risque de complications, quelles affirmations sont vraies ?",
    "options": [
      {
        "key": "A",
        "text": "Chez le sujet âgé de plus de 65 ans, une décompensation cardio-respiratoire peut survenir."
      },
      {
        "key": "B",
        "text": "Les patients greffés font partie des patients immunodéprimés."
      },
      {
        "key": "C",
        "text": "L'obésité constitue un facteur de risque."
      },
      {
        "key": "D",
        "text": "Les patients atteints de néoplasie ne sont pas considérés comme immunodéprimés."
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. Chez le sujet âgé de plus de 65 ans, une décompensation cardio-respiratoire peut survenir. / B. Les patients greffés font partie des patients immunodéprimés. / C. L'obésité constitue un facteur de risque."
  },
  {
    "id": 36,
    "type": "QCM",
    "text": "Concernant la réaction inflammatoire, quelles propositions sont exactes ?",
    "options": [
      {
        "key": "A",
        "text": "Elle peut être déclenchée par une infection ou un traumatisme."
      },
      {
        "key": "B",
        "text": "Les principaux signes sont la rougeur, la chaleur, la douleur et l'œdème."
      },
      {
        "key": "C",
        "text": "Elle empêche le recrutement des cellules immunitaires."
      },
      {
        "key": "D",
        "text": "Elle est toujours néfaste pour l'organisme"
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. Elle peut être déclenchée par une infection ou un traumatisme. / B. Les principaux signes sont la rougeur, la chaleur, la douleur et l'œdème."
  },
  {
    "id": 37,
    "type": "QCM",
    "text": "Concernant les indications de la PrEP (prophylaxie pré-exposition), quelles propositions sont exactes ?",
    "options": [
      {
        "key": "A",
        "text": "Elle est recommandée chez les HSH ayant des rapports sexuels non protégés à risque."
      },
      {
        "key": "B",
        "text": "Les personnes transgenres exposées à un risque élevé de transmission du VIH peuvent en bénéficier."
      },
      {
        "key": "C",
        "text": "Elle est réservée uniquement aux personnes vivant avec le VIH."
      },
      {
        "key": "D",
        "text": "Elle est systématiquement prescrite à toute la population"
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. Elle est recommandée chez les HSH ayant des rapports sexuels non protégés à risque. / B. Les personnes transgenres exposées à un risque élevé de transmission du VIH peuvent en bénéficier."
  },
  {
    "id": 38,
    "type": "QCM",
    "text": "Dans quelles situations un TPE peut-il être proposé ?",
    "options": [
      {
        "key": "A",
        "text": "Après un rapport sexuel non protégé avec une personne séropositive ou de statut VIH inconnu."
      },
      {
        "key": "B",
        "text": "Après une rupture ou un glissement de préservatif."
      },
      {
        "key": "C",
        "text": "Après une vaccination contre l'hépatite B."
      },
      {
        "key": "D",
        "text": "Après un simple contact sans exposition à un liquide biologique."
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. Après un rapport sexuel non protégé avec une personne séropositive ou de statut VIH inconnu. / B. Après une rupture ou un glissement de préservatif."
  },
  {
    "id": 39,
    "type": "QCM",
    "text": "Concernant le traitement post-exposition (TPE), quelles propositions sont exactes ?",
    "options": [
      {
        "key": "A",
        "text": "Le TPE est un traitement antirétroviral d'urgence."
      },
      {
        "key": "B",
        "text": "Il vise à réduire le risque d'infection par le VIH après une exposition à risque"
      },
      {
        "key": "C",
        "text": "Il est utilisé pour traiter définitivement le VIH."
      },
      {
        "key": "D",
        "text": "Il est réservé uniquement aux professionnels de santé."
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. Le TPE est un traitement antirétroviral d'urgence. / B. Il vise à réduire le risque d'infection par le VIH après une exposition à risque"
  },
  {
    "id": 40,
    "type": "QCM",
    "text": "Parmi les situations suivantes, lesquelles correspondent à une exposition à risque justifiant une évaluation pour un TPE ?",
    "options": [
      {
        "key": "A",
        "text": "Partage de matériel d'injection."
      },
      {
        "key": "B",
        "text": "Accident d'exposition au sang (piqûre avec une aiguille contaminée)."
      },
      {
        "key": "C",
        "text": "Prise de température d'un patient."
      },
      {
        "key": "D",
        "text": "Contact avec une peau saine sans plaie."
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. Partage de matériel d'injection. / B. Accident d'exposition au sang (piqûre avec une aiguille contaminée)."
  }
];
const json=(d,status=200,headers={})=>Response.json(d,{status,headers:{'Cache-Control':'no-store',...headers}});
async function sign(value,secret){let k=await crypto.subtle.importKey('raw',new TextEncoder().encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);return Array.from(new Uint8Array(await crypto.subtle.sign('HMAC',k,new TextEncoder().encode(value)))).map(x=>x.toString(16).padStart(2,'0')).join('')}
async function isAdmin(req,env){let c=req.headers.get('Cookie')?.match(/ue25exam1admin=([^;]+)/)?.[1];if(!c||!env.ADMIN_PASSWORD)return false;let [expiry,sig]=c.split('.');return Number(expiry)>Date.now()&&sig===await sign(expiry,env.ADMIN_PASSWORD)}
async function objects(env,prefix){let all=[],cursor;do{const l=await env.BUCKET.list({prefix,cursor});all.push(...await Promise.all(l.objects.map(o=>readObject(env,o.key))));cursor=l.truncated?l.cursor:undefined}while(cursor);return all.filter(Boolean)}
async function rows(env){const saved=await objects(env,'submissions/'),byId=new Map(saved.map(r=>[r.id,{...r,status:'completed',answered:QUESTIONS.filter(q=>(r.answers[q.id]||[]).length).length}]));for(const a of await objects(env,'attempts/')){if(!byId.has(a.id))byId.set(a.id,makeRow(a,false))}return [...byId.values()].sort((a,b)=>b.created_at.localeCompare(a.created_at))}
const equal=(a,b)=>JSON.stringify([...a].sort())===JSON.stringify([...b].sort());
export default {async fetch(req,env){try{const path=new URL(req.url).pathname;const handled=await attemptRoutes(req,env,path);if(handled)return handled;if(assets[path])return new Response(assets[path][0],{headers:{'Content-Type':assets[path][1]}});
if(path==='/api/questions')return json(QUESTIONS.map(({id,type,text,options})=>({id,type,text,options})));
if(path==='/api/admin/login'&&req.method==='POST'){let d=await req.json();if(!env.ADMIN_PASSWORD||d.password!==env.ADMIN_PASSWORD)return json({error:'Mot de passe incorrect.'},401);let exp=String(Date.now()+8*3600000);return json({ok:true},200,{'Set-Cookie':`ue25exam1admin=${exp}.${await sign(exp,env.ADMIN_PASSWORD)}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=28800`})}
if(path==='/api/admin/logout')return json({ok:true},200,{'Set-Cookie':'ue25exam1admin=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0'});
if(path==='/api/admin/me')return json({admin:await isAdmin(req,env)});
if(path.startsWith('/api/admin/')){if(!await isAdmin(req,env))return json({error:'Accès formateur requis.'},401);if(path.endsWith('/questions'))return json(QUESTIONS);let data=await rows(env);if(path.endsWith('/results'))return json({results:data});if(path.endsWith('/export.csv')||path.endsWith('/export.xlsx'))return exportData(data,path.endsWith('.xlsx'));}
if(path==='/api/submit'&&req.method==='POST'){const d=await req.json(),a=await readObject(env,'attempts/'+d.attempt_token+'.json');if(!a)return json({error:'Tentative invalide'},409);if(a.submitted){const row=await readObject(env,'submissions/'+a.id+'.json');return json(withReview(row))}if(!a.deadline||Date.now()<=a.deadline+5000)a.answers=cleanAnswers(d.answers);return json(await finishAttempt(env,a));}
return json({error:'Page introuvable'},404)}catch(e){return json({error:'Erreur du serveur. Réessayez.'},500)}}};
const xml=s=>String(s??'').replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]));
function zip(files){let chunks=[],central=[],offset=0;const enc=new TextEncoder();const header=(n)=>new DataView(new ArrayBuffer(n));function crc(bytes){let c=0xffffffff;for(let b of bytes){c^=b;for(let i=0;i<8;i++)c=(c>>>1)^((c&1)?0xedb88320:0)}return(c^0xffffffff)>>>0}for(let [name,content]of Object.entries(files)){let n=enc.encode(name),b=enc.encode(content),c=crc(b),h=header(30);h.setUint32(0,0x04034b50,true);h.setUint16(4,20,true);h.setUint32(14,c,true);h.setUint32(18,b.length,true);h.setUint32(22,b.length,true);h.setUint16(26,n.length,true);chunks.push(new Uint8Array(h.buffer),n,b);let z=header(46);z.setUint32(0,0x02014b50,true);z.setUint16(4,20,true);z.setUint16(6,20,true);z.setUint32(16,c,true);z.setUint32(20,b.length,true);z.setUint32(24,b.length,true);z.setUint16(28,n.length,true);z.setUint32(42,offset,true);central.push(new Uint8Array(z.buffer),n);offset+=30+n.length+b.length}let size=central.reduce((s,b)=>s+b.length,0),e=header(22);e.setUint32(0,0x06054b50,true);e.setUint16(8,Object.keys(files).length,true);e.setUint16(10,Object.keys(files).length,true);e.setUint32(12,size,true);e.setUint32(16,offset,true);return new Blob([...chunks,...central,e.buffer])}
function exportData(data,xlsx){let matrix=[['ID','Date UTC','Nom','Prénom','Groupe','Score','Total','Note /20','Durée (s)','État','Questions renseignées',...QUESTIONS.map(q=>'Q'+q.id+' réponse'),...QUESTIONS.map(q=>'Q'+q.id+' résultat')],...data.map(r=>[r.id,r.created_at,r.nom,r.prenom,r.groupe,r.score,r.total,r.score20,r.duration_seconds,r.status==='in_progress'?'En cours — note provisoire':'Terminée',r.answered??QUESTIONS.length,...QUESTIONS.map(q=>(r.answers[q.id]||[]).join(', ')),...QUESTIONS.map(q=>Number(equal(r.answers[q.id]||[],q.correct)))])];if(!xlsx)return new Response('\ufeff'+matrix.map(r=>r.map(x=>'"'+String(x).replace(/"/g,'""')+'"').join(';')).join('\r\n'),{headers:{'Content-Type':'text/csv; charset=utf-8','Content-Disposition':'attachment; filename=resultats_quiz.csv'}});let sheet='<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>'+matrix.map(r=>'<row>'+r.map(x=>typeof x==='number'?`<c><v>${x}</v></c>`:`<c t="inlineStr"><is><t>${xml(x)}</t></is></c>`).join('')+'</row>').join('')+'</sheetData></worksheet>';let files={'[Content_Types].xml':'<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/></Types>','_rels/.rels':'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>','xl/workbook.xml':'<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Résultats" sheetId="1" r:id="rId1"/></sheets></workbook>','xl/_rels/workbook.xml.rels':'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/></Relationships>','xl/worksheets/sheet1.xml':sheet};return new Response(zip(files),{headers:{'Content-Type':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','Content-Disposition':'attachment; filename=resultats_quiz.xlsx'}})}
const defaultSettings={timed:false,minutes:30,max_attempts:0,allow_resume:true};
async function readObject(env,key){let o=await env.BUCKET.get(key);return o?JSON.parse(await o.text()):null}
async function attemptRoutes(req,env,path){
if(path==='/api/settings'||path==='/api/admin/settings'){if(path.includes('/admin/')&&!await isAdmin(req,env))return json({error:'Accès formateur requis.'},401);if(req.method==='POST'){let s=await req.json();if(typeof s.timed!=='boolean'||typeof s.allow_resume!=='boolean'||!Number.isInteger(s.minutes)||s.minutes<1||s.minutes>240||!Number.isInteger(s.max_attempts)||s.max_attempts<0||s.max_attempts>100)return json({error:'Durée : 1 à 240 minutes. Tentatives : 0 à 100.'},400);await env.BUCKET.put('config/settings.json',JSON.stringify({timed:s.timed,minutes:s.minutes,max_attempts:s.max_attempts,allow_resume:s.allow_resume}));return json({ok:true})}return json(await readObject(env,'config/settings.json')||defaultSettings)}
if(path==='/api/start'&&req.method==='POST'){let d=await req.json(),nom=String(d.nom||'').trim(),prenom=String(d.prenom||'').trim();if(nom.length<2||nom.length>80||prenom.length<2||prenom.length>80)return json({error:'Nom et prénom obligatoires.'},400);const identity=(nom+'|'+prenom).normalize('NFKC').toLocaleLowerCase('fr').replace(/\s+/g,' ');let settings=await readObject(env,'config/settings.json')||defaultSettings;let previous=d.token?await readObject(env,'attempts/'+d.token+'.json'):null;if(previous&&!previous.submitted&&previous.identity===identity&&previous.allow_resume){return json(previous)}let count=0,cursor;do{let l=await env.BUCKET.list({prefix:'attempts/',cursor});for(let o of l.objects){let a=await readObject(env,o.key);if(a.identity===identity)count++}cursor=l.truncated?l.cursor:undefined}while(cursor);let old=(await rows(env)).filter(r=>(r.nom+'|'+r.prenom).normalize('NFKC').toLocaleLowerCase('fr').replace(/\s+/g,' ')===identity);let attemptSubmissionIds=new Set();cursor=undefined;do{let l=await env.BUCKET.list({prefix:'attempts/',cursor});for(let o of l.objects){let a=await readObject(env,o.key);attemptSubmissionIds.add(a.id)}cursor=l.truncated?l.cursor:undefined}while(cursor);count+=old.filter(r=>!attemptSubmissionIds.has(r.id)).length;if(settings.max_attempts&&count>=settings.max_attempts)return json({error:'Nombre maximal de tentatives atteint. Contactez votre formateur.'},403);let now=Date.now(),a={token:crypto.randomUUID(),id:now*1000+crypto.getRandomValues(new Uint16Array(1))[0]%1000,identity,nom,prenom,started_at:now,deadline:settings.timed?now+settings.minutes*60000:null,allow_resume:settings.allow_resume,answers:{},submitted:false};await env.BUCKET.put('attempts/'+a.token+'.json',JSON.stringify(a));return json(a)}
if(path==='/api/progress'&&req.method==='POST'){const d=await req.json(),a=await readObject(env,'attempts/'+d.token+'.json');if(!a)return json({error:'Tentative invalide'},409);if(a.submitted)return json({ok:true,completed:true,result:withReview(await readObject(env,'submissions/'+a.id+'.json'))});if(a.deadline&&Date.now()>a.deadline)return json({ok:true,completed:true,result:await finishAttempt(env,a)});a.answers=cleanAnswers(d.answers);a.confirmed=QUESTIONS.filter(q=>(d.confirmed||[]).includes(q.id)&&(a.answers[q.id]||[]).length>0).map(q=>q.id);a.current=Number.isInteger(d.current)?Math.max(0,Math.min(QUESTIONS.length-1,d.current)):0;a.updated_at=new Date().toISOString();if(a.confirmed.length===QUESTIONS.length)return json({ok:true,completed:true,result:await finishAttempt(env,a)});await env.BUCKET.put('attempts/'+a.token+'.json',JSON.stringify(a));return json({ok:true,completed:false,updated_at:a.updated_at})}

return null}

function cleanAnswers(input){if(!input||typeof input!=='object'||Array.isArray(input)||JSON.stringify(input).length>30000)throw Error('Réponses invalides');const answers={};for(const q of QUESTIONS){const a=input[q.id]||[];if(!Array.isArray(a)||a.some(v=>!q.options.some(o=>o.key===v))||new Set(a).size!==a.length||(q.type==='QCS'&&a.length>1))throw Error('Réponse invalide');answers[q.id]=a}return answers}
function makeRow(a,completed){const answers=a.answers||{},score=QUESTIONS.filter(q=>equal(answers[q.id]||[],q.correct)).length;return {id:a.id,nom:a.nom,prenom:a.prenom,groupe:'',created_at:completed?new Date().toISOString():new Date(a.started_at).toISOString(),updated_at:a.updated_at||new Date(a.started_at).toISOString(),score,total:QUESTIONS.length,score20:Math.round(score*2000/QUESTIONS.length)/100,duration_seconds:Math.max(0,Math.round((Math.min(Date.now(),a.deadline||Date.now())-a.started_at)/1000)),answers,status:completed?'completed':'in_progress',answered:QUESTIONS.filter(q=>(answers[q.id]||[]).length).length}}
function withReview(row){return {...row,review:QUESTIONS.map(q=>({...q,selected:row.answers[q.id]||[],success:equal(row.answers[q.id]||[],q.correct)}))}}
async function finishAttempt(env,a){const existing=await readObject(env,'submissions/'+a.id+'.json');if(existing)return withReview(existing);const row=makeRow(a,true);await env.BUCKET.put('submissions/'+a.id+'.json',JSON.stringify(row));a.submitted=true;await env.BUCKET.put('attempts/'+a.token+'.json',JSON.stringify(a));return withReview(row)}
