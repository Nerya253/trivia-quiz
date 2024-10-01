const allQuestionArr = [
    {
        question: "מהי בירת ארצות הברית?",
        options: ["וושינגטון די. סי.", "ניו יורק", "לוס אנג'לס", "שיקגו"],
        correct_answer: "וושינגטון די. סי."
    },
    {
        question: "מהי החיה הגדולה ביותר בעולם?",
        options: ["פיל", "לוויתן כחול", "ג'ירפה", "דוב קוטב"],
        correct_answer: "לוויתן כחול"
    },
    {
        question: "איזה כוכב לכת הוא הקרוב ביותר לשמש?",
        options: ["מאדים", "ונוס", "כדור הארץ", "חמה"],
        correct_answer: "חמה"
    },
    {
        question: "באיזה חודש חוגגים את חג הפסח?",
        options: ["אפריל", "מרץ", "מאי", "יוני"],
        correct_answer: "אפריל"
    },
    {
        question: "איזה צבע הוא שילוב של כחול וצהוב?",
        options: ["סגול", "ירוק", "כתום", "ורוד"],
        correct_answer: "ירוק"
    },
    {
        question: "כמה יבשות יש בעולם?",
        options: ["4", "5", "6", "7"],
        correct_answer: "7"
    },
    {
        question: "באיזו שנה נחת האדם הראשון על הירח?",
        options: ["1969", "1970", "1968", "1971"],
        correct_answer: "1969"
    },
    {
        question: "מהו ההר הגבוה ביותר בעולם?",
        options: ["הרי האנדים", "הר קילימנג'רו", "הר אברסט", "הר הפוג'י"],
        correct_answer: "הר אברסט"
    },
    {
        question: "מהי החיה המהירה ביותר בעולם?",
        options: ["ברדלס", "נשר", "כריש", "אריה"],
        correct_answer: "ברדלס"
    },
    {
        question: "כמה כוכבים יש בדגל ארצות הברית?",
        options: ["50", "48", "52", "45"],
        correct_answer: "50"
    },
    {
        question: "מהי המדינה הגדולה ביותר בעולם?",
        options: ["קנדה", "רוסיה", "ארצות הברית", "סין"],
        correct_answer: "רוסיה"
    },
    {
        question: "מהי השפה המדוברת ביותר בעולם?",
        options: ["אנגלית", "ספרדית", "סינית", "צרפתית"],
        correct_answer: "סינית"
    },
    {
        question: "איזה ים נמצא בין ישראל לירדן?",
        options: ["ים המלח", "ים סוף", "הים התיכון", "ים הכנרת"],
        correct_answer: "ים המלח"
    },
    {
        question: "מהי השנה האזרחית החדשה?",
        options: ["1 בינואר", "25 בדצמבר", "4 ביולי", "31 באוקטובר"],
        correct_answer: "1 בינואר"
    },
    {
        question: "כמה צבעים יש בקשת בענן?",
        options: ["5", "6", "7", "8"],
        correct_answer: "7"
    },
    {
        question: "באיזו שנה הוקמה מדינת ישראל?",
        options: ["1948", "1947", "1950", "1960"],
        correct_answer: "1948"
    },
    {
        question: "איזו עיר בישראל נקראת \"עיר ללא הפסקה\"?",
        options: ["תל אביב", "חיפה", "ירושלים", "באר שבע"],
        correct_answer: "תל אביב"
    },
    {
        question: "מהי השפה הרשמית של ברזיל?",
        options: ["ספרדית", "פורטוגזית", "אנגלית", "צרפתית"],
        correct_answer: "פורטוגזית"
    },
    {
        question: "מהו הנחל הארוך ביותר בעולם?",
        options: ["הנילוס", "האמזונס", "הדנובה", "הגנגס"],
        correct_answer: "הנילוס"
    },
    {
        question: "מהי יבשת הקוטב הדרומי?",
        options: ["אנטארקטיקה", "אוסטרליה", "אסיה", "אמריקה הדרומית"],
        correct_answer: "אנטארקטיקה"
    },
    {
        question: "מי כתב את הספר \"הארי פוטר\"?",
        options: ["ג'יי. קיי. רולינג", "סטיבן קינג", "טולקין", "אגתה כריסטי"],
        correct_answer: "ג'יי. קיי. רולינג"
    },
    {
        question: "באיזה עונה חוגגים את חג הסוכות?",
        options: ["אביב", "חורף", "סתיו", "קיץ"],
        correct_answer: "סתיו"
    },
    {
        question: "מי היה ראש הממשלה הראשון של מדינת ישראל?",
        options: ["בנימין נתניהו", "יצחק רבין", "גולדה מאיר", "דוד בן-גוריון"],
        correct_answer: "דוד בן-גוריון"
    },
    {
        question: "כמה ימים יש בחודש פברואר בשנה מעוברת?",
        options: ["28", "29", "30", "31"],
        correct_answer: "29"
    },
    {
        question: "מהי הנקודה הנמוכה ביותר על פני כדור הארץ?",
        options: ["עמק המוות", "הגראנד קניון", "ים המלח", "הרי ההימלאיה"],
        correct_answer: "ים המלח"
    },
    {
        question: "איזה סוג של ציפור לא יכולה לעוף?",
        options: ["ברבור", "יען", "בז", "תוכי"],
        correct_answer: "יען"
    },
    {
        question: "באיזו מדינה נמצאת הפירמידה הגדולה של גיזה?",
        options: ["יוון", "סין", "מקסיקו", "מצרים"],
        correct_answer: "מצרים"
    },
    {
        question: "מהו המטבע הרשמי של יפן?",
        options: ["דולר", "יורו", "ין", "פאונד"],
        correct_answer: "ין"
    },
    {
        question: "מהו הכוכב הגדול ביותר במערכת השמש?",
        options: ["מאדים", "נוגה", "שבתאי", "צדק"],
        correct_answer: "צדק"
    },
    {
        question: "מי היה האמן שצייר את המונה ליזה?",
        options: ["פבלו פיקאסו", "לאונרדו דה וינצ'י", "ואן גוך", "מיכלאנג'לו"],
        correct_answer: "לאונרדו דה וינצ'י"
    },
    {
        question: "איזה איבר בגוף האדם שולט על שאר הגוף?",
        options: ["לב", "כבד", "ריאות", "מוח"],
        correct_answer: "מוח"
    },
    {
        question: "מהו האוקיינוס הגדול ביותר בעולם?",
        options: ["האוקיינוס השקט", "האוקיינוס האטלנטי", "הים התיכון", "האוקיינוס ההודי"],
        correct_answer: "האוקיינוס השקט"
    },
    {
        question: "מהי המדינה הקטנה ביותר בעולם?",
        options: ["ואתיקן", "ליכטנשטיין", "סינגפור", "מונקו"],
        correct_answer: "ואתיקן"
    },
    {
        question: "מהו החג שנחגג בסיום צום הרמדאן?",
        options: ["עיד אל-פיטר", "עיד אל-אדחא", "ראש השנה", "פסח"],
        correct_answer: "עיד אל-פיטר"
    },
    {
        question: "איזה גז אנחנו נושמים כדי לחיות?",
        options: ["מימן", "פחמן דו-חמצני", "חמצן", "הליום"],
        correct_answer: "חמצן"
    },
    {
        question: "כמה ימים יש בשבוע?",
        options: ["5", "6", "7", "8"],
        correct_answer: "7"
    },
    {
        question: "באיזו שנה נערכו המשחקים האולימפיים הראשונים בעת החדשה?",
        options: ["1896", "1900", "1920", "1850"],
        correct_answer: "1896"
    },
    {
        question: "איזה כוכב לכת מכונה \"הכוכב האדום\"?",
        options: ["כדור הארץ", "שבתאי", "מאדים", "נפטון"],
        correct_answer: "מאדים"
    },
    {
        question: "מהי העונה החמה ביותר בשנה?",
        options: ["אביב", "קיץ", "סתיו", "חורף"],
        correct_answer: "קיץ"
    },
    {
        question: "מהי המדינה שבה נמצאת העיר ניו יורק?",
        options: ["ארצות הברית", "קנדה", "אוסטרליה", "אנגליה"],
        correct_answer: "ארצות הברית"
    },
    {
        question: "באיזו שנה הומצא האינטרנט?",
        options: ["1991", "1983", "1975", "2000"],
        correct_answer: "1983"
    },
    {
        question: "מהו השם של הכביש המהיר המחבר בין תל אביב לחיפה?",
        options: ["כביש 4", "כביש 1", "כביש 6", "כביש 2"],
        correct_answer: "כביש 2"
    },
    {
        question: "כמה חודשי שנה יש?",
        options: ["10", "12", "14", "11"],
        correct_answer: "12"
    },
    {
        question: "איזה משקה מופק מפולי קפה?",
        options: ["תה", "מיץ", "קפה", "חלב"],
        correct_answer: "קפה"
    },
    {
        question: "באיזו מדינה נמצאת העיר פריז?",
        options: ["ספרד", "איטליה", "צרפת", "גרמניה"],
        correct_answer: "צרפת"
    }, {
        question: "באיזו שנה הוקמה מדינת ישראל?",
        options: ["1948", "1956", "1967", "1973"],
        correct_answer: "1948"
    },
    {
        question: "מהו ההר הגבוה ביותר בישראל?",
        options: ["הר תבור", "הר מירון", "הר חרמון", "הר הכרמל"],
        correct_answer: "הר חרמון"
    },
    {
        question: "כמה מחוזות יש במדינת ישראל?",
        options: ["5", "6", "7", "8"],
        correct_answer: "6"
    },
    {
        question: "מהו הנהר הארוך ביותר בישראל?",
        options: ["הירדן", "הירקון", "נחל אלכסנדר", "נחל עמוד"],
        correct_answer: "הירדן"
    },
    {
        question: "באיזו שנה נחתם הסכם השלום בין ישראל למצרים?",
        options: ["1979", "1981", "1993", "1994"],
        correct_answer: "1979"
    },
    {
        question: "איזה נמל הוא הנמל הימי הגדול ביותר בישראל?",
        options: ["נמל אילת", "נמל אשדוד", "נמל חיפה", "נמל תל אביב"],
        correct_answer: "נמל אשדוד"
    },
    {
        question: "איזה יישוב בישראל מכונה \"עיר הקודש\"?",
        options: ["חיפה", "תל אביב", "ירושלים", "צפת"],
        correct_answer: "ירושלים"
    },
    {
        question: "איזה גוף מים מהווה את גבול המערב של מדינת ישראל?",
        options: ["ים המלח", "הים התיכון", "הכנרת", "ים סוף"],
        correct_answer: "הים התיכון"
    },
    {
        question: "איזו עיר נקראת גם \"בירת הנגב\"?",
        options: ["דימונה", "ערד", "באר שבע", "נתיבות"],
        correct_answer: "באר שבע"
    },
    {
        question: "מי היה הנשיא הראשון של מדינת ישראל?",
        options: ["חיים ויצמן", "יצחק בן צבי", "שמעון פרס", "עזר ויצמן"],
        correct_answer: "חיים ויצמן"
    },
    {
        question: "מהי השפה הרשמית של מדינת ישראל?",
        options: ["עברית", "ערבית", "אנגלית", "רוסית"],
        correct_answer: "עברית"
    },
    {
        question: "באיזו שנה התקיימה מלחמת ששת הימים?",
        options: ["1967", "1956", "1973", "1982"],
        correct_answer: "1967"
    },
    {
        question: "מהי העיר היהודית הראשונה שהוקמה בארץ ישראל בעת החדשה?",
        options: ["ירושלים", "חיפה", "פתח תקווה", "תל אביב"],
        correct_answer: "פתח תקווה"
    }, {
        question: "באיזו שנה נוסדה מכללת כינרת?",
        options: ["1965", "1975", "1990", "2001"],
        correct_answer: "1965"
    },
    {
        question: "באיזה אזור בישראל נמצאת מכללת כינרת?",
        options: ["הנגב", "הגליל העליון", "עמק הירדן", "השרון"],
        correct_answer: "עמק הירדן"
    },
    {
        question: "לאיזה אגם צמודה מכללת כינרת?",
        options: ["ים המלח", "הכנרת", "הים התיכון", "ים סוף"],
        correct_answer: "הכנרת"
    },
    {
        question: "מהי ההתמחות המרכזית של בית הספר להנדסה במכללת כינרת?",
        options: ["הנדסת חשמל", "הנדסת תוכנה", "הנדסה אזרחית", "הנדסת מכונות"],
        correct_answer: "הנדסת תוכנה"
    },
    {
        question: "כמה מחלקות אקדמיות פועלות במכללת כינרת?",
        options: ["8", "12", "15", "18"],
        correct_answer: "12"
    },
    {
        question: "איזה תחום לימוד נוסף נלמד במכללת כינרת מעבר להנדסה?",
        options: ["מדעי החברה והרוח", "עיצוב גרפי", "חקלאות", "אמנות"],
        correct_answer: "מדעי החברה והרוח"
    },
    {
        question: "באיזה יישוב נמצאת מכללת כינרת?",
        options: ["בית שאן", "עין גב", "צמח", "טבריה"],
        correct_answer: "צמח"
    },
    {
        question: "מהו שמה הקודם של מכללת כינרת?",
        options: ["מכללת טבריה", "מכללת בית שאן", "מכללת עמק הירדן", "מכללת צמח"],
        correct_answer: "מכללת עמק הירדן"
    },
    {
        question: "מהי שנת ההקמה של צה\"ל?",
        options: ["1948", "1949", "1956", "1967"],
        correct_answer: "1948"
    },
    {
        question: "מי היה הרמטכ\"ל הראשון של צה\"ל?",
        options: ["יגאל אלון", "דוד בן גוריון", "יעקב דורי", "משה דיין"],
        correct_answer: "יעקב דורי"
    },
    {
        question: "איזה מבצע צבאי ידוע התקיים בשנת 1976 באוגנדה?",
        options: ["מבצע סבנה", "מבצע עופרת יצוקה", "מבצע אנטבה", "מבצע שלום הגליל"],
        correct_answer: "מבצע אנטבה"
    },
    {
        question: "מהי היחידה המיוחדת של חיל הים?",
        options: ["שייטת 13", "יחידת עוקץ", "סיירת מטכ\"ל", "דובדבן"],
        correct_answer: "שייטת 13"
    },
    {
        question: "מהי החיל האחראי על הגנת המרחב האווירי של ישראל?",
        options: ["חיל הים", "חיל ההנדסה", "חיל האוויר", "חיל השריון"],
        correct_answer: "חיל האוויר"
    },
    {
        question: "איזה גדוד חי\"ר מיוחד משלב לוחמים חרדים?",
        options: ["גולני", "כפיר", "נצח יהודה", "צנחנים"],
        correct_answer: "נצח יהודה"
    },
    {
        question: "איזו יחידה נחשבת לאחת מיחידות המודיעין המובילות בצה\"ל?",
        options: ["8200", "669", "שייטת 13", "504"],
        correct_answer: "8200"
    },
    {
        question: "באיזה חיל משרתים לוחמי השריון?",
        options: ["חיל התותחנים", "חיל השריון", "חיל הים", "חיל האוויר"],
        correct_answer: "חיל השריון"
    },
    {
        question: "מהו הכינוי הנפוץ של הרובה הצה\"לי הראשי?",
        options: ["עוזי", "תבור", "M16", "גליל"],
        correct_answer: "תבור"
    },
    {
        question: "מהי דרגתו של מפקד צה\"ל (הרמטכ\"ל)?",
        options: ["תת-אלוף", "אלוף", "רב-אלוף", "סגן-אלוף"],
        correct_answer: "רב-אלוף"
    },
    {
        question: "איזו יחידה עוסקת בחילוץ והצלה?",
        options: ["669", "8200", "101", "504"],
        correct_answer: "669"
    },
    {
        question: "מהו הגדוד הראשון שנוסד בצה\"ל?",
        options: ["הנח\"ל", "חטיבת גבעתי", "פלמ\"ח", "חטיבת אלכסנדרוני"],
        correct_answer: "פלמ\"ח"
    },
    {
        question: "איזו יחידה נחשבת ליחידת העילית של צה\"ל?",
        options: ["שייטת 13", "סיירת מטכ\"ל", "צנחנים", "כפיר"],
        correct_answer: "סיירת מטכ\"ל"
    },
    {
        question: "מהו השם של מערכת ההגנה האווירית המפורסמת של ישראל?",
        options: ["שרביט קסמים", "כיפת ברזל", "החץ", "פטריוט"],
        correct_answer: "כיפת ברזל"
    },
    {
        question: "מהו שמו של התרגיל הצבאי הגדול המתרחש אחת לכמה שנים בצה\"ל?",
        options: ["תמרון אוגדתי", "תרגיל גנרלים", "תרגיל נחשון", "תרגיל גיוס חירום"],
        correct_answer: "תמרון אוגדתי"
    },
    {
        question: "באיזה חיל קיימת יחידת הכלבנים 'עוקץ'?",
        options: ["חיל השריון", "חיל האוויר", "חיל ההנדסה", "חיל הרגלים"],
        correct_answer: "חיל הרגלים"
    },
    {
        question: "מהי תקופת השירות הסדיר בצה\"ל לגברים?",
        options: ["שנה וחצי", "שנתיים", "שנתיים וחצי", "שלוש שנים"],
        correct_answer: "שלוש שנים"
    },
    {
        question: "באיזה בסיס ממוקם פיקוד הדרום?",
        options: ["מחנה צריפין", "מחנה רבין", "מחנה נתן", "קריית ההדרכה"],
        correct_answer: "מחנה נתן"
    },
    {
        question: "איזו מלחמה התקיימה בין 6 ל-25 באוקטובר 1973?",
        options: ["מלחמת ששת הימים", "מלחמת לבנון השנייה", "מלחמת יום הכיפורים", "מלחמת ההתשה"],
        correct_answer: "מלחמת יום הכיפורים"
    },
    {
        question: "באיזו שנה נחתם הסכם השלום בין ישראל לירדן?",
        options: ["1979", "1984", "1994", "2000"],
        correct_answer: "1994"
    }, {
        question: "מה צבע הדגל של מדינת ישראל?",
        options: ["כחול ולבן", "אדום ולבן", "צהוב וכחול", "ירוק ולבן"],
        correct_answer: "כחול ולבן"
    },
    {
        question: "מהו בעל החיים הגדול ביותר בעולם?",
        options: ["פיל", "לויתן", "כריש", "ג'ירפה"],
        correct_answer: "לויתן"
    },
    {
        question: "כמה רגליים יש לעכביש?",
        options: ["6", "8", "10", "4"],
        correct_answer: "8"
    },
    {
        question: "איזה פרי הוא צהוב מבחוץ ולבן מבפנים?",
        options: ["בננה", "מלון", "תפוח", "אבטיח"],
        correct_answer: "בננה"
    },
    {
        question: "איך קוראים לבירה של ישראל?",
        options: ["חיפה", "תל אביב", "באר שבע", "ירושלים"],
        correct_answer: "ירושלים"
    },
    {
        question: "כמה צבעים יש בקשת בענן?",
        options: ["4", "5", "6", "7"],
        correct_answer: "7"
    },
    {
        question: "באיזו עונה נושרים העלים מהעצים?",
        options: ["אביב", "סתיו", "קיץ", "חורף"],
        correct_answer: "סתיו"
    },
    {
        question: "איך קוראים למקום שבו לומדים ילדים?",
        options: ["גן חיות", "בית ספר", "קניון", "מוזיאון"],
        correct_answer: "בית ספר"
    },
    {
        question: "מהי החיה המהירה ביותר בעולם?",
        options: ["אריה", "נמר", "ברדלס", "סוס"],
        correct_answer: "ברדלס"
    },
    {
        question: "מהי העיר הגדולה ביותר בישראל?",
        options: ["תל אביב", "ירושלים", "חיפה", "באר שבע"],
        correct_answer: "ירושלים"
    },
    {
        question: "איך נקרא מקום שבו מטפלים בבעלי חיים?",
        options: ["מסעדה", "חנות", "בית חולים", "וטרינריה"],
        correct_answer: "וטרינריה"
    },
    {
        question: "איזה צבע יש למיץ תפוזים?",
        options: ["אדום", "ירוק", "כתום", "סגול"],
        correct_answer: "כתום"
    },
    {
        question: "באיזה חודש חוגגים את חג החנוכה?",
        options: ["ניסן", "כסלו", "תשרי", "אדר"],
        correct_answer: "כסלו"
    },
    {
        question: "כמה אצבעות יש בכל יד?",
        options: ["4", "5", "6", "10"],
        correct_answer: "5"
    },
    {
        question: "מהו הכוכב שאנו חיים עליו?",
        options: ["מאדים", "שמש", "כדור הארץ", "ירח"],
        correct_answer: "כדור הארץ"
    },
    {
        question: "איך קוראים לאדם שעוזר לאנשים חולים?",
        options: ["נהג", "מורה", "שוטר", "רופא"],
        correct_answer: "רופא"
    },
    {
        question: "באיזה חודש מתחילה השנה החדשה?",
        options: ["ספטמבר", "יוני", "דצמבר", "מרץ"],
        correct_answer: "ספטמבר"
    },
    {
        question: "מהו הפרי שמכינים ממנו מיץ תפוזים?",
        options: ["תפוח", "אבטיח", "תפוז", "מלון"],
        correct_answer: "תפוז"
    },
    {
        question: "איך קוראים לחיה שגרה בכוורת ומכינה דבש?",
        options: ["זבוב", "דבורה", "חיפושית", "צרצר"],
        correct_answer: "דבורה"
    },
    {
        question: "איך קוראים למלך החיות?",
        options: ["כלב", "נמר", "אריה", "פיל"],
        correct_answer: "אריה"
    },
    {
        question: "מהי החיה שידועה בזיכרון טוב מאוד?",
        options: ["סוס", "פיל", "חתול", "צב"],
        correct_answer: "פיל"
    },
    {
        question: "איזה כלי תחבורה עף בשמיים?",
        options: ["רכבת", "אוטובוס", "מטוס", "אופניים"],
        correct_answer: "מטוס"
    },
    {
        question: "מהו הירח שאנו רואים בשמיים בלילה?",
        options: ["כוכב לכת", "לווין טבעי", "מטאור", "ענן"],
        correct_answer: "לווין טבעי"
    },
    {
        question: "כמה ימים יש בשבוע?",
        options: ["5", "6", "7", "8"],
        correct_answer: "7"
    },
    {
        question: "מהו הצבע של העלים בעץ בדרך כלל?",
        options: ["כחול", "ירוק", "צהוב", "אדום"],
        correct_answer: "ירוק"
    },
    {
        question: "איך קוראים למי שמלמד ילדים בבית הספר?",
        options: ["אחות", "מורה", "נהג", "אופה"],
        correct_answer: "מורה"
    },
    {
        question: "מהו כלי התחבורה הגדול ביותר שנוסע על מסילה?",
        options: ["אוטובוס", "מטוס", "רכבת", "אופניים"],
        correct_answer: "רכבת"
    },
    {
        question: "מהי המדינה שבה נמצאת העיר לונדון?",
        options: ["צרפת", "אנגליה", "ספרד", "גרמניה"],
        correct_answer: "אנגליה"
    },
    {
        question: "באיזו עונה יורד שלג בהר החרמון?",
        options: ["קיץ", "סתיו", "חורף", "אביב"],
        correct_answer: "חורף"
    },
    {
        question: "כמה רגליים יש לחתול?",
        options: ["2", "3", "4", "6"],
        correct_answer: "4"
    }
]

