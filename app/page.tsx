const whyItems = [
  "لأن العضويات يجب أن تشرح القيمة قبل الخدمات.",
  "لأن الفرق بين Premier وImperial وPrestige يجب أن يكون واضحًا خلال دقيقة واحدة.",
  "لأن Prestige تحتاج تعريفًا تشغيليًا كعضوية متعددة المستخدمين.",
  "لأن الصفحة يجب أن تحمي WOSOL من الوعود المفتوحة وغير المحددة.",
  "لأن فريق المبيعات والتشغيل يحتاج مرجعًا واحدًا يشرح المنتج وحدوده وآلية تفعيله.",
];

const shiftRows = [
  ["قائمة خدمات", "نظام عضوية"],
  ["مزايا متفرقة", "قيمة واضحة"],
  ["طلب منفصل يبدأ من الصفر", "علاقة تتطور مع الوقت"],
  ["وعد واسع", "حدود تشغيلية واضحة"],
  ["عميل يشرح كل مرة", "ملف تفضيلات يتراكم ويتحسن"],
];

const membershipRows = [
  ["Premier", "Individual Membership", "1", "30,000", "سنة ميلادية"],
  ["Imperial", "Executive Membership", "1", "60,000", "سنة ميلادية"],
  ["Prestige", "Multi-User Membership", "5+", "125,000", "سنة ميلادية"],
];

const membershipCards = [
  {
    name: "Premier",
    type: "Individual Membership",
    text: "للأفراد الذين يبحثون عن نقطة اتصال واحدة تساعدهم في إدارة تفاصيل السفر ونمط الحياة والأعمال.",
    promise: "دعم تفاصيل الحياة اليومية.",
  },
  {
    name: "Imperial",
    type: "Executive Membership",
    text: "للشخصيات التنفيذية وكبار الشخصيات الذين يحتاجون إلى مستوى أعلى من التخصيص والخصوصية والأولوية.",
    promise: "فهم أعمق للتفضيلات والاحتياجات.",
  },
  {
    name: "Prestige",
    type: "Multi-User Membership",
    text: "للعائلات والشركات والمكاتب التنفيذية والمجموعات من خمسة مستخدمين فأكثر.",
    promise: "إدارة عدة مستخدمين تحت علاقة موحدة مع WOSOL.",
  },
];

const inclusionRows = [
  ["مدير علاقة", "مخصص", "أول / تنفيذي", "فريق أو قائد حساب"],
  ["ملف تفضيلات", "أساسي", "متقدم", "متعدد المستخدمين"],
  ["قناة تواصل", "معتمدة", "أولوية", "موحدة مع صلاحيات"],
  ["تنسيق السفر", "متوفر", "متقدم", "للمجموعة / العائلة / الشركة"],
  ["تنسيق نمط الحياة", "متوفر", "متقدم", "متعدد المستخدمين"],
  ["تنسيق الأعمال", "حسب الطلب", "متقدم", "مناسب للشركات والمكاتب"],
  ["شبكة الشركاء", "متاحة", "أولوية أعلى", "إدارة أوسع حسب الحاجة"],
  ["متابعة الطلبات", "متوفرة", "أكثر تفصيلًا", "مجمعة ومتعددة المسارات"],
];

const servicePillars = [
  {
    title: "إدارة السفر",
    text: "رحلات، فنادق، فيلل، سيارات، استقبال مطارات، جداول سفر، وإعادة تنسيق عند الحاجة.",
  },
  {
    title: "كونسيرج نمط الحياة",
    text: "مطاعم، تجارب، مناسبات، تسوق، هدايا، عافية، وطلبات شخصية مدروسة.",
  },
  {
    title: "كونسيرج الأعمال",
    text: "دعم تنفيذي، ضيافة مؤسسية، اجتماعات، تنقلات وفود، وبروتوكول للضيوف.",
  },
];

const policyRows = [
  ["Premier", "مستخدم واحد مسمّى", "لا تمتد المزايا لغير المستخدم المعتمد."],
  ["Imperial", "مستخدم واحد مسمّى", "تُدار الطلبات بحساسية أعلى وأولوية تنفيذية."],
  ["Prestige", "عدة مستخدمين معتمدين", "تبدأ من 5 مستخدمين فأكثر، ويمكن ضبط النطاق حسب العلاقة والصلاحيات."],
];

