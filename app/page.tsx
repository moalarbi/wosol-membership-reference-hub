const constants = [
  "أسماء العضويات المعتمدة حاليًا هي Premier وImperial وPrestige.",
  "العضوية مقترحة كعلاقة مستمرة مع WOSOL، وليست كقائمة خدمات منفصلة.",
  "تكاليف الأطراف الثالثة خارج نطاق رسوم العضوية، وتشمل الفنادق، الرحلات، المطاعم، السيارات، الطيران الخاص، اليخوت، الفعاليات، والموردين.",
  "كل فئة تحتاج إلى منطق قيمة مستقل يوضح سبب اختيارها مقارنة بالفئات الأخرى.",
  "النموذج المستهدف يجب أن يكون قابلًا للبيع، التشغيل، القياس، والتطوير مع الوقت.",
];

const tierRows = [
  [
    "Premier",
    "عضوية فردية",
    "فرد واحد يحتاج نقطة اتصال واحدة لإدارة تفاصيل السفر ونمط الحياة والأعمال.",
    "توضيح القيمة المقترحة لهذه الفئة مقابل نطاقها.",
  ],
  [
    "Imperial",
    "عضوية فردية بأولوية أعلى",
    "شخصية تنفيذية أو حساسة تحتاج خصوصية أكبر، متابعة أدق، وسرعة أعلى.",
    "صياغة الفارق التجاري والتشغيلي بينها وبين Premier.",
  ],
  [
    "Prestige",
    "عضوية متعددة المستخدمين",
    "عائلة، شركة، مكتب تنفيذي، أو مجموعة تحتاج عدة مستخدمين تحت علاقة واحدة.",
    "تحديد أفضل تموضع لها: عائلي، مؤسسي، أو نموذج مرن للاثنين.",
  ],
];

const assumptions = [
  "يوجد تصور أولي للفئات الثلاث، وهو قابل للتطوير.",
  "يوجد تصور أولي للمزايا، ويحتاج إلى ترتيب تجاري أوضح.",
  "يوجد تصور أولي لمنطق التسعير، لكنه غير معروض في هذا الموجز حتى تبقى مساحة التطوير مفتوحة.",
  "يوجد تصور أولي لرحلة العضو، ويحتاج إلى تبسيط وربط أوضح بمرحلة البيع والتفعيل.",
  "يوجد توجه أولي للفصل بين ما يدخل ضمن رسوم العضوية وما يُسعّر كطلب مستقل.",
];

const developmentQuestions = [
  "توضيح الفئات الثلاث من منظور تجاري وتشغيلي.",
  "تحديد مدى كفاية الفارق بين Premier وImperial.",
  "اقتراح التموضع الأنسب لـ Prestige: عائلي، مؤسسي، أو مرن للاثنين.",
  "تحديد الحد الأدنى من المزايا الأساسية داخل كل فئة.",
  "تحديد المزايا التي يفضل تقديمها كإضافات اختيارية بدل تضمينها في العضوية.",
  "اقتراح صياغة حدود الاستخدام بما يحمي WOSOL من الوعود المفتوحة.",
  "تطوير طريقة شرح قيمة العضوية بعيدًا عن عرضها كقائمة خدمات.",
  "تطوير منطق التسعير بناءً على القيمة، الأولوية، وعدد المستخدمين.",
  "تحديد الحدود التي يجب توضيحها للعميل قبل الشراء.",
  "التمييز بين ما يظهر في صفحة البيع النهائية وما يبقى ضمن المرجع الداخلي.",
  "اقتراح مؤشرات مناسبة لقياس نجاح العضوية بعد التفعيل.",
  "اقتراح رحلة انضمام واضحة من الاستفسار حتى التفعيل.",
];

const requestedOutputs = [
  ["Membership Architecture", "تطوير منطق الفئات الثلاث وتوضيح موقع كل فئة داخل نظام العضويات."],
  ["Tier Differentiation", "صياغة الفروقات بين Premier وImperial وPrestige بلغة قابلة للبيع والفهم."],
  ["Benefits Matrix", "اقتراح جدول مزايا واضح، مختصر، ومتوازن دون وعود زائدة."],
  ["Pricing Logic", "تطوير منطق التسعير وفق القيمة، الأولوية، عدد المستخدمين، وسعة التشغيل."],
  ["Usage Boundaries", "تحديد ما يدخل ضمن العضوية وما يتم تسعيره كطلب مستقل."],
  ["Sales Narrative", "صياغة طريقة تقديم العضوية للعميل بطريقة واضحة ومقنعة."],
  ["Member Journey", "اقتراح رحلة انضمام وتشغيل مختصرة وسهلة الفهم."],
  ["Operational Notes", "تحديد المتطلبات التشغيلية الأساسية على مستوى مناسب للتطوير."],
  ["Recommendations", "تقديم توصيات عملية لما يجب تعديله أو إضافته أو حذفه قبل اعتماد النموذج."],
];

const keepInternal = [
  "أرقام الأداء الداخلية الدقيقة.",
  "تفاصيل التصعيد الداخلي والمسؤوليات التشغيلية.",
  "أسماء العملاء أو النماذج المؤسسية الخاصة.",
  "تفاصيل الحسابات أو الأرصدة التشغيلية.",
  "أي معلومات حساسة عن الموردين أو الشركاء.",
  "أي تسعير نهائي غير معتمد.",
];