let initialState = {                            //מצב התחלתי
    gameState: 'init',
    time: 90,
    questionCnt: 1,
    corrAnswersCnt: 0,
    bScore: getLocalStorage('best-score') || 0,
    score: 0,
    questionData: {},
    isPressed: false,
    resetTimeout: 3
}

const resetState = {                            //מצב ריסטרט הנתונים לא נמחקים שבמצב ריסטרט זה יחזור
    gameState: 'init',
    time: 90,
    questionCnt: 1,
    corrAnswersCnt: 0,
    score: 0,
    bScore: getLocalStorage('best-score') || 0,
    questionData: {},
    isPressed: false,
    resetTimeout: 3
}

function shuffleQuestions() { //רנדום
    for (let i = allQuestionArr.length - 1; i > 0; i--) {
        let rnd = Math.floor(Math.random() * (i + 1))
        let temp = allQuestionArr[i]
        allQuestionArr[i] = allQuestionArr[rnd]
        allQuestionArr[rnd] = temp
    }
}

function setLocalStorage(keyName, data) {        //לשמור נתונים--Local Storage
    localStorage.setItem(keyName, JSON.stringify(data));
}

function getLocalStorage(keyName) {              //לקחת נתונים --Local Storage
    return JSON.parse(localStorage.getItem(keyName))
}