const journey = [
  ["01", "الاستفسار", "استفسار أولي عبر الموقع، التطبيق، الإحالة، أو مدير العلاقة."],
  ["02", "التأهيل", "مراجعة ملف العميل، طبيعة الاستخدام، حجم الطلبات، ومستوى الخصوصية."],
  ["03", "مطابقة الفئة", "تحديد العضوية المناسبة بناءً على الاستخدام، لا على السعر فقط."],
  ["04", "عرض العضوية", "تقديم عرض واضح يشرح ما يشمله الاشتراك وما لا يشمله."],
  ["05", "الاعتماد والتفعيل", "اعتماد العضوية وتأكيد بيانات العضو أو المستخدمين."],
  ["06", "جمع التفضيلات", "بناء ملف تفضيلات يساعد الفريق على خدمة العضو بدقة منذ البداية."],
  ["07", "بدء الخدمة", "استقبال الطلبات، ترتيب الأولويات، التنسيق، والمتابعة حتى الإغلاق."],
  ["08", "تطوير العلاقة", "كل طلب جديد يضيف معرفة تجعل الخدمة التالية أسهل وأدق."],
];

const qualificationCards = [
  ["مصدر العلاقة", "هل جاء العميل عبر إحالة، ترشيح، علاقة تنفيذية، أو تقديم مباشر؟"],
  ["طبيعة الاستخدام", "هل الاستخدام شخصي، عائلي، مؤسسي، أم لمجموعة خاصة؟"],
  ["حجم الطلبات", "ما نوع الطلبات المتكررة؟ وما مدى كثافتها خلال السنة؟"],
  ["مستوى الخصوصية", "هل يحتاج العميل تعاملًا حساسًا أو بروتوكوليًا أو غير معلن؟"],
  ["ملاءمة الفئة", "هل تناسبه Premier أو Imperial أو Prestige بناءً على التشغيل؟"],
  ["جاهزية العلاقة", "هل العميل مستعد لعلاقة سنوية واضحة، أم أن الطلبات المتقطعة أنسب؟"],
];

const preferenceItems = [
  "تفضيلات السفر والفنادق",
  "الطيران والتنقلات",
  "المطاعم والتجارب",
  "العائلة والمرافقون",
  "أسلوب التواصل",
  "الحساسية والخصوصية",
  "الوجهات المعتادة",
  "الملاحظات الخاصة",
];

const premierCards = [
  {
    title: "مستخدم واحد",
    items: ["عضوية فردية واضحة.", "تُدار باسم عضو واحد.", "لا تمتد المزايا تلقائيًا لغير المستخدم المعتمد."],
  },
  {
    title: "نقطة اتصال واحدة",
    items: ["قناة تواصل معتمدة.", "مدير علاقة مخصص.", "تجميع الطلبات والمتابعة من جهة واحدة."],
  },
  {
    title: "استخدام يومي منظم",
    items: ["سفر ونمط حياة وأعمال.", "تنسيق الطلبات المتكررة.", "تطوير ملف التفضيلات مع كل تجربة."],
  },
];

const imperialCards = [
  {
    title: "أولوية أعلى",
    items: ["تعامل أسرع مع الطلبات.", "متابعة أدق للتفاصيل.", "تصعيد داخلي عند الحاجة."],
  },
  {
    title: "خصوصية أكبر",
    items: ["طلبات أكثر حساسية.", "تعامل محدود مع المعلومات.", "حماية أعلى لسياق العضو وتفضيلاته."],
  },
  {
    title: "تنفيذ تنفيذي",
    items: ["مناسب للشخصيات التنفيذية.", "مناسب للطلبات البروتوكولية.", "تنسيق أوضح للطلبات ذات الأثر العالي."],
  },
];

