/**
 * Vocabulary data and quiz helpers for the language learning app.
 * Contains 100 words across 12 categories with translations in 9 languages.
 */

export const CATEGORIES = [
  'greetings',
  'family',
  'numbers',
  'colors',
  'animals',
  'food',
  'travel',
  'business',
  'phrases',
  'conversation',
  'vocabulary',
  'grammar',
];

const SUPPORTED_LANGUAGES = ["english","spanish","french","german","italian","japanese","chinese","urdu","arabic"];

const RAW_VOCABULARY = [
  {
    "id": 1,
    "category": "greetings",
    "icon": "👋",
    "meaning": "A common greeting",
    "t": {
      "english": [
        "Hello",
        "heh-LOH",
        "Hello, how are you today?"
      ],
      "spanish": [
        "Hola",
        "OH-lah",
        "Hola, ¿cómo estás hoy?"
      ],
      "french": [
        "Bonjour",
        "bohn-ZHOOR",
        "Bonjour, comment allez-vous?"
      ],
      "german": [
        "Hallo",
        "HAH-loh",
        "Hallo, wie geht es dir heute?"
      ],
      "italian": [
        "Ciao",
        "CHAH-oh",
        "Ciao, come stai oggi?"
      ],
      "japanese": [
        "こんにちは",
        "kon-nichi-wa",
        "こんにちは、今日はお元気ですか？"
      ],
      "chinese": [
        "你好",
        "nǐ hǎo",
        "你好，你今天好吗？"
      ],
      "urdu": [
        "سلام",
        "sa-laam",
        "سلام، آج آپ کیسے ہیں؟"
      ],
      "arabic": [
        "مرحبا",
        "mar-ha-ban",
        "مرحبا، كيف حالك اليوم؟"
      ]
    }
  },
  {
    "id": 2,
    "category": "greetings",
    "icon": "👋",
    "meaning": "Farewell when leaving",
    "t": {
      "english": [
        "Goodbye",
        "good-BYE",
        "Goodbye, see you tomorrow!"
      ],
      "spanish": [
        "Adiós",
        "ah-DYOHS",
        "Adiós, ¡nos vemos mañana!"
      ],
      "french": [
        "Au revoir",
        "oh ruh-VWAHR",
        "Au revoir, à demain!"
      ],
      "german": [
        "Auf Wiedersehen",
        "owf VEE-der-zay-en",
        "Auf Wiedersehen, bis morgen!"
      ],
      "italian": [
        "Arrivederci",
        "ah-ree-veh-DEHR-chee",
        "Arrivederci, a domani!"
      ],
      "japanese": [
        "さようなら",
        "sa-yo-u-na-ra",
        "さようなら、また明日！"
      ],
      "chinese": [
        "再见",
        "zài jiàn",
        "再见，明天见！"
      ],
      "urdu": [
        "خدا حافظ",
        "khu-da haa-fiz",
        "خدا حافظ، کل ملیں گے!"
      ],
      "arabic": [
        "مع السلامة",
        "ma-a as-sa-la-ma",
        "مع السلامة، أراك غدا!"
      ]
    }
  },
  {
    "id": 3,
    "category": "greetings",
    "icon": "🌅",
    "meaning": "Morning greeting",
    "t": {
      "english": [
        "Good morning",
        "good MOR-ning",
        "Good morning, did you sleep well?"
      ],
      "spanish": [
        "Buenos días",
        "BWEH-nos DEE-ahs",
        "Buenos días, ¿dormiste bien?"
      ],
      "french": [
        "Bonjour",
        "bohn-ZHOOR",
        "Bonjour, as-tu bien dormi?"
      ],
      "german": [
        "Guten Morgen",
        "GOO-ten MOR-gen",
        "Guten Morgen, hast du gut geschlafen?"
      ],
      "italian": [
        "Buongiorno",
        "bwohn-JOR-noh",
        "Buongiorno, hai dormito bene?"
      ],
      "japanese": [
        "おはよう",
        "o-ha-yo-u",
        "おはよう、よく眠れましたか？"
      ],
      "chinese": [
        "早上好",
        "zǎo shang hǎo",
        "早上好，睡得好吗？"
      ],
      "urdu": [
        "صبح بخیر",
        "su-bah bakh-air",
        "صبح بخیر، اچھی نیند آئی؟"
      ],
      "arabic": [
        "صباح الخير",
        "sa-bah al-khayr",
        "صباح الخير، هل نمت جيدا؟"
      ]
    }
  },
  {
    "id": 4,
    "category": "greetings",
    "icon": "🌙",
    "meaning": "Evening or bedtime greeting",
    "t": {
      "english": [
        "Good night",
        "good NIGHT",
        "Good night, sweet dreams!"
      ],
      "spanish": [
        "Buenas noches",
        "BWEH-nas NOH-ches",
        "Buenas noches, ¡dulces sueños!"
      ],
      "french": [
        "Bonne nuit",
        "bun NWEE",
        "Bonne nuit, fais de beaux rêves!"
      ],
      "german": [
        "Gute Nacht",
        "GOO-te NAKHT",
        "Gute Nacht, träum süß!"
      ],
      "italian": [
        "Buonanotte",
        "bwoh-nah-NOT-teh",
        "Buonanotte, sogni d'oro!"
      ],
      "japanese": [
        "おやすみ",
        "o-ya-su-mi",
        "おやすみ、いい夢を！"
      ],
      "chinese": [
        "晚安",
        "wǎn ān",
        "晚安，好梦！"
      ],
      "urdu": [
        "شب بخیر",
        "shab bakh-air",
        "شب بخیر، خواب خواب!"
      ],
      "arabic": [
        "تصبح على خير",
        "tu-sbih ala khayr",
        "تصبح على خير، أحلام سعيدة!"
      ]
    }
  },
  {
    "id": 5,
    "category": "greetings",
    "icon": "🙏",
    "meaning": "Polite request word",
    "t": {
      "english": [
        "Please",
        "PLEEZ",
        "Please help me with this."
      ],
      "spanish": [
        "Por favor",
        "por fah-VOR",
        "Por favor, ayúdame con esto."
      ],
      "french": [
        "S'il vous plaît",
        "seel voo PLAY",
        "S'il vous plaît, aidez-moi."
      ],
      "german": [
        "Bitte",
        "BIT-teh",
        "Bitte hilf mir damit."
      ],
      "italian": [
        "Per favore",
        "per fah-VO-reh",
        "Per favore, aiutami con questo."
      ],
      "japanese": [
        "お願いします",
        "o-ne-gai shi-ma-su",
        "お願いします、手伝ってください。"
      ],
      "chinese": [
        "请",
        "qǐng",
        "请帮我一下。"
      ],
      "urdu": [
        "براہ کرم",
        "ba-rah e-kram",
        "براہ کرم، میری مدد کریں۔"
      ],
      "arabic": [
        "من فضلك",
        "min fad-lik",
        "من فضلك، ساعدني في هذا."
      ]
    }
  },
  {
    "id": 6,
    "category": "greetings",
    "icon": "🙏",
    "meaning": "Expression of gratitude",
    "t": {
      "english": [
        "Thank you",
        "THANK yoo",
        "Thank you for your kindness."
      ],
      "spanish": [
        "Gracias",
        "GRAH-syahs",
        "Gracias por tu amabilidad."
      ],
      "french": [
        "Merci",
        "mer-SEE",
        "Merci pour votre gentillesse."
      ],
      "german": [
        "Danke",
        "DAHN-keh",
        "Danke für deine Freundlichkeit."
      ],
      "italian": [
        "Grazie",
        "GRAH-tsee-eh",
        "Grazie per la tua gentilezza."
      ],
      "japanese": [
        "ありがとう",
        "a-ri-ga-to-u",
        "ありがとう、親切にしてくれて。"
      ],
      "chinese": [
        "谢谢",
        "xiè xie",
        "谢谢你的好意。"
      ],
      "urdu": [
        "شکریہ",
        "shuk-ri-yah",
        "شکریہ، آپ کی مہربانی کا۔"
      ],
      "arabic": [
        "شكرا",
        "shuk-ran",
        "شكرا على لطفك."
      ]
    }
  },
  {
    "id": 7,
    "category": "greetings",
    "icon": "😊",
    "meaning": "Response to thanks",
    "t": {
      "english": [
        "You're welcome",
        "yor WEL-kum",
        "You're welcome, anytime!"
      ],
      "spanish": [
        "De nada",
        "deh NAH-dah",
        "De nada, ¡cuando quieras!"
      ],
      "french": [
        "De rien",
        "duh RYAN",
        "De rien, avec plaisir!"
      ],
      "german": [
        "Gern geschehen",
        "gern geh-SHEH-en",
        "Gern geschehen, jederzeit!"
      ],
      "italian": [
        "Prego",
        "PREH-goh",
        "Prego, quando vuoi!"
      ],
      "japanese": [
        "どういたしまして",
        "do-u i-ta-shi-ma-shi-te",
        "どういたしまして、いつでも！"
      ],
      "chinese": [
        "不客气",
        "bú kè qi",
        "不客气，随时都可以！"
      ],
      "urdu": [
        "کوئی بات نہیں",
        "ko-ee baat na-heen",
        "کوئی بات نہیں، کبھی بھی!"
      ],
      "arabic": [
        "عفوا",
        "af-wan",
        "عفوا، في أي وقت!"
      ]
    }
  },
  {
    "id": 8,
    "category": "greetings",
    "icon": "🙇",
    "meaning": "Polite apology or attention-getter",
    "t": {
      "english": [
        "Excuse me",
        "eks-KYOOS mee",
        "Excuse me, where is the station?"
      ],
      "spanish": [
        "Disculpe",
        "dees-KOOL-peh",
        "Disculpe, ¿dónde está la estación?"
      ],
      "french": [
        "Excusez-moi",
        "eks-kuu-zay MWAH",
        "Excusez-moi, où est la gare?"
      ],
      "german": [
        "Entschuldigung",
        "ent-SHOOL-dee-goong",
        "Entschuldigung, wo ist der Bahnhof?"
      ],
      "italian": [
        "Mi scusi",
        "mee SKOO-zee",
        "Mi scusi, dov'è la stazione?"
      ],
      "japanese": [
        "すみません",
        "su-mi-ma-sen",
        "すみません、駅はどこですか？"
      ],
      "chinese": [
        "对不起",
        "duì bu qǐ",
        "对不起，车站在哪里？"
      ],
      "urdu": [
        "معاف کیجیے",
        "ma-af kee-ji-ye",
        "معاف کیجیے، اسٹیشن کہاں ہے؟"
      ],
      "arabic": [
        "عذرا",
        "uz-ran",
        "عذرا، أين المحطة؟"
      ]
    }
  },
  {
    "id": 9,
    "category": "greetings",
    "icon": "❓",
    "meaning": "Asking about someone's wellbeing",
    "t": {
      "english": [
        "How are you?",
        "how ar YOO",
        "How are you? I hope you are well."
      ],
      "spanish": [
        "¿Cómo estás?",
        "KOH-moh es-TAHS",
        "¿Cómo estás? Espero que estés bien."
      ],
      "french": [
        "Comment ça va?",
        "koh-mahn sah VAH",
        "Comment ça va? J'espère que tu vas bien."
      ],
      "german": [
        "Wie geht es dir?",
        "vee gayt es deer",
        "Wie geht es dir? Ich hoffe, es geht dir gut."
      ],
      "italian": [
        "Come stai?",
        "KOH-meh STAH-ee",
        "Come stai? Spero che tu stia bene."
      ],
      "japanese": [
        "お元気ですか",
        "o-gen-ki de-su ka",
        "お元気ですか？お大事に。"
      ],
      "chinese": [
        "你好吗",
        "nǐ hǎo ma",
        "你好吗？希望你一切都好。"
      ],
      "urdu": [
        "آپ کیسے ہیں",
        "aap kai-se hain",
        "آپ کیسے ہیں؟ امید ہے آپ ٹھیک ہیں۔"
      ],
      "arabic": [
        "كيف حالك",
        "kay-fa ha-lak",
        "كيف حالك؟ أتمنى أن تكون بخير."
      ]
    }
  },
  {
    "id": 10,
    "category": "family",
    "icon": "👩",
    "meaning": "Female parent",
    "t": {
      "english": [
        "Mother",
        "MUH-ther",
        "My mother cooks delicious food."
      ],
      "spanish": [
        "Madre",
        "MAH-dreh",
        "Mi madre cocina comida deliciosa."
      ],
      "french": [
        "Mère",
        "mehr",
        "Ma mère cuisine de bons plats."
      ],
      "german": [
        "Mutter",
        "MOO-ter",
        "Meine Mutter kocht leckeres Essen."
      ],
      "italian": [
        "Madre",
        "MAH-dreh",
        "Mia madre cucina cibo delizioso."
      ],
      "japanese": [
        "母",
        "ha-ha",
        "母はおいしい料理を作ります。"
      ],
      "chinese": [
        "母亲",
        "mǔ qīn",
        "我母亲做的饭很好吃。"
      ],
      "urdu": [
        "ماں",
        "maan",
        "میری ماں مزیدار کھانا بناتی ہے۔"
      ],
      "arabic": [
        "أم",
        "umm",
        "أمي تطبخ طعاما لذيذا."
      ]
    }
  },
  {
    "id": 11,
    "category": "family",
    "icon": "👨",
    "meaning": "Male parent",
    "t": {
      "english": [
        "Father",
        "FAH-ther",
        "My father works in the city."
      ],
      "spanish": [
        "Padre",
        "PAH-dreh",
        "Mi padre trabaja en la ciudad."
      ],
      "french": [
        "Père",
        "pehr",
        "Mon père travaille en ville."
      ],
      "german": [
        "Vater",
        "FAH-ter",
        "Mein Vater arbeitet in der Stadt."
      ],
      "italian": [
        "Padre",
        "PAH-dreh",
        "Mio padre lavora in città."
      ],
      "japanese": [
        "父",
        "chi-chi",
        "父は街で働いています。"
      ],
      "chinese": [
        "父亲",
        "fù qīn",
        "我父亲在城里工作。"
      ],
      "urdu": [
        "باپ",
        "baap",
        "میرے باپ شہر میں کام کرتے ہیں۔"
      ],
      "arabic": [
        "أب",
        "ab",
        "أبي يعمل في المدينة."
      ]
    }
  },
  {
    "id": 12,
    "category": "family",
    "icon": "👧",
    "meaning": "Female sibling",
    "t": {
      "english": [
        "Sister",
        "SIS-ter",
        "My sister is studying medicine."
      ],
      "spanish": [
        "Hermana",
        "er-MAH-nah",
        "Mi hermana estudia medicina."
      ],
      "french": [
        "Sœur",
        "suhr",
        "Ma sœur étudie la médecine."
      ],
      "german": [
        "Schwester",
        "SHVES-ter",
        "Meine Schwester studiert Medizin."
      ],
      "italian": [
        "Sorella",
        "soh-REL-lah",
        "Mia sorella studia medicina."
      ],
      "japanese": [
        "姉妹",
        "shi-mai",
        "姉は医学を勉強しています。"
      ],
      "chinese": [
        "姐妹",
        "jiě mèi",
        "我姐姐在学习医学。"
      ],
      "urdu": [
        "بہن",
        "bahan",
        "میری بہن طب پڑھ رہی ہے۔"
      ],
      "arabic": [
        "أخت",
        "ukht",
        "أختي تدرس الطب."
      ]
    }
  },
  {
    "id": 13,
    "category": "family",
    "icon": "👦",
    "meaning": "Male sibling",
    "t": {
      "english": [
        "Brother",
        "BRUH-ther",
        "My brother plays football every weekend."
      ],
      "spanish": [
        "Hermano",
        "er-MAH-noh",
        "Mi hermano juega fútbol cada fin de semana."
      ],
      "french": [
        "Frère",
        "frehr",
        "Mon frère joue au football chaque week-end."
      ],
      "german": [
        "Bruder",
        "BROO-der",
        "Mein Bruder spielt jedes Wochenende Fußball."
      ],
      "italian": [
        "Fratello",
        "frah-TEL-loh",
        "Mio fratello gioca a calcio ogni weekend."
      ],
      "japanese": [
        "兄弟",
        "kyo-u-dai",
        "兄は毎週末サッカーをします。"
      ],
      "chinese": [
        "兄弟",
        "xiōng dì",
        "我哥哥每个周末踢足球。"
      ],
      "urdu": [
        "بhai",
        "bhai",
        "میرا بھائی ہر ہفتے فٹبال کھیلتا ہے۔"
      ],
      "arabic": [
        "أخ",
        "akh",
        "أخي يلعب كرة القدم كل عطلة."
      ]
    }
  },
  {
    "id": 14,
    "category": "family",
    "icon": "👶",
    "meaning": "Young person or offspring",
    "t": {
      "english": [
        "Child",
        "CHYLD",
        "The child is playing in the garden."
      ],
      "spanish": [
        "Niño",
        "NEE-nyoh",
        "El niño juega en el jardín."
      ],
      "french": [
        "Enfant",
        "ahn-FAHN",
        "L'enfant joue dans le jardin."
      ],
      "german": [
        "Kind",
        "KINT",
        "Das Kind spielt im Garten."
      ],
      "italian": [
        "Bambino",
        "bam-BEE-noh",
        "Il bambino gioca in giardino."
      ],
      "japanese": [
        "子供",
        "ko-do-mo",
        "子供が庭で遊んでいます。"
      ],
      "chinese": [
        "孩子",
        "hái zi",
        "孩子在花园里玩耍。"
      ],
      "urdu": [
        "بچہ",
        "bach-cha",
        "بچہ باغ میں کھیل رہا ہے۔"
      ],
      "arabic": [
        "طفل",
        "tifl",
        "الطفل يلعب في الحديقة."
      ]
    }
  },
  {
    "id": 15,
    "category": "family",
    "icon": "👨",
    "meaning": "Male spouse",
    "t": {
      "english": [
        "Husband",
        "HUZ-bund",
        "Her husband is a teacher."
      ],
      "spanish": [
        "Esposo",
        "es-POH-soh",
        "Su esposo es profesor."
      ],
      "french": [
        "Mari",
        "mah-REE",
        "Son mari est professeur."
      ],
      "german": [
        "Ehemann",
        "AY-huh-mahn",
        "Ihr Ehemann ist Lehrer."
      ],
      "italian": [
        "Marito",
        "mah-REE-toh",
        "Suo marito è un insegnante."
      ],
      "japanese": [
        "夫",
        "otto",
        "彼女の夫は教師です。"
      ],
      "chinese": [
        "丈夫",
        "zhàng fu",
        "她的丈夫是一名教师。"
      ],
      "urdu": [
        "شوہر",
        "shoh-har",
        "اس کا شوہر استاد ہے۔"
      ],
      "arabic": [
        "زوج",
        "zawj",
        "زوجها معلم."
      ]
    }
  },
  {
    "id": 16,
    "category": "family",
    "icon": "👩",
    "meaning": "Female spouse",
    "t": {
      "english": [
        "Wife",
        "WYF",
        "His wife is a doctor."
      ],
      "spanish": [
        "Esposa",
        "es-POH-sah",
        "Su esposa es médica."
      ],
      "french": [
        "Femme",
        "fahm",
        "Sa femme est médecin."
      ],
      "german": [
        "Ehefrau",
        "AY-huh-frow",
        "Seine Ehefrau ist Ärztin."
      ],
      "italian": [
        "Moglie",
        "MOL-yeh",
        "Sua moglie è un medico."
      ],
      "japanese": [
        "妻",
        "tsu-ma",
        "彼の妻は医者です。"
      ],
      "chinese": [
        "妻子",
        "qī zi",
        "他的妻子是一名医生。"
      ],
      "urdu": [
        "بیوی",
        "bi-vee",
        "اس کی بیوی ڈاکٹر ہے۔"
      ],
      "arabic": [
        "زوجة",
        "zaw-ja",
        "زوجته طبيبة."
      ]
    }
  },
  {
    "id": 17,
    "category": "family",
    "icon": "👨‍👩‍👧",
    "meaning": "Group of related people",
    "t": {
      "english": [
        "Family",
        "FAM-uh-lee",
        "Family is very important to me."
      ],
      "spanish": [
        "Familia",
        "fah-MEE-lyah",
        "La familia es muy importante para mí."
      ],
      "french": [
        "Famille",
        "fah-MEE",
        "La famille est très importante pour moi."
      ],
      "german": [
        "Familie",
        "fah-MEE-lee-eh",
        "Familie ist mir sehr wichtig."
      ],
      "italian": [
        "Famiglia",
        "fah-MEE-lyah",
        "La famiglia è molto importante per me."
      ],
      "japanese": [
        "家族",
        "ka-zo-ku",
        "家族は私にとってとても大切です。"
      ],
      "chinese": [
        "家庭",
        "jiā tíng",
        "家庭对我来说非常重要。"
      ],
      "urdu": [
        "خاندان",
        "khan-dan",
        "خاندان میرے لیے بہت اہم ہے۔"
      ],
      "arabic": [
        "عائلة",
        "aa-i-la",
        "العائلة مهمة جدا بالنسبة لي."
      ]
    }
  },
  {
    "id": 18,
    "category": "numbers",
    "icon": "1️⃣",
    "meaning": "The number one",
    "t": {
      "english": [
        "One",
        "wun",
        "I have one apple."
      ],
      "spanish": [
        "Uno",
        "OO-noh",
        "Tengo una manzana."
      ],
      "french": [
        "Un",
        "uhn",
        "J'ai une pomme."
      ],
      "german": [
        "Eins",
        "eyns",
        "Ich habe einen Apfel."
      ],
      "italian": [
        "Uno",
        "OO-noh",
        "Ho una mela."
      ],
      "japanese": [
        "一",
        "ichi",
        "りんごを一つ持っています。"
      ],
      "chinese": [
        "一",
        "yī",
        "我有一个苹果。"
      ],
      "urdu": [
        "ایک",
        "aik",
        "میرے پاس ایک سیب ہے۔"
      ],
      "arabic": [
        "واحد",
        "wa-hid",
        "لدي تفاحة واحدة."
      ]
    }
  },
  {
    "id": 19,
    "category": "numbers",
    "icon": "2️⃣",
    "meaning": "The number two",
    "t": {
      "english": [
        "Two",
        "too",
        "She bought two books."
      ],
      "spanish": [
        "Dos",
        "dohs",
        "Ella compró dos libros."
      ],
      "french": [
        "Deux",
        "duh",
        "Elle a acheté deux livres."
      ],
      "german": [
        "Zwei",
        "tsvy",
        "Sie kaufte zwei Bücher."
      ],
      "italian": [
        "Due",
        "DOO-eh",
        "Ha comprato due libri."
      ],
      "japanese": [
        "二",
        "ni",
        "彼女は本を二冊買いました。"
      ],
      "chinese": [
        "二",
        "èr",
        "她买了两本书。"
      ],
      "urdu": [
        "دو",
        "do",
        "اس نے دو کتابیں خریدیں۔"
      ],
      "arabic": [
        "اثنان",
        "ith-nan",
        "اشترت كتابين."
      ]
    }
  },
  {
    "id": 20,
    "category": "numbers",
    "icon": "3️⃣",
    "meaning": "The number three",
    "t": {
      "english": [
        "Three",
        "three",
        "There are three chairs here."
      ],
      "spanish": [
        "Tres",
        "trehs",
        "Hay tres sillas aquí."
      ],
      "french": [
        "Trois",
        "trwah",
        "Il y a trois chaises ici."
      ],
      "german": [
        "Drei",
        "dry",
        "Hier sind drei Stühle."
      ],
      "italian": [
        "Tre",
        "treh",
        "Ci sono tre sedie qui."
      ],
      "japanese": [
        "三",
        "san",
        "ここに椅子が三つあります。"
      ],
      "chinese": [
        "三",
        "sān",
        "这里有三把椅子。"
      ],
      "urdu": [
        "تین",
        "teen",
        "یہاں تین کرسیاں ہیں۔"
      ],
      "arabic": [
        "ثلاثة",
        "tha-la-tha",
        "هنا ثلاثة كراسي."
      ]
    }
  },
  {
    "id": 21,
    "category": "numbers",
    "icon": "4️⃣",
    "meaning": "The number four",
    "t": {
      "english": [
        "Four",
        "for",
        "We need four tickets."
      ],
      "spanish": [
        "Cuatro",
        "KWAH-troh",
        "Necesitamos cuatro boletos."
      ],
      "french": [
        "Quatre",
        "KAHT-ruh",
        "Nous avons besoin de quatre billets."
      ],
      "german": [
        "Vier",
        "feer",
        "Wir brauchen vier Tickets."
      ],
      "italian": [
        "Quattro",
        "KWAHT-troh",
        "Abbiamo bisogno di quattro biglietti."
      ],
      "japanese": [
        "四",
        "yon",
        "切符を四枚必要です。"
      ],
      "chinese": [
        "四",
        "sì",
        "我们需要四张票。"
      ],
      "urdu": [
        "چار",
        "chaar",
        "ہمیں چار ٹکٹیں چاہئیں۔"
      ],
      "arabic": [
        "أربعة",
        "ar-ba-a",
        "نحتاج أربعة تذاكر."
      ]
    }
  },
  {
    "id": 22,
    "category": "numbers",
    "icon": "5️⃣",
    "meaning": "The number five",
    "t": {
      "english": [
        "Five",
        "fyv",
        "He has five fingers on each hand."
      ],
      "spanish": [
        "Cinco",
        "SEEN-koh",
        "Tiene cinco dedos en cada mano."
      ],
      "french": [
        "Cinq",
        "sank",
        "Il a cinq doigts sur chaque main."
      ],
      "german": [
        "Fünf",
        "fuenf",
        "Er hat fünf Finger an jeder Hand."
      ],
      "italian": [
        "Cinque",
        "CHEEN-kweh",
        "Ha cinque dita su ogni mano."
      ],
      "japanese": [
        "五",
        "go",
        "彼は両手に五本の指があります。"
      ],
      "chinese": [
        "五",
        "wǔ",
        "他每只手有五个手指。"
      ],
      "urdu": [
        "پanch",
        "paanch",
        "اس کے ہر ہاتھ میں پanch انگلیاں ہیں۔"
      ],
      "arabic": [
        "خمسة",
        "kham-sa",
        "لديه خمسة أصابع في كل يد."
      ]
    }
  },
  {
    "id": 23,
    "category": "numbers",
    "icon": "6️⃣",
    "meaning": "The number six",
    "t": {
      "english": [
        "Six",
        "siks",
        "The meeting starts at six."
      ],
      "spanish": [
        "Seis",
        "says",
        "La reunión empieza a las seis."
      ],
      "french": [
        "Six",
        "sees",
        "La réunion commence à six heures."
      ],
      "german": [
        "Sechs",
        "zeks",
        "Das Meeting beginnt um sechs."
      ],
      "italian": [
        "Sei",
        "say",
        "La riunione inizia alle sei."
      ],
      "japanese": [
        "六",
        "roku",
        "会議は六時に始まります。"
      ],
      "chinese": [
        "六",
        "liù",
        "会议六点开始。"
      ],
      "urdu": [
        "چھ",
        "chhe",
        "میٹنگ چھ بجے شروع ہوگی۔"
      ],
      "arabic": [
        "ستة",
        "sit-ta",
        "يبدأ الاجتماع في السادسة."
      ]
    }
  },
  {
    "id": 24,
    "category": "numbers",
    "icon": "7️⃣",
    "meaning": "The number seven",
    "t": {
      "english": [
        "Seven",
        "SEV-en",
        "There are seven days in a week."
      ],
      "spanish": [
        "Siete",
        "SYEH-teh",
        "Hay siete días en una semana."
      ],
      "french": [
        "Sept",
        "set",
        "Il y a sept jours dans une semaine."
      ],
      "german": [
        "Sieben",
        "ZEE-ben",
        "Eine Woche hat sieben Tage."
      ],
      "italian": [
        "Sette",
        "SET-teh",
        "Ci sono sette giorni in una settimana."
      ],
      "japanese": [
        "七",
        "nana",
        "一週間は七日あります。"
      ],
      "chinese": [
        "七",
        "qī",
        "一周有七天。"
      ],
      "urdu": [
        "سات",
        "saat",
        "ہفتے میں سات دن ہوتے ہیں۔"
      ],
      "arabic": [
        "سبعة",
        "sab-a",
        "الأسبوع فيه سبعة أيام."
      ]
    }
  },
  {
    "id": 25,
    "category": "numbers",
    "icon": "8️⃣",
    "meaning": "The number eight",
    "t": {
      "english": [
        "Eight",
        "ayt",
        "She woke up at eight o'clock."
      ],
      "spanish": [
        "Ocho",
        "OH-choh",
        "Se despertó a las ocho."
      ],
      "french": [
        "Huit",
        "weet",
        "Elle s'est réveillée à huit heures."
      ],
      "german": [
        "Acht",
        "akht",
        "Sie wachte um acht Uhr auf."
      ],
      "italian": [
        "Otto",
        "OT-toh",
        "Si è svegliata alle otto."
      ],
      "japanese": [
        "八",
        "hachi",
        "彼女は八時に起きました。"
      ],
      "chinese": [
        "八",
        "bā",
        "她八点醒来。"
      ],
      "urdu": [
        "آٹھ",
        "aath",
        "وہ آٹھ بجے اٹھی۔"
      ],
      "arabic": [
        "ثمانية",
        "tha-ma-ni-ya",
        "استيقظت في الثامنة."
      ]
    }
  },
  {
    "id": 26,
    "category": "numbers",
    "icon": "9️⃣",
    "meaning": "The number nine",
    "t": {
      "english": [
        "Nine",
        "nyn",
        "The store closes at nine."
      ],
      "spanish": [
        "Nueve",
        "NWEH-veh",
        "La tienda cierra a las nueve."
      ],
      "french": [
        "Neuf",
        "nuhf",
        "Le magasin ferme à neuf heures."
      ],
      "german": [
        "Neun",
        "noyn",
        "Das Geschäft schließt um neun."
      ],
      "italian": [
        "Nove",
        "NO-veh",
        "Il negozio chiude alle nove."
      ],
      "japanese": [
        "九",
        "kyuu",
        "店は九時に閉まります。"
      ],
      "chinese": [
        "九",
        "jiǔ",
        "商店九点关门。"
      ],
      "urdu": [
        "نو",
        "nau",
        "دکان نو بجے بند ہوتی ہے۔"
      ],
      "arabic": [
        "تسعة",
        "tis-a",
        "المتجر يغلق في التاسعة."
      ]
    }
  },
  {
    "id": 27,
    "category": "colors",
    "icon": "🔴",
    "meaning": "Color of blood or roses",
    "t": {
      "english": [
        "Red",
        "red",
        "She wore a red dress."
      ],
      "spanish": [
        "Rojo",
        "ROH-hoh",
        "Ella llevaba un vestido rojo."
      ],
      "french": [
        "Rouge",
        "roozh",
        "Elle portait une robe rouge."
      ],
      "german": [
        "Rot",
        "roht",
        "Sie trug ein rotes Kleid."
      ],
      "italian": [
        "Rosso",
        "ROS-soh",
        "Indossava un vestito rosso."
      ],
      "japanese": [
        "赤",
        "aka",
        "彼女は赤いドレスを着ていました。"
      ],
      "chinese": [
        "红色",
        "hóng sè",
        "她穿了一条红裙子。"
      ],
      "urdu": [
        "سرخ",
        "surkh",
        "اس نے سرخ لباس پہنا تھا۔"
      ],
      "arabic": [
        "أحمر",
        "ah-mar",
        "كانت ترتدي فستانا أحمر."
      ]
    }
  },
  {
    "id": 28,
    "category": "colors",
    "icon": "🔵",
    "meaning": "Color of the sky",
    "t": {
      "english": [
        "Blue",
        "bloo",
        "The sky is blue today."
      ],
      "spanish": [
        "Azul",
        "ah-SOOL",
        "El cielo está azul hoy."
      ],
      "french": [
        "Bleu",
        "bluh",
        "Le ciel est bleu aujourd'hui."
      ],
      "german": [
        "Blau",
        "blow",
        "Der Himmel ist heute blau."
      ],
      "italian": [
        "Blu",
        "bloo",
        "Il cielo è blu oggi."
      ],
      "japanese": [
        "青",
        "ao",
        "今日の空は青いです。"
      ],
      "chinese": [
        "蓝色",
        "lán sè",
        "今天天空是蓝色的。"
      ],
      "urdu": [
        "نیلا",
        "nee-la",
        "آج آسمان نیلا ہے۔"
      ],
      "arabic": [
        "أزرق",
        "az-raq",
        "السماء زرقاء اليوم."
      ]
    }
  },
  {
    "id": 29,
    "category": "colors",
    "icon": "🟢",
    "meaning": "Color of grass",
    "t": {
      "english": [
        "Green",
        "green",
        "The grass is green in spring."
      ],
      "spanish": [
        "Verde",
        "VEHR-deh",
        "La hierba es verde en primavera."
      ],
      "french": [
        "Vert",
        "vehr",
        "L'herbe est verte au printemps."
      ],
      "german": [
        "Grün",
        "gruen",
        "Das Gras ist im Frühling grün."
      ],
      "italian": [
        "Verde",
        "VEHR-deh",
        "L'erba è verde in primavera."
      ],
      "japanese": [
        "緑",
        "midori",
        "春には草が緑色です。"
      ],
      "chinese": [
        "绿色",
        "lǜ sè",
        "春天草是绿色的。"
      ],
      "urdu": [
        "سبز",
        "sabz",
        "بہار میں گھاس سبز ہوتی ہے۔"
      ],
      "arabic": [
        "أخضر",
        "akh-dar",
        "العشب أخضر في الربيع."
      ]
    }
  },
  {
    "id": 30,
    "category": "colors",
    "icon": "🟡",
    "meaning": "Color of the sun",
    "t": {
      "english": [
        "Yellow",
        "YEL-oh",
        "The sun looks yellow."
      ],
      "spanish": [
        "Amarillo",
        "ah-mah-REE-yoh",
        "El sol se ve amarillo."
      ],
      "french": [
        "Jaune",
        "zhohn",
        "Le soleil paraît jaune."
      ],
      "german": [
        "Gelb",
        "gelp",
        "Die Sonne sieht gelb aus."
      ],
      "italian": [
        "Giallo",
        "JAHL-loh",
        "Il sole sembra giallo."
      ],
      "japanese": [
        "黄色",
        "ki-iro",
        "太陽は黄色に見えます。"
      ],
      "chinese": [
        "黄色",
        "huáng sè",
        "太阳看起来是黄色的。"
      ],
      "urdu": [
        "پیلا",
        "pee-la",
        "سورج پیلا لگتا ہے۔"
      ],
      "arabic": [
        "أصفر",
        "as-far",
        "الشمس تبدو صفراء."
      ]
    }
  },
  {
    "id": 31,
    "category": "colors",
    "icon": "⚫",
    "meaning": "Darkest color",
    "t": {
      "english": [
        "Black",
        "blak",
        "He has a black cat."
      ],
      "spanish": [
        "Negro",
        "NEH-groh",
        "Tiene un gato negro."
      ],
      "french": [
        "Noir",
        "nwahr",
        "Il a un chat noir."
      ],
      "german": [
        "Schwarz",
        "shvahrts",
        "Er hat eine schwarze Katze."
      ],
      "italian": [
        "Nero",
        "NEH-roh",
        "Ha un gatto nero."
      ],
      "japanese": [
        "黒",
        "kuro",
        "彼は黒い猫を飼っています。"
      ],
      "chinese": [
        "黑色",
        "hēi sè",
        "他有一只黑猫。"
      ],
      "urdu": [
        "کala",
        "ka-la",
        "اس کی ایک کali billi ہے۔"
      ],
      "arabic": [
        "أسود",
        "as-wad",
        "لديه قطة سوداء."
      ]
    }
  },
  {
    "id": 32,
    "category": "colors",
    "icon": "⚪",
    "meaning": "Color of snow",
    "t": {
      "english": [
        "White",
        "wyt",
        "Snow is white in winter."
      ],
      "spanish": [
        "Blanco",
        "BLAHN-koh",
        "La nieve es blanca en invierno."
      ],
      "french": [
        "Blanc",
        "blahn",
        "La neige est blanche en hiver."
      ],
      "german": [
        "Weiß",
        "vyce",
        "Schnee ist im Winter weiß."
      ],
      "italian": [
        "Bianco",
        "BYAHN-koh",
        "La neve è bianca in inverno."
      ],
      "japanese": [
        "白",
        "shiro",
        "冬の雪は白いです。"
      ],
      "chinese": [
        "白色",
        "bái sè",
        "冬天的雪是白色的。"
      ],
      "urdu": [
        "سفید",
        "sa-faid",
        "سردیوں میں برف سفید ہوتی ہے۔"
      ],
      "arabic": [
        "أبيض",
        "ab-yad",
        "الثلج أبيض في الشتاء."
      ]
    }
  },
  {
    "id": 33,
    "category": "colors",
    "icon": "🟠",
    "meaning": "Color of oranges",
    "t": {
      "english": [
        "Orange",
        "OR-inj",
        "I ate an orange fruit."
      ],
      "spanish": [
        "Naranja",
        "nah-RAHN-hah",
        "Comí una fruta naranja."
      ],
      "french": [
        "Orange",
        "oh-RAHNZH",
        "J'ai mangé un fruit orange."
      ],
      "german": [
        "Orange",
        "oh-RAHN-zheh",
        "Ich aß eine Orange."
      ],
      "italian": [
        "Arancione",
        "ah-ran-CHO-neh",
        "Ho mangiato un'arancia."
      ],
      "japanese": [
        "オレンジ",
        "o-ren-ji",
        "オレンジを食べました。"
      ],
      "chinese": [
        "橙色",
        "chéng sè",
        "我吃了一个橙子。"
      ],
      "urdu": [
        "نارنجی",
        "naaran-ji",
        "میں نے ایک نارنگی کھائی۔"
      ],
      "arabic": [
        "برتقالي",
        "bur-tu-qa-li",
        "أكلت برتقالة."
      ]
    }
  },
  {
    "id": 34,
    "category": "colors",
    "icon": "🟣",
    "meaning": "Mix of red and blue",
    "t": {
      "english": [
        "Purple",
        "PUR-pul",
        "She loves purple flowers."
      ],
      "spanish": [
        "Morado",
        "moh-RAH-doh",
        "Le encantan las flores moradas."
      ],
      "french": [
        "Violet",
        "vyoh-LAY",
        "Elle adore les fleurs violettes."
      ],
      "german": [
        "Lila",
        "LEE-lah",
        "Sie liebt lila Blumen."
      ],
      "italian": [
        "Viola",
        "VYOH-lah",
        "Ama i fiori viola."
      ],
      "japanese": [
        "紫",
        "murasaki",
        "彼女は紫色の花が好きです。"
      ],
      "chinese": [
        "紫色",
        "zǐ sè",
        "她喜欢紫色的花。"
      ],
      "urdu": [
        "جامنی",
        "jaa-muni",
        "اسے جامنی پھول پسند ہیں۔"
      ],
      "arabic": [
        "بنفسجي",
        "ban-af-sa-ji",
        "تحب الزهور البنفسجية."
      ]
    }
  },
  {
    "id": 35,
    "category": "animals",
    "icon": "🐕",
    "meaning": "Common pet that barks",
    "t": {
      "english": [
        "Dog",
        "dawg",
        "The dog runs in the park."
      ],
      "spanish": [
        "Perro",
        "PEH-rroh",
        "El perro corre en el parque."
      ],
      "french": [
        "Chien",
        "shyahn",
        "Le chien court dans le parc."
      ],
      "german": [
        "Hund",
        "hoont",
        "Der Hund läuft im Park."
      ],
      "italian": [
        "Cane",
        "KAH-neh",
        "Il cane corre nel parco."
      ],
      "japanese": [
        "犬",
        "inu",
        "犬が公園を走っています。"
      ],
      "chinese": [
        "狗",
        "gǒu",
        "狗在公园里跑。"
      ],
      "urdu": [
        "کتا",
        "kut-ta",
        "کتا پارک میں دوڑ رہا ہے۔"
      ],
      "arabic": [
        "كلب",
        "kalb",
        "الكلب يركض في الحديقة."
      ]
    }
  },
  {
    "id": 36,
    "category": "animals",
    "icon": "🐈",
    "meaning": "Common pet that meows",
    "t": {
      "english": [
        "Cat",
        "kat",
        "The cat sleeps on the sofa."
      ],
      "spanish": [
        "Gato",
        "GAH-toh",
        "El gato duerme en el sofá."
      ],
      "french": [
        "Chat",
        "shah",
        "Le chat dort sur le canapé."
      ],
      "german": [
        "Katze",
        "KAHT-suh",
        "Die Katze schläft auf dem Sofa."
      ],
      "italian": [
        "Gatto",
        "GAHT-toh",
        "Il gatto dorme sul divano."
      ],
      "japanese": [
        "猫",
        "ne-ko",
        "猫がソファで寝ています。"
      ],
      "chinese": [
        "猫",
        "māo",
        "猫在沙发上睡觉。"
      ],
      "urdu": [
        "بلی",
        "bil-li",
        "بلی صوفے پر سو رہی ہے۔"
      ],
      "arabic": [
        "قطة",
        "qit-ta",
        "القطة تنام على الأريكة."
      ]
    }
  },
  {
    "id": 37,
    "category": "animals",
    "icon": "🐦",
    "meaning": "Animal that flies and sings",
    "t": {
      "english": [
        "Bird",
        "burd",
        "A bird is singing in the tree."
      ],
      "spanish": [
        "Pájaro",
        "PAH-hah-roh",
        "Un pájaro canta en el árbol."
      ],
      "french": [
        "Oiseau",
        "wah-ZOH",
        "Un oiseau chante dans l'arbre."
      ],
      "german": [
        "Vogel",
        "FOH-gul",
        "Ein Vogel singt im Baum."
      ],
      "italian": [
        "Uccello",
        "oo-CHEL-loh",
        "Un uccello canta nell'albero."
      ],
      "japanese": [
        "鳥",
        "tori",
        "鳥が木で歌っています。"
      ],
      "chinese": [
        "鸟",
        "niǎo",
        "一只鸟在树上唱歌。"
      ],
      "urdu": [
        "پرندہ",
        "par-in-da",
        "درخت پر ایک پرندہ گا رہا ہے۔"
      ],
      "arabic": [
        "طائر",
        "ta-ir",
        "طائر يغني في الشجرة."
      ]
    }
  },
  {
    "id": 38,
    "category": "animals",
    "icon": "🐟",
    "meaning": "Animal that lives in water",
    "t": {
      "english": [
        "Fish",
        "fish",
        "The fish swim in the lake."
      ],
      "spanish": [
        "Pez",
        "peth",
        "Los peces nadan en el lago."
      ],
      "french": [
        "Poisson",
        "pwah-SOHN",
        "Les poissons nagent dans le lac."
      ],
      "german": [
        "Fisch",
        "fish",
        "Die Fische schwimmen im See."
      ],
      "italian": [
        "Pesce",
        "PEH-sheh",
        "I pesci nuotano nel lago."
      ],
      "japanese": [
        "魚",
        "sakana",
        "魚が湖で泳いでいます。"
      ],
      "chinese": [
        "鱼",
        "yú",
        "鱼在湖里游泳。"
      ],
      "urdu": [
        "مچھلی",
        "machh-li",
        "مچھلیاں جھیل میں تیر رہی ہیں۔"
      ],
      "arabic": [
        "سمك",
        "sa-mak",
        "الأسماك تسبح في البحيرة."
      ]
    }
  },
  {
    "id": 39,
    "category": "animals",
    "icon": "🐴",
    "meaning": "Large animal used for riding",
    "t": {
      "english": [
        "Horse",
        "hors",
        "She rides a horse every Sunday."
      ],
      "spanish": [
        "Caballo",
        "kah-BAH-yoh",
        "Ella monta a caballo cada domingo."
      ],
      "french": [
        "Cheval",
        "shuh-VAHL",
        "Elle monte à cheval chaque dimanche."
      ],
      "german": [
        "Pferd",
        "pfairt",
        "Sie reitet jeden Sonntag ein Pferd."
      ],
      "italian": [
        "Cavallo",
        "kah-VAHL-loh",
        "Cavalca ogni domenica."
      ],
      "japanese": [
        "馬",
        "uma",
        "彼女は毎日曜日に馬に乗ります。"
      ],
      "chinese": [
        "马",
        "mǎ",
        "她每个星期天骑马。"
      ],
      "urdu": [
        "گھوڑا",
        "gho-rha",
        "وہ ہر اتوار گھوڑے پر سواری کرتی ہے۔"
      ],
      "arabic": [
        "حصان",
        "hi-san",
        "تركب حصانا كل أحد."
      ]
    }
  },
  {
    "id": 40,
    "category": "animals",
    "icon": "🐄",
    "meaning": "Farm animal that gives milk",
    "t": {
      "english": [
        "Cow",
        "kow",
        "The cow eats grass in the field."
      ],
      "spanish": [
        "Vaca",
        "VAH-kah",
        "La vaca come hierba en el campo."
      ],
      "french": [
        "Vache",
        "vahsh",
        "La vache mange de l'herbe dans le champ."
      ],
      "german": [
        "Kuh",
        "koo",
        "Die Kuh frisst Gras auf dem Feld."
      ],
      "italian": [
        "Mucca",
        "MOOK-kah",
        "La mucca mangia erba nel campo."
      ],
      "japanese": [
        "牛",
        "ushi",
        "牛が畑で草を食べています。"
      ],
      "chinese": [
        "牛",
        "niú",
        "牛在田里吃草。"
      ],
      "urdu": [
        "گائے",
        "gaay",
        "گائے میدان میں گھاس کھا رہی ہے۔"
      ],
      "arabic": [
        "بقرة",
        "ba-qa-ra",
        "البقرة تأكل العشب في الحقل."
      ]
    }
  },
  {
    "id": 41,
    "category": "animals",
    "icon": "🦁",
    "meaning": "Large wild cat, king of jungle",
    "t": {
      "english": [
        "Lion",
        "LY-un",
        "The lion roars loudly."
      ],
      "spanish": [
        "León",
        "leh-OHN",
        "El león ruge fuerte."
      ],
      "french": [
        "Lion",
        "lee-OHN",
        "Le lion rugit fort."
      ],
      "german": [
        "Löwe",
        "LER-veh",
        "Der Löwe brüllt laut."
      ],
      "italian": [
        "Leone",
        "leh-O-neh",
        "Il leone ruggisce forte."
      ],
      "japanese": [
        "ライオン",
        "ra-i-on",
        "ライオンが大きな声で吠えます。"
      ],
      "chinese": [
        "狮子",
        "shī zi",
        "狮子大声吼叫。"
      ],
      "urdu": [
        "شیر",
        "sher",
        "شیر زور سے دھاڑتا ہے۔"
      ],
      "arabic": [
        "أسد",
        "a-sad",
        "الأسد يزأر بصوت عال."
      ]
    }
  },
  {
    "id": 42,
    "category": "animals",
    "icon": "🐘",
    "meaning": "Largest land animal",
    "t": {
      "english": [
        "Elephant",
        "EL-uh-funt",
        "The elephant has a long trunk."
      ],
      "spanish": [
        "Elefante",
        "eh-leh-FAHN-teh",
        "El elefante tiene una trompa larga."
      ],
      "french": [
        "Éléphant",
        "ay-lay-FAHN",
        "L'éléphant a une longue trompe."
      ],
      "german": [
        "Elefant",
        "eh-leh-FAHNT",
        "Der Elefant hat einen langen Rüssel."
      ],
      "italian": [
        "Elefante",
        "eh-leh-FAHN-teh",
        "L'elefante ha una proboscide lunga."
      ],
      "japanese": [
        "象",
        "zo-u",
        "象は長い鼻を持っています。"
      ],
      "chinese": [
        "大象",
        "dà xiàng",
        "大象有长鼻子。"
      ],
      "urdu": [
        "ہاتھی",
        "haat-hi",
        "ہاتھی ki لمبی سond hoti hai."
      ],
      "arabic": [
        "فيل",
        "feel",
        "الفيل له خرطوم طويل."
      ]
    }
  },
  {
    "id": 43,
    "category": "animals",
    "icon": "🐇",
    "meaning": "Small animal with long ears",
    "t": {
      "english": [
        "Rabbit",
        "RAB-it",
        "The rabbit hops in the garden."
      ],
      "spanish": [
        "Conejo",
        "koh-NEH-hoh",
        "El conejo salta en el jardín."
      ],
      "french": [
        "Lapin",
        "lah-PAN",
        "Le lapin saute dans le jardin."
      ],
      "german": [
        "Kaninchen",
        "kah-NIN-chen",
        "Das Kaninchen hoppelt im Garten."
      ],
      "italian": [
        "Coniglio",
        "koh-NEE-lyoh",
        "Il coniglio salta in giardino."
      ],
      "japanese": [
        "うさぎ",
        "u-sa-gi",
        "うさぎが庭を跳ね回っています。"
      ],
      "chinese": [
        "兔子",
        "tù zi",
        "兔子在花园里跳。"
      ],
      "urdu": [
        "خرگوش",
        "khar-gosh",
        "خرگوش باغ میں اچھل رہا ہے۔"
      ],
      "arabic": [
        "أرنب",
        "ar-nab",
        "الArnب يقفز في الحديقة."
      ]
    }
  },
  {
    "id": 44,
    "category": "food",
    "icon": "💧",
    "meaning": "Clear liquid essential for life",
    "t": {
      "english": [
        "Water",
        "WAW-ter",
        "Please give me a glass of water."
      ],
      "spanish": [
        "Agua",
        "AH-gwah",
        "Por favor, dame un vaso de agua."
      ],
      "french": [
        "Eau",
        "oh",
        "S'il vous plaît, donnez-moi un verre d'eau."
      ],
      "german": [
        "Wasser",
        "VAH-ser",
        "Bitte gib mir ein Glas Wasser."
      ],
      "italian": [
        "Acqua",
        "AHK-kwah",
        "Per favore, dammi un bicchiere d'acqua."
      ],
      "japanese": [
        "水",
        "mi-zu",
        "水を一杯ください。"
      ],
      "chinese": [
        "水",
        "shuǐ",
        "请给我一杯水。"
      ],
      "urdu": [
        "پani",
        "pa-ni",
        "براہ کرم مجھے ایک گلاس پani دیں۔"
      ],
      "arabic": [
        "ماء",
        "ma",
        "من فضلك أعطني كوبا من الماء."
      ]
    }
  },
  {
    "id": 45,
    "category": "food",
    "icon": "🍞",
    "meaning": "Baked staple food",
    "t": {
      "english": [
        "Bread",
        "bred",
        "I bought fresh bread from the bakery."
      ],
      "spanish": [
        "Pan",
        "pahn",
        "Compré pan fresco en la panadería."
      ],
      "french": [
        "Pain",
        "pan",
        "J'ai acheté du pain frais à la boulangerie."
      ],
      "german": [
        "Brot",
        "broht",
        "Ich kaufte frisches Brot in der Bäckerei."
      ],
      "italian": [
        "Pane",
        "PAH-neh",
        "Ho comprato pane fresco in panetteria."
      ],
      "japanese": [
        "パン",
        "pan",
        "パン屋で新鮮なパンを買いました。"
      ],
      "chinese": [
        "面包",
        "miàn bāo",
        "我在面包店买了新鲜面包。"
      ],
      "urdu": [
        "روٹی",
        "ro-ti",
        "میں نے بیکری سے تازہ روٹی خریدی۔"
      ],
      "arabic": [
        "خبز",
        "khubz",
        "اشتريت خبزا طازجا من المخبز."
      ]
    }
  },
  {
    "id": 46,
    "category": "food",
    "icon": "🥛",
    "meaning": "White dairy drink",
    "t": {
      "english": [
        "Milk",
        "milk",
        "Children drink milk every morning."
      ],
      "spanish": [
        "Leche",
        "LEH-cheh",
        "Los niños beben leche cada mañana."
      ],
      "french": [
        "Lait",
        "lay",
        "Les enfants boivent du lait chaque matin."
      ],
      "german": [
        "Milch",
        "milkh",
        "Kinder trinken jeden Morgen Milch."
      ],
      "italian": [
        "Latte",
        "LAHT-teh",
        "I bambini bevono latte ogni mattina."
      ],
      "japanese": [
        "牛乳",
        "gyuu-nyuu",
        "子供たちは毎朝牛乳を飲みます。"
      ],
      "chinese": [
        "牛奶",
        "niú nǎi",
        "孩子们每天早上喝牛奶。"
      ],
      "urdu": [
        "دودھ",
        "doodh",
        "بچے ہر صبح دودھ پیتے ہیں۔"
      ],
      "arabic": [
        "حليب",
        "ha-leeb",
        "يشرب الأطفال الحليب كل صباح."
      ]
    }
  },
  {
    "id": 47,
    "category": "food",
    "icon": "🍚",
    "meaning": "Staple grain eaten worldwide",
    "t": {
      "english": [
        "Rice",
        "rys",
        "We eat rice with vegetables."
      ],
      "spanish": [
        "Arroz",
        "ah-RROHS",
        "Comemos arroz con verduras."
      ],
      "french": [
        "Riz",
        "ree",
        "Nous mangeons du riz avec des légumes."
      ],
      "german": [
        "Reis",
        "rys",
        "Wir essen Reis mit Gemüse."
      ],
      "italian": [
        "Riso",
        "REE-zoh",
        "Mangiamo riso con verdure."
      ],
      "japanese": [
        "ご飯",
        "go-han",
        "野菜と一緒にご飯を食べます。"
      ],
      "chinese": [
        "米饭",
        "mǐ fàn",
        "我们吃米饭配蔬菜。"
      ],
      "urdu": [
        "چawal",
        "cha-wal",
        "ہم سبزیوں کے ساتھ چawal کھاتے ہیں۔"
      ],
      "arabic": [
        "أرز",
        "ar-ruz",
        "نأكل الأرز مع الخضروات."
      ]
    }
  },
  {
    "id": 48,
    "category": "food",
    "icon": "🍎",
    "meaning": "Red or green fruit",
    "t": {
      "english": [
        "Apple",
        "AP-ul",
        "An apple a day keeps the doctor away."
      ],
      "spanish": [
        "Manzana",
        "mahn-SAH-nah",
        "Una manzana al día mantiene alejado al médico."
      ],
      "french": [
        "Pomme",
        "pum",
        "Une pomme par jour éloigne le médecin."
      ],
      "german": [
        "Apfel",
        "AHP-fel",
        "Ein Apfel am Tag hält den Doktor fern."
      ],
      "italian": [
        "Mela",
        "MEH-lah",
        "Una mela al giorno toglie il medico di torno."
      ],
      "japanese": [
        "りんご",
        "rin-go",
        "一日一個のりんごは医者を遠ざけます。"
      ],
      "chinese": [
        "苹果",
        "píng guǒ",
        "一天一苹果，医生远离我。"
      ],
      "urdu": [
        "سیب",
        "seb",
        "روزانہ ایک سیب ڈاکٹر سے دور رکھتا ہے۔"
      ],
      "arabic": [
        "تفاح",
        "tuf-fah",
        "تفاحة يوميا تبعد الطبيب."
      ]
    }
  },
  {
    "id": 49,
    "category": "food",
    "icon": "☕",
    "meaning": "Hot caffeinated beverage",
    "t": {
      "english": [
        "Coffee",
        "KAW-fee",
        "I drink coffee every morning."
      ],
      "spanish": [
        "Café",
        "kah-FEH",
        "Bebo café cada mañana."
      ],
      "french": [
        "Café",
        "kah-FAY",
        "Je bois du café chaque matin."
      ],
      "german": [
        "Kaffee",
        "KAH-feh",
        "Ich trinke jeden Morgen Kaffee."
      ],
      "italian": [
        "Caffè",
        "kahf-FEH",
        "Bevo caffè ogni mattina."
      ],
      "japanese": [
        "コーヒー",
        "koo-hii",
        "毎朝コーヒーを飲みます。"
      ],
      "chinese": [
        "咖啡",
        "kā fēi",
        "我每天早上喝咖啡。"
      ],
      "urdu": [
        "کافی",
        "kaa-fi",
        "میں ہر صبح کافی پیتا ہوں۔"
      ],
      "arabic": [
        "قهوة",
        "qah-wa",
        "أشرب القهوة كل صباح."
      ]
    }
  },
  {
    "id": 50,
    "category": "food",
    "icon": "🍵",
    "meaning": "Hot leaf-based drink",
    "t": {
      "english": [
        "Tea",
        "tee",
        "Would you like a cup of tea?"
      ],
      "spanish": [
        "Té",
        "teh",
        "¿Te gustaría una taza de té?"
      ],
      "french": [
        "Thé",
        "tay",
        "Voudriez-vous une tasse de thé?"
      ],
      "german": [
        "Tee",
        "tay",
        "Möchten Sie eine Tasse Tee?"
      ],
      "italian": [
        "Tè",
        "teh",
        "Vorresti una tazza di tè?"
      ],
      "japanese": [
        "お茶",
        "o-cha",
        "お茶はいかがですか？"
      ],
      "chinese": [
        "茶",
        "chá",
        "你想来杯茶吗？"
      ],
      "urdu": [
        "چay",
        "chaay",
        "کیا آپ چay کا کپ چاہیں گے؟"
      ],
      "arabic": [
        "شاي",
        "shay",
        "هل تريد كوبا من الشاي؟"
      ]
    }
  },
  {
    "id": 51,
    "category": "food",
    "icon": "🍗",
    "meaning": "Common poultry meat",
    "t": {
      "english": [
        "Chicken",
        "CHIK-en",
        "We grilled chicken for dinner."
      ],
      "spanish": [
        "Pollo",
        "POH-yoh",
        "Asamos pollo para la cena."
      ],
      "french": [
        "Poulet",
        "poo-LAY",
        "Nous avons grillé du poulet pour le dîner."
      ],
      "german": [
        "Hähnchen",
        "HAYN-chen",
        "Wir grillten Hähnchen zum Abendessen."
      ],
      "italian": [
        "Pollo",
        "POL-loh",
        "Abbiamo grigliato pollo per cena."
      ],
      "japanese": [
        "鶏肉",
        "to-ri-ni-ku",
        "夕食に鶏肉を焼きました。"
      ],
      "chinese": [
        "鸡肉",
        "jī ròu",
        "我们晚餐烤了鸡肉。"
      ],
      "urdu": [
        "مرغی",
        "mur-ghi",
        "ہم نے رات کے کھانے کے لیے مرغی گرل کی۔"
      ],
      "arabic": [
        "دجاج",
        "da-jaj",
        "شوينا دجاجا على العشاء."
      ]
    }
  },
  {
    "id": 52,
    "category": "food",
    "icon": "🥚",
    "meaning": "Oval food from hens",
    "t": {
      "english": [
        "Egg",
        "eg",
        "She made eggs for breakfast."
      ],
      "spanish": [
        "Huevo",
        "WEH-voh",
        "Ella preparó huevos para el desayuno."
      ],
      "french": [
        "Œuf",
        "uhf",
        "Elle a préparé des œufs pour le petit-déjeuner."
      ],
      "german": [
        "Ei",
        "eye",
        "Sie machte Eier zum Frühstück."
      ],
      "italian": [
        "Uovo",
        "WOH-voh",
        "Ha preparato uova per colazione."
      ],
      "japanese": [
        "卵",
        "ta-ma-go",
        "彼女は朝食に卵を作りました。"
      ],
      "chinese": [
        "鸡蛋",
        "jī dàn",
        "她做了鸡蛋当早餐。"
      ],
      "urdu": [
        "انڈا",
        "an-da",
        "اس نے ناشتے کے لیے انڈے بنائے۔"
      ],
      "arabic": [
        "بيض",
        "bayd",
        "أعدت البيض على الفطور."
      ]
    }
  },
  {
    "id": 53,
    "category": "travel",
    "icon": "✈️",
    "meaning": "Place where planes depart and arrive",
    "t": {
      "english": [
        "Airport",
        "AIR-port",
        "We arrived at the airport early."
      ],
      "spanish": [
        "Aeropuerto",
        "ah-eh-roh-PWEHR-toh",
        "Llegamos temprano al aeropuerto."
      ],
      "french": [
        "Aéroport",
        "ah-ay-roh-POR",
        "Nous sommes arrivés tôt à l'aéroport."
      ],
      "german": [
        "Flughafen",
        "FLOOK-hah-fen",
        "Wir kamen früh am Flughafen an."
      ],
      "italian": [
        "Aeroporto",
        "ah-eh-roh-POR-toh",
        "Siamo arrivati presto all'aeroporto."
      ],
      "japanese": [
        "空港",
        "kuu-kou",
        "私たちは早く空港に着きました。"
      ],
      "chinese": [
        "机场",
        "jī chǎng",
        "我们很早就到了机场。"
      ],
      "urdu": [
        "ہوائی اڈa",
        "ha-waa-ee ad-da",
        "ہم جلدی ہوائی اڈe پر پہنچے۔"
      ],
      "arabic": [
        "مطار",
        "ma-tar",
        "وصلنا إلى المطار مبكرا."
      ]
    }
  },
  {
    "id": 54,
    "category": "travel",
    "icon": "🚂",
    "meaning": "Rail vehicle for passengers",
    "t": {
      "english": [
        "Train",
        "trayn",
        "The train leaves at noon."
      ],
      "spanish": [
        "Tren",
        "trehn",
        "El tren sale al mediodía."
      ],
      "french": [
        "Train",
        "tran",
        "Le train part à midi."
      ],
      "german": [
        "Zug",
        "tsook",
        "Der Zug fährt um Mittag ab."
      ],
      "italian": [
        "Treno",
        "TREH-noh",
        "Il treno parte a mezzogiorno."
      ],
      "japanese": [
        "電車",
        "den-sha",
        "電車は正午に出発します。"
      ],
      "chinese": [
        "火车",
        "huǒ chē",
        "火车中午出发。"
      ],
      "urdu": [
        "ٹرen",
        "train",
        "ٹرen دوپہر کو روانہ ہوتی ہے۔"
      ],
      "arabic": [
        "قطار",
        "qi-tar",
        "يغادر القطار عند الظهر."
      ]
    }
  },
  {
    "id": 55,
    "category": "travel",
    "icon": "🏨",
    "meaning": "Place to stay when traveling",
    "t": {
      "english": [
        "Hotel",
        "hoh-TEL",
        "We booked a hotel near the beach."
      ],
      "spanish": [
        "Hotel",
        "oh-TEL",
        "Reservamos un hotel cerca de la playa."
      ],
      "french": [
        "Hôtel",
        "oh-TEL",
        "Nous avons réservé un hôtel près de la plage."
      ],
      "german": [
        "Hotel",
        "hoh-TEL",
        "Wir buchten ein Hotel nahe dem Strand."
      ],
      "italian": [
        "Hotel",
        "oh-TEL",
        "Abbiamo prenotato un hotel vicino alla spiaggia."
      ],
      "japanese": [
        "ホテル",
        "ho-te-ru",
        "ビーチの近くのホテルを予約しました。"
      ],
      "chinese": [
        "酒店",
        "jiǔ diàn",
        "我们预订了海边的酒店。"
      ],
      "urdu": [
        "ہوٹل",
        "ho-tel",
        "ہم نے ساحل کے قریب ہوٹل بک کیا۔"
      ],
      "arabic": [
        "فندق",
        "fun-duq",
        "حجزنا فندقا قرب الشاطئ."
      ]
    }
  },
  {
    "id": 56,
    "category": "travel",
    "icon": "🛂",
    "meaning": "Document needed for international travel",
    "t": {
      "english": [
        "Passport",
        "PAS-port",
        "Don't forget your passport."
      ],
      "spanish": [
        "Pasaporte",
        "pah-sah-POR-teh",
        "No olvides tu pasaporte."
      ],
      "french": [
        "Passeport",
        "pahs-POR",
        "N'oublie pas ton passeport."
      ],
      "german": [
        "Reisepass",
        "RY-zeh-pahs",
        "Vergiss deinen Reisepass nicht."
      ],
      "italian": [
        "Passaporto",
        "pahs-sah-POR-toh",
        "Non dimenticare il passaporto."
      ],
      "japanese": [
        "パスポート",
        "pasu-poo-to",
        "パスポートを忘れないでください。"
      ],
      "chinese": [
        "护照",
        "hù zhào",
        "别忘了你的护照。"
      ],
      "urdu": [
        "پاسپورٹ",
        "paas-port",
        "اپنا پاسپورٹ مت بھولیں۔"
      ],
      "arabic": [
        "جواز سفر",
        "ja-waz safar",
        "لا تنس جواز سفرك."
      ]
    }
  },
  {
    "id": 57,
    "category": "travel",
    "icon": "🎫",
    "meaning": "Proof of payment for travel or events",
    "t": {
      "english": [
        "Ticket",
        "TIK-it",
        "I bought a ticket for the concert."
      ],
      "spanish": [
        "Boleto",
        "boh-LEH-toh",
        "Compré un boleto para el concierto."
      ],
      "french": [
        "Billet",
        "bee-YAY",
        "J'ai acheté un billet pour le concert."
      ],
      "german": [
        "Ticket",
        "TIK-et",
        "Ich kaufte ein Ticket für das Konzert."
      ],
      "italian": [
        "Biglietto",
        "bee-LYET-toh",
        "Ho comprato un biglietto per il concerto."
      ],
      "japanese": [
        "切符",
        "kippu",
        "コンサートの切符を買いました。"
      ],
      "chinese": [
        "票",
        "piào",
        "我买了音乐会的票。"
      ],
      "urdu": [
        "ٹکٹ",
        "ti-kat",
        "میں نے کنسرٹ کا ٹکٹ خریدا۔"
      ],
      "arabic": [
        "تذكرة",
        "tadh-ki-ra",
        "اشتريت تذكرة للحفل."
      ]
    }
  },
  {
    "id": 58,
    "category": "travel",
    "icon": "🗺️",
    "meaning": "Guide showing locations and routes",
    "t": {
      "english": [
        "Map",
        "map",
        "Use a map to find the museum."
      ],
      "spanish": [
        "Mapa",
        "MAH-pah",
        "Usa un mapa para encontrar el museo."
      ],
      "french": [
        "Carte",
        "kart",
        "Utilise une carte pour trouver le musée."
      ],
      "german": [
        "Karte",
        "KAR-teh",
        "Benutze eine Karte, um das Museum zu finden."
      ],
      "italian": [
        "Mappa",
        "MAHP-pah",
        "Usa una mappa per trovare il museo."
      ],
      "japanese": [
        "地図",
        "chi-zu",
        "地図を使って博物館を見つけてください。"
      ],
      "chinese": [
        "地图",
        "dì tú",
        "用地图找博物馆。"
      ],
      "urdu": [
        "نقshہ",
        "naq-sha",
        "عجائب گھر ڈھونڈنے کے لیے نقshہ استعمال کریں۔"
      ],
      "arabic": [
        "خريطة",
        "kha-ree-ta",
        "استخدم خريطة للعثور على المتحف."
      ]
    }
  },
  {
    "id": 59,
    "category": "travel",
    "icon": "🚕",
    "meaning": "Car for hire with a driver",
    "t": {
      "english": [
        "Taxi",
        "TAK-see",
        "Let's take a taxi to the hotel."
      ],
      "spanish": [
        "Taxi",
        "TAHK-see",
        "Tomemos un taxi al hotel."
      ],
      "french": [
        "Taxi",
        "tahk-SEE",
        "Prenons un taxi pour l'hôtel."
      ],
      "german": [
        "Taxi",
        "TAK-see",
        "Nehmen wir ein Taxi zum Hotel."
      ],
      "italian": [
        "Taxi",
        "TAHK-see",
        "Prendiamo un taxi per l'hotel."
      ],
      "japanese": [
        "タクシー",
        "taku-shii",
        "ホテルまでタクシーに乗りましょう。"
      ],
      "chinese": [
        "出租车",
        "chū zū chē",
        "我们打车去酒店吧。"
      ],
      "urdu": [
        "ٹیکسی",
        "tak-si",
        "ہوٹل جانے کے لیے ٹیکسی لیتے ہیں۔"
      ],
      "arabic": [
        "تاكسي",
        "tak-si",
        "لنأخذ تاكسي إلى الفندق."
      ]
    }
  },
  {
    "id": 60,
    "category": "travel",
    "icon": "🧳",
    "meaning": "Bags used when traveling",
    "t": {
      "english": [
        "Luggage",
        "LUG-ij",
        "My luggage is very heavy."
      ],
      "spanish": [
        "Equipaje",
        "eh-kee-PAH-heh",
        "Mi equipaje es muy pesado."
      ],
      "french": [
        "Bagages",
        "bah-GAHZH",
        "Mes bagages sont très lourds."
      ],
      "german": [
        "Gepäck",
        "geh-PEK",
        "Mein Gepäck ist sehr schwer."
      ],
      "italian": [
        "Bagaglio",
        "bah-GAH-lyoh",
        "Il mio bagaglio è molto pesante."
      ],
      "japanese": [
        "荷物",
        "ni-mo-tsu",
        "荷物がとても重いです。"
      ],
      "chinese": [
        "行李",
        "xíng li",
        "我的行李很重。"
      ],
      "urdu": [
        "سامan",
        "saa-man",
        "میرا سامan بہت بھاری ہے۔"
      ],
      "arabic": [
        "أمتعة",
        "am-ti-a",
        "أمتعتي ثقيلة جدا."
      ]
    }
  },
  {
    "id": 61,
    "category": "business",
    "icon": "🤝",
    "meaning": "Scheduled gathering for work discussion",
    "t": {
      "english": [
        "Meeting",
        "MEE-ting",
        "We have a meeting at ten o'clock."
      ],
      "spanish": [
        "Reunión",
        "reh-oo-NYOHN",
        "Tenemos una reunión a las diez."
      ],
      "french": [
        "Réunion",
        "ray-oo-NYOHN",
        "Nous avons une réunion à dix heures."
      ],
      "german": [
        "Besprechung",
        "beh-SHPREH-khoong",
        "Wir haben um zehn Uhr eine Besprechung."
      ],
      "italian": [
        "Riunione",
        "ree-oo-NYOH-neh",
        "Abbiamo una riunione alle dieci."
      ],
      "japanese": [
        "会議",
        "kai-gi",
        "十時に会議があります。"
      ],
      "chinese": [
        "会议",
        "huì yì",
        "我们十点有个会议。"
      ],
      "urdu": [
        "میٹنگ",
        "meet-ing",
        "ہماری دس بجے میٹنگ ہے۔"
      ],
      "arabic": [
        "اجتماع",
        "ij-ti-ma",
        "لدينا اجتماع في الساعة العاشرة."
      ]
    }
  },
  {
    "id": 62,
    "category": "business",
    "icon": "📄",
    "meaning": "Legal agreement between parties",
    "t": {
      "english": [
        "Contract",
        "KON-trakt",
        "Please sign the contract today."
      ],
      "spanish": [
        "Contrato",
        "kohn-TRAH-toh",
        "Por favor firma el contrato hoy."
      ],
      "french": [
        "Contrat",
        "kohn-TRAH",
        "Veuillez signer le contrat aujourd'hui."
      ],
      "german": [
        "Vertrag",
        "fair-TRAHK",
        "Bitte unterschreiben Sie den Vertrag heute."
      ],
      "italian": [
        "Contratto",
        "kohn-TRAT-toh",
        "Per favore firma il contratto oggi."
      ],
      "japanese": [
        "契約",
        "kei-ya-ku",
        "今日契約書に署名してください。"
      ],
      "chinese": [
        "合同",
        "hé tong",
        "请今天签署合同。"
      ],
      "urdu": [
        "معahدہ",
        "mu-aah-da",
        "براہ کرم آج معahdے پر دستخط کریں۔"
      ],
      "arabic": [
        "عقد",
        "aqd",
        "يرجى توقيع العقد اليوم."
      ]
    }
  },
  {
    "id": 63,
    "category": "business",
    "icon": "💰",
    "meaning": "Payment received for work",
    "t": {
      "english": [
        "Salary",
        "SAL-uh-ree",
        "Her salary increased this year."
      ],
      "spanish": [
        "Salario",
        "sah-LAH-ryoh",
        "Su salario aumentó este año."
      ],
      "french": [
        "Salaire",
        "sah-LEHR",
        "Son salaire a augmenté cette année."
      ],
      "german": [
        "Gehalt",
        "geh-HAHLT",
        "Ihr Gehalt stieg dieses Jahr."
      ],
      "italian": [
        "Stipendio",
        "stee-PEN-dyoh",
        "Il suo stipendio è aumentato quest'anno."
      ],
      "japanese": [
        "給料",
        "kyuu-ryou",
        "彼女の給料は今年上がりました。"
      ],
      "chinese": [
        "工资",
        "gōng zī",
        "她今年的工资涨了。"
      ],
      "urdu": [
        "تنخwah",
        "tan-khu-wah",
        "اس کی تنخwah اس سال بڑھ گئی۔"
      ],
      "arabic": [
        "راتب",
        "ra-tib",
        "زاد راتبها هذا العام."
      ]
    }
  },
  {
    "id": 64,
    "category": "business",
    "icon": "🧾",
    "meaning": "Bill for goods or services",
    "t": {
      "english": [
        "Invoice",
        "IN-voys",
        "Please send the invoice by email."
      ],
      "spanish": [
        "Factura",
        "fahk-TOO-rah",
        "Por favor envía la factura por correo."
      ],
      "french": [
        "Facture",
        "fak-TUHR",
        "Veuillez envoyer la facture par e-mail."
      ],
      "german": [
        "Rechnung",
        "REKH-noong",
        "Bitte senden Sie die Rechnung per E-Mail."
      ],
      "italian": [
        "Fattura",
        "faht-TOO-rah",
        "Per favore invia la fattura via email."
      ],
      "japanese": [
        "請求書",
        "se-kyuu-sho",
        "メールで請求書を送ってください。"
      ],
      "chinese": [
        "发票",
        "fā piào",
        "请通过电子邮件发送发票。"
      ],
      "urdu": [
        "بل",
        "bil",
        "براہ کرم ای میل سے بل بھیجیں۔"
      ],
      "arabic": [
        "فاتورة",
        "fa-tu-ra",
        "يرجى إرسال الفاتورة بالبريد الإلكتروني."
      ]
    }
  },
  {
    "id": 65,
    "category": "business",
    "icon": "⏰",
    "meaning": "Final date for completing work",
    "t": {
      "english": [
        "Deadline",
        "DED-lyn",
        "The deadline is next Friday."
      ],
      "spanish": [
        "Fecha límite",
        "FEH-chah LEE-mee-teh",
        "La fecha límite es el próximo viernes."
      ],
      "french": [
        "Date limite",
        "daht lee-MEET",
        "La date limite est vendredi prochain."
      ],
      "german": [
        "Frist",
        "frist",
        "Die Frist ist nächsten Freitag."
      ],
      "italian": [
        "Scadenza",
        "skah-DEN-tsah",
        "La scadenza è venerdì prossimo."
      ],
      "japanese": [
        "締切",
        "shi-me-ki-ri",
        "締切は来週の金曜日です。"
      ],
      "chinese": [
        "截止日期",
        "jié zhǐ rì qī",
        "截止日期是下周五。"
      ],
      "urdu": [
        "آخری تاریخ",
        "aakh-ri ta-reekh",
        "آخری تاریخ اگلے جمعہ ہے۔"
      ],
      "arabic": [
        "موعد نهائي",
        "maw-id ni-ha-ee",
        "الموعد النهائي يوم الجمعة القادم."
      ]
    }
  },
  {
    "id": 66,
    "category": "business",
    "icon": "👔",
    "meaning": "Person who buys services",
    "t": {
      "english": [
        "Client",
        "KLY-ent",
        "The client approved our proposal."
      ],
      "spanish": [
        "Cliente",
        "klee-EN-teh",
        "El cliente aprobó nuestra propuesta."
      ],
      "french": [
        "Client",
        "klee-AHN",
        "Le client a approuvé notre proposition."
      ],
      "german": [
        "Kunde",
        "KOON-deh",
        "Der Kunde genehmigte unseren Vorschlag."
      ],
      "italian": [
        "Cliente",
        "klee-EN-teh",
        "Il cliente ha approvato la nostra proposta."
      ],
      "japanese": [
        "顧客",
        "ko-kyaku",
        "顧客が私たちの提案を承認しました。"
      ],
      "chinese": [
        "客户",
        "kè hù",
        "客户批准了我们的提案。"
      ],
      "urdu": [
        "کلائنٹ",
        "klai-ent",
        "کلائنٹ نے ہماری تجویز منظور کی۔"
      ],
      "arabic": [
        "عميل",
        "a-meel",
        "وافق العميل على اقتراحنا."
      ]
    }
  },
  {
    "id": 67,
    "category": "business",
    "icon": "🏢",
    "meaning": "Place where people work",
    "t": {
      "english": [
        "Office",
        "AW-fis",
        "I work in an office downtown."
      ],
      "spanish": [
        "Oficina",
        "oh-fee-SEE-nah",
        "Trabajo en una oficina en el centro."
      ],
      "french": [
        "Bureau",
        "bu-ROH",
        "Je travaille dans un bureau en centre-ville."
      ],
      "german": [
        "Büro",
        "bu-ROH",
        "Ich arbeite in einem Büro in der Innenstadt."
      ],
      "italian": [
        "Ufficio",
        "oof-FEE-choh",
        "Lavoro in un ufficio in centro."
      ],
      "japanese": [
        "オフィス",
        "o-fi-su",
        "私は都心のオフィスで働いています。"
      ],
      "chinese": [
        "办公室",
        "bàn gōng shì",
        "我在市中心的办公室工作。"
      ],
      "urdu": [
        "دفتر",
        "daftar",
        "میں شہر کے مرکز میں دفتر میں کام کرتا ہوں۔"
      ],
      "arabic": [
        "مكتب",
        "mak-tab",
        "أعمل في مكتب في وسط المدينة."
      ]
    }
  },
  {
    "id": 68,
    "category": "business",
    "icon": "📧",
    "meaning": "Electronic message for work",
    "t": {
      "english": [
        "Email",
        "EE-mayl",
        "Please reply to my email today."
      ],
      "spanish": [
        "Correo electrónico",
        "koh-RREh-oh eh-lehk-TROH-nee-koh",
        "Por favor responde a mi correo hoy."
      ],
      "french": [
        "E-mail",
        "ee-MEHL",
        "Veuillez répondre à mon e-mail aujourd'hui."
      ],
      "german": [
        "E-Mail",
        "EE-mayl",
        "Bitte antworten Sie heute auf meine E-Mail."
      ],
      "italian": [
        "Email",
        "EE-mayl",
        "Per favore rispondi alla mia email oggi."
      ],
      "japanese": [
        "メール",
        "mee-ru",
        "今日中にメールに返信してください。"
      ],
      "chinese": [
        "电子邮件",
        "diàn zǐ yóu jiàn",
        "请今天回复我的电子邮件。"
      ],
      "urdu": [
        "ای میل",
        "email",
        "براہ کرم آج میری ای میل کا جواب دیں۔"
      ],
      "arabic": [
        "بريد إلكتروني",
        "ba-reed il-ek-tro-nee",
        "يرجى الرد على بريدي الإلكتروني اليوم."
      ]
    }
  },
  {
    "id": 69,
    "category": "phrases",
    "icon": "🤷",
    "meaning": "Expression when something is unclear",
    "t": {
      "english": [
        "I don't understand",
        "eye dont un-der-STAND",
        "I don't understand, can you repeat?"
      ],
      "spanish": [
        "No entiendo",
        "noh en-TYEN-doh",
        "No entiendo, ¿puedes repetir?"
      ],
      "french": [
        "Je ne comprends pas",
        "zhuh nuh kohn-PRAHN pah",
        "Je ne comprends pas, peux-tu répéter?"
      ],
      "german": [
        "Ich verstehe nicht",
        "ikh fair-SHTAY-uh nikht",
        "Ich verstehe nicht, kannst du wiederholen?"
      ],
      "italian": [
        "Non capisco",
        "nohn kah-PEE-skoh",
        "Non capisco, puoi ripetere?"
      ],
      "japanese": [
        "わかりません",
        "wa-ka-ri-ma-sen",
        "わかりません、もう一度言ってください。"
      ],
      "chinese": [
        "我不明白",
        "wǒ bù míng bái",
        "我不明白，你能重复一遍吗？"
      ],
      "urdu": [
        "میں سمجھ نہیں",
        "main sam-jh na-heen",
        "میں سمجھ نہیں، کیا آپ دہرا سکتے ہیں؟"
      ],
      "arabic": [
        "لا أفهم",
        "la af-ham",
        "لا أفهم، هل يمكنك الإعادة؟"
      ]
    }
  },
  {
    "id": 70,
    "category": "phrases",
    "icon": "💲",
    "meaning": "Asking the price of something",
    "t": {
      "english": [
        "How much?",
        "how much",
        "How much does this cost?"
      ],
      "spanish": [
        "¿Cuánto cuesta?",
        "KWAN-toh KWEHS-tah",
        "¿Cuánto cuesta esto?"
      ],
      "french": [
        "Combien?",
        "kohn-BYAN",
        "Combien ça coûte?"
      ],
      "german": [
        "Wie viel?",
        "vee feel",
        "Wie viel kostet das?"
      ],
      "italian": [
        "Quanto costa?",
        "KWAN-toh KOS-tah",
        "Quanto costa questo?"
      ],
      "japanese": [
        "いくらですか",
        "i-ku-ra de-su ka",
        "これはいくらですか？"
      ],
      "chinese": [
        "多少钱",
        "duō shao qián",
        "这个多少钱？"
      ],
      "urdu": [
        "کتne",
        "kit-ne",
        "اس ki قیمت کتni ہے؟"
      ],
      "arabic": [
        "كم السعر",
        "kam as-sir",
        "كم يكلف هذا؟"
      ]
    }
  },
  {
    "id": 71,
    "category": "phrases",
    "icon": "📍",
    "meaning": "Asking for a location",
    "t": {
      "english": [
        "Where is?",
        "wair iz",
        "Where is the nearest bank?"
      ],
      "spanish": [
        "¿Dónde está?",
        "DOHN-deh es-TAH",
        "¿Dónde está el banco más cercano?"
      ],
      "french": [
        "Où est?",
        "oo eh",
        "Où est la banque la plus proche?"
      ],
      "german": [
        "Wo ist?",
        "voh ist",
        "Wo ist die nächste Bank?"
      ],
      "italian": [
        "Dove si trova?",
        "DO-veh see TRO-vah",
        "Dove si trova la banca più vicina?"
      ],
      "japanese": [
        "どこですか",
        "do-ko de-su ka",
        "最寄りの銀行はどこですか？"
      ],
      "chinese": [
        "在哪里",
        "zài nǎ lǐ",
        "最近的银行在哪里？"
      ],
      "urdu": [
        "کہاں ہے",
        "ka-haan hai",
        "قریب ترین بینک کہاں ہے؟"
      ],
      "arabic": [
        "أين",
        "ay-na",
        "أين أقرب بنك؟"
      ]
    }
  },
  {
    "id": 72,
    "category": "phrases",
    "icon": "🆘",
    "meaning": "Request for assistance",
    "t": {
      "english": [
        "I need help",
        "eye need help",
        "I need help with my bags."
      ],
      "spanish": [
        "Necesito ayuda",
        "neh-seh-SEE-toh ah-YOO-dah",
        "Necesito ayuda con mis bolsas."
      ],
      "french": [
        "J'ai besoin d'aide",
        "zhay buh-ZWAHN ded",
        "J'ai besoin d'aide avec mes sacs."
      ],
      "german": [
        "Ich brauche Hilfe",
        "ikh BROW-kheh HIL-fuh",
        "Ich brauche Hilfe mit meinen Taschen."
      ],
      "italian": [
        "Ho bisogno di aiuto",
        "oh bee-ZOH-nyoh dee ah-YOO-toh",
        "Ho bisogno di aiuto con le mie borse."
      ],
      "japanese": [
        "助けが必要です",
        "ta-su-ke ga hi-tsu-you de-su",
        "荷物の手伝いが必要です。"
      ],
      "chinese": [
        "我需要帮助",
        "wǒ xū yào bāng zhù",
        "我需要帮忙拿行李。"
      ],
      "urdu": [
        "مجhe مدد چahie",
        "mujhe mad-ad cha-hi-ye",
        "مجhe اپنے سامan ki مدد چahie۔"
      ],
      "arabic": [
        "أحتاج مساعدة",
        "a-htaj mu-saa-da",
        "أحتاج مساعدة في حقائبي."
      ]
    }
  },
  {
    "id": 73,
    "category": "phrases",
    "icon": "🚔",
    "meaning": "Emergency phrase for police",
    "t": {
      "english": [
        "Call the police",
        "kawl thuh puh-LEES",
        "Please call the police immediately."
      ],
      "spanish": [
        "Llame a la policía",
        "YAH-meh ah lah poh-lee-SEE-ah",
        "Por favor llame a la policía de inmediato."
      ],
      "french": [
        "Appelez la police",
        "ah-pluh-LAY lah poh-LEES",
        "Appelez la police immédiatement."
      ],
      "german": [
        "Rufen Sie die Polizei",
        "ROO-fen zee dee poh-lee-TSY",
        "Rufen Sie bitte sofort die Polizei."
      ],
      "italian": [
        "Chiami la polizia",
        "KYAH-mee lah poh-LEET-syah",
        "Per favore chiama subito la polizia."
      ],
      "japanese": [
        "警察を呼んで",
        "kei-sa-tsu o yon-de",
        "すぐに警察を呼んでください。"
      ],
      "chinese": [
        "叫警察",
        "jiào jǐng chá",
        "请马上叫警察。"
      ],
      "urdu": [
        "پولیس bulao",
        "po-lice bu-lao",
        "براہ کرم فوراً پولیس bulao۔"
      ],
      "arabic": [
        "اتصل بالشرطة",
        "it-tasil bil-shur-ta",
        "يرجى الاتصال بالشرطة فورا."
      ]
    }
  },
  {
    "id": 74,
    "category": "phrases",
    "icon": "🗺️",
    "meaning": "Expression when you cannot find your way",
    "t": {
      "english": [
        "I'm lost",
        "eyem lost",
        "I'm lost, can you show me the way?"
      ],
      "spanish": [
        "Estoy perdido",
        "es-TOY pehr-DEE-doh",
        "Estoy perdido, ¿puede mostrarme el camino?"
      ],
      "french": [
        "Je suis perdu",
        "zhuh swee pehr-DUU",
        "Je suis perdu, pouvez-vous m'indiquer le chemin?"
      ],
      "german": [
        "Ich habe mich verlaufen",
        "ikh HAH-beh mikh fair-LOW-fen",
        "Ich habe mich verlaufen, können Sie mir den Weg zeigen?"
      ],
      "italian": [
        "Mi sono perso",
        "mee SOH-noh PEHR-soh",
        "Mi sono perso, può indicarmi la strada?"
      ],
      "japanese": [
        "道に迷いました",
        "mi-chi ni ma-yoi-ma-shi-ta",
        "道に迷いました、道を教えてください。"
      ],
      "chinese": [
        "我迷路了",
        "wǒ mí lù le",
        "我迷路了，你能给我指路吗？"
      ],
      "urdu": [
        "میں کھo گیا",
        "main kho gaya",
        "میں کھo گیا، کیا آپ راستہ dikha sakte hain؟"
      ],
      "arabic": [
        "أنا تائه",
        "a-na ta-ih",
        "أنا تائه، هل يمكنك إرشادي؟"
      ]
    }
  },
  {
    "id": 75,
    "category": "phrases",
    "icon": "🙋",
    "meaning": "Polite request for assistance",
    "t": {
      "english": [
        "Can you help?",
        "kan yoo help",
        "Can you help me find my hotel?"
      ],
      "spanish": [
        "¿Puede ayudarme?",
        "PWEH-deh ah-yoo-DAHR-meh",
        "¿Puede ayudarme a encontrar mi hotel?"
      ],
      "french": [
        "Pouvez-vous m'aider?",
        "poo-vay voo meh-DAY",
        "Pouvez-vous m'aider à trouver mon hôtel?"
      ],
      "german": [
        "Können Sie mir helfen?",
        "KER-nen zee meer HEL-fen",
        "Können Sie mir helfen, mein Hotel zu finden?"
      ],
      "italian": [
        "Può aiutarmi?",
        "pwo ah-yoo-TAR-mee",
        "Può aiutarmi a trovare il mio hotel?"
      ],
      "japanese": [
        "手伝ってくれますか",
        "te-tsu-da-tte ku-re-ma-su ka",
        "ホテルを見つけるのを手伝ってくれますか？"
      ],
      "chinese": [
        "你能帮忙吗",
        "nǐ néng bāng máng ma",
        "你能帮我找酒店吗？"
      ],
      "urdu": [
        "کیا آپ مدد kar sakte hain",
        "kya aap mad-ad kar sak-te hain",
        "کیا آپ مera ہوٹل ڈھونڈne mein مدد kar sakte hain؟"
      ],
      "arabic": [
        "هل يمكنك المساعدة",
        "hal yum-kinuk al-mu-saa-da",
        "هل يمكنك مساعدتي في إيجاد فندقي؟"
      ]
    }
  },
  {
    "id": 76,
    "category": "phrases",
    "icon": "🕐",
    "meaning": "Asking about the current time",
    "t": {
      "english": [
        "What time is it?",
        "wut tym iz it",
        "Excuse me, what time is it?"
      ],
      "spanish": [
        "¿Qué hora es?",
        "keh OH-rah es",
        "Disculpe, ¿qué hora es?"
      ],
      "french": [
        "Quelle heure est-il?",
        "kel uhr eh-TEEL",
        "Excusez-moi, quelle heure est-il?"
      ],
      "german": [
        "Wie spät ist es?",
        "vee shpayt ist es",
        "Entschuldigung, wie spät ist es?"
      ],
      "italian": [
        "Che ore sono?",
        "keh OH-reh SOH-noh",
        "Mi scusi, che ore sono?"
      ],
      "japanese": [
        "今何時ですか",
        "i-ma nan-ji de-su ka",
        "すみません、今何時ですか？"
      ],
      "chinese": [
        "现在几点",
        "xiàn zài jǐ diǎn",
        "请问，现在几点？"
      ],
      "urdu": [
        "کتne بجے hain",
        "kit-ne buj-ge hain",
        "معاف کیjiے، کتne بجے hain؟"
      ],
      "arabic": [
        "كم الساعة",
        "kam as-saa-a",
        "عذرا، كم الساعة؟"
      ]
    }
  },
  {
    "id": 77,
    "category": "conversation",
    "icon": "✅",
    "meaning": "Affirmative response",
    "t": {
      "english": [
        "Yes",
        "yes",
        "Yes, I would love to come."
      ],
      "spanish": [
        "Sí",
        "see",
        "Sí, me encantaría ir."
      ],
      "french": [
        "Oui",
        "wee",
        "Oui, j'aimerais venir."
      ],
      "german": [
        "Ja",
        "yah",
        "Ja, ich würde gerne kommen."
      ],
      "italian": [
        "Sì",
        "see",
        "Sì, mi piacerebbe venire."
      ],
      "japanese": [
        "はい",
        "hai",
        "はい、ぜひ行きたいです。"
      ],
      "chinese": [
        "是",
        "shì",
        "是的，我很想去。"
      ],
      "urdu": [
        "ہاں",
        "haan",
        "ہاں، مجhe ضرور آنا ہے۔"
      ],
      "arabic": [
        "نعم",
        "na-am",
        "نعم، أود الحضور."
      ]
    }
  },
  {
    "id": 78,
    "category": "conversation",
    "icon": "❌",
    "meaning": "Negative response",
    "t": {
      "english": [
        "No",
        "noh",
        "No, thank you, I am full."
      ],
      "spanish": [
        "No",
        "noh",
        "No, gracias, estoy lleno."
      ],
      "french": [
        "Non",
        "nohn",
        "Non merci, je suis rassasié."
      ],
      "german": [
        "Nein",
        "nyne",
        "Nein danke, ich bin satt."
      ],
      "italian": [
        "No",
        "noh",
        "No grazie, sono sazio."
      ],
      "japanese": [
        "いいえ",
        "i-i-e",
        "いいえ、お腹いっぱいです。"
      ],
      "chinese": [
        "不",
        "bù",
        "不，谢谢，我吃饱了。"
      ],
      "urdu": [
        "نہیں",
        "na-heen",
        "نہیں شکریہ، مera پیٹ بharا ہے۔"
      ],
      "arabic": [
        "لا",
        "la",
        "لا شكرا، أنا شبعان."
      ]
    }
  },
  {
    "id": 79,
    "category": "conversation",
    "icon": "🤔",
    "meaning": "Uncertain response",
    "t": {
      "english": [
        "Maybe",
        "MAY-bee",
        "Maybe we can meet tomorrow."
      ],
      "spanish": [
        "Quizás",
        "kee-SAHS",
        "Quizás podamos vernos mañana."
      ],
      "french": [
        "Peut-être",
        "puh-TET-ruh",
        "Peut-être pouvons-nous nous voir demain."
      ],
      "german": [
        "Vielleicht",
        "FEEL-lykht",
        "Vielleicht können wir uns morgen treffen."
      ],
      "italian": [
        "Forse",
        "FOR-seh",
        "Forse possiamo incontrarci domani."
      ],
      "japanese": [
        "たぶん",
        "ta-bun",
        "たぶん明日会えるかもしれません。"
      ],
      "chinese": [
        "也许",
        "yě xǔ",
        "也许我们明天可以见面。"
      ],
      "urdu": [
        "شayad",
        "sha-yad",
        "شayad ہم کل mil sakte hain۔"
      ],
      "arabic": [
        "ربما",
        "rub-ba-ma",
        "ربما نلتقي غدا."
      ]
    }
  },
  {
    "id": 80,
    "category": "conversation",
    "icon": "💭",
    "meaning": "Expressing personal opinion",
    "t": {
      "english": [
        "I think so",
        "eye think so",
        "I think so, it looks correct."
      ],
      "spanish": [
        "Creo que sí",
        "KREH-oh keh see",
        "Creo que sí, parece correcto."
      ],
      "french": [
        "Je pense que oui",
        "zhuh pahns kuh wee",
        "Je pense que oui, ça semble correct."
      ],
      "german": [
        "Ich denke schon",
        "ikh DEN-keh shohn",
        "Ich denke schon, es sieht richtig aus."
      ],
      "italian": [
        "Penso di sì",
        "PEN-soh dee see",
        "Penso di sì, sembra corretto."
      ],
      "japanese": [
        "そう思います",
        "so-u o-moi-ma-su",
        "そう思います、正しそうです。"
      ],
      "chinese": [
        "我想是的",
        "wǒ xiǎng shì de",
        "我想是的，看起来是对的。"
      ],
      "urdu": [
        "مجhe lagta hai",
        "mujhe lag-ta hai",
        "مجhe lagta hai، yeh theek lagta hai۔"
      ],
      "arabic": [
        "أعتقد ذلك",
        "a-taq-id dha-lik",
        "أعتقد ذلك، يبدو صحيحا."
      ]
    }
  },
  {
    "id": 81,
    "category": "conversation",
    "icon": "👍",
    "meaning": "Strong agreement",
    "t": {
      "english": [
        "Of course",
        "uv KORS",
        "Of course, I will help you."
      ],
      "spanish": [
        "Por supuesto",
        "por soo-PWEHS-toh",
        "Por supuesto, te ayudaré."
      ],
      "french": [
        "Bien sûr",
        "byan suhr",
        "Bien sûr, je vais vous aider."
      ],
      "german": [
        "Natürlich",
        "nah-TUUR-likh",
        "Natürlich helfe ich dir."
      ],
      "italian": [
        "Certo",
        "CHER-toh",
        "Certo, ti aiuterò."
      ],
      "japanese": [
        "もちろん",
        "mo-chi-ron",
        "もちろん、手伝います。"
      ],
      "chinese": [
        "当然",
        "dāng rán",
        "当然，我会帮你。"
      ],
      "urdu": [
        "بلکل",
        "bil-kul",
        "بلکل، میں آپ ki مدد کروں گa۔"
      ],
      "arabic": [
        "بالطبع",
        "bil-tab-a",
        "بالطبع، سأساعدك."
      ]
    }
  },
  {
    "id": 82,
    "category": "conversation",
    "icon": "😮",
    "meaning": "Expression of surprise or doubt",
    "t": {
      "english": [
        "Really?",
        "REEL-ee",
        "Really? That is surprising news."
      ],
      "spanish": [
        "¿De verdad?",
        "deh sehr-DAHD",
        "¿De verdad? Esa noticia sorprende."
      ],
      "french": [
        "Vraiment?",
        "vray-MAHN",
        "Vraiment? C'est une nouvelle surprenante."
      ],
      "german": [
        "Wirklich?",
        "VEER-khlikh",
        "Wirklich? Das ist überraschend."
      ],
      "italian": [
        "Davvero?",
        "dahv-VEH-roh",
        "Davvero? È una notizia sorprendente."
      ],
      "japanese": [
        "本当",
        "hon-tou",
        "本当？それは驚きのニュースです。"
      ],
      "chinese": [
        "真的吗",
        "zhēn de ma",
        "真的吗？这消息真令人惊讶。"
      ],
      "urdu": [
        "sach mein",
        "sach mein",
        "sach mein؟ yeh hairat angez khabar hai۔"
      ],
      "arabic": [
        "حقا",
        "haq-qan",
        "حقا؟ هذا خبر مفاجئ."
      ]
    }
  },
  {
    "id": 83,
    "category": "conversation",
    "icon": "😊",
    "meaning": "Positive reaction to a suggestion",
    "t": {
      "english": [
        "That sounds good",
        "that sowndz good",
        "That sounds good, let us do it."
      ],
      "spanish": [
        "Suena bien",
        "SWEH-nah byen",
        "Suena bien, hagámoslo."
      ],
      "french": [
        "Ça a l'air bien",
        "sah ah lehr byan",
        "Ça a l'air bien, faisons-le."
      ],
      "german": [
        "Das klingt gut",
        "dahs klinkt goot",
        "Das klingt gut, machen wir es."
      ],
      "italian": [
        "Sembra una buona idea",
        "SEM-brah OO-nah bwoh-nah ee-DEH-ah",
        "Sembra una buona idea, facciamolo."
      ],
      "japanese": [
        "いいですね",
        "ii de-su ne",
        "いいですね、やりましょう。"
      ],
      "chinese": [
        "听起来不错",
        "tīng qǐ lái bù cuò",
        "听起来不错，我们就这么做吧。"
      ],
      "urdu": [
        "اchha lagta hai",
        "ach-cha lag-ta hai",
        "اchha lagta hai، chalo karte hain۔"
      ],
      "arabic": [
        "يبدو جيدا",
        "ya-bdu jay-yi-dan",
        "يبدو جيدا، لنفعل ذلك."
      ]
    }
  },
  {
    "id": 84,
    "category": "conversation",
    "icon": "🤝",
    "meaning": "Expressing shared opinion",
    "t": {
      "english": [
        "I agree",
        "eye uh-GREE",
        "I agree with your idea completely."
      ],
      "spanish": [
        "Estoy de acuerdo",
        "es-TOY deh ah-KWEHR-doh",
        "Estoy de acuerdo con tu idea."
      ],
      "french": [
        "Je suis d'accord",
        "zhuh swee dah-KOR",
        "Je suis d'accord avec votre idée."
      ],
      "german": [
        "Ich stimme zu",
        "ikh SHTIM-muh tsoo",
        "Ich stimme deiner Idee voll zu."
      ],
      "italian": [
        "Sono d'accordo",
        "SOH-noh dah-KOR-doh",
        "Sono d'accordo con la tua idea."
      ],
      "japanese": [
        "同意します",
        "do-u-i shi-ma-su",
        "あなたの考えに完全に同意します。"
      ],
      "chinese": [
        "我同意",
        "wǒ tóng yì",
        "我完全同意你的想法。"
      ],
      "urdu": [
        "میں agree karta hoon",
        "main agree kar-ta hoon",
        "میں آپ ke khayal se mukamal agree karta hoon۔"
      ],
      "arabic": [
        "أوافق",
        "o-wa-fiq",
        "أوافق على فكرتك تماما."
      ]
    }
  },
  {
    "id": 85,
    "category": "vocabulary",
    "icon": "📚",
    "meaning": "Object for reading",
    "t": {
      "english": [
        "Book",
        "book",
        "She reads a book every night."
      ],
      "spanish": [
        "Libro",
        "LEE-broh",
        "Ella lee un libro cada noche."
      ],
      "french": [
        "Livre",
        "leev-ruh",
        "Elle lit un livre chaque soir."
      ],
      "german": [
        "Buch",
        "bookh",
        "Sie liest jeden Abend ein Buch."
      ],
      "italian": [
        "Libro",
        "LEE-broh",
        "Legge un libro ogni sera."
      ],
      "japanese": [
        "本",
        "hon",
        "彼女は毎晩本を読みます。"
      ],
      "chinese": [
        "书",
        "shū",
        "她每晚读一本书。"
      ],
      "urdu": [
        "کتاب",
        "ki-taab",
        "وہ ہر رات ایک کتاب پڑhti hai۔"
      ],
      "arabic": [
        "كتاب",
        "ki-tab",
        "تقرأ كتابا كل مساء."
      ]
    }
  },
  {
    "id": 86,
    "category": "vocabulary",
    "icon": "🏠",
    "meaning": "Place where one lives",
    "t": {
      "english": [
        "House",
        "hows",
        "Their house is near the river."
      ],
      "spanish": [
        "Casa",
        "KAH-sah",
        "Su casa está cerca del río."
      ],
      "french": [
        "Maison",
        "meh-ZOHN",
        "Leur maison est près de la rivière."
      ],
      "german": [
        "Haus",
        "hows",
        "Ihr Haus ist nahe am Fluss."
      ],
      "italian": [
        "Casa",
        "KAH-sah",
        "La loro casa è vicino al fiume."
      ],
      "japanese": [
        "家",
        "ie",
        "彼らの家は川の近くにあります。"
      ],
      "chinese": [
        "房子",
        "fáng zi",
        "他们的房子在河边。"
      ],
      "urdu": [
        "گhar",
        "ghar",
        "ان کا گhar دریا کے قریب hai۔"
      ],
      "arabic": [
        "منزل",
        "ma-nzil",
        "منزلهم قرب النهر."
      ]
    }
  },
  {
    "id": 87,
    "category": "vocabulary",
    "icon": "🏫",
    "meaning": "Place for learning",
    "t": {
      "english": [
        "School",
        "skool",
        "Children go to school on weekdays."
      ],
      "spanish": [
        "Escuela",
        "es-KWEH-lah",
        "Los niños van a la escuela entre semana."
      ],
      "french": [
        "École",
        "ay-KOL",
        "Les enfants vont à l'école en semaine."
      ],
      "german": [
        "Schule",
        "SHOO-luh",
        "Kinder gehen werktags zur Schule."
      ],
      "italian": [
        "Scuola",
        "SKWOH-lah",
        "I bambini vanno a scuola nei giorni feriali."
      ],
      "japanese": [
        "学校",
        "gak-kou",
        "子供たちは平日学校に行きます。"
      ],
      "chinese": [
        "学校",
        "xué xiào",
        "孩子们平日去学校。"
      ],
      "urdu": [
        "سکول",
        "school",
        "بچے ہفte ke din سکول jate hain۔"
      ],
      "arabic": [
        "مدرسة",
        "mad-ra-sa",
        "يذهب الأطفال إلى المدرسة في أيام الأسبوع."
      ]
    }
  },
  {
    "id": 88,
    "category": "vocabulary",
    "icon": "👫",
    "meaning": "Person you know and like",
    "t": {
      "english": [
        "Friend",
        "frend",
        "My friend lives in another city."
      ],
      "spanish": [
        "Amigo",
        "ah-MEE-goh",
        "Mi amigo vive en otra ciudad."
      ],
      "french": [
        "Ami",
        "ah-MEE",
        "Mon ami vit dans une autre ville."
      ],
      "german": [
        "Freund",
        "froynt",
        "Mein Freund wohnt in einer anderen Stadt."
      ],
      "italian": [
        "Amico",
        "ah-MEE-koh",
        "Il mio amico vive in un'altra città."
      ],
      "japanese": [
        "友達",
        "to-mo-da-chi",
        "私の友達は別の街に住んでいます。"
      ],
      "chinese": [
        "朋友",
        "péng you",
        "我的朋友住在另一个城市。"
      ],
      "urdu": [
        "دوست",
        "dost",
        "مera dost doosre shehar mein rehta hai۔"
      ],
      "arabic": [
        "صديق",
        "sa-deeq",
        "صديقي يعيش في مدينة أخرى."
      ]
    }
  },
  {
    "id": 89,
    "category": "vocabulary",
    "icon": "⏰",
    "meaning": "Measurement of moments and hours",
    "t": {
      "english": [
        "Time",
        "tym",
        "We do not have much time left."
      ],
      "spanish": [
        "Tiempo",
        "TYEM-poh",
        "No nos queda mucho tiempo."
      ],
      "french": [
        "Temps",
        "tahn",
        "Il ne nous reste pas beaucoup de temps."
      ],
      "german": [
        "Zeit",
        "tsyt",
        "Wir haben nicht mehr viel Zeit."
      ],
      "italian": [
        "Tempo",
        "TEM-poh",
        "Non ci resta molto tempo."
      ],
      "japanese": [
        "時間",
        "ji-kan",
        "残り時間があまりありません。"
      ],
      "chinese": [
        "时间",
        "shí jiān",
        "我们没多少时间了。"
      ],
      "urdu": [
        "وقت",
        "waqt",
        "ہمارے پas zyada waqt nahi bacha۔"
      ],
      "arabic": [
        "وقت",
        "waqt",
        "لم يتبق لنا الكثير من الوقت."
      ]
    }
  },
  {
    "id": 90,
    "category": "vocabulary",
    "icon": "💵",
    "meaning": "Currency used to buy things",
    "t": {
      "english": [
        "Money",
        "MUN-ee",
        "Save money for your future."
      ],
      "spanish": [
        "Dinero",
        "dee-NEH-roh",
        "Ahorra dinero para tu futuro."
      ],
      "french": [
        "Argent",
        "ar-ZHAHN",
        "Économise de l'argent pour ton avenir."
      ],
      "german": [
        "Geld",
        "gelt",
        "Spare Geld für deine Zukunft."
      ],
      "italian": [
        "Denaro",
        "deh-NAH-roh",
        "Risparmia denaro per il tuo futuro."
      ],
      "japanese": [
        "お金",
        "o-ka-ne",
        "将来のためにお金を貯めましょう。"
      ],
      "chinese": [
        "钱",
        "qián",
        "为未来存钱吧。"
      ],
      "urdu": [
        "پیسے",
        "pai-se",
        "اپne mustaqbil ke liye paise bachao۔"
      ],
      "arabic": [
        "مال",
        "mal",
        "ادخر المال لمستقبلك."
      ]
    }
  },
  {
    "id": 91,
    "category": "vocabulary",
    "icon": "🏙️",
    "meaning": "Large urban area",
    "t": {
      "english": [
        "City",
        "SIT-ee",
        "The city has many beautiful parks."
      ],
      "spanish": [
        "Ciudad",
        "syoo-DAHD",
        "La ciudad tiene muchos parques hermosos."
      ],
      "french": [
        "Ville",
        "veel",
        "La ville a de beaux parcs."
      ],
      "german": [
        "Stadt",
        "shtaht",
        "Die Stadt hat viele schöne Parks."
      ],
      "italian": [
        "Città",
        "cheet-TAH",
        "La città ha molti bei parchi."
      ],
      "japanese": [
        "都市",
        "to-shi",
        "その都市には美しい公園がたくさんあります。"
      ],
      "chinese": [
        "城市",
        "chéng shì",
        "这座城市有许多美丽的公园。"
      ],
      "urdu": [
        "شہر",
        "shehar",
        "شہر mein kai khubsurat parks hain۔"
      ],
      "arabic": [
        "مدينة",
        "ma-di-na",
        "المدينة فيها حدائق جميلة كثيرة."
      ]
    }
  },
  {
    "id": 92,
    "category": "vocabulary",
    "icon": "💼",
    "meaning": "Activity done to earn a living",
    "t": {
      "english": [
        "Work",
        "wurk",
        "He goes to work at eight."
      ],
      "spanish": [
        "Trabajo",
        "trah-BAH-hoh",
        "Va al trabajo a las ocho."
      ],
      "french": [
        "Travail",
        "trah-VY",
        "Il va au travail à huit heures."
      ],
      "german": [
        "Arbeit",
        "AR-byt",
        "Er geht um acht Uhr zur Arbeit."
      ],
      "italian": [
        "Lavoro",
        "lah-VOH-roh",
        "Va al lavoro alle otto."
      ],
      "japanese": [
        "仕事",
        "shi-go-to",
        "彼は八時に仕事に行きます。"
      ],
      "chinese": [
        "工作",
        "gōng zuò",
        "他八点去上班。"
      ],
      "urdu": [
        "کam",
        "kaam",
        "wo aath baje kaam par jata hai۔"
      ],
      "arabic": [
        "عمل",
        "a-mal",
        "يذهب إلى العمل في الثامنة."
      ]
    }
  },
  {
    "id": 93,
    "category": "grammar",
    "icon": "🙋",
    "meaning": "First person singular pronoun",
    "t": {
      "english": [
        "I",
        "eye",
        "I am learning a new language."
      ],
      "spanish": [
        "Yo",
        "yoh",
        "Yo estoy aprendiendo un idioma nuevo."
      ],
      "french": [
        "Je",
        "zhuh",
        "J'apprends une nouvelle langue."
      ],
      "german": [
        "Ich",
        "ikh",
        "Ich lerne eine neue Sprache."
      ],
      "italian": [
        "Io",
        "EE-oh",
        "Sto imparando una nuova lingua."
      ],
      "japanese": [
        "私",
        "wa-ta-shi",
        "私は新しい言語を学んでいます。"
      ],
      "chinese": [
        "我",
        "wǒ",
        "我在学一门新语言。"
      ],
      "urdu": [
        "میں",
        "main",
        "میں ایک nayi zubaan seekh raha hoon۔"
      ],
      "arabic": [
        "أنا",
        "a-na",
        "أنا أتعلم لغة جديدة."
      ]
    }
  },
  {
    "id": 94,
    "category": "grammar",
    "icon": "👉",
    "meaning": "Second person pronoun",
    "t": {
      "english": [
        "You",
        "yoo",
        "You speak very well."
      ],
      "spanish": [
        "Tú",
        "too",
        "Hablas muy bien."
      ],
      "french": [
        "Tu",
        "too",
        "Tu parles très bien."
      ],
      "german": [
        "Du",
        "doo",
        "Du sprichst sehr gut."
      ],
      "italian": [
        "Tu",
        "too",
        "Parli molto bene."
      ],
      "japanese": [
        "あなた",
        "a-na-ta",
        "あなたはとても上手に話します。"
      ],
      "chinese": [
        "你",
        "nǐ",
        "你说得很好。"
      ],
      "urdu": [
        "آپ",
        "aap",
        "آپ bohot acha bolte hain۔"
      ],
      "arabic": [
        "أنت",
        "an-ta",
        "أنت تتحدث جيدا جدا."
      ]
    }
  },
  {
    "id": 95,
    "category": "grammar",
    "icon": "👤",
    "meaning": "Third person singular pronoun (male)",
    "t": {
      "english": [
        "He",
        "hee",
        "He works at a hospital."
      ],
      "spanish": [
        "Él",
        "el",
        "Él trabaja en un hospital."
      ],
      "french": [
        "Il",
        "eel",
        "Il travaille à l'hôpital."
      ],
      "german": [
        "Er",
        "air",
        "Er arbeitet in einem Krankenhaus."
      ],
      "italian": [
        "Lui",
        "LOO-ee",
        "Lui lavora in un ospedale."
      ],
      "japanese": [
        "彼",
        "ka-re",
        "彼は病院で働いています。"
      ],
      "chinese": [
        "他",
        "tā",
        "他在医院工作。"
      ],
      "urdu": [
        "وہ",
        "woh",
        "woh hospital mein kaam karta hai۔"
      ],
      "arabic": [
        "هو",
        "hu-wa",
        "هو يعمل في مستشفى."
      ]
    }
  },
  {
    "id": 96,
    "category": "grammar",
    "icon": "👥",
    "meaning": "First person plural pronoun",
    "t": {
      "english": [
        "We",
        "wee",
        "We study together every week."
      ],
      "spanish": [
        "Nosotros",
        "noh-SOH-trohs",
        "Estudiamos juntos cada semana."
      ],
      "french": [
        "Nous",
        "noo",
        "Nous étudions ensemble chaque semaine."
      ],
      "german": [
        "Wir",
        "veer",
        "Wir lernen jede Woche zusammen."
      ],
      "italian": [
        "Noi",
        "noy",
        "Studiamo insieme ogni settimana."
      ],
      "japanese": [
        "私たち",
        "wa-ta-shi-ta-chi",
        "私たちは毎週一緒に勉強します。"
      ],
      "chinese": [
        "我们",
        "wǒ men",
        "我们每周一起学习。"
      ],
      "urdu": [
        "ہم",
        "hum",
        "hum har hafte saath padhte hain۔"
      ],
      "arabic": [
        "نحن",
        "nah-nu",
        "ندرس معا كل أسبوع."
      ]
    }
  },
  {
    "id": 97,
    "category": "grammar",
    "icon": "👥",
    "meaning": "Third person plural pronoun",
    "t": {
      "english": [
        "They",
        "thay",
        "They live in a small town."
      ],
      "spanish": [
        "Ellos",
        "EH-yohs",
        "Ellos viven en un pueblo pequeño."
      ],
      "french": [
        "Ils",
        "eel",
        "Ils vivent dans une petite ville."
      ],
      "german": [
        "Sie",
        "zee",
        "Sie leben in einer kleinen Stadt."
      ],
      "italian": [
        "Loro",
        "LOH-roh",
        "Vivono in una piccola città."
      ],
      "japanese": [
        "彼ら",
        "ka-re-ra",
        "彼らは小さな町に住んでいます。"
      ],
      "chinese": [
        "他们",
        "tā men",
        "他们住在一个小镇。"
      ],
      "urdu": [
        "وہ",
        "woh",
        "woh ek chhote shehar mein rehte hain۔"
      ],
      "arabic": [
        "هم",
        "hum",
        "يعيشون في بلدة صغيرة."
      ]
    }
  },
  {
    "id": 98,
    "category": "grammar",
    "icon": "📝",
    "meaning": "Verb indicating existence or state",
    "t": {
      "english": [
        "Is",
        "iz",
        "She is a good teacher."
      ],
      "spanish": [
        "Es",
        "es",
        "Ella es una buena profesora."
      ],
      "french": [
        "Est",
        "eh",
        "Elle est une bonne professeure."
      ],
      "german": [
        "Ist",
        "ist",
        "Sie ist eine gute Lehrerin."
      ],
      "italian": [
        "È",
        "eh",
        "Lei è una buona insegnante."
      ],
      "japanese": [
        "です",
        "de-su",
        "彼女は良い先生です。"
      ],
      "chinese": [
        "是",
        "shì",
        "她是一位好老师。"
      ],
      "urdu": [
        "hai",
        "hai",
        "woh ek achi teacher hai۔"
      ],
      "arabic": [
        "يكون",
        "ya-koon",
        "هي معلمة جيدة."
      ]
    }
  },
  {
    "id": 99,
    "category": "grammar",
    "icon": "📝",
    "meaning": "Verb indicating possession",
    "t": {
      "english": [
        "Have",
        "hav",
        "I have two sisters."
      ],
      "spanish": [
        "Tener",
        "teh-NEHR",
        "Tengo dos hermanas."
      ],
      "french": [
        "Avoir",
        "ah-VWAHR",
        "J'ai deux sœurs."
      ],
      "german": [
        "Haben",
        "HAH-ben",
        "Ich habe zwei Schwestern."
      ],
      "italian": [
        "Avere",
        "ah-VEH-reh",
        "Ho due sorelle."
      ],
      "japanese": [
        "持つ",
        "mo-tsu",
        "私は姉妹が二人います。"
      ],
      "chinese": [
        "有",
        "yǒu",
        "我有两个姐妹。"
      ],
      "urdu": [
        "رکھna",
        "rakh-na",
        "mere do behnein hain۔"
      ],
      "arabic": [
        "يملك",
        "yam-lik",
        "لدي أختان."
      ]
    }
  },
  {
    "id": 100,
    "category": "grammar",
    "icon": "📝",
    "meaning": "Verb expressing desire",
    "t": {
      "english": [
        "Want",
        "wont",
        "I want to learn Spanish."
      ],
      "spanish": [
        "Querer",
        "keh-REHR",
        "Quiero aprender español."
      ],
      "french": [
        "Vouloir",
        "voo-LWAHR",
        "Je veux apprendre l'espagnol."
      ],
      "german": [
        "Wollen",
        "VOL-len",
        "Ich will Spanisch lernen."
      ],
      "italian": [
        "Volere",
        "voh-LEH-reh",
        "Voglio imparare lo spagnolo."
      ],
      "japanese": [
        "欲しい",
        "ho-shii",
        "スペイン語を学びたいです。"
      ],
      "chinese": [
        "想要",
        "xiǎng yào",
        "我想学西班牙语。"
      ],
      "urdu": [
        "چahna",
        "chah-na",
        "mujhe Spanish seekhni hai۔"
      ],
      "arabic": [
        "يريد",
        "yu-reed",
        "أريد تعلم الإسبانية."
      ]
    }
  }
];