function getById(elId) {                         //יקבל את האלמנט הראשון שזה יהיה השאלה
    return document.getElementById(elId)
}

function getAllByClass(className) {              //מחזירה את כל האלמנטים ב-HTML שמכילים מחלקה (class) מסוימת
    return document.querySelectorAll(`.${className}`)     //זה יהיה ה4 תשובות בדכ
}

const progress = getById('progress')                      //קיצורים
const bestScoreEl = getById('best-score');
const currScoreEl = getById('curr-score')
const questionEl = getById('question')
const questionNumEl = getById('question-number')
const modal = getById('dialog')

const allAnswersEl = getAllByClass('answers')
const allSquaresEl = getAllByClass('square')
const allAnswersContainers = getAllByClass('answer-container')
let modalContainer = getById('dialog-container')


document.addEventListener('keypress', initPress) 

function initPress(e) {                       //הלחיצה שמסירה את הדיאלוג שמסביר על המשחק ומתחילה משחק
    document.removeEventListener('keypress', initPress)
    modalContainer.remove()
    modalContainer = undefined
    startGame();
}

function toggleTimeAlert() {
    progress.classList.toggle('low-time')  
}

function getQuestion(num) {      //מקבל שאלה
    return allQuestionArr[num - 1];
}

function handleKeyDown(e) { 
    switch (e.key) {

        case 'a':
            initialState.gameState !== 'init' && !initialState.isPressed && checkAnswer(0)
            break;
        case 'b':
            initialState.gameState !== 'init' && !initialState.isPressed && checkAnswer(1)
            break;
        case 'c':
            initialState.gameState !== 'init' && !initialState.isPressed && checkAnswer(2)
            break;
        case 'd':
            initialState.gameState !== 'init' && !initialState.isPressed && checkAnswer(3)
            break;
        default:
            break;
    }

}