const prestigeCards = [
  {
    title: "المستخدم الرئيسي",
    items: ["يعتمد المستخدمين.", "يحدد الصلاحيات.", "يتابع الصورة العامة للحساب.", "يوافق على الطلبات الحساسة عند الحاجة."],
  },
  {
    title: "المستخدمون المعتمدون",
    items: ["لكل مستخدم ملف تفضيلات مستقل.", "يمكن لكل مستخدم طلب الخدمات حسب الصلاحية.", "يتم توثيق الطلبات والتفضيلات لكل مستخدم.", "يمكن تمييز احتياجات العائلة أو الشركة أو المجموعة."],
  },
  {
    title: "فريق WOSOL",
    items: ["قائد حساب موحد.", "إدارة طلبات متعددة بالتوازي.", "تنسيق موحد مع حفظ التفاصيل الفردية.", "تقرير استخدام عند الحاجة.", "إمكانية إضافة مستخدمين أو توسيع النطاق برسوم مستقلة."],
  },
];

const boundaries = [
  "رسوم العضوية لا تشمل تكاليف الأطراف الثالثة.",
  "الفنادق، الرحلات، المطاعم، السيارات، الطيران الخاص، اليخوت، الفعاليات، والموردون تُسعّر بشكل مستقل.",
  "الطلبات تخضع للتوفر، المعايير، وسياسات الشركاء.",
  "WOSOL تدير التنسيق والمتابعة ولا تقدم وعدًا مطلقًا بتوفر كل خيار في كل وقت.",
  "صلاحيات Prestige تُحدد حسب المستخدم الرئيسي والمستخدمين المعتمدين.",
];

const slaRows = [
  ["أول استجابة", "15-60 دقيقة حسب نوع العلاقة ودرجة الاستعجال."],
  ["خيارات السفر", "2-6 ساعات للطلب العاجل، وحتى 24 ساعة للطلب العادي."],
  ["تأكيد السائق", "60-180 دقيقة حسب المدينة والتوفر."],
  ["المطاعم والتجارب", "4-12 ساعة حسب طبيعة الطلب."],
  ["دقة التنفيذ", "مستهدف لا يقل عن 97%."],
  ["الالتزام بالـ SLA", "مستهدف لا يقل عن 95%."],
  ["رضا العضو", "مستهدف 4.7 / 5.0."],
  ["تسوية الفواتير", "خلال 5 أيام عمل عند وجود رصيد أو حساب مؤسسي."],
];

const escalationRows = [
  ["المستوى 1", "تأخير أو عدم رضا", "مشرف المناوبة", "15 دقيقة"],
  ["المستوى 2", "عدم حل خلال ساعة", "مدير العمليات", "خلال ساعة"],
  ["المستوى 3", "طلب حساس أو عالي القيمة", "مكتب COO", "فوري"],
  ["المستوى 4", "طلب رسمي أو بروتوكولي", "COO / الإدارة التنفيذية", "مباشر"],
];

const corporateRows = [
  ["نموذج الرصيد", "رصيد خدمة مسبق قابل للاستهلاك حسب الطلبات المنفذة."],
  ["قنوات التواصل", "التطبيق، واتساب، البريد، الخط الساخن، أو RM Cell."],
  ["التنفيذ", "تثليث الطلب، ترشيح الخيارات، تأكيد الحجوزات، والتنسيق مع الموردين."],
  ["التقارير", "كشف شهري، ملخص استهلاك، رصيد متبقٍ، ومراجعة ربع سنوية."],
  ["إعادة الشحن", "يمكن إضافة رصيد جديد عند الاستهلاك حسب سياسة WOSOL."],
];

