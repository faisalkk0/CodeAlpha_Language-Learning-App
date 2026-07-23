/**
 * Grammar lessons covering core topics across supported languages.
 */

export const grammarTopics = [
  { name: 'Tenses', icon: '⏰' },
  { name: 'Articles', icon: '📰' },
  { name: 'Pronouns', icon: '👤' },
  { name: 'Prepositions', icon: '📍' },
  { name: 'Adjectives', icon: '🎨' },
  { name: 'Verbs', icon: '🏃' },
  { name: 'Sentence Structure', icon: '📝' },
]

export const grammarLessons = [
  {
    id: 1,
    topic: 'Tenses',
    title: 'Present Simple',
    description: 'Learn how to describe habits, routines, and general truths using the present simple tense.',
    explanation:
      'The present simple tense describes actions that happen regularly, habits, routines, and permanent situations. In English, we often use it with adverbs like "always," "usually," and "every day."\n\n' +
      'To form the present simple in English, use the base verb for I/you/we/they, and add -s or -es for he/she/it. Spanish uses different verb endings (-o, -as, -a, etc.), French often uses -er/-ir/-re patterns, German adds endings to the stem, and Italian follows similar conjugation patterns.\n\n' +
      'Questions are formed with "do/does" in English, while Romance languages typically invert subject and verb or add question particles. Negative forms use "do not/does not" in English, "no" before the verb in Spanish, or "ne...pas" in French.\n\n' +
      'This tense is essential for talking about who you are, what you do daily, and facts that remain true over time.',
    examples: [
      { language: 'english', sentence: 'She works at a hospital.', translation: 'She works at a hospital.' },
      { language: 'spanish', sentence: 'Ella trabaja en un hospital.', translation: 'She works at a hospital.' },
      { language: 'french', sentence: 'Elle travaille à l\'hôpital.', translation: 'She works at the hospital.' },
      { language: 'german', sentence: 'Sie arbeitet in einem Krankenhaus.', translation: 'She works in a hospital.' },
    ],
    tip: 'Watch for the third-person -s in English (he runs, she runs) — it is easy to forget but very important.',
    difficulty: 'beginner',
  },
  {
    id: 2,
    topic: 'Tenses',
    title: 'Present Continuous',
    description: 'Express actions happening right now or temporary situations with the present continuous.',
    explanation:
      'The present continuous (or present progressive) describes actions in progress at the moment of speaking, as well as temporary situations and planned near-future events.\n\n' +
      'In English, it is formed with am/is/are + verb-ing: "I am studying." Spanish uses estar + gerund (estoy estudiando). French uses être + present participle (je suis en train de / je suis étudiant). German often uses a form of "sein" with a participle or a present-tense description.\n\n' +
      'Stative verbs (know, believe, love, need) usually take the present simple, not continuous, in English: "I know the answer" not "I am knowing." Other languages have similar restrictions on certain verb types.\n\n' +
      'Use this tense when you want to emphasize that something is happening now or around now, rather than as a permanent habit.',
    examples: [
      { language: 'english', sentence: 'They are learning Spanish this month.', translation: 'They are learning Spanish this month.' },
      { language: 'spanish', sentence: 'Están aprendiendo español este mes.', translation: 'They are learning Spanish this month.' },
      { language: 'italian', sentence: 'Stanno imparando lo spagnolo questo mese.', translation: 'They are learning Spanish this month.' },
      { language: 'french', sentence: 'Ils apprennent l\'espagnol ce mois-ci.', translation: 'They are learning Spanish this month.' },
    ],
    tip: 'Time expressions like "now," "at the moment," and "currently" signal the present continuous.',
    difficulty: 'beginner',
  },
  {
    id: 3,
    topic: 'Tenses',
    title: 'Past Simple',
    description: 'Talk about completed actions and events in the past using the past simple tense.',
    explanation:
      'The past simple tense describes actions that started and finished at a specific time in the past. It is one of the most frequently used tenses for storytelling and recounting experiences.\n\n' +
      'English regular verbs add -ed (walked, played), while irregular verbs have unique forms (went, saw, ate). Spanish uses preterite endings (-é, -aste, -ó). French has passé composé with avoir/être + past participle. German uses the Präteritum or Perfekt depending on context and region.\n\n' +
      'Time markers such as "yesterday," "last week," and "in 2020" often accompany the past simple. In questions, English uses "did" + base verb: "Did you go?" Romance languages use different question structures.\n\n' +
      'Mastering both regular and common irregular past forms will dramatically improve your ability to narrate past events.',
    examples: [
      { language: 'english', sentence: 'We visited Rome last summer.', translation: 'We visited Rome last summer.' },
      { language: 'spanish', sentence: 'Visitamos Roma el verano pasado.', translation: 'We visited Rome last summer.' },
      { language: 'german', sentence: 'Wir haben Rom letzten Sommer besucht.', translation: 'We visited Rome last summer.' },
      { language: 'italian', sentence: 'Abbiamo visitato Roma la scorsa estate.', translation: 'We visited Rome last summer.' },
    ],
    tip: 'Create flashcards for the 20 most common irregular past verbs in your target language.',
    difficulty: 'beginner',
  },
  {
    id: 4,
    topic: 'Tenses',
    title: 'Past Continuous',
    description: 'Describe ongoing past actions and background events with the past continuous tense.',
    explanation:
      'The past continuous describes an action that was in progress at a specific moment in the past, or an ongoing action interrupted by another event.\n\n' +
      'English forms it with was/were + verb-ing: "I was reading when the phone rang." Spanish uses imperfect of estar + gerund: "Estaba leyendo cuando sonó el teléfono." French uses imparfait: "Je lisais quand le téléphone a sonné."\n\n' +
      'The past continuous often sets the scene in narratives, while the past simple marks the main event or interruption. Compare: "It was raining" (background) vs. "It rained all day" (completed event).\n\n' +
      'This tense pairs naturally with time clauses using "when" and "while" to show simultaneous or overlapping past actions.',
    examples: [
      { language: 'english', sentence: 'He was cooking dinner when I arrived.', translation: 'He was cooking dinner when I arrived.' },
      { language: 'spanish', sentence: 'Estaba cocinando la cena cuando llegué.', translation: 'He was cooking dinner when I arrived.' },
      { language: 'french', sentence: 'Il préparait le dîner quand je suis arrivé.', translation: 'He was preparing dinner when I arrived.' },
      { language: 'italian', sentence: 'Stava preparando la cena quando sono arrivato.', translation: 'He was preparing dinner when I arrived.' },
    ],
    tip: 'Use "while" for two ongoing actions and "when" for an interruption.',
    difficulty: 'intermediate',
  },
  {
    id: 5,
    topic: 'Tenses',
    title: 'Future: Will and Going To',
    description: 'Express future plans, predictions, and spontaneous decisions using will and going to.',
    explanation:
      'English uses two main structures for the future: "will" for predictions and spontaneous decisions, and "be going to" for plans and intentions based on evidence.\n\n' +
      '"I will help you" suggests an offer made at the moment of speaking. "I am going to study tonight" expresses a plan already decided. Spanish uses ir a + infinitive (voy a estudiar). French uses aller + infinitive (je vais étudier). German often uses werden + infinitive (ich werde studieren).\n\n' +
      'Other languages may rely on present tense with a future time word, or have dedicated future conjugations. Italian uses the simple future tense (studierò) or present with a time expression.\n\n' +
      'Choosing the right future form makes your speech sound natural and shows whether you planned ahead or decided on the spot.',
    examples: [
      { language: 'english', sentence: 'I am going to travel to Japan next year.', translation: 'I am going to travel to Japan next year.' },
      { language: 'spanish', sentence: 'Voy a viajar a Japón el próximo año.', translation: 'I am going to travel to Japan next year.' },
      { language: 'french', sentence: 'Je vais voyager au Japon l\'année prochaine.', translation: 'I am going to travel to Japan next year.' },
      { language: 'german', sentence: 'Ich werde nächstes Jahr nach Japan reisen.', translation: 'I will travel to Japan next year.' },
    ],
    tip: 'If you see evidence now (dark clouds), use "going to" for the prediction: "It is going to rain."',
    difficulty: 'intermediate',
  },
  {
    id: 6,
    topic: 'Tenses',
    title: 'Present Perfect',
    description: 'Connect past actions to the present using the present perfect tense.',
    explanation:
      'The present perfect links a past action to the present moment, often emphasizing result or experience rather than when exactly something happened.\n\n' +
      'English uses have/has + past participle: "I have lived here for five years." Spanish uses haber + past participle (he vivido). French uses avoir/être + past participle in a similar compound form. German uses haben/sein + Partizip II.\n\n' +
      'Common triggers include "already," "yet," "ever," "never," "since," and "for." The present perfect often appears with unfinished time periods: "today," "this week," "so far."\n\n' +
      'Do not confuse it with the past simple. "I have lost my keys" (still relevant now) differs from "I lost my keys yesterday" (specific past time).',
    examples: [
      { language: 'english', sentence: 'She has already finished her homework.', translation: 'She has already finished her homework.' },
      { language: 'spanish', sentence: 'Ella ya ha terminado su tarea.', translation: 'She has already finished her homework.' },
      { language: 'french', sentence: 'Elle a déjà fini ses devoirs.', translation: 'She has already finished her homework.' },
      { language: 'italian', sentence: 'Ha già finito i compiti.', translation: 'She has already finished her homework.' },
    ],
    tip: 'In English, never use the present perfect with a finished time word like "yesterday" or "last year."',
    difficulty: 'intermediate',
  },
  {
    id: 7,
    topic: 'Tenses',
    title: 'Past Perfect',
    description: 'Describe actions completed before another past event using the past perfect tense.',
    explanation:
      'The past perfect (pluperfect) shows that one action was completed before another action in the past. It creates clear timelines in complex narratives.\n\n' +
      'English forms it with had + past participle: "When I arrived, the meeting had already started." Spanish uses había + past participle. French uses plus-que-parfait (j\'avais fini). German uses Plusquamperfekt (hatte gemacht).\n\n' +
      'This tense is especially useful in storytelling, reported speech, and explaining cause-and-effect sequences across multiple past events.\n\n' +
      'Without the past perfect, listeners may not know which of two past events happened first. It removes ambiguity in detailed accounts.',
    examples: [
      { language: 'english', sentence: 'They had left before we got there.', translation: 'They had left before we got there.' },
      { language: 'spanish', sentence: 'Se habían ido antes de que llegáramos.', translation: 'They had left before we arrived.' },
      { language: 'french', sentence: 'Ils étaient partis avant notre arrivée.', translation: 'They had left before our arrival.' },
      { language: 'german', sentence: 'Sie waren schon gegangen, bevor wir ankamen.', translation: 'They had already left before we arrived.' },
    ],
    tip: 'Look for "before," "after," "by the time," and "already" as clues to use the past perfect.',
    difficulty: 'advanced',
  },
  {
    id: 8,
    topic: 'Articles',
    title: 'Definite Articles',
    description: 'Understand when and how to use "the" and its equivalents in other languages.',
    explanation:
      'Definite articles refer to specific, known nouns — the listener knows which person, place, or thing you mean. English has one form: "the." Other languages have gendered and numbered forms.\n\n' +
      'Spanish uses el, la, los, las. French uses le, la, l\', les. German uses der, die, das. Italian uses il, lo, la, l\', i, gli, le. Articles must agree with the gender and number of the noun.\n\n' +
      'Use the definite article for unique things (the sun), previously mentioned items, and general categories in some languages ("I love the music" in English vs. language-specific rules).\n\n' +
      'Learning articles with every new noun — including its gender — is one of the best habits for Romance and Germanic language learners.',
    examples: [
      { language: 'english', sentence: 'The book on the table is mine.', translation: 'The book on the table is mine.' },
      { language: 'spanish', sentence: 'El libro sobre la mesa es mío.', translation: 'The book on the table is mine.' },
      { language: 'french', sentence: 'Le livre sur la table est à moi.', translation: 'The book on the table is mine.' },
      { language: 'german', sentence: 'Das Buch auf dem Tisch gehört mir.', translation: 'The book on the table belongs to me.' },
    ],
    tip: 'Always learn nouns with their article: "la mesa" not just "mesa."',
    difficulty: 'beginner',
  },
  {
    id: 9,
    topic: 'Articles',
    title: 'Indefinite Articles',
    description: 'Use a/an and their equivalents to refer to non-specific nouns.',
    explanation:
      'Indefinite articles introduce a noun for the first time or refer to any one of a group, not a specific item. English uses "a" before consonant sounds and "an" before vowel sounds.\n\n' +
      'Spanish: un, una, unos, unas. French: un, une, des. German: ein, eine, ein. Italian: un, uno, una, un\'. The choice depends on gender, number, and sometimes the starting sound of the next word.\n\n' +
      'Indefinite articles often appear in introductions: "I saw a dog" (any dog, first mention). If mentioned again, switch to the definite article: "The dog was friendly."\n\n' +
      'In some contexts, languages omit articles where English uses them, especially when speaking about professions or after certain verbs.',
    examples: [
      { language: 'english', sentence: 'I need a pen and an envelope.', translation: 'I need a pen and an envelope.' },
      { language: 'spanish', sentence: 'Necesito un bolígrafo y un sobre.', translation: 'I need a pen and an envelope.' },
      { language: 'italian', sentence: 'Ho bisogno di una penna e di una busta.', translation: 'I need a pen and an envelope.' },
      { language: 'french', sentence: 'J\'ai besoin d\'un stylo et d\'une enveloppe.', translation: 'I need a pen and an envelope.' },
    ],
    tip: 'English "a" vs "an" depends on the next sound, not the next letter: "a university" but "an hour."',
    difficulty: 'beginner',
  },
  {
    id: 10,
    topic: 'Articles',
    title: 'Zero Article',
    description: 'Learn when not to use an article at all in English and other languages.',
    explanation:
      'The zero article means no article is used before a noun. In English, this occurs with most plural and uncountable nouns in general statements: "Water is essential," "Dogs are loyal."\n\n' +
      'Proper nouns usually take no article: "Paris is beautiful," though some geographic features use "the" (the Alps, the Nile). Languages differ — French and German often use articles with country names where English does not.\n\n' +
      'Meals, languages, sports, and abstract concepts often appear without articles in general contexts: "She speaks French," "We play tennis," "Honesty matters."\n\n' +
      'Mastering zero article usage prevents overuse of "the" — a very common error for learners of English.',
    examples: [
      { language: 'english', sentence: 'Life in big cities can be stressful.', translation: 'Life in big cities can be stressful.' },
      { language: 'spanish', sentence: 'La vida en las grandes ciudades puede ser estresante.', translation: 'Life in big cities can be stressful.' },
      { language: 'german', sentence: 'Das Leben in Großstädten kann stressig sein.', translation: 'Life in big cities can be stressful.' },
      { language: 'french', sentence: 'La vie dans les grandes villes peut être stressante.', translation: 'Life in big cities can be stressful.' },
    ],
    tip: 'If you mean something in general (all of it), English often uses no article with uncountable and plural nouns.',
    difficulty: 'intermediate',
  },
  {
    id: 11,
    topic: 'Pronouns',
    title: 'Subject Pronouns',
    description: 'Identify who performs an action using subject pronouns like I, you, he, and she.',
    explanation:
      'Subject pronouns replace the name of the person or thing performing the verb. They are essential because verb forms often change depending on the subject.\n\n' +
      'English: I, you, he, she, it, we, they. Spanish: yo, tú/usted, él/ella, nosotros, vosotros/ustedes, ellos/ellas. French: je, tu, il/elle, nous, vous, ils/elles. German: ich, du, er/sie/es, wir, ihr, sie/Sie.\n\n' +
      'Many languages drop subject pronouns when verb endings make the subject clear (Spanish: "Hablo" = I speak). English almost always requires the pronoun.\n\n' +
      'Formal and informal "you" distinctions exist in most languages except modern English, where "you" serves both roles.',
    examples: [
      { language: 'english', sentence: 'We are students at this school.', translation: 'We are students at this school.' },
      { language: 'spanish', sentence: 'Somos estudiantes en esta escuela.', translation: 'We are students at this school.' },
      { language: 'french', sentence: 'Nous sommes étudiants dans cette école.', translation: 'We are students at this school.' },
      { language: 'italian', sentence: 'Siamo studenti in questa scuola.', translation: 'We are students at this school.' },
    ],
    tip: 'Pay attention to formal vs informal "you" — using the wrong one can sound rude or oddly distant.',
    difficulty: 'beginner',
  },
  {
    id: 12,
    topic: 'Pronouns',
    title: 'Object Pronouns',
    description: 'Use object pronouns to show who receives the action of a verb.',
    explanation:
      'Object pronouns replace nouns that receive the action of a verb or follow a preposition. English uses me, you, him, her, it, us, them.\n\n' +
      'In Spanish and French, object pronouns often appear before the verb: "Te veo" (I see you), "Je le vois" (I see him). Italian follows similar patterns. German object pronouns change case: mich, dich, ihn, sie.\n\n' +
      'Direct objects receive the action directly ("She called me"). Indirect objects indicate to/for whom ("She gave me a gift"). Many languages combine or cliticize these pronouns with verbs.\n\n' +
      'Correct object pronoun placement is a hallmark of fluent speech in Romance languages.',
    examples: [
      { language: 'english', sentence: 'Can you help me with this?', translation: 'Can you help me with this?' },
      { language: 'spanish', sentence: '¿Puedes ayudarme con esto?', translation: 'Can you help me with this?' },
      { language: 'french', sentence: 'Peux-tu m\'aider avec ça ?', translation: 'Can you help me with this?' },
      { language: 'german', sentence: 'Kannst du mir dabei helfen?', translation: 'Can you help me with this?' },
    ],
    tip: 'In Spanish, object pronouns attach to infinitives and imperatives: "Quiero verlo" (I want to see it).',
    difficulty: 'beginner',
  },
  {
    id: 13,
    topic: 'Pronouns',
    title: 'Possessive Pronouns and Adjectives',
    description: 'Show ownership with possessive forms like my, mine, your, and yours.',
    explanation:
      'Possessive adjectives come before nouns (my book, your car). Possessive pronouns stand alone (mine, yours, theirs). English: my/mine, your/yours, his, her/hers, our/ours, their/theirs.\n\n' +
      'Spanish possessives agree in number with the thing owned: mi/mis, tu/tus, su/sus. French adds agreement for plural: mon/ma/mes, ton/ta/tes. German possessives change with case: mein, dein, sein, ihr.\n\n' +
      'Italian uses mio/mia/miei/mie with full gender and number agreement. Unlike English, the article is often included: "il mio libro" (my book).\n\n' +
      'Do not confuse "its" (possessive) with "it\'s" (it is) in English — a frequent written error.',
    examples: [
      { language: 'english', sentence: 'This is her phone, not mine.', translation: 'This is her phone, not mine.' },
      { language: 'spanish', sentence: 'Este es su teléfono, no el mío.', translation: 'This is her phone, not mine.' },
      { language: 'italian', sentence: 'Questo è il suo telefono, non il mio.', translation: 'This is her phone, not mine.' },
      { language: 'french', sentence: 'C\'est son téléphone, pas le mien.', translation: 'This is her phone, not mine.' },
    ],
    tip: 'Possessive adjectives never take apostrophes in English: "the dog\'s bowl" (of the dog) vs "its bowl."',
    difficulty: 'intermediate',
  },
  {
    id: 14,
    topic: 'Pronouns',
    title: 'Reflexive Pronouns',
    description: 'Express actions directed back at the subject using reflexive pronouns.',
    explanation:
      'Reflexive pronouns indicate that the subject and object of a verb are the same person or thing. English: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves.\n\n' +
      'Spanish uses reflexive pronouns (me, te, se) with reflexive verb forms: "Me lavo" (I wash myself). French: "Je me lave." German uses reflexive pronouns in the accusative or dative: "Ich wasche mich."\n\n' +
      'Many daily routine verbs are reflexive in Romance languages but not in English: "levantarse" (to get up), "sentirse" (to feel). Italian: "Mi alzo," "Mi sento bene."\n\n' +
      'Reflexive pronouns also add emphasis in English: "I myself saw it" — equivalent structures exist differently across languages.',
    examples: [
      { language: 'english', sentence: 'She taught herself to play the guitar.', translation: 'She taught herself to play the guitar.' },
      { language: 'spanish', sentence: 'Se enseñó a tocar la guitarra.', translation: 'She taught herself to play the guitar.' },
      { language: 'french', sentence: 'Elle a appris la guitare toute seule.', translation: 'She learned guitar all by herself.' },
      { language: 'italian', sentence: 'Ha imparato a suonare la chitarra da sola.', translation: 'She learned to play the guitar by herself.' },
    ],
    tip: 'Many "routine" verbs are reflexive in Spanish and Italian even when English uses no reflexive form.',
    difficulty: 'intermediate',
  },
  {
    id: 15,
    topic: 'Prepositions',
    title: 'Prepositions of Time',
    description: 'Use at, on, in, and their equivalents to express when events happen.',
    explanation:
      'Prepositions of time connect events to specific points, days, or periods. English uses "at" for clock times (at 3 p.m.), "on" for days and dates (on Monday), and "in" for months, years, and longer periods (in July).\n\n' +
      'Spanish uses "a" for times (a las tres), "en" for months and years, and "el" for days (el lunes). French: "à" for time, "en" for months, "le" for days. German: "um" for clock time, "am" for days, "im" for months.\n\n' +
      'Some expressions are idiomatic and must be memorized: "at night" (not "in night" in English), "por la mañana" in Spanish (in the morning).\n\n' +
      'Time prepositions rarely translate word-for-word between languages — learn them as fixed phrases.',
    examples: [
      { language: 'english', sentence: 'The meeting is on Friday at 10 a.m.', translation: 'The meeting is on Friday at 10 a.m.' },
      { language: 'spanish', sentence: 'La reunión es el viernes a las 10 de la mañana.', translation: 'The meeting is on Friday at 10 a.m.' },
      { language: 'french', sentence: 'La réunion est vendredi à 10 heures.', translation: 'The meeting is on Friday at 10 a.m.' },
      { language: 'german', sentence: 'Das Meeting ist am Freitag um 10 Uhr.', translation: 'The meeting is on Friday at 10 a.m.' },
    ],
    tip: 'Memorize common chunks: "in the morning," "at night," "on the weekend" — do not translate each word separately.',
    difficulty: 'beginner',
  },
  {
    id: 16,
    topic: 'Prepositions',
    title: 'Prepositions of Place',
    description: 'Describe where things are located using in, on, at, and related prepositions.',
    explanation:
      'Prepositions of place show location. English: "in" for enclosed spaces (in the room), "on" for surfaces (on the table), "at" for specific points (at the door, at school).\n\n' +
      'Spanish distinguishes "en" (in/on/at) and "sobre" (on top of). French uses "dans" (inside), "sur" (on), "à" (at). German combines prepositions with cases: "in dem Haus" (dative, location) vs. "in das Haus" (accusative, direction).\n\n' +
      'Italian: "in" for cities and countries, "a" for places without articles, "su" for on top. Static location vs. movement often triggers different cases in German.\n\n' +
      'Visualizing the spatial relationship — inside, on top, beside, between — helps select the correct preposition.',
    examples: [
      { language: 'english', sentence: 'The keys are on the kitchen counter.', translation: 'The keys are on the kitchen counter.' },
      { language: 'spanish', sentence: 'Las llaves están en la encimera de la cocina.', translation: 'The keys are on the kitchen counter.' },
      { language: 'italian', sentence: 'Le chiavi sono sul piano della cucina.', translation: 'The keys are on the kitchen counter.' },
      { language: 'german', sentence: 'Die Schlüssel liegen auf der Küchentheke.', translation: 'The keys are on the kitchen counter.' },
    ],
    tip: 'German learners: location uses dative case, movement toward uses accusative — "in der Stadt" vs. "in die Stadt."',
    difficulty: 'beginner',
  },
  {
    id: 17,
    topic: 'Prepositions',
    title: 'Prepositions of Direction',
    description: 'Express movement toward a place with to, into, through, and their equivalents.',
    explanation:
      'Prepositions of direction show movement from one place to another. English uses "to" for destination (go to school), "into" for entering (walk into the room), "through" for passing inside (drive through the tunnel).\n\n' +
      'Spanish: "a" for direction (voy a la tienda), "hacia" for toward. French: "à" + city, "en" + feminine countries, "au" + masculine places. German uses accusative after directional prepositions: "in das Haus" (into the house).\n\n' +
      'Italian: "a" for cities, "in" for countries, "verso" for toward. The same preposition may express location or direction depending on verb and case.\n\n' +
      'Always pair direction prepositions with verbs of motion: go, walk, drive, fly, run, enter, leave.',
    examples: [
      { language: 'english', sentence: 'We walked through the park to the museum.', translation: 'We walked through the park to the museum.' },
      { language: 'spanish', sentence: 'Caminamos por el parque hasta el museo.', translation: 'We walked through the park to the museum.' },
      { language: 'french', sentence: 'Nous avons traversé le parc pour aller au musée.', translation: 'We crossed the park to go to the museum.' },
      { language: 'german', sentence: 'Wir gingen durch den Park zum Museum.', translation: 'We walked through the park to the museum.' },
    ],
    tip: 'Ask yourself: am I describing where something is (place) or where it is going (direction)?',
    difficulty: 'intermediate',
  },
  {
    id: 18,
    topic: 'Prepositions',
    title: 'Common Preposition Pairs',
    description: 'Master fixed preposition combinations that do not translate literally.',
    explanation:
      'Many verbs, adjectives, and nouns require specific prepositions that must be learned as units. These collocations rarely follow logic when translating between languages.\n\n' +
      'English examples: depend on, interested in, afraid of, good at, listen to. Spanish: depender de, interesado en, tener miedo de. French: dépendre de, intéressé par, avoir peur de.\n\n' +
      'German adds case requirements: "warten auf" (+ accusative), "träumen von" (+ dative). Italian: "dipendere da," "interessato a," "avere paura di."\n\n' +
      'Trying to translate prepositions word-for-word from your native language leads to unnatural phrasing. Build a personal list of verb + preposition pairs as you encounter them.',
    examples: [
      { language: 'english', sentence: 'She depends on her team for support.', translation: 'She depends on her team for support.' },
      { language: 'spanish', sentence: 'Depende de su equipo para recibir apoyo.', translation: 'She depends on her team for support.' },
      { language: 'french', sentence: 'Elle compte sur son équipe pour le soutien.', translation: 'She relies on her team for support.' },
      { language: 'german', sentence: 'Sie ist auf ihr Team angewiesen.', translation: 'She depends on her team.' },
    ],
    tip: 'When you learn a new verb, immediately look up which preposition it takes — save yourself years of fossilized errors.',
    difficulty: 'advanced',
  },
  {
    id: 19,
    topic: 'Adjectives',
    title: 'Adjective Order',
    description: 'Place multiple adjectives in the correct order before a noun in English and other languages.',
    explanation:
      'When using several adjectives before a noun, English follows a specific order: opinion, size, age, shape, color, origin, material, purpose. Example: "a beautiful small old round Italian wooden dining table."\n\n' +
      'Most Romance languages place adjectives after the noun by default (una casa grande), though some common adjectives come before (buono, bello, grande in Italian). French has a similar split: "une grande maison" but "une maison blanche."\n\n' +
      'German adjectives usually precede the noun and take endings based on case, gender, and article: "das schöne alte Haus." Adjective declension is a core German grammar skill.\n\n' +
      'While learners rarely need eight adjectives at once, knowing the pattern prevents awkward phrasing in descriptive writing and speech.',
    examples: [
      { language: 'english', sentence: 'He bought a new red sports car.', translation: 'He bought a new red sports car.' },
      { language: 'spanish', sentence: 'Compró un coche deportivo rojo nuevo.', translation: 'He bought a new red sports car.' },
      { language: 'french', sentence: 'Il a acheté une nouvelle voiture de sport rouge.', translation: 'He bought a new red sports car.' },
      { language: 'german', sentence: 'Er kaufte ein neues rotes Sportauto.', translation: 'He bought a new red sports car.' },
    ],
    tip: 'English order mnemonic: OSASCOMP — Opinion, Size, Age, Shape, Color, Origin, Material, Purpose.',
    difficulty: 'intermediate',
  },
  {
    id: 20,
    topic: 'Adjectives',
    title: 'Comparative and Superlative Adjectives',
    description: 'Compare people, places, and things using comparative and superlative forms.',
    explanation:
      'Comparatives compare two things (bigger, more interesting). Superlatives compare one thing against all others in a group (the biggest, the most interesting).\n\n' +
      'English short adjectives add -er/-est (taller, tallest). Long adjectives use more/most (more beautiful, most beautiful). Irregular forms: good/better/best, bad/worse/worst.\n\n' +
      'Spanish: -er/-ir verbs use más + adjective for comparative, el/la más for superlative; some have synthetic forms (mayor, menor). French: plus...que, le plus. German adds -er for comparative, am ... -sten for superlative with umlaut changes (groß, größer, am größten).\n\n' +
      'Use "than" in English after comparatives: "She is taller than me." Use "the" before superlatives: "He is the fastest runner."',
    examples: [
      { language: 'english', sentence: 'This restaurant is better than the one we tried last week.', translation: 'This restaurant is better than the one we tried last week.' },
      { language: 'spanish', sentence: 'Este restaurante es mejor que el que probamos la semana pasada.', translation: 'This restaurant is better than the one we tried last week.' },
      { language: 'italian', sentence: 'Questo ristorante è migliore di quello che abbiamo provato la settimana scorsa.', translation: 'This restaurant is better than the one we tried last week.' },
      { language: 'french', sentence: 'Ce restaurant est meilleur que celui que nous avons essayé la semaine dernière.', translation: 'This restaurant is better than the one we tried last week.' },
    ],
    tip: 'Only use -er OR "more" — never both: "more taller" is always wrong in English.',
    difficulty: 'beginner',
  },
  {
    id: 21,
    topic: 'Adjectives',
    title: 'Adjective Agreement',
    description: 'Make adjectives agree in gender and number with the nouns they describe.',
    explanation:
      'In many languages, adjectives must match the gender and number of their noun. English adjectives do not change form (the red car, the red cars), but Spanish, French, German, and Italian require agreement.\n\n' +
      'Spanish: alto/alta/altos/altas. French: petit/petite/petits/petites. Italian: bello/bella/belli/belle with additional forms before certain nouns. German adjectives decline with case, gender, and article type.\n\n' +
      'Predicate adjectives (after "to be") also agree in Romance languages: "La casa es blanca," "Los libros son interesantes." Past participles used as adjectives agree too: "Las ventanas están cerradas."\n\n' +
      'Agreement errors are instantly noticeable to native speakers, so practice adjective-noun pairs together from the start.',
    examples: [
      { language: 'spanish', sentence: 'Tengo unas amigas españolas muy simpáticas.', translation: 'I have some very nice Spanish friends (female).' },
      { language: 'french', sentence: 'J\'ai de bonnes amies françaises.', translation: 'I have good French friends (female).' },
      { language: 'italian', sentence: 'Ho delle amiche italiane molto simpatiche.', translation: 'I have some very nice Italian friends (female).' },
      { language: 'german', sentence: 'Ich habe nette spanische Freundinnen.', translation: 'I have nice Spanish friends (female).' },
    ],
    tip: 'When an adjective ends in -o in Spanish, it usually changes; if it ends in -e or a consonant, it may only change for number.',
    difficulty: 'intermediate',
  },
  {
    id: 22,
    topic: 'Verbs',
    title: 'Regular Verbs',
    description: 'Conjugate regular verbs predictably across common tenses and persons.',
    explanation:
      'Regular verbs follow standard conjugation patterns, making them the best starting point for building verb skills. Once you learn the pattern for one regular verb, you can apply it to hundreds of others in the same class.\n\n' +
      'English regular verbs add -ed in the past: walk/walked, play/played. Spanish -ar verbs: hablar → hablo, hablas, habla. French -er verbs: parler → je parle, tu parles. German weak verbs: machen → mache, machst, macht.\n\n' +
      'Italian -are verbs: parlare → parlo, parli, parla. Identify the verb class (-ar, -er, -ir in Spanish; -er/-ir in French) and apply the corresponding endings.\n\n' +
      'Regular verbs still require practice because person, tense, and mood all affect the ending, even when the pattern itself is predictable.',
    examples: [
      { language: 'english', sentence: 'They watched a movie every Friday.', translation: 'They watched a movie every Friday.' },
      { language: 'spanish', sentence: 'Miraban una película cada viernes.', translation: 'They watched a movie every Friday.' },
      { language: 'french', sentence: 'Ils regardaient un film chaque vendredi.', translation: 'They watched a movie every Friday.' },
      { language: 'italian', sentence: 'Guardavano un film ogni venerdì.', translation: 'They watched a movie every Friday.' },
    ],
    tip: 'Learn one fully conjugated regular verb as a template, then conjugate new verbs by swapping the stem.',
    difficulty: 'beginner',
  },
  {
    id: 23,
    topic: 'Verbs',
    title: 'Irregular Verbs',
    description: 'Handle common irregular verbs whose forms do not follow standard patterns.',
    explanation:
      'Irregular verbs change their stem, ending, or entire form in unpredictable ways. They include the most frequently used verbs in every language, so they cannot be avoided.\n\n' +
      'English irregulars: go/went/gone, be/was/been, have/had/had. Spanish: ser/ir (fui), tener (tengo), hacer (hago). French: être (suis), avoir (ai), aller (vais). German strong verbs change vowels: gehen/ging/gegangen, sehen/sah/gesehen.\n\n' +
      'Italian has many irregular patterns in -are verbs (andare → vado) and common verbs like essere and avere. Irregularity often appears in the present tense, past tense, or participles.\n\n' +
      'Prioritize high-frequency irregular verbs first — the top 20 cover most daily conversation.',
    examples: [
      { language: 'english', sentence: 'She went to the store and bought some milk.', translation: 'She went to the store and bought some milk.' },
      { language: 'spanish', sentence: 'Fue a la tienda y compró leche.', translation: 'She went to the store and bought some milk.' },
      { language: 'french', sentence: 'Elle est allée au magasin et a acheté du lait.', translation: 'She went to the store and bought some milk.' },
      { language: 'german', sentence: 'Sie ging zum Laden und kaufte Milch.', translation: 'She went to the store and bought milk.' },
    ],
    tip: 'Group irregular verbs by pattern when possible — many German strong verbs follow the same vowel change (e-i-a).',
    difficulty: 'intermediate',
  },
  {
    id: 24,
    topic: 'Verbs',
    title: 'Modal Verbs',
    description: 'Express ability, permission, obligation, and possibility with modal verbs.',
    explanation:
      'Modal verbs modify the main verb to express necessity, ability, permission, or probability. English modals: can, could, may, might, must, shall, should, will, would. They are followed by the base verb without "to": "She can swim."\n\n' +
      'Spanish uses poder (can), deber (must/should), tener que (have to). French: pouvoir, devoir, falloir (il faut). German: können, müssen, dürfen, sollen, wollen, mögen — with infinitive at the end of the clause.\n\n' +
      'Italian: potere, dovere, volere. Modals often have irregular present forms that must be memorized separately from their infinitives.\n\n' +
      'Modals are essential for polite requests ("Could you help me?"), giving advice ("You should rest"), and expressing ability ("I can speak three languages").',
    examples: [
      { language: 'english', sentence: 'You must finish the report by tomorrow.', translation: 'You must finish the report by tomorrow.' },
      { language: 'spanish', sentence: 'Debes terminar el informe para mañana.', translation: 'You must finish the report by tomorrow.' },
      { language: 'french', sentence: 'Tu dois finir le rapport pour demain.', translation: 'You must finish the report by tomorrow.' },
      { language: 'german', sentence: 'Du musst den Bericht bis morgen fertigstellen.', translation: 'You must finish the report by tomorrow.' },
    ],
    tip: 'German modal sentences send the main verb to the end: "Ich kann heute nicht kommen" (I cannot come today).',
    difficulty: 'intermediate',
  },
  {
    id: 25,
    topic: 'Verbs',
    title: 'Infinitives and Gerunds',
    description: 'Use verb-noun forms after other verbs, prepositions, and in noun-like roles.',
    explanation:
      'Infinitives are the base form of a verb (to eat, manger, essen). Gerunds are verb forms acting as nouns (eating, nadando, manger). Different verbs require different follow-up forms — infinitive, gerund, or that-clause.\n\n' +
      'English: "I enjoy reading" (gerund) vs. "I want to read" (infinitive). Spanish often uses infinitive after prepositions and many verb phrases. French uses à + infinitive or de + infinitive depending on the main verb.\n\n' +
      'German infinitives with "zu" appear in subordinate clauses. Italian removes final -e and adds -ando/-endo for gerunds. Some verbs change meaning depending on infinitive vs. gerund in Spanish: "Dejó de fumar" (stopped smoking) vs. "Dejó fumar" (let someone smoke).\n\n' +
      'These patterns are largely memorization-based — consult verb lists when unsure which form follows a given verb.',
    examples: [
      { language: 'english', sentence: 'She decided to learn French and started studying every day.', translation: 'She decided to learn French and started studying every day.' },
      { language: 'spanish', sentence: 'Decidió aprender francés y empezó a estudiar todos los días.', translation: 'She decided to learn French and started studying every day.' },
      { language: 'french', sentence: 'Elle a décidé d\'apprendre le français et a commencé à étudier chaque jour.', translation: 'She decided to learn French and started studying every day.' },
      { language: 'italian', sentence: 'Ha deciso di imparare il francese e ha iniziato a studiare ogni giorno.', translation: 'She decided to learn French and started studying every day.' },
    ],
    tip: 'Build a list of verbs that take infinitive vs. gerund in your target language — English and Spanish rules differ greatly.',
    difficulty: 'advanced',
  },
  {
    id: 26,
    topic: 'Verbs',
    title: 'Phrasal Verbs',
    description: 'Understand multi-word English verbs and similar compound verb expressions.',
    explanation:
      'Phrasal verbs combine a verb with a particle (preposition or adverb) to create a new meaning, often completely different from the base verb. They are extremely common in everyday English.\n\n' +
      'Examples: give up (quit), look after (take care of), turn down (reject), run into (meet by chance). The particle can be separable ("turn off the light" / "turn the light off") or inseparable ("look after the children").\n\n' +
      'Other languages express these ideas differently — often with a single verb or a reflexive form. Spanish: "rendirse" (give up), "cuidar de" (look after). French: "abandonner," "s\'occuper de."\n\n' +
      'Phrasal verbs are a major hurdle for English learners because the particle changes the meaning unpredictably. Learn them as complete units, not as separate words.',
    examples: [
      { language: 'english', sentence: 'Please turn down the music — I need to wake up early.', translation: 'Please turn down the music — I need to wake up early.' },
      { language: 'spanish', sentence: 'Por favor, baja la música — necesito despertarme temprano.', translation: 'Please turn down the music — I need to wake up early.' },
      { language: 'french', sentence: 'Baisse la musique, s\'il te plaît — je dois me lever tôt.', translation: 'Please turn down the music — I need to get up early.' },
      { language: 'german', sentence: 'Bitte dreh die Musik leiser — ich muss früh aufstehen.', translation: 'Please turn the music down — I need to get up early.' },
    ],
    tip: 'When you encounter a phrasal verb, write down the full phrase and an example sentence — never just the verb alone.',
    difficulty: 'advanced',
  },
  {
    id: 27,
    topic: 'Sentence Structure',
    title: 'Basic Sentence Structure (SVO)',
    description: 'Build clear sentences using subject-verb-object word order.',
    explanation:
      'English follows Subject-Verb-Object (SVO) order: "The cat (S) eats (V) fish (O)." This is the default pattern for statements and the foundation of sentence building.\n\n' +
      'Spanish and Italian also use SVO in neutral statements, though they allow more flexibility because verb endings show the subject. German main clauses are SVO, but subordinate clauses push the verb to the end. French is generally SVO but drops subject pronouns less often than Spanish.\n\n' +
      'Adverbs of frequency typically go before the main verb in English ("She always arrives early") but placement differs in other languages. Adjectives and articles stay close to the nouns they modify.\n\n' +
      'Start every sentence with who does what to whom — then add time, place, and manner details around that core.',
    examples: [
      { language: 'english', sentence: 'Maria reads books in the library.', translation: 'Maria reads books in the library.' },
      { language: 'spanish', sentence: 'María lee libros en la biblioteca.', translation: 'Maria reads books in the library.' },
      { language: 'german', sentence: 'Maria liest Bücher in der Bibliothek.', translation: 'Maria reads books in the library.' },
      { language: 'italian', sentence: 'Maria legge libri in biblioteca.', translation: 'Maria reads books in the library.' },
    ],
    tip: 'If a sentence feels wrong, identify S, V, and O first — most word-order errors become obvious.',
    difficulty: 'beginner',
  },
  {
    id: 28,
    topic: 'Sentence Structure',
    title: 'Forming Questions',
    description: 'Ask questions using inversion, auxiliary verbs, and question words.',
    explanation:
      'Questions in English often use auxiliary inversion: "Do you like coffee?" or wh-words at the start: "Where do you live?" Yes/no questions invert subject and auxiliary; information questions add who, what, where, when, why, how.\n\n' +
      'Spanish questions use inverted question marks (¿) and often keep the same word order with rising intonation: "¿Te gusta el café?" French uses est-ce que or inversion: "Aimes-tu le café?" German inverts subject and verb: "Magst du Kaffee?"\n\n' +
      'Italian can add a question mark with statement word order and intonation, or use question words: "Ti piace il caffè?" Tag questions in English ("You\'re coming, aren\'t you?") confirm information.\n\n' +
      'Polite questions add modal verbs and softeners: "Could you tell me where the station is?" rather than direct "Where is the station?"',
    examples: [
      { language: 'english', sentence: 'What time does the train leave?', translation: 'What time does the train leave?' },
      { language: 'spanish', sentence: '¿A qué hora sale el tren?', translation: 'What time does the train leave?' },
      { language: 'french', sentence: 'À quelle heure part le train ?', translation: 'What time does the train leave?' },
      { language: 'german', sentence: 'Wann fährt der Zug ab?', translation: 'When does the train depart?' },
    ],
    tip: 'In English, never omit "do/does" in questions: "Do you know?" not "Know you?"',
    difficulty: 'beginner',
  },
  {
    id: 29,
    topic: 'Sentence Structure',
    title: 'Negation in Sentences',
    description: 'Make statements negative using not, no, and double-negative rules.',
    explanation:
      'Negation reverses the truth of a statement. English uses "not" after auxiliaries ("I do not know") or "no" before nouns ("There is no milk). With simple present/past, English requires "do not/does not/did not" + base verb.\n\n' +
      'Spanish places "no" before the verb: "No hablo francés." French uses ne...pas around the verb: "Je ne parle pas français." German uses "nicht" for adverbs/adjectives and "kein" for nouns. Italian: "Non parlo francese."\n\n' +
      'Double negatives are standard in Spanish ("No veo nada" = I don\'t see anything) but considered incorrect in formal English ("I don\'t see nothing" is non-standard). Know the rules of your target language.\n\n' +
      'Short negative answers differ cross-linguistically: English "No, I don\'t" vs. French "Non, je ne parle pas" — match the verb in your response.',
    examples: [
      { language: 'english', sentence: 'I do not understand this exercise.', translation: 'I do not understand this exercise.' },
      { language: 'spanish', sentence: 'No entiendo este ejercicio.', translation: 'I do not understand this exercise.' },
      { language: 'french', sentence: 'Je ne comprends pas cet exercice.', translation: 'I do not understand this exercise.' },
      { language: 'italian', sentence: 'Non capisco questo esercizio.', translation: 'I do not understand this exercise.' },
    ],
    tip: 'In French, "ne" is often dropped in casual speech, but you should still learn the full ne...pas pattern.',
    difficulty: 'intermediate',
  },
  {
    id: 30,
    topic: 'Sentence Structure',
    title: 'Complex and Compound Sentences',
    description: 'Combine ideas with conjunctions, relative clauses, and subordinate structures.',
    explanation:
      'Complex sentences join an independent clause with one or more dependent clauses. Compound sentences join two independent clauses with coordinators (and, but, or, so, yet, for, nor).\n\n' +
      'English: "Although it was raining, we went for a walk" (complex). "I wanted to stay, but I had to leave" (compound). Relative clauses add detail: "The woman who lives next door is a doctor."\n\n' +
      'Spanish uses que, quien, porque, aunque, mientras. French: qui, que, parce que, bien que. German subordinate clauses send the conjugated verb to the end: "...weil ich müde bin." Italian: che, perché, sebbene.\n\n' +
      'Complex sentences make speech and writing more natural and sophisticated. Start with common conjunctions, then add relative pronouns once the basic joins feel comfortable.',
    examples: [
      { language: 'english', sentence: 'Although she was tired, she finished the project because the deadline was today.', translation: 'Although she was tired, she finished the project because the deadline was today.' },
      { language: 'spanish', sentence: 'Aunque estaba cansada, terminó el proyecto porque la fecha límite era hoy.', translation: 'Although she was tired, she finished the project because the deadline was today.' },
      { language: 'french', sentence: 'Bien qu\'elle soit fatiguée, elle a terminé le projet parce que la date limite était aujourd\'hui.', translation: 'Although she was tired, she finished the project because the deadline was today.' },
      { language: 'german', sentence: 'Obwohl sie müde war, beendete sie das Projekt, weil die Frist heute war.', translation: 'Although she was tired, she finished the project because the deadline was today.' },
    ],
    tip: 'When using "although" or "because," do not also use "but" or "so" in the same sentence — pick one connector.',
    difficulty: 'advanced',
  },
]

export function getGrammarByTopic(topic) {
  return grammarLessons.filter((lesson) => lesson.topic === topic)
}

export function getGrammarById(id) {
  return grammarLessons.find((lesson) => lesson.id === id)
}