function checkAnswer(pressedBtnNum) {//בודק תשובות
    let removeFrom;
    let isCorr = false
    initialState.isPressed = true;
    if (initialState.questionData.options[pressedBtnNum] === initialState.questionData.correct_answer) {//אם התשובה נכונה
        initialState.corrAnswersCnt++;
        initialState.score += 10;
        isCorr = true;
        allSquaresEl[pressedBtnNum].classList.add('correct')
        allAnswersContainers[pressedBtnNum].classList.add('correct-answer')
    } else {
        if (initialState.score > 0) initialState.score -= 5
        allAnswersContainers[pressedBtnNum].classList.add('wrong')
        allAnswersEl.forEach((el, i) => {
            if (el.innerHTML === initialState.questionData.correct_answer) {
                allAnswersContainers[i].classList.add('correct-answer')
                removeFrom = i
            }
        })
    }
    initialState.questionCnt++;

    initialState.questionData = getQuestion(initialState.questionCnt)

    updateUi(pressedBtnNum, isCorr, removeFrom)
}

function countDown() { //ספירה לאחור
    let lowerThenTen;
    if (initialState.gameState === 'running') {
        const timeHandler = setInterval(() => {
            progress.style.width = `${(initialState.time / resetState.time) * 100}%`  //מעדכנים את הרוחב של פס ההתקדמות
            if (initialState.time <= 10 && !lowerThenTen) {
                toggleTimeAlert()
                lowerThenTen = true
            }
            if (initialState.time <= 0 && initialState.gameState !== 'end-game') {//אם נגמר הזמן
                clearInterval(timeHandler)
                endGame();
            } else {
                initialState.time--;
            }
        }, 1000)
    }
}