const salesKit = [
  ["ملخص من صفحة واحدة", "يعرض العضويات، الأسعار، الفروقات، ما يشمله الاشتراك، وما لا يشمله."],
  ["أسئلة التأهيل", "تحدد هل العميل فرد، عائلة، شركة، مكتب تنفيذي، أو مجموعة خاصة."],
  ["سيناريوهات الاستخدام", "رحلة تنفيذية، إجازة عائلية، وفد شركة، ضيف دولي، مناسبة خاصة، أو طلب عاجل."],
  ["معالجة الاعتراضات", "إجابات واضحة عن الرسوم، حدود التوفر، تكاليف الأطراف الثالثة، والفرق بين الفئات."],
  ["نموذج التهيئة", "يجمع التفضيلات، المستخدمين، الصلاحيات، أسلوب التواصل، ومستوى الخصوصية."],
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
        <span className="eyebrow">مرجع داخلي للعضويات</span>
        <h1>آلية ومعلومات عضويات WOSOL</h1>
        <p className="hero-subtitle">
          صفحة واحدة تشرح نظام العضويات، الفئات، حدود التشغيل، رحلة العضو، التأهيل، التفضيلات، ومعايير الخدمة لفريق WOSOL.
        </p>
        <nav className="nav" aria-label="Page sections">
          {[
            ["الفلسفة", "#philosophy"],
            ["الهيكل", "#structure"],
            ["التأهيل", "#qualification"],
            ["Premier", "#premier"],
            ["Imperial", "#imperial"],
            ["Prestige", "#prestige"],
            ["SLA", "#sla"],
            ["الشركات", "#corporate"],
          ].map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </section>

      <Section
        id="summary"
        number="01"
        title="Executive Summary"
        subtitle="العضوية في WOSOL ليست اشتراكًا في خدمات متفرقة. هي علاقة تُدار باحترافية وتتحسن مع الوقت."
      >
        <div className="navy-card">
          <span className="label">EXECUTIVE SUMMARY</span>
          <p>
            تهدف العضويات إلى تحويل التعامل مع WOSOL من طلبات منفصلة إلى علاقة واضحة تحدد قيمة العضوية، طريقة إدارتها،
            حدودها، وفروقاتها بين Premier وImperial وPrestige. العضو لا يدفع مقابل خدمة واحدة، بل مقابل جهة تعرف
            احتياجاته وتدير التفاصيل نيابة عنه.
          </p>
        </div>
      </Section>

      <Section id="why" number="02" title="لماذا نطور ملف العضويات؟">
        <div className="grid">
          {whyItems.map((item) => (
            <div className="mini-card" key={item}>
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section id="philosophy" number="03" title="فلسفة العضوية">
        <div className="note-card">
          <p>
            عضويات WOSOL لا تُبنى على كثرة الخدمات، بل على سهولة إدارة التفاصيل. من أول تعامل، يتم فهم تفضيلات العضو
            الأساسية، ثم تتطور العلاقة مع كل طلب لتصبح الخدمة أكثر دقة وملاءمة.
          </p>
          <p>
            الرفاهية هنا ليست أن يرى العضو كل شيء يحدث. الرفاهية أن يشعر أن كل شيء مُعتنى به، وأن هناك جهة يمكن
            الاعتماد عليها باستمرار.
          </p>
        </div>
      </Section>

      <Section id="shift" number="04" title="التحول المطلوب">
        <Table headers={["من", "إلى"]} rows={shiftRows} />
      </Section>

      <Section id="structure" number="05" title="هيكل العضويات">
        <Table headers={["العضوية", "النوع", "المستخدمون", "السعر", "المدة"]} rows={membershipRows} />
      </Section>

      <Section id="definitions" number="06" title="تعريف كل عضوية">
        <div className="grid three">
          {membershipCards.map((card) => (
            <article className="card membership-card" key={card.name}>
              <div className="membership-name">{card.name}</div>
              <div>
                <h3>{card.type}</h3>
                <p>{card.text}</p>
              </div>
              <div className="promise">
                <span className="label">PROMISE</span>
                <strong>{card.promise}</strong>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="policy" number="07" title="سياسة المستخدمين">
        <Table headers={["العضوية", "هيكل المستخدمين", "ملاحظة تشغيلية"]} rows={policyRows} />
      </Section>

      <Section id="inclusions" number="08" title="ما الذي تشمله العضوية؟">
        <Table headers={["العنصر", "Premier", "Imperial", "Prestige"]} rows={inclusionRows} />
      </Section>

      <Section id="pillars" number="09" title="محاور الخدمة">
        <div className="grid three">
          {servicePillars.map((pillar) => (
            <article className="card" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="boundaries" number="10" title="ما الذي لا تشمله رسوم العضوية؟">
        <div className="note-card">
          {boundaries.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </Section>

      <Section id="journey" number="11" title="رحلة العضو">
        <div className="timeline">
          {journey.map(([number, title, text]) => (
            <div className="timeline-item" key={number}>
              <div className="timeline-index">{number}</div>
              <div>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="qualification" number="12" title="التأهيل قبل البيع">
        <div className="grid three">
          {qualificationCards.map(([title, text]) => (
            <article className="mini-card" key={title}>
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="preferences" number="13" title="ملف التفضيلات">
        <p className="intro">
          ملف التفضيلات هو ما يحول العضوية من خدمة عامة إلى علاقة شخصية. كل طلب جديد يجب أن يضيف معرفة تجعل الخدمة
          القادمة أسرع وأدق.
        </p>
        <div className="grid four">
          {preferenceItems.map((item) => (
            <div className="mini-card" key={item}>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </Section>

      <Section id="premier" number="14" title="كيف تُدار Premier؟">
        <div className="note-card">
          <p>
            Premier هي عضوية فردية مصممة لمن يريد علاقة واضحة مع WOSOL ونقطة اتصال واحدة لإدارة تفاصيل السفر ونمط الحياة
            والأعمال بشكل مستمر.
          </p>
        </div>
        <div className="grid three" style={{ marginTop: 16 }}>
          {premierCards.map((card) => (
            <article className="card" key={card.title}>
              <h3>{card.title}</h3>
              <ul>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="imperial" number="15" title="كيف تُدار Imperial؟">
        <div className="note-card">
          <p>
            Imperial هي عضوية فردية بمستوى أعلى من الأولوية والخصوصية، مناسبة للشخصيات التي تحتاج متابعة أدق وطلبات أكثر
            حساسية من حيث الوقت والبروتوكول.
          </p>
        </div>
        <div className="grid three" style={{ marginTop: 16 }}>
          {imperialCards.map((card) => (
            <article className="card" key={card.title}>
              <h3>{card.title}</h3>
              <ul>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="prestige" number="16" title="كيف تُدار Prestige؟">
        <div className="note-card">
          <p>
            Prestige ليست ترقية من Imperial. Prestige عضوية مختلفة لأنها مصممة لعدة مستخدمين تحت حساب واحد، مثل عائلة
            أو شركة أو مكتب تنفيذي أو مجموعة خاصة.
          </p>
        </div>
        <div className="grid three" style={{ marginTop: 16 }}>
          {prestigeCards.map((card) => (
            <article className="card" key={card.title}>
              <h3>{card.title}</h3>
              <ul>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="sla" number="17" title="معايير الخدمة والقياس">
        <Table headers={["المعيار", "التعريف"]} rows={slaRows} />
      </Section>

      <Section id="escalation" number="18" title="مسار التصعيد">
        <Table headers={["المستوى", "الحالة", "المسؤول", "الزمن"]} rows={escalationRows} />
      </Section>

      <Section id="corporate" number="19" title="نموذج الحسابات المؤسسية">
        <p className="intro">
          نموذج AL BAWANI يوضح إمكانية تقديم عضوية أو علاقة مؤسسية مبنية على رصيد خدمة، فريق علاقة مخصص، تقارير شهرية،
          ومراجعات ربع سنوية.
        </p>
        <Table headers={["العنصر", "التطبيق"]} rows={corporateRows} />
      </Section>

      <Section id="sales" number="20" title="Membership Sales Kit">
        <div className="grid three">
          {salesKit.map(([title, text]) => (
            <article className="mini-card" key={title}>
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="closing" number="21" title="الخلاصة التنفيذية">
        <div className="navy-card">
          <p>
            لكي تصبح عضويات WOSOL قابلة للبيع والتشغيل، يجب ألا تُعرض كثلاث باقات خدمات. يجب أن تُعرض كثلاث طرق مختلفة
            لإدارة العلاقة مع WOSOL.
          </p>
          <p>
            Premier علاقة فردية. Imperial علاقة فردية بأولوية وخصوصية أعلى. Prestige علاقة متعددة المستخدمين لعائلة أو
            شركة أو مجموعة.
          </p>
          <p>
            الخدمات يمكن طلبها من أكثر من جهة، لكن وجود جهة تعرف كيف تدير التفاصيل وتتابعها بهدوء هو ما يجعل العضوية
            تستحق قيمتها.
          </p>
        </div>
      </Section>

    </main>
  );
}
