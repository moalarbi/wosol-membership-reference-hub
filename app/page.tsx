const constants = [
  "أسماء العضويات النهائية هي Premier وImperial وPrestige.",
  "العضوية في WOSOL يجب أن تُفهم كعلاقة مستمرة، وليست كقائمة خدمات.",
  "رسوم العضوية لا تشمل تكاليف الأطراف الثالثة مثل الفنادق، الرحلات، المطاعم، السيارات، الطيران الخاص، اليخوت، الفعاليات، والموردين.",
  "كل فئة يجب أن يكون لها سبب واضح للشراء، وفرق واضح عن الفئة الأخرى.",
  "النموذج النهائي يجب أن يكون قابلًا للبيع، التشغيل، القياس، والتطوير مع الوقت.",
];

const tierRows = [
  [
    "Premier",
    "عضوية فردية",
    "فرد واحد يحتاج نقطة اتصال واحدة لإدارة تفاصيل السفر ونمط الحياة والأعمال.",
    "هل القيمة كافية وواضحة مقابل الرسوم؟",
  ],
  [
    "Imperial",
    "عضوية فردية بأولوية أعلى",
    "شخصية تنفيذية أو حساسة تحتاج خصوصية أكبر، متابعة أدق، وسرعة أعلى.",
    "هل الفرق بينها وبين Premier واضح بما يكفي؟",
  ],
  [
    "Prestige",
    "عضوية متعددة المستخدمين",
    "عائلة، شركة، مكتب تنفيذي، أو مجموعة تحتاج عدة مستخدمين تحت علاقة واحدة.",
    "هل يجب أن تكون عائلية، مؤسسية، أم قابلة للاثنين؟",
  ],
];

const assumptions = [
  "لدينا تصور أولي للفئات الثلاث، لكنه قابل للمراجعة.",
  "لدينا تصور أولي للمزايا، لكنه يحتاج ترتيبًا تجاريًا أوضح.",
  "لدينا تصور أولي للأسعار، لكنه غير معروض هنا حتى لا يقيّد التقييم.",
  "لدينا تصور أولي لرحلة العضو، ونحتاج تبسيطها وجعلها قابلة للبيع.",
  "لدينا توجه لتقسيم ما يدخل ضمن رسوم العضوية وما يُسعّر كطلب مستقل.",
];

const developmentQuestions = [
  "هل الفئات الثلاث واضحة تجاريًا؟",
  "هل الفرق بين Premier وImperial كافٍ ومقنع؟",
  "هل Prestige يجب أن تكون عضوية عائلية، مؤسسية، أم نموذجًا مرنًا للاثنين؟",
  "ما الحد الأدنى من المزايا التي يجب أن تكون داخل كل فئة؟",
  "ما المزايا التي يجب أن تكون Add-ons بدل إدخالها ضمن العضوية؟",
  "كيف نحمي WOSOL من الوعود المفتوحة أو غير القابلة للتشغيل؟",
  "كيف نشرح قيمة العضوية بدون أن تبدو كقائمة خدمات؟",
  "ما أفضل طريقة لتسعير العضويات بناءً على القيمة، الأولوية، وعدد المستخدمين؟",
  "ما الحدود التي يجب توضيحها للعميل قبل الشراء؟",
  "ما الذي يجب أن يظهر في صفحة البيع النهائية؟ وما الذي يجب أن يبقى داخليًا فقط؟",
  "كيف نقيس نجاح العضوية بعد التفعيل؟",
  "ما أفضل رحلة انضمام للعضو من الاستفسار حتى التفعيل؟",
];

const requestedOutputs = [
  ["Membership Architecture", "إعادة بناء منطق الفئات الثلاث وتوضيح موقع كل فئة داخل نظام العضويات."],
  ["Tier Differentiation", "تحديد الفروقات الحقيقية بين Premier وImperial وPrestige بلغة قابلة للبيع."],
  ["Benefits Matrix", "اقتراح جدول مزايا واضح، مختصر، وغير مبالغ فيه."],
  ["Pricing Logic", "مراجعة منطق التسعير دون الاكتفاء بعدد الخدمات."],
  ["Usage Boundaries", "تحديد ما يدخل ضمن العضوية وما يتم تسعيره كطلب مستقل."],
  ["Sales Narrative", "صياغة طريقة شرح العضوية للعميل بطريقة واضحة ومقنعة."],
  ["Member Journey", "اقتراح رحلة انضمام وتشغيل مختصرة وسهلة الفهم."],
  ["Operational Notes", "تحديد المتطلبات التشغيلية الأساسية بدون الدخول في تفاصيل داخلية زائدة."],
  ["Recommendations", "تقديم توصيات عملية لما يجب تعديله أو إضافته أو حذفه قبل اعتماد النموذج."],
];