let resetTimeoutEl;

function endGameModal(text) {
    if (modalContainer) return;
    const modalElement = `
                        <div id="dialog-container">
                        <dialog id="dialog" open>
                        <h3>המשחק נגמר</h3>
                        <p class="dialog-p">
                        ${initialState.questionCnt > 1 ?
            `הצלחתם לענות על ${initialState.corrAnswersCnt} מתוך ${initialState.questionCnt - 1}`
            :
            `הצלחתם לענות על ${initialState.corrAnswersCnt} מתוך ${initialState.questionCnt}`
        }
                        </p>
                              ${initialState.score > initialState.bScore ?
            `
                            <p class="dialog-p">
                            פצצה!! הצלחת לשבור את השיא! 👌
                            </p>
                            ` : ""
        }


                        <p class="dialog-p">${text}</p>
                        <button id="dialog-btn" onclick="initPress">לחץ על כפתור להתחלת משחק חדש
                        <span id="reset-timeout">בעוד 3</span> </button>
                        </dialog>
                        </div>
                        `
    document.body.insertAdjacentHTML("afterbegin", modalElement)
    modalContainer = getById("dialog-container")
    resetTimeoutEl = getById("reset-timeout")
}

function startGame() {
    document.addEventListener('keypress', handleKeyDown)
    shuffleQuestions()
    initialState.questionData = getQuestion(initialState.questionCnt)//קבלת שאלה ראשונה:
    
    showQuestion()//הצגת השאלה והעדכון הגרפי
    currScoreEl.innerText = initialState.score
    bestScoreEl.innerText = initialState.bScore

    initialState.gameState = 'running'
    countDown()

}

