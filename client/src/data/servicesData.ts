export interface ServiceBenefit {
  title: string;
  description: string;
  iconName?: string;
}

export interface ProcedureStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  tag: string;
  shortDescription: string;
  detailedDescription: string;
  heroImage: string;
  galleryImages: string[];
  benefits: ServiceBenefit[];
  procedureSteps: ProcedureStep[];
  suitableFor: string[];
  faqs: ServiceFAQ[];
  relatedServiceSlugs: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "consultation-counseling",
    slug: "consultation-counseling",
    title: "Consultation & Counseling",
    category: "Diagnostic & Preventive",
    tag: "Assessment & Advice",
    shortDescription:
      "Professional dental assessment, diagnosis, and guidance based on the patient’s oral health needs.",
    detailedDescription:
      "A comprehensive dental consultation is the crucial first step toward lasting oral health. At Bhaddar Dental, our clinicians conduct thorough examinations using digital diagnostics to understand your unique dental history, address underlying concerns, and discuss personalized treatment choices in a supportive, pressure-free environment.",
    heroImage: "/Consultation & Counseling.png",
    galleryImages: ["/Consultation & Counseling.png", "/image1.png", "/image2.png"],
    benefits: [
      {
        title: "Thorough Diagnostic Assessment",
        description: "Accurate clinical evaluation using state-of-the-art dental diagnostic methods.",
      },
      {
        title: "Personalized Treatment Pathways",
        description: "Customized care options tailored to your medical history and lifestyle goals.",
      },
      {
        title: "Clear, Honest Explanations",
        description: "Transparent discussions about procedures, timelines, and oral health expectations.",
      },
      {
        title: "Preventive Guidance",
        description: "Practical advice on home hygiene techniques to safeguard teeth and gums.",
      },
    ],
    procedureSteps: [
      {
        stepNumber: "01",
        title: "Warm Welcome & History Review",
        description: "Discussion of your primary dental concerns, medical history, and past experiences.",
      },
      {
        stepNumber: "02",
        title: "Comprehensive Examination",
        description: "Detailed inspection of teeth, periodontal tissues, bite alignment, and oral mucosa.",
      },
      {
        stepNumber: "03",
        title: "Digital Diagnostics",
        description: "Targeted digital X-rays or intraoral imaging if clinically indicated.",
      },
      {
        stepNumber: "04",
        title: "Collaborative Planning",
        description: "Explaining all suitable options and answering your questions before starting any treatment.",
      },
    ],
    suitableFor: [
      "Individuals experiencing tooth pain, gum sensitivity, or aesthetic concerns.",
      "New patients looking for a trustworthy oral health assessment.",
      "Patients seeking second opinions on complex dental treatments.",
      "Anyone seeking a comprehensive long-term dental maintenance plan.",
    ],
    faqs: [
      {
        question: "How long does a typical dental consultation take?",
        answer: "A standard consultation usually takes 20 to 30 minutes, allowing ample time for examination, diagnostics, and thorough discussion.",
      },
      {
        question: "Will I need X-rays during my consultation?",
        answer: "X-rays are only taken when clinically necessary to inspect beneath the enamel, check roots, or examine bone structures.",
      },
      {
        question: "Can treatment begin on the same day as the consultation?",
        answer: "Yes, for simple preventive treatments or urgent pain relief, same-day care can often be arranged after clinical evaluation.",
      },
    ],
    relatedServiceSlugs: [
      "scaling-polishing",
      "endodontic-treatment",
      "dental-implants",
      "child-dentistry",
    ],
  },
  {
    id: "scaling-polishing",
    slug: "scaling-polishing",
    title: "Scaling & Polishing",
    category: "Preventive Hygiene",
    tag: "Hygiene & Cleaning",
    shortDescription:
      "Removal of plaque, tartar, and surface stains to improve oral hygiene and maintain healthy teeth.",
    detailedDescription:
      "Professional scaling and polishing gently eliminates hardened calculus (tartar), bacterial plaque, and superficial stains from tea, coffee, or smoking that routine brushing cannot reach. Regular cleanings are essential for preventing gingivitis, periodontitis, and persistent bad breath.",
    heroImage: "/Scaling & Polishing.png",
    galleryImages: ["/Scaling & Polishing.png", "/image3.png", "/image4.png"],
    benefits: [
      {
        title: "Prevents Gum Disease",
        description: "Halts early gingivitis before it progresses to irreversible periodontal bone loss.",
      },
      {
        title: "Freshens Breath",
        description: "Eliminates odor-causing bacterial biofilms from below the gum line.",
      },
      {
        title: "Brighter Natural Smile",
        description: "Removes extrinsic coffee, tea, and tobacco stains for a clean, smooth finish.",
      },
      {
        title: "Smooth Tooth Surface",
        description: "Polishing makes it harder for new plaque and bacteria to adhere to teeth.",
      },
    ],
    procedureSteps: [
      {
        stepNumber: "01",
        title: "Periodontal Assessment",
        description: "Inspecting gum pocket depths and identifying areas of tartar buildup.",
      },
      {
        stepNumber: "02",
        title: "Ultrasonic Scaling",
        description: "Gentle high-frequency vibrations safely dislodge hardened calculus from tooth surfaces.",
      },
      {
        stepNumber: "03",
        title: "Fine Hand Debridement",
        description: "Precise micro-instruments clean delicate contours along and below the gum margin.",
      },
      {
        stepNumber: "04",
        title: "Prophylaxis Polishing",
        description: "A gentle polishing paste is applied to leave teeth glossy, smooth, and clean.",
      },
    ],
    suitableFor: [
      "Individuals with bleeding gums when brushing or flossing.",
      "Patients with visible yellow or brown tartar deposits near the gum line.",
      "Anyone who has not had a professional dental cleaning in over six months.",
      "Patients preparing for orthodontic treatment or restorative dental work.",
    ],
    faqs: [
      {
        question: "Does scaling damage the tooth enamel?",
        answer: "No. Professional ultrasonic scaling uses gentle vibration and water flow specifically calibrated to remove deposits without harming your natural enamel.",
      },
      {
        question: "How often should I get scaling and polishing done?",
        answer: "Most patients benefit from professional cleaning every 6 months, though those prone to gum issues may be advised to visit every 3 to 4 months.",
      },
      {
        question: "Is the scaling procedure painful?",
        answer: "The procedure is generally comfortable. For patients with sensitive teeth or inflamed gums, numbing gel or local anesthesia can be applied.",
      },
    ],
    relatedServiceSlugs: [
      "consultation-counseling",
      "endodontic-treatment",
      "fixed-braces",
      "tooth-extraction",
    ],
  },
  {
    id: "tooth-extraction",
    slug: "tooth-extraction",
    title: "Tooth Extraction",
    category: "General & Surgical",
    tag: "Gentle Extraction",
    shortDescription:
      "Safe removal of damaged, decayed, infected, or problematic teeth when necessary.",
    detailedDescription:
      "While preserving your natural teeth is always our priority, an extraction becomes necessary when a tooth is severely fractured, unrestorable from extensive decay, or compromised by advanced infection. Our dental surgeons use gentle techniques and modern anesthetics to ensure a safe, calm, and pain-free experience.",
    heroImage: "/Tooth Extraction.png",
    galleryImages: ["/Tooth Extraction.png", "/image1.png", "/image2.png"],
    benefits: [
      {
        title: "Immediate Pain Relief",
        description: "Eliminates chronic pain caused by deeply infected or cracked teeth.",
      },
      {
        title: "Prevents Infection Spread",
        description: "Protects neighboring teeth and supporting jawbone from spreading abscesses.",
      },
      {
        title: "Gentle Atraumatic Technique",
        description: "Preserves surrounding bone structure for future implant or bridge restoration.",
      },
      {
        title: "Comprehensive Post-Care",
        description: "Detailed aftercare instructions and recovery guidance for quick healing.",
      },
    ],
    procedureSteps: [
      {
        stepNumber: "01",
        title: "Clinical & Radiographic Exam",
        description: "Assessing root curvature, nerve proximity, and surrounding bone levels.",
      },
      {
        stepNumber: "02",
        title: "Local Anesthesia",
        description: "Administering targeted numbing to ensure you feel zero pain during the procedure.",
      },
      {
        stepNumber: "03",
        title: "Careful Tooth Removal",
        description: "Loosening and removing the tooth with gentle, controlled pressure.",
      },
      {
        stepNumber: "04",
        title: "Hemostasis & Healing Guidance",
        description: "Placing sterile gauze, ensuring clot stability, and explaining post-operative home care.",
      },
    ],
    suitableFor: [
      "Teeth with extensive decay extending below the bone level that cannot be saved.",
      "Severe vertical tooth fractures or root cracks.",
      "Impacted or severely crowded teeth causing recurring pericoronitis.",
      "Advanced periodontal disease causing extreme tooth mobility.",
    ],
    faqs: [
      {
        question: "Will I feel pain during the tooth extraction?",
        answer: "No. With modern local anesthesia, the extraction site will be completely numb. You will only feel slight gentle pressure, but no sharp sensations or pain.",
      },
      {
        question: "What should I eat after an extraction?",
        answer: "Stick to soft, cool foods like yogurt, smoothies (without straws), mashed potatoes, and soups for the first 24 to 48 hours.",
      },
      {
        question: "When can I replace the extracted tooth with an implant?",
        answer: "Depending on bone health and infection levels, an implant can sometimes be placed immediately, or after 8 to 12 weeks of bone healing.",
      },
    ],
    relatedServiceSlugs: [
      "dental-implants",
      "minor-oral-surgery",
      "endodontic-treatment",
      "removable-dentures",
    ],
  },
  {
    id: "endodontic-treatment",
    slug: "endodontic-treatment",
    title: "Endodontic Treatment",
    category: "Restorative Dentistry",
    tag: "Root Canal Therapy",
    shortDescription:
      "Treatment of infected or damaged tooth pulp, commonly known as root canal treatment.",
    detailedDescription:
      "Root canal therapy is a tooth-saving procedure performed when the internal pulp tissue containing nerves and blood vessels becomes inflamed or infected by deep decay or trauma. By carefully cleaning, disinfecting, and sealing the root canals, we relieve pain and allow you to keep your natural tooth for decades.",
    heroImage: "/Endodontic Treatment.png",
    galleryImages: ["/Endodontic Treatment.png", "/image2.png", "/image4.png"],
    benefits: [
      {
        title: "Saves Natural Tooth",
        description: "Avoids the need for tooth extraction and preserves natural chewing function.",
      },
      {
        title: "Eliminates Severe Pain",
        description: "Relieves throbbing toothaches, cold/hot sensitivity, and root abscesses.",
      },
      {
        title: "Maintains Natural Alignment",
        description: "Prevents adjacent teeth from shifting and tilting into empty spaces.",
      },
      {
        title: "High Clinical Longevity",
        description: "When restored with a quality crown, root-treated teeth can last a lifetime.",
      },
    ],
    procedureSteps: [
      {
        stepNumber: "01",
        title: "Anesthesia & Isolation",
        description: "Complete localized numbing and rubber dam isolation for a dry, sterile field.",
      },
      {
        stepNumber: "02",
        title: "Canal Access & Cleaning",
        description: "Removing infected pulp tissue and shaping the root canals with rotary files.",
      },
      {
        stepNumber: "03",
        title: "Antimicrobial Irrigation",
        description: "Disinfecting all canal branches to eliminate bacteria and debris.",
      },
      {
        stepNumber: "04",
        title: "Hermetic 3D Sealing",
        description: "Filling the cleaned canals with biocompatible gutta-percha and sealing the tooth.",
      },
    ],
    suitableFor: [
      "Patients with lingering pain to hot or cold foods and drinks.",
      "Deep cavities reaching the dental pulp.",
      "Teeth with swelling, tenderness, or a pimple-like bump on the gum (abscess).",
      "Cracked or traumatized teeth with nerve involvement.",
    ],
    faqs: [
      {
        question: "Is root canal treatment painful?",
        answer: "Contrary to old myths, modern root canal therapy is as comfortable as getting a standard filling thanks to effective local anesthesia and modern rotary instruments.",
      },
      {
        question: "Do I always need a crown after a root canal?",
        answer: "For premolars and molars that bear heavy chewing forces, a dental crown is strongly recommended to protect the tooth from fractures.",
      },
      {
        question: "How many visits does root canal treatment require?",
        answer: "Most root canal treatments at Bhaddar Dental are completed in 1 to 2 sessions, depending on the severity of the infection and canal complexity.",
      },
    ],
    relatedServiceSlugs: [
      "crown-and-bridge",
      "consultation-counseling",
      "tooth-extraction",
      "scaling-polishing",
    ],
  },
  {
    id: "removable-dentures",
    slug: "removable-dentures",
    title: "Removable Dentures",
    category: "Prosthodontics",
    tag: "Tooth Replacement",
    shortDescription:
      "Removable artificial teeth designed to replace missing teeth and restore function and appearance.",
    detailedDescription:
      "Removable dentures offer a versatile, non-surgical solution for replacing multiple missing teeth or complete dental arches. Custom-crafted from premium acrylic or flexible lightweight materials, our dentures restore natural chewing ability, improve facial aesthetics, and restore confidence in your smile.",
    heroImage: "/Removable Dentures.png",
    galleryImages: ["/Removable Dentures.png", "/image1.png", "/image3.png"],
    benefits: [
      {
        title: "Restores Chewing & Speech",
        description: "Allows comfortable eating and clear enunciation of words.",
      },
      {
        title: "Supports Facial Features",
        description: "Prevents the sunken facial appearance associated with missing teeth.",
      },
      {
        title: "Customized Aesthetic Match",
        description: "Shaped and colored to naturally complement your complexion and gums.",
      },
      {
        title: "Non-Surgical & Accessible",
        description: "A dependable, non-invasive option for tooth replacement.",
      },
    ],
    procedureSteps: [
      {
        stepNumber: "01",
        title: "Diagnostic Impression",
        description: "Taking accurate primary molds of your dental ridges and oral tissues.",
      },
      {
        stepNumber: "02",
        title: "Bite Registration & Shade Selection",
        description: "Recording jaw relationships and selecting tooth shades for a natural look.",
      },
      {
        stepNumber: "03",
        title: "Wax Try-In Verification",
        description: "Testing aesthetics, tooth arrangement, and speech clarity before final fabrication.",
      },
      {
        stepNumber: "04",
        title: "Final Delivery & Adjustment",
        description: "Fitting the completed denture and making fine adjustments for supreme comfort.",
      },
    ],
    suitableFor: [
      "Patients missing several teeth across an upper or lower arch (partial dentures).",
      "Patients missing all natural teeth in an arch (complete dentures).",
      "Individuals seeking an affordable, non-surgical tooth replacement option.",
      "Patients who may not be suitable candidates for dental implants.",
    ],
    faqs: [
      {
        question: "How long does it take to get used to new dentures?",
        answer: "Most patients adjust within 2 to 4 weeks as the oral muscles and tongue adapt to the new appliance.",
      },
      {
        question: "Should I wear my dentures while sleeping?",
        answer: "It is recommended to remove dentures at night to allow gum tissues to rest and to clean the appliance thoroughly in water.",
      },
      {
        question: "Can partial dentures be added to if I lose another tooth?",
        answer: "Many metal-framed or acrylic partial dentures can be modified to include additional teeth if needed.",
      },
    ],
    relatedServiceSlugs: [
      "crown-and-bridge",
      "dental-implants",
      "scaling-polishing",
      "consultation-counseling",
    ],
  },
  {
    id: "crown-and-bridge",
    slug: "crown-and-bridge",
    title: "Crown & Bridge",
    category: "Prosthodontics",
    tag: "Restorative Care",
    shortDescription:
      "Restoration and replacement of damaged or missing teeth using dental crowns and fixed bridges.",
    detailedDescription:
      "Dental crowns and fixed bridges are durable, permanent prosthetics designed to rebuild weakened teeth or span the gap created by missing teeth. Made from high-grade ceramics, zirconia, or porcelain-fused-to-metal, they blend seamlessly with your natural dentition in both strength and beauty.",
    heroImage: "/Crown & Bridge.png",
    galleryImages: ["/Crown & Bridge.png", "/image2.png", "/image4.png"],
    benefits: [
      {
        title: "Strengthens Weakened Teeth",
        description: "Encapsulates cracked or root-canal-treated teeth against bite forces.",
      },
      {
        title: "Seamless Lifelike Appearance",
        description: "High-translucency zirconia and ceramic mimic natural tooth enamel.",
      },
      {
        title: "Fixed & Non-Removable",
        description: "Securely cemented in place — no need to remove for cleaning.",
      },
      {
        title: "Prevents Bite Drift",
        description: "Bridges keep adjacent teeth from shifting into gaps, maintaining bite alignment.",
      },
    ],
    procedureSteps: [
      {
        stepNumber: "01",
        title: "Tooth Preparation",
        description: "Carefully shaping the tooth to create space for a snug, secure crown.",
      },
      {
        stepNumber: "02",
        title: "High-Precision Impression",
        description: "Capturing detailed records for custom crafting by our dental laboratory.",
      },
      {
        stepNumber: "03",
        title: "Temporary Crown Placement",
        description: "Protecting your prepared tooth while the final restoration is crafted.",
      },
      {
        stepNumber: "04",
        title: "Permanent Cementation",
        description: "Checking fit, margins, and contact before permanently bonding the crown.",
      },
    ],
    suitableFor: [
      "Teeth that have undergone root canal treatment.",
      "Heavily decayed teeth with insufficient structure for a standard filling.",
      "Patients missing one or two consecutive teeth who prefer a fixed bridge.",
      "Severely discolored, worn, or misshapen teeth.",
    ],
    faqs: [
      {
        question: "How long do dental crowns and bridges last?",
        answer: "With good oral hygiene and regular dental checkups, crowns and bridges typically last 10 to 15 years or longer.",
      },
      {
        question: "Will my new crown match the color of my other teeth?",
        answer: "Yes. We use precise shade guides to custom-match your crown to your surrounding natural teeth.",
      },
      {
        question: "How do I care for a fixed dental bridge?",
        answer: "Brush twice daily and use specialized floss threaders or interdental brushes to clean beneath the bridge pontic.",
      },
    ],
    relatedServiceSlugs: [
      "endodontic-treatment",
      "dental-implants",
      "removable-dentures",
      "consultation-counseling",
    ],
  },
  {
    id: "dental-implants",
    slug: "dental-implants",
    title: "Dental Implants",
    category: "Implantology & Surgery",
    tag: "Implantology",
    shortDescription:
      "Permanent tooth replacement using a dental implant placed into the jawbone with an artificial tooth.",
    detailedDescription:
      "Dental implants represent the gold standard in modern tooth replacement. A biocompatible titanium post is surgically placed into the jawbone, acting as a permanent artificial root. Over time, it integrates with the bone, providing a rock-solid foundation for a custom ceramic crown that looks, feels, and functions just like a natural tooth.",
    heroImage: "/Dental Implants.png",
    galleryImages: ["/Dental Implants.png", "/image1.png", "/image4.png"],
    benefits: [
      {
        title: "Preserves Jawbone Density",
        description: "Stimulates bone tissue, preventing the facial collapse and bone loss caused by missing teeth.",
      },
      {
        title: "Permanent & Stable",
        description: "Integrates directly with bone tissue for zero slipping, clicking, or movement.",
      },
      {
        title: "Protects Neighboring Teeth",
        description: "Unlike traditional bridges, neighboring healthy teeth do not need to be shaved down.",
      },
      {
        title: "Natural Chewing Power",
        description: "Restores 100% of natural bite force so you can enjoy all your favorite foods.",
      },
    ],
    procedureSteps: [
      {
        stepNumber: "01",
        title: "3D Digital Imaging & Planning",
        description: "CBCT scanning to evaluate bone depth, density, and optimal implant position.",
      },
      {
        stepNumber: "02",
        title: "Precision Implant Placement",
        description: "Minor surgical procedure placing the titanium fixture into the jaw under local anesthesia.",
      },
      {
        stepNumber: "03",
        title: "Osseointegration Period",
        description: "A healing period of a few months where the implant naturally fuses with your bone.",
      },
      {
        stepNumber: "04",
        title: "Abutment & Custom Crown",
        description: "Securing the custom-crafted porcelain or zirconia crown for a flawless smile.",
      },
    ],
    suitableFor: [
      "Adults missing one, several, or all teeth.",
      "Patients with adequate jawbone density or those eligible for bone grafting.",
      "Denture wearers seeking a permanent, non-removable solution.",
      "Individuals in good overall systemic health.",
    ],
    faqs: [
      {
        question: "Is dental implant surgery painful?",
        answer: "The procedure is performed under effective local anesthesia, so you will feel no pain during surgery. Post-operative discomfort is generally mild and manageable with standard pain relievers.",
      },
      {
        question: "How long does the entire implant process take?",
        answer: "The total timeline typically ranges from 3 to 6 months to allow for solid osseointegration before placing the final crown.",
      },
      {
        question: "Can smokers get dental implants?",
        answer: "Smoking can slow bone healing and increase implant failure risks; however, many smokers are still candidates following medical evaluation and cessation guidance.",
      },
    ],
    relatedServiceSlugs: [
      "crown-and-bridge",
      "tooth-extraction",
      "oral-maxillofacial-surgery",
      "removable-dentures",
    ],
  },
  {
    id: "fixed-braces",
    slug: "fixed-braces",
    title: "Fixed Braces",
    category: "Orthodontics",
    tag: "Orthodontics",
    shortDescription:
      "Orthodontic treatment using fixed braces to straighten teeth and correct bite problems.",
    detailedDescription:
      "Fixed braces are the most dependable, time-tested solution for correcting complex tooth misalignments, crowded teeth, spacing issues, and bite irregularities (such as overbites and crossbites). Led by our orthodontics specialists, treatment applies gentle, controlled continuous pressure to guide teeth into ideal harmony.",
    heroImage: "/Fixed Braces.png",
    galleryImages: ["/Fixed Braces.png", "/image2.png", "/image3.png"],
    benefits: [
      {
        title: "Handles Complex Misalignments",
        description: "Capable of resolving severe crowding, rotations, and skeletal bite discrepancies.",
      },
      {
        title: "Precise 3D Tooth Control",
        description: "Allows the orthodontist exact control over individual root and crown positions.",
      },
      {
        title: "Improved Chewing & Speech",
        description: "Corrects abnormal bite forces, reducing TMJ strain and enamel wear.",
      },
      {
        title: "Long-Term Oral Health",
        description: "Straight teeth are significantly easier to clean, preventing plaque and decay.",
      },
    ],
    procedureSteps: [
      {
        stepNumber: "01",
        title: "Orthodontic Records",
        description: "Digital panoramic X-rays, facial photos, and digital study models to map tooth movements.",
      },
      {
        stepNumber: "02",
        title: "Bracket Bonding",
        description: "Carefully attaching precision brackets to tooth surfaces with specialized adhesive.",
      },
      {
        stepNumber: "03",
        title: "Periodic Adjustments",
        description: "Routine visits every 4 to 6 weeks to replace archwires and progress tooth alignment.",
      },
      {
        stepNumber: "04",
        title: "Debonding & Retainers",
        description: "Removing brackets, polishing enamel, and fitting custom retainers to maintain results.",
      },
    ],
    suitableFor: [
      "Teens and adults with crowded, overlapping, or rotated teeth.",
      "Patients with gaps or spacing between teeth.",
      "Individuals with overbites, underbites, crossbites, or open bites.",
      "Patients seeking maximum predictability for complex orthodontic corrections.",
    ],
    faqs: [
      {
        question: "How long will I need to wear fixed braces?",
        answer: "Average treatment duration ranges from 12 to 24 months, depending on the severity of the misalignment and individual biological response.",
      },
      {
        question: "Do braces hurt when they are placed or adjusted?",
        answer: "Placing braces is painless. You may feel mild soreness for 2 to 3 days after adjustments, which quickly resolves with soft foods and mild pain relief.",
      },
      {
        question: "Will I need to wear a retainer after braces are removed?",
        answer: "Yes, retainers are essential to keep your teeth in their new positions while surrounding bone stabilizes.",
      },
    ],
    relatedServiceSlugs: [
      "clear-braces",
      "scaling-polishing",
      "consultation-counseling",
      "child-dentistry",
    ],
  },
  {
    id: "clear-braces",
    slug: "clear-braces",
    title: "Clear Braces",
    category: "Orthodontics",
    tag: "Discreet Aligners",
    shortDescription:
      "Less noticeable orthodontic appliances designed to straighten teeth while maintaining a discreet appearance.",
    detailedDescription:
      "Clear braces and aesthetic tooth aligners provide an understated, elegant way to straighten your teeth without the conspicuous look of metal brackets. Utilizing tooth-colored ceramic brackets or transparent custom-molded aligners, this treatment blends naturally with your teeth while delivering exceptional orthodontic results.",
    heroImage: "/Clear Braces.png",
    galleryImages: ["/Clear Braces.png", "/image1.png", "/image4.png"],
    benefits: [
      {
        title: "Discreet Aesthetic Appeal",
        description: "Translucent materials blend with natural tooth enamel for subtle treatment.",
      },
      {
        title: "Stain-Resistant Technology",
        description: "Modern ceramic materials resist discoloration throughout your treatment.",
      },
      {
        title: "High Clinical Precision",
        description: "Offers the same powerful alignment mechanics as traditional fixed appliances.",
      },
      {
        title: "Confidence in Social Settings",
        description: "Straighten your teeth comfortably at work, university, or social gatherings.",
      },
    ],
    procedureSteps: [
      {
        stepNumber: "01",
        title: "Aesthetic Smile Assessment",
        description: "Digital imaging and bite analysis to determine your suitability for clear systems.",
      },
      {
        stepNumber: "02",
        title: "Precise Bracket Bonding",
        description: "Affixing translucent ceramic brackets to the front surfaces of your teeth.",
      },
      {
        stepNumber: "03",
        title: "Tooth-Colored Archwires",
        description: "Using aesthetic coated wires to gently advance tooth movement inconspicuously.",
      },
      {
        stepNumber: "04",
        title: "Retention Phase",
        description: "Providing clear aesthetic retainers once teeth have reached their ideal alignment.",
      },
    ],
    suitableFor: [
      "Adults and working professionals seeking discreet orthodontic correction.",
      "Teens looking for a less visible alternative to traditional metal braces.",
      "Patients with mild to moderate tooth crowding or spacing issues.",
      "Individuals who prioritize appearance during treatment.",
    ],
    faqs: [
      {
        question: "Do clear ceramic braces stain easily?",
        answer: "The ceramic brackets themselves do not stain. The small elastic ties can pick up color from dark foods like curry or coffee, but these are refreshed at every routine visit.",
      },
      {
        question: "Are clear braces as effective as metal braces?",
        answer: "Yes, ceramic clear braces use the same biomechanical principles and achieve identical alignment results for most orthodontic cases.",
      },
      {
        question: "Are clear braces more fragile than metal ones?",
        answer: "Modern high-grade dental ceramics are extremely durable and engineered to withstand normal daily chewing forces.",
      },
    ],
    relatedServiceSlugs: [
      "fixed-braces",
      "scaling-polishing",
      "consultation-counseling",
      "crown-and-bridge",
    ],
  },
  {
    id: "minor-oral-surgery",
    slug: "minor-oral-surgery",
    title: "Minor Oral Surgery",
    category: "Oral Surgery",
    tag: "Oral Surgery",
    shortDescription:
      "Surgical dental procedures for conditions that require treatment beyond routine dental care.",
    detailedDescription:
      "Minor oral surgery encompasses a range of specialized in-clinic surgical interventions, including surgical extractions of impacted wisdom teeth, frenectomies, apicoectomies, and soft tissue biopsies. Performed with local anesthesia and microsurgical precision, these procedures resolve acute problems while minimizing tissue trauma and healing time.",
    heroImage: "/Minor Oral Surgery.png",
    galleryImages: ["/Minor Oral Surgery.png", "/image2.png", "/image3.png"],
    benefits: [
      {
        title: "In-Clinic Surgical Precision",
        description: "Specialized procedures performed safely in a comfortable clinic setting.",
      },
      {
        title: "Resolves Impacted Teeth",
        description: "Safely removes problematic wisdom teeth before they damage adjacent roots.",
      },
      {
        title: "Minimal Discomfort",
        description: "Modern local anesthesia and gentle tissue handling ensure rapid recovery.",
      },
      {
        title: "Expert Surgical Oversight",
        description: "Performed by experienced dental and maxillofacial surgical practitioners.",
      },
    ],
    procedureSteps: [
      {
        stepNumber: "01",
        title: "3D Anatomical Evaluation",
        description: "Mapping nerve canals and bone architecture with digital radiographs.",
      },
      {
        stepNumber: "02",
        title: "Profound Local Anesthesia",
        description: "Ensuring complete numbness of the surgical area for total comfort.",
      },
      {
        stepNumber: "03",
        title: "Microsurgical Intervention",
        description: "Precise execution of the surgical procedure with minimal tissue disruption.",
      },
      {
        stepNumber: "04",
        title: "Fine Suturing & Recovery Protocol",
        description: "Placing resorbable sutures and providing sterile recovery packs and instructions.",
      },
    ],
    suitableFor: [
      "Patients with impacted, painful, or partially erupted wisdom teeth.",
      "Persistent root-tip infections following root canal therapy (apicoectomy).",
      "Patients requiring soft tissue or frenum correction (frenectomy).",
      "Pre-prosthetic bone contouring or cyst enucleation.",
    ],
    faqs: [
      {
        question: "How long is recovery after a minor surgical extraction?",
        answer: "Most patients return to normal light activities within 1 to 2 days, with complete soft tissue healing over 7 to 10 days.",
      },
      {
        question: "Do surgical sutures need to be removed?",
        answer: "We often use dissolvable sutures that disappear naturally within 1 to 2 weeks. If non-resorbable sutures are used, they are painlessly removed in a brief follow-up.",
      },
      {
        question: "What should I do if I experience swelling?",
        answer: "Applying an ice pack externally for 15-minute intervals during the first 24 hours helps minimize swelling.",
      },
    ],
    relatedServiceSlugs: [
      "oral-maxillofacial-surgery",
      "tooth-extraction",
      "dental-implants",
      "orofacial-pain-disorders",
    ],
  },
  {
    id: "oral-maxillofacial-surgery",
    slug: "oral-maxillofacial-surgery",
    title: "Oral & Maxillofacial Surgery",
    category: "Maxillofacial Care",
    tag: "Maxillofacial Care",
    shortDescription:
      "Specialized surgical treatment involving the mouth, jaws, face, and related structures.",
    detailedDescription:
      "Oral & Maxillofacial Surgery is a comprehensive surgical specialty bridging medicine and dentistry. At Bhaddar Dental, our board-qualified OMFS surgeons diagnose and manage complex pathologies of the hard and soft tissues of the facial region, including jaw trauma, corrective jaw surgery, cyst and tumor resections, and complex reconstructive procedures.",
    heroImage: "/Oral & Maxillofacial Surgery.png",
    galleryImages: ["/sterilization-unit.jpg", "/Oral & Maxillofacial Surgery.png", "/image1.png"],
    benefits: [
      {
        title: "Hospital-Grade Surgical Standards",
        description: "Advanced surgical capabilities adhering to strict international clinical protocols.",
      },
      {
        title: "Comprehensive Facial & Jaw Solutions",
        description: "Expertise in complex skeletal, dental, and facial soft-tissue conditions.",
      },
      {
        title: "Multi-Disciplinary Expertise",
        description: "Led by highly qualified OMFS surgeons with extensive specialized training.",
      },
      {
        title: "Reconstructive Excellence",
        description: "Restores both anatomical function and facial aesthetic balance.",
      },
    ],
    procedureSteps: [
      {
        stepNumber: "01",
        title: "Comprehensive Clinical Assessment",
        description: "Detailed extraoral and intraoral examination with advanced 3D imaging.",
      },
      {
        stepNumber: "02",
        title: "Virtual Surgical Planning",
        description: "Precise computer-guided mapping of skeletal and tissue structures.",
      },
      {
        stepNumber: "03",
        title: "Advanced Surgical Execution",
        description: "Performed under sterile surgical conditions with specialized instrumentation.",
      },
      {
        stepNumber: "04",
        title: "Monitored Post-Surgical Healing",
        description: "Dedicated follow-up appointments and comprehensive rehabilitation support.",
      },
    ],
    suitableFor: [
      "Patients with severe jaw misalignment requiring orthognathic correction.",
      "Facial trauma, jaw fractures, and alveolar injuries.",
      "Pathological lesions, cysts, or tumors of the maxilla or mandible.",
      "Complex bone grafting and zygomatic implant placement.",
    ],
    faqs: [
      {
        question: "What qualifications do your oral & maxillofacial surgeons have?",
        answer: "Our surgeons hold advanced post-graduate surgical qualifications including MDS and FCPS in Oral & Maxillofacial Surgery with extensive hospital training.",
      },
      {
        question: "Is hospital admission required for OMFS procedures?",
        answer: "Many procedures are performed on an outpatient basis in our advanced clinic suites, while complex cases can be scheduled under general anesthesia.",
      },
      {
        question: "How do I prepare for a major maxillofacial consultation?",
        answer: "Bring any past facial X-rays, CT scans, and a complete summary of your medical history and current medications.",
      },
    ],
    relatedServiceSlugs: [
      "minor-oral-surgery",
      "dental-implants",
      "treatment-under-general-anesthesia",
      "orofacial-pain-disorders",
    ],
  },
  {
    id: "orofacial-pain-disorders",
    slug: "orofacial-pain-disorders",
    title: "Oro-facial Pain Disorders",
    category: "Pain Management",
    tag: "Pain Management",
    shortDescription:
      "Diagnosis and management of pain affecting the mouth, jaw, face, and surrounding areas.",
    detailedDescription:
      "Oro-facial pain encompasses chronic and acute conditions affecting the temporomandibular joint (TMJ), masticatory muscles, trigeminal nerves, and surrounding cranial structures. Our targeted clinical evaluation distinguishes between dental and non-dental sources of pain, formulating targeted relief strategies including occlusal splints, pharmacotherapy, and muscle therapy.",
    heroImage: "/Oro-facial Pain Disorders.png",
    galleryImages: ["/Oro-facial Pain Disorders.png", "/image2.png", "/image3.png"],
    benefits: [
      {
        title: "Accurate Diagnostic Clarity",
        description: "Identifies whether pain originates from teeth, TMJ joints, muscles, or nerves.",
      },
      {
        title: "Non-Invasive Relief Strategies",
        description: "Focuses on conservative therapies such as custom nightguards and physical therapy.",
      },
      {
        title: "Alleviates Jaw Clicking & Locking",
        description: "Normalizes jaw joint motion and reduces painful friction.",
      },
      {
        title: "Reduces Chronic Headaches",
        description: "Addresses nocturnal teeth grinding (bruxism) and tension headaches.",
      },
    ],
    procedureSteps: [
      {
        stepNumber: "01",
        title: "Comprehensive Pain History",
        description: "Mapping pain frequency, triggers, duration, and past treatment responses.",
      },
      {
        stepNumber: "02",
        title: "TMJ & Muscle Palpation",
        description: "Testing joint range of motion, muscle tenderness, and clicking sounds.",
      },
      {
        stepNumber: "03",
        title: "Occlusal & Radiographic Analysis",
        description: "Examining bite contacts and condylar positioning on imaging.",
      },
      {
        stepNumber: "04",
        title: "Personalized Relief Protocol",
        description: "Implementing customized night guards, behavioral therapy, or medication.",
      },
    ],
    suitableFor: [
      "Patients with persistent jaw pain, clicking, popping, or jaw locking.",
      "Individuals suffering from morning headaches or facial tightness.",
      "Severe night-time teeth grinding or clenching (bruxism).",
      "Unexplained chronic burning sensations or shooting facial discomfort.",
    ],
    faqs: [
      {
        question: "Can teeth grinding cause ear pain and headaches?",
        answer: "Yes. The TMJ joint is located directly in front of the ear canal; intense muscle strain from clenching frequently radiates to the ears, temples, and neck.",
      },
      {
        question: "How does a custom nightguard help TMJ pain?",
        answer: "A precision-fitted splint decompresses the jaw joints, protects tooth enamel from wear, and helps hyperactive chewing muscles relax during sleep.",
      },
      {
        question: "Is surgery always needed for TMJ disorders?",
        answer: "No. Over 90% of TMJ and orofacial pain cases are successfully managed with conservative, non-surgical approaches.",
      },
    ],
    relatedServiceSlugs: [
      "oral-maxillofacial-surgery",
      "consultation-counseling",
      "fixed-braces",
      "crown-and-bridge",
    ],
  },
  {
    id: "child-dentistry",
    slug: "child-dentistry",
    title: "Child Dentistry",
    category: "Pediatric Care",
    tag: "Pediatric Dentistry",
    shortDescription:
      "Specialized dental care focused on the oral health, development, and treatment needs of children.",
    detailedDescription:
      "Pediatric dentistry at Bhaddar Dental is designed to make dental visits engaging, positive, and fear-free for young patients. From early baby tooth care and cavity prevention to fluoride treatments, sealants, and habit counseling, we help children build healthy smiles and a lifelong confidence in visiting the dentist.",
    heroImage: "/Child Dentistry.png",
    galleryImages: ["/Child Dentistry.png", "/image4.png", "/image1.png"],
    benefits: [
      {
        title: "Child-Friendly Environment",
        description: "Warm, gentle care approach that prevents dental anxiety from a young age.",
      },
      {
        title: "Early Preventive Protection",
        description: "Dental pit & fissure sealants and fluoride varnish to ward off early cavities.",
      },
      {
        title: "Growth & Eruption Monitoring",
        description: "Tracking jaw growth and early alignment of developing permanent teeth.",
      },
      {
        title: "Parental Guidance & Habits",
        description: "Helpful coaching on brushing techniques, diet, and pacifier/thumb-sucking habits.",
      },
    ],
    procedureSteps: [
      {
        stepNumber: "01",
        title: "Fun & Gentle Introduction",
        description: "Introducing your child to the dental chair and instruments in a playful, friendly way.",
      },
      {
        stepNumber: "02",
        title: "Gentle Oral Examination",
        description: "Inspecting developing teeth, gum health, and checking for early decay signs.",
      },
      {
        stepNumber: "03",
        title: "Preventive Treatment",
        description: "Polishing teeth and applying protective fluoride or sealants where needed.",
      },
      {
        stepNumber: "04",
        title: "Positive Reinforcement & Rewards",
        description: "Praising your child's cooperation and reviewing positive brushing habits with parents.",
      },
    ],
    suitableFor: [
      "Toddlers having their first dental visit (recommended by age 1 or first tooth).",
      "School-aged children requiring cavity checks, fillings, or dental sealants.",
      "Children with early tooth decay or baby tooth trauma.",
      "Kids needing habit guidance (thumb-sucking, bottle decay prevention).",
    ],
    faqs: [
      {
        question: "When should my child have their first dental visit?",
        answer: "Pediatric guidelines recommend a first dental visit when the first baby tooth appears or by the child's first birthday.",
      },
      {
        question: "Why do baby teeth matter if they will fall out anyway?",
        answer: "Baby teeth are vital for proper chewing, clear speech development, and holding space for permanent teeth to emerge correctly.",
      },
      {
        question: "What are dental sealants?",
        answer: "Sealants are thin, protective coatings painted onto the chewing grooves of back molars to prevent food and bacteria from causing cavities.",
      },
    ],
    relatedServiceSlugs: [
      "consultation-counseling",
      "scaling-polishing",
      "fixed-braces",
      "treatment-under-general-anesthesia",
    ],
  },
  {
    id: "treatment-under-general-anesthesia",
    slug: "treatment-under-general-anesthesia",
    title: "Treatment Under General Anesthesia",
    category: "Specialized Care",
    tag: "Sedation & Care",
    shortDescription:
      "Dental treatment performed under general anesthesia for patients who require controlled, comprehensive care.",
    detailedDescription:
      "For patients with extreme dental phobias, special healthcare needs, young children requiring extensive full-mouth rehabilitation, or complex multi-stage surgical procedures, dental care under General Anesthesia (GA) ensures complete unconsciousness and comfort throughout the entire treatment, overseen by certified medical anesthesiologists.",
    heroImage: "/Treatment Under General Anesthesia.png",
    galleryImages: ["/Treatment Under General Anesthesia.png", "/sterilization-unit.jpg", "/image2.png"],
    benefits: [
      {
        title: "100% Painless & Unconscious",
        description: "Patients sleep comfortably throughout the entire procedure with zero memory of pain.",
      },
      {
        title: "Full-Mouth Care in One Visit",
        description: "Multiple complex treatments, fillings, or extractions completed in a single session.",
      },
      {
        title: "Special Needs & Phobia Support",
        description: "Compassionate, stress-free pathway for patients unable to tolerate standard chairside care.",
      },
      {
        title: "Board-Certified Anesthesiology",
        description: "Continuous vital sign monitoring by qualified medical anesthesia specialists.",
      },
    ],
    procedureSteps: [
      {
        stepNumber: "01",
        title: "Pre-Anesthesia Medical Clearance",
        description: "Comprehensive health check, blood work, and anesthesia safety evaluation.",
      },
      {
        stepNumber: "02",
        title: "Controlled Anesthesia Induction",
        description: "Administering safe general anesthesia in a fully equipped clinical surgical suite.",
      },
      {
        stepNumber: "03",
        title: "Comprehensive Dental Treatment",
        description: "Dental surgeons complete all required restorative and surgical procedures efficiently.",
      },
      {
        stepNumber: "04",
        title: "Post-Anesthesia Recovery",
        description: "Monitored recovery in a calm post-operative room before discharge home.",
      },
    ],
    suitableFor: [
      "Young children with extensive multiple-quadrant tooth decay.",
      "Individuals with severe dental anxiety or severe gag reflex.",
      "Patients with intellectual, physical, or medical developmental challenges.",
      "Patients undergoing extensive maxillofacial surgical reconstructions.",
    ],
    faqs: [
      {
        question: "Is general anesthesia safe for dental procedures?",
        answer: "Yes, when performed in a properly equipped clinical setting by certified anesthesiologists following strict fasting and medical clearance protocols.",
      },
      {
        question: "How should I prepare for dental surgery under GA?",
        answer: "Patients must strictly adhere to pre-operative fasting rules (no food or drinks for 6 to 8 hours prior) and arrange an adult companion to escort them home.",
      },
      {
        question: "How long does recovery take after waking up?",
        answer: "Most patients are alert within 1 to 2 hours in our recovery suite and can rest at home for the remainder of the day.",
      },
    ],
    relatedServiceSlugs: [
      "oral-maxillofacial-surgery",
      "child-dentistry",
      "minor-oral-surgery",
      "dental-implants",
    ],
  },
  {
    id: "advanced-sterilization",
    slug: "advanced-sterilization",
    title: "Advanced Sterilization Unit",
    category: "Safety & Infection Control",
    tag: "Patient Safety",
    shortDescription:
      "Advanced instrument sterilization procedures to help protect patients against the spread of infections such as Hepatitis C and HIV.",
    detailedDescription:
      "Patient safety is our uncompromised clinical priority. Bhaddar Dental houses a multi-stage Advanced Sterilization Unit featuring hospital-grade Class-B autoclaves, ultrasonic cleaning baths, biological spore test monitoring, and individual sterile vacuum packaging for every single instrument before patient contact.",
    heroImage: "/sterilization-unit.jpg",
    galleryImages: ["/sterilization-unit.jpg", "/image3.png", "/image1.png"],
    benefits: [
      {
        title: "Zero Cross-Contamination",
        description: "Stringent multi-tier disinfection protocols eliminating viral, bacterial, and fungal pathogens.",
      },
      {
        title: "Class-B Autoclave Technology",
        description: "High-pressure fractionated vacuum sterilization penetrating every hollow instrument channel.",
      },
      {
        title: "Single-Patient Pouch Sealing",
        description: "Instruments are hermetically sealed in sterile pouches and only opened chairside in front of you.",
      },
      {
        title: "Biological Spore Testing",
        description: "Routine third-party biological validation ensuring 100% autoclave sterilization efficiency.",
      },
    ],
    procedureSteps: [
      {
        stepNumber: "01",
        title: "Enzymatic Pre-Soak & Ultrasonic Wash",
        description: "Removing microscopic bio-burden in high-frequency ultrasonic chemical baths.",
      },
      {
        stepNumber: "02",
        title: "Rinsing & Microscopic Inspection",
        description: "Visual inspection and thermal drying to ensure pristine instrument integrity.",
      },
      {
        stepNumber: "03",
        title: "Medical Pouch Packaging",
        description: "Sealing instruments into specialized pouches with color-changing chemical indicators.",
      },
      {
        stepNumber: "04",
        title: "Class-B Autoclave Cycle",
        description: "Saturated steam sterilization under controlled temperature and pressure parameters.",
      },
    ],
    suitableFor: [
      "All dental patients seeking absolute peace of mind regarding clinical hygiene.",
      "Immunocompromised patients requiring strict infection-free environments.",
      "Families seeking trusted international healthcare safety standards in dentistry.",
    ],
    faqs: [
      {
        question: "How do you ensure protection against Hepatitis B, C, and HIV?",
        answer: "All instruments undergo medical Class-B vacuum sterilization which completely destroys all viruses, spores, and bacteria under high temperature and steam pressure.",
      },
      {
        question: "Are disposable single-use items used?",
        answer: "Yes, items like suction tips, needles, gloves, patient bibs, and syringe tips are strictly single-use and disposed of immediately.",
      },
      {
        question: "Can patients observe instrument packaging?",
        answer: "Absolutely. We encourage transparency — our sterile instrument pouches are unsealed right in front of you at the start of your appointment.",
      },
    ],
    relatedServiceSlugs: [
      "female-patient-treatment",
      "consultation-counseling",
      "minor-oral-surgery",
      "oral-maxillofacial-surgery",
    ],
  },
  {
    id: "female-patient-treatment",
    slug: "female-patient-treatment",
    title: "Separate Treatment Area for Female Patients",
    category: "Comfort & Privacy",
    tag: "Female Privacy",
    shortDescription:
      "Dedicated treatment arrangements with qualified female doctors for veiled female patients.",
    detailedDescription:
      "Recognizing the cultural and personal privacy needs of our community, Bhaddar Dental offers dedicated private treatment suites staffed entirely by qualified female dental surgeons and female assistants. This provides a completely private, respectful, and comfortable environment for veiled female patients and families.",
    heroImage: "/female-treatment.jpg",
    galleryImages: ["/female-treatment.jpg", "/image2.png", "/image4.png"],
    benefits: [
      {
        title: "Qualified Female Doctors",
        description: "Consultation and treatment provided by experienced female dental surgeons.",
      },
      {
        title: "Dedicated Private Suites",
        description: "Fully partitioned private clinical treatment rooms ensuring total confidentiality.",
      },
      {
        title: "Veiled Patient Comfort",
        description: "Safe, respectful environment designed for veiled patients to receive care with total ease.",
      },
      {
        title: "Female Support Staff",
        description: "Attentive female clinical assistants assisting throughout all procedure stages.",
      },
    ],
    procedureSteps: [
      {
        stepNumber: "01",
        title: "Private Reception & Greeting",
        description: "Welcomed into a dedicated, private clinical setting with your female dental care team.",
      },
      {
        stepNumber: "02",
        title: "Confidential Discussion",
        description: "Discussing your dental goals and treatment preferences in a fully partitioned room.",
      },
      {
        stepNumber: "03",
        title: "Gentle Female-Led Treatment",
        description: "Care administered with compassion, gentle technique, and respectful bedside manner.",
      },
      {
        stepNumber: "04",
        title: "Private Recovery & Guidance",
        description: "Reviewing aftercare instructions and next steps in complete comfort and privacy.",
      },
    ],
    suitableFor: [
      "Veiled female patients seeking 100% privacy during oral examinations and treatments.",
      "Women who prefer treatment exclusively with qualified female dental surgeons.",
      "Mothers and young daughters seeking a calm, respectful dental environment.",
    ],
    faqs: [
      {
        question: "Can I specifically request a female doctor for all my appointments?",
        answer: "Yes. When booking your consultation, simply request a female doctor and your entire treatment plan will be scheduled with our female clinical team.",
      },
      {
        question: "Are all types of dental treatments available in the female area?",
        answer: "Yes, from routine scaling, fillings, and root canals to braces and cosmetic restorations, full dental services are provided in the private female suite.",
      },
      {
        question: "Can a family member accompany me into the treatment room?",
        answer: "Yes, family members are welcome to accompany you inside the private treatment suite during consultation and treatment.",
      },
    ],
    relatedServiceSlugs: [
      "advanced-sterilization",
      "consultation-counseling",
      "scaling-polishing",
      "child-dentistry",
    ],
  },
];

export const getServiceBySlug = (slug: string): ServiceItem | undefined => {
  return servicesData.find((s) => s.slug === slug || s.id === slug);
};