const keepInternal = [
  "أرقام SLA الدقيقة.",
  "تفاصيل التصعيد الداخلي والمسؤولين.",
  "أسماء العملاء أو النماذج المؤسسية الخاصة.",
  "تفاصيل الرصيد التشغيلي أو الحسابات الخاصة.",
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
          هذا الملف ليس نسخة نهائية من نظام العضويات. هو موجز تطوير يوضح الاتجاه الحالي، الثوابت التي لا نرغب بتغييرها،
          والمساحات التي نحتاج فيها إلى مراجعة وتطوير من متخصص في بناء العضويات.
        </p>
        <nav className="nav" aria-label="Page sections">
          {[
            ["الغرض", "#purpose"],
            ["الثوابت", "#constants"],
            ["الفئات", "#tiers"],
            ["الافتراضات", "#assumptions"],
            ["أسئلة التطوير", "#questions"],
            ["المخرجات", "#outputs"],
          ].map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </section>

      <Section
        id="purpose"
        number="01"
        title="الغرض من الملف"
        subtitle="نريد من المتخصص أن يطوّر أساسيات العضويات، لا أن يراجع خطة مغلقة."
      >
        <div className="navy-card">
          <span className="label">DEVELOPMENT BRIEF</span>
          <p>
            المطلوب هو تقييم نموذج العضويات، تحسين الفروقات بين الفئات، تطوير منطق القيمة، ومراجعة قابلية البيع والتشغيل.
            نريد أن يعرف المتخصص أين وصلنا، وما هي الثوابت، ثم يقدّم تصوره المهني لما يجب تطويره.
          </p>
        </div>
      </Section>

      <Section id="constants" number="02" title="الثوابت التي لا نرغب بتغييرها">
        <div className="grid">
          {constants.map((item) => (
            <div className="mini-card" key={item}>
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section id="philosophy" number="03" title="الفلسفة الحالية للعضوية">
        <div className="note-card">
          <p>
            WOSOL لا تريد بيع اشتراك خدمات. الاتجاه المطلوب هو بناء علاقة مستمرة يشعر معها العضو أن هناك جهة تعرف
            احتياجاته، تدير التفاصيل، وتخفف عنه عبء البحث والمتابعة والتنسيق.
          </p>
          <p>
            الفكرة المركزية: العضوية ليست وعدًا بفعل كل شيء. العضوية وعد بوجود جهة مسؤولة تعرف كيف تدير التفاصيل.
          </p>
        </div>
      </Section>

      <Section id="tiers" number="04" title="الفئات الحالية المطلوب تطويرها">
        <Table headers={["العضوية", "الوضع الحالي", "الاستخدام المتوقع", "سؤال التطوير"]} rows={tierRows} />
      </Section>

      <Section id="assumptions" number="05" title="الافتراضات الحالية">
        <div className="grid">
          {assumptions.map((item) => (
            <div className="mini-card" key={item}>
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section id="what-to-review" number="06" title="ما نحتاج مراجعته">
        <div className="grid three">
          {[
            ["منطق الفئات", "هل التقسيم الحالي يخدم البيع والتشغيل؟"],
            ["الفروقات", "هل الفرق بين كل فئة واضح ومقنع؟"],
            ["القيمة", "هل العميل يفهم لماذا يدفع سنويًا؟"],
            ["المزايا", "ما الذي يجب أن يدخل ضمن العضوية؟"],
            ["الحدود", "ما الذي يجب أن يظل خارج رسوم العضوية؟"],
            ["البيع", "كيف نشرح العضوية بدون مبالغة أو وعود مفتوحة؟"],
          ].map(([title, text]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="questions" number="07" title="أسئلة التطوير للمتخصص">
        <div className="grid two">
          {developmentQuestions.map((question) => (
            <div className="mini-card" key={question}>
              {question}
            </div>
          ))}
        </div>
      </Section>

      <Section id="outputs" number="08" title="المخرجات المطلوبة من المتخصص">
        <Table headers={["المخرج", "المطلوب"]} rows={requestedOutputs} />
      </Section>

      <Section id="internal" number="09" title="معلومات لا نعرضها في هذه المرحلة">
        <p className="intro">
          هذه النسخة مصممة لإعطاء المتخصص مساحة تطوير. لذلك لا نعرض كل التفاصيل الداخلية أو الأرقام التشغيلية الدقيقة.
        </p>
        <div className="grid two">
          {keepInternal.map((item) => (
            <div className="mini-card" key={item}>
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section id="criteria" number="10" title="معايير تقييم المقترح النهائي">
        <div className="grid four">
          {reviewCriteria.map((item) => (
            <div className="mini-card" key={item}>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </Section>

      <Section id="closing" number="11" title="الخلاصة">
        <div className="navy-card">
          <p>
            هذا الملف يعطي المتخصص الاتجاه، لا الإجابة النهائية. نريد منه أن يطوّر نظام عضويات WOSOL بحيث يصبح أوضح في
            القيمة، أسهل في البيع، أكثر انضباطًا في التشغيل، وأقوى في بناء علاقة مستمرة مع العضو.
          </p>
          <p>الهدف أن يخرج المتخصص بتوصيات عملية، لا أن يكتفي بمراجعة ما هو مكتوب.</p>
        </div>
      </Section>
    </main>
  );
}