function showQuestion() { //להציג שאלה חדשה ואת התשובות האפשריות שלה
    questionNumEl.innerHTML = initialState.questionCnt
    questionEl.innerHTML = initialState.questionData.question
    allAnswersEl.forEach((el, i) => el.innerHTML = initialState.questionData.options[i])
}

function endGame() {
    document.removeEventListener('keypress', handleKeyDown)
    toggleTimeAlert()

    if (initialState.score > initialState.bScore)//שמירת הניקוד הטוב ביותר
        setLocalStorage('best-score', initialState.score)

    if ((initialState.corrAnswersCnt === initialState.questionCnt - 1) && initialState.questionCnt > 1) {//הצגת הודעות סיום משחק 
        endGameModal(`מדהים! עניתם על כל השאלות בהצלחה 🤓, צברתם ${initialState.score} נקודות`)
    }

    if (initialState.corrAnswersCnt > 0 && initialState.corrAnswersCnt < 8) {
        endGameModal(`נחמד מאוד, הידע הכללי שלכם מרשים 😉, הצלחתם לצבור ${initialState.score} נקודות`)
    }

    if (initialState.questionCnt >= 8) {
        if ((initialState.corrAnswersCnt > Math.ceil(initialState.questionCnt * 0.75))
            && (initialState.corrAnswersCnt != initialState.questionCnt - 1)) {
            endGameModal(`כל הכבוד! אתם ממש טובים בטריוויה 😀, הצלחתם לצבור ${initialState.score} נקודות`)
        }
        if ((initialState.corrAnswersCnt > Math.ceil(initialState.questionCnt / 2))
            && (initialState.corrAnswersCnt <= Math.ceil(initialState.questionCnt * 0.75) + 1)) {
            endGameModal(`נחמד מאוד, הידע הכללי שלכם מרשים 😉, הצלחתם לצבור ${initialState.score} נקודות`)
        }
        if ((initialState.corrAnswersCnt > Math.ceil(initialState.questionCnt * 0.25))
            && (initialState.corrAnswersCnt <= Math.ceil(initialState.questionCnt / 2) + 1)) {
            endGameModal(`לא רע, אבל אפשר עוד להשתפר 🙂, הצלחתם לצבור ${initialState.score} נקודות`)
        }
        if ((initialState.corrAnswersCnt <= Math.ceil(initialState.questionCnt * 0.25))) {
            endGameModal(`נראה שאתם פחות בקטע של טריוויה 🤔, הצלחתם לצבור ${initialState.score} נקודות`)
        }
    }
    if (initialState.corrAnswersCnt === 0) {
        endGameModal(`לא נורא, אולי עדיף שתשחקו ברולטה של אבי, אדווה ואיתי`)
    }

    const timeoutBtn = setInterval(() => { //קביעת טיימר לפני אתחול המשחק
        if (initialState.resetTimeout <= 0) {
            document.addEventListener('keypress', initPress)
            clearInterval(timeoutBtn)
        }
        if (initialState.resetTimeout > 0) {
            initialState.resetTimeout--
        }
        if (resetTimeoutEl) {
            resetTimeoutEl.innerHTML = initialState.resetTimeout > 0 ? `בעוד ${initialState.resetTimeout}` : ''
        }

    }, 1000)

    initialState = {//אתחול מצב המשחק:
        ...resetState, questionData: {
            "question": ".",
            "options": [
                ".",
                ".",
                ".",
                "."
            ]
        }, bScore: getLocalStorage('best-score')
    }
}