const reviewCriteria = [
  "قابلية البيع",
  "وضوح الفروقات",
  "قابلية التشغيل",
  "حماية WOSOL من الوعود المفتوحة",
  "قوة القيمة مقابل الرسوم",
  "سهولة شرح العضوية للعميل",
  "مرونة التطوير مستقبلًا",
  "ملاءمة النموذج لطبيعة WOSOL",
];

function Section({
  id,
  number,
  title,
  subtitle,
  children,
}: {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section" id={id}>
      <div className="section-head">
        <span className="section-number">{number}</span>
        <div>
          <h2>{title}</h2>
          {subtitle ? <p className="intro">{subtitle}</p> : null}
        </div>
      </div>
      {children}
    </section>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("-")}>
              {row.map((cell, index) => (
                <td key={`${cell}-${index}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <span className="eyebrow">WOSOL Membership Development Brief</span>
        <h1>موجز تطوير عضويات WOSOL</h1>
        <p className="hero-subtitle">
          هذا الموجز يعرض التصور الحالي لعضويات WOSOL كمنتج قيد التطوير، ويوضح الفئات، الثوابت، الاتجاهات الأولية،
          والمساحات المفتوحة لتحسين القيمة، تجربة العضو، وقابلية البيع والتشغيل.
        </p>
        <nav className="nav" aria-label="Page sections">
          {[
            ["الثوابت", "#constants"],
            ["الفئات", "#tiers"],
            ["الاتجاهات", "#assumptions"],
            ["محاور التطوير", "#questions"],
            ["المخرجات", "#outputs"],
          ].map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </section>

      <Section id="constants" number="01" title="الثوابت الحالية">
        <div className="grid">
          {constants.map((item) => (
            <div className="mini-card" key={item}>
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section id="philosophy" number="02" title="الفلسفة المقترحة للعضوية">
        <div className="note-card">
          <p>
            الاتجاه المقترح أن تُفهم عضويات WOSOL كعلاقة مستمرة، لا كاشتراك في مجموعة خدمات. القيمة الأساسية تكمن في
            وجود جهة تعرف احتياجات العضو، تدير التفاصيل، وتخفف عنه عبء البحث والمتابعة والتنسيق.
          </p>
          <p>
            الفكرة المركزية: العضوية لا تُبنى على وعد مفتوح بفعل كل شيء، بل على وعد منضبط بوجود جهة مسؤولة تعرف كيف
            تدير التفاصيل.
          </p>
        </div>
      </Section>

      <Section id="tiers" number="03" title="الفئات الحالية محل التطوير">
        <Table headers={["العضوية", "الوضع الحالي", "الاستخدام المتوقع", "مساحة التطوير"]} rows={tierRows} />
      </Section>

      <Section id="assumptions" number="04" title="الاتجاهات الأولية">
        <div className="grid">
          {assumptions.map((item) => (
            <div className="mini-card" key={item}>
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section id="what-to-review" number="05" title="محاور التطوير المقترحة">
        <div className="grid three">
          {[
            ["منطق الفئات", "تطوير مدى خدمة التقسيم الحالي للبيع والتشغيل."],
            ["الفروقات", "تحليل وضوح الفارق بين كل فئة والأخرى."],
            ["القيمة", "تطوير طريقة توضيح سبب الاشتراك السنوي."],
            ["المزايا", "تحديد ما يجب أن يدخل ضمن العضوية الأساسية."],
            ["الحدود", "تحديد ما يجب أن يظل خارج رسوم العضوية."],
            ["البيع", "تطوير صياغة بيع واضحة دون مبالغة أو وعود مفتوحة."],
          ].map(([title, text]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="questions" number="06" title="مساحات التطوير المفتوحة">
        <div className="grid two">
          {developmentQuestions.map((question) => (
            <div className="mini-card" key={question}>
              {question}
            </div>
          ))}
        </div>
      </Section>

      <Section id="outputs" number="07" title="المخرجات التطويرية المقترحة">
        <Table headers={["المخرج", "ما يوضحه"]} rows={requestedOutputs} />
      </Section>

      <Section id="internal" number="08" title="نطاق المعلومات غير المشمول">
        <p className="intro">
          هذا الموجز لا يعرض كامل التفاصيل الداخلية. الهدف هو تقديم سياق كافٍ للفهم والتطوير، مع إبقاء التفاصيل
          الحساسة والقرارات غير المعتمدة خارج نطاق المشاركة في هذه المرحلة.
        </p>
        <div className="grid two">
          {keepInternal.map((item) => (
            <div className="mini-card" key={item}>
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section id="criteria" number="09" title="معايير قوة النموذج النهائي">
        <div className="grid four">
          {reviewCriteria.map((item) => (
            <div className="mini-card" key={item}>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </Section>

      <Section id="closing" number="10" title="الخلاصة">
        <div className="navy-card">
          <p>
            هذا الموجز يقدم الاتجاه ولا يقدّم الصيغة النهائية. عضويات WOSOL لا تزال مساحة قابلة للتطوير حتى تصبح
            أوضح في القيمة، أسهل في البيع، أكثر انضباطًا في التشغيل، وأقوى في بناء علاقة مستمرة مع العضو.
          </p>
          <p>النموذج الأقوى هو الذي يوازن بين الوضوح التجاري، سهولة التشغيل، وحدود الوعد المقدم للعضو.</p>
        </div>
      </Section>
    </main>
  );
}