function expandEntry(entry) {
  const translations = {};
  for (const lang of SUPPORTED_LANGUAGES) {
    const [word, pronunciation, example] = entry.t[lang];
    translations[lang] = { word, pronunciation, example };
  }
  return {
    id: entry.id,
    category: entry.category,
    icon: entry.icon,
    meaning: entry.meaning,
    translations,
  };
}

/** @type {Array<{ id: number, category: string, icon: string, meaning: string, translations: Record<string, { word: string, pronunciation: string, example: string }> }>} */
export const vocabulary = RAW_VOCABULARY.map(expandEntry);

function shapeForLanguage(entry, languageId) {
  const lang = entry.translations[languageId] ?? entry.translations.english;
  const english = entry.translations.english;
  return {
    id: entry.id,
    category: entry.category,
    icon: entry.icon,
    meaning: entry.meaning,
    word: lang.word,
    translation: languageId === 'english' ? entry.meaning : english.word,
    pronunciation: lang.pronunciation,
    example: lang.example,
    language: languageId,
  };
}

export function getVocabularyForLanguage(languageId) {
  return vocabulary.map((entry) => shapeForLanguage(entry, languageId));
}

export function getWordById(id, languageId) {
  const entry = vocabulary.find((word) => word.id === id);
  if (!entry) return null;
  return shapeForLanguage(entry, languageId);
}

function shuffleArray(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function generateQuizQuestions(languageId, count = 20) {
  const words = getVocabularyForLanguage(languageId);
  const pool = shuffleArray(words);
  const selected = pool.slice(0, Math.min(count, words.length));

  return selected.map((word, index) => {
    const correctAnswer = word.translation;
    const distractors = shuffleArray(
      words.filter((item) => item.id !== word.id),
    )
      .slice(0, 3)
      .map((item) => item.translation);

    const options = shuffleArray([correctAnswer, ...distractors]);

    return {
      id: index + 1,
      question: `What is the meaning of "${word.word}"?`,
      word: word.word,
      correctAnswer,
      options,
      category: word.category,
    };
  });
}

/** Quiz question generators (one question per generator function). */
export const quizQuestions = Array.from({ length: 20 }, (_, index) => (languageId) => {
  const [question] = generateQuizQuestions(languageId, 1);
  return { ...question, id: index + 1 };
});