//אחראית לעדכן את ממשק המשתמש (UI) לאחר שהמשתמש בחר בתשובה לשאלה. היא מחזירה את המצב הוויזואלי למצב המקורי ומציגה את השאלה הבאה.
function updateUi(pressedNum, isCorrect, removeFrom, timeOut = 1000) { 
    setTimeout(() => {
        initialState.isPressed = false;
        if (isCorrect) {//הסרת מחלקות ויזואליות במקרה של תשובה נכונה:
            allSquaresEl[pressedNum].classList.remove('correct');
            allAnswersContainers[pressedNum].classList.remove('correct-answer')
        }
        if (!isCorrect) {//הסרת מחלקות ויזואליות במקרה של תשובה שגויה
            allAnswersContainers[pressedNum].classList.remove('wrong')
            allAnswersContainers[removeFrom].classList.remove('correct-answer')

        }
        if (pressedNum) {//איפוס ויזואלי לכל התשובות:
            allSquaresEl.forEach(el => el.classList.remove('correct'))
            allAnswersContainers.forEach(el => {
                el.classList.remove('correct-answer')
                el.classList.remove('wrong')
            })
        }

        //עדכון הניקוד והצגת השאלה הבאה:
        currScoreEl.innerHTML = initialState.score;
        showQuestion()

    }, timeOut)
}
