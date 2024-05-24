// import { elementInfos } from "./element";
const elementInfos = [
  {
    name: "Hydrogen (H):",
    info: "Hydrogen is the simplest and most abundant element in the universe, constituting approximately 75% of its elemental mass. It's found in stars, gas giants like Jupiter, and in molecular form on Earth, primarily in water (H2O) and hydrocarbons. Hydrogen plays a vital role in various industrial processes, including petroleum refining, ammonia production for fertilizers, and as a fuel source in hydrogen fuel cells for clean energy applications. Its potential as a sustainable energy carrier has garnered significant interest, with ongoing research into hydrogen-based technologies for transportation, energy storage, and electricity generation.",
  },
  {
    name: "Helium (He):",
    info: "Helium is a noble gas and the second lightest element, accounting for about 24% of the universe's elemental mass. It's primarily obtained from natural gas deposits, with major reserves located in the United States, Russia, and Algeria. Helium's unique properties, such as its low boiling point and non-reactivity, make it indispensable in various applications. It's used extensively in cryogenics to cool superconducting magnets in MRI machines, particle accelerators, and in space exploration. Helium is also employed as a lifting gas in balloons, airships, and in high-pressure gas mixtures for deep-sea diving.",
  },
  {
    name: "Lithium (Li):",
    info: "Lithium is a lightweight alkali metal with the atomic number 3. It's found in trace amounts in nearly all igneous rocks and in the Earth's crust. Major sources of lithium include lithium-containing minerals like spodumene and lithium-rich brines found in countries such as Chile, Argentina, and Australia. Lithium's exceptional electrochemical properties, including its high electrochemical potential and low atomic weight, make it a crucial component in rechargeable lithium-ion batteries. These batteries power a wide range of devices, from smartphones and laptops to electric vehicles, making lithium a key player in the transition to clean energy and portable electronics.",
  },
  {
    name: "Beryllium (Be):",
    info: "Beryllium is a rare, lightweight alkaline earth metal with unique physical properties, including high strength-to-weight ratio, thermal conductivity, and transparency to X-rays. It's primarily obtained from beryl and bertrandite ores, with major producers including the United States, China, and Kazakhstan. Beryllium's remarkable properties make it invaluable in various high-technology applications, particularly in aerospace and defense industries. It's used in lightweight structural components for aircraft, spacecraft, and missiles, as well as in X-ray equipment for medical imaging and nuclear reactors. Despite its utility, beryllium presents health risks due to its toxicity, requiring careful handling and safety precautions in its production and use.",
  },
  {
    name: "Boron (B):",
    info: "Boron is a metalloid element with diverse applications in industries ranging from agriculture to electronics. It's primarily obtained from borate minerals like borax and kernite, concentrated in arid regions such as California's Death Valley and the Andean deserts. Boron's versatility stems from its unique properties, including high melting point, hardness, and chemical stability. It's used in fiberglass for insulation, ceramics for abrasion resistance, and in semiconductor production as a dopant. Boron compounds play vital roles in agriculture as borate fertilizers, enhancing plant growth and yield. Additionally, boron-based compounds find application in pharmaceuticals, flame retardants, and as neutron absorbers in nuclear reactors.",
  },
  {
    name: "Carbon (C):",
    info: "Carbon is the fundamental building block of life and the fourth most abundant element in the universe by mass. It exists in various forms, including graphite, diamond, and amorphous carbon, and is found in all known life forms. Carbon's exceptional versatility arises from its ability to form stable covalent bonds with other carbon atoms, giving rise to the vast complexity of organic compounds. It's obtained from fossil fuels like coal, oil, and natural gas, as well as from biomass and atmospheric carbon dioxide. Carbon's significance spans numerous industries, from steelmaking and fuel production to pharmaceuticals and electronics. It's a key component in organic chemistry, providing the foundation for life-sustaining molecules like proteins, carbohydrates, and nucleic acids.",
  },
  {
    name: "Nitrogen (N):",
    info: "Nitrogen is a diatomic, colorless gas that constitutes approximately 78% of the Earth's atmosphere. It's found in various forms, including molecular nitrogen (N2), ammonia (NH3), and nitrate salts (NO3−), with major reservoirs in the atmosphere, soil, and oceans. Nitrogen's importance in agriculture and ecology cannot be overstated, as it's an essential nutrient for plant growth and soil fertility. It's obtained through fractional distillation of liquid air or by microbial nitrogen fixation in the soil. Nitrogen is used in the production of ammonia for fertilizers, explosives, and industrial chemicals. It's also employed in food packaging and preservation to extend shelf life and prevent spoilage.",
  },
  {
    name: "Oxygen (O):",
    info: "Oxygen is a highly reactive, colorless gas essential for life as we know it. It's the third most abundant element in the universe and is primarily found in the Earth's atmosphere as molecular oxygen (O2) and in various oxides, silicates, and carbonates. Oxygen is obtained through fractional distillation of liquid air or by electrolysis of water. Its significance in respiration, combustion, and oxidation-reduction reactions is unparalleled. Oxygen's diverse applications include steelmaking, water treatment, medical therapy, and aerospace technology. Ozone (O3), a triatomic allotrope of oxygen, plays a crucial role in the stratosphere by absorbing harmful ultraviolet radiation, protecting life on Earth from its detrimental effects.",
  },
  {
    name: "Fluorine (F):",
    info: "Fluorine is the most electronegative and reactive element in the periodic table, typically found in the form of fluorite (calcium fluoride) and cryolite. It's obtained from fluorite ores through electrolysis or as a byproduct of phosphate rock processing. Fluorine's unique properties, including its strong oxidizing ability and chemical reactivity, find applications in diverse industries. It's used in water fluoridation to prevent dental decay, in refrigerants like hydrofluorocarbons (HFCs), and in the manufacture of Teflon (polytetrafluoroethylene) and other fluoropolymers. Fluorine compounds are also employed in pharmaceuticals, pesticides, and as catalysts in organic synthesis reactions.",
  },
  {
    name: "Neon (Ne):",
    info: "Neon is a noble gas known for its distinctive reddish-orange glow when electrically charged. It's obtained through fractional distillation of liquid air, with major applications in lighting and advertising. Neon-filled glass tubes are widely used in neon signs, advertising displays, and indicator lights due to their high visibility and long lifespan. Neon is also employed in high-voltage indicators, lightning arresters, and in vacuum tubes for electronics. Despite its limited reactivity, neon's aesthetic appeal and practical utility have cemented its place in the signage and lighting industries.",
  },
  {
    name: "Sodium (Na):",
    info: "Sodium is a highly reactive alkali metal commonly found in compounds such as sodium chloride (table salt), sodium carbonate (washing soda), and sodium hydroxide (lye). It's abundant in the Earth's crust and oceans, often extracted from salt deposits through solution mining or electrolysis. Sodium plays a crucial role in biological systems, regulating fluid balance and nerve function. Industrially, sodium compounds are used in a myriad of applications, including food preservation, water treatment, soap production, and as catalysts in organic synthesis reactions.",
  },
  {
    name: "Magnesium (Mg):",
    info: "Magnesium is an essential alkaline earth metal abundant in the Earth's crust, primarily found in minerals like magnesite and dolomite. It's obtained through mining and electrolysis. Magnesium is known for its lightweight, high strength-to-weight ratio, and excellent corrosion resistance. It's widely used in aerospace and automotive industries for structural components, as well as in electronics, healthcare products (such as antacids and laxatives), and as an alloying agent in aluminum to improve strength and machinability.",
  },
  {
    name: "Aluminum (Al):",
    info: "Aluminum is the most abundant metal in the Earth's crust, commonly found in minerals like bauxite and cryolite. It's extracted through the Bayer process and electrolytic refining. Aluminum is prized for its low density, corrosion resistance, and malleability, making it a versatile material for various applications. It's used in transportation (aircraft, automobiles, trains), packaging (cans, foil), construction (windows, doors), and electrical transmission lines. Additionally, aluminum alloys are employed in aerospace, marine, and structural engineering due to their high strength-to-weight ratio and durability.",
  },
  {
    name: "Silicon (Si):",
    info: "Silicon is a metalloid abundant in the Earth's crust, primarily found in minerals like quartz and sand. It's obtained through reduction of silica (SiO2) with carbon in an electric arc furnace. Silicon's semiconductor properties make it indispensable in electronics, serving as the backbone of integrated circuits, microchips, and solar cells. It's also used in glassmaking, ceramics, and as a component in silicone-based materials for adhesives, sealants, and lubricants. Silicon's importance in technology and industry underscores its critical role in advancing modern civilization.",
  },
  {
    name: "Phosphorus (P):",
    info: "Phosphorus is a non-metal essential for life, primarily found in phosphate rocks and minerals. It's obtained through mining and chemical processing. Phosphorus compounds are crucial for various biological functions, including DNA and RNA synthesis, energy metabolism, and bone formation. Industrially, phosphorus is used in fertilizers to enhance soil fertility and crop yield. It's also employed in detergents, food additives, flame retardants, and as a component in explosives and matches. Despite its vital role in sustaining life, phosphorus pollution from agricultural runoff poses environmental challenges, necessitating sustainable management practices.",
  },
  {
    name: "Sulfur (S):",
    info: "Sulfur is a non-metal abundant in the Earth's crust and oceans, typically found in minerals like gypsum, pyrite, and sulfur ores. It's obtained through mining and refining processes. Sulfur plays diverse roles in industry, agriculture, and biology. It's used in the production of sulfuric acid, a key industrial chemical essential for fertilizer production, metal processing, and chemical synthesis. Sulfur compounds are also employed in pharmaceuticals, rubber vulcanization, and as additives in gasoline and diesel fuels. Additionally, sulfur's antimicrobial properties find applications in food preservation and medical treatments.",
  },
  {
    name: "Chlorine (Cl):",
    info: "Chlorine is a highly reactive halogen gas abundant in nature, primarily found in the form of chloride salts like sodium chloride (table salt) and potassium chloride. It's obtained through electrolysis of sodium chloride solution (brine) or as a byproduct of chlor-alkali production. Chlorine's strong oxidizing properties make it indispensable in water treatment, disinfection, and sanitation. It's used in swimming pools, drinking water systems, and wastewater treatment plants to eliminate pathogens and harmful microorganisms. Chlorine compounds like PVC (polyvinyl chloride) are also widely employed in construction materials, plastics, and pharmaceuticals.",
  },
  {
    name: "Argon (Ar):",
    info: "Argon is an inert noble gas, constituting approximately 1% of the Earth's atmosphere. It's obtained through fractional distillation of liquid air. Argon's lack of reactivity makes it suitable for various applications requiring an inert atmosphere, such as welding, metal fabrication, and semiconductor manufacturing. It's used as a shielding gas in arc welding to prevent oxidation of the weld pool, as well as in the production of specialty glass and as a filler gas in incandescent and fluorescent light bulbs. Additionally, argon serves as a carrier gas in chromatography and as a propellant in aerosol sprays.",
  },
  {
    name: "Potassium (K):",
    info: "Potassium is an alkali metal abundant in the Earth's crust, typically found in minerals like sylvite and carnallite. It's obtained through mining and chemical extraction processes. Potassium plays essential roles in biological systems, regulating nerve function, muscle contraction, and fluid balance. In agriculture, potassium fertilizers are used to enhance soil fertility and crop yield. Potassium compounds are also employed in food processing (as a salt substitute), pharmaceuticals (potassium supplements), and industrial applications such as soap and glass production.",
  },
  {
    name: "Calcium (Ca):",
    info: "Calcium is an alkaline earth metal abundant in the Earth's crust, primarily found in limestone, gypsum, and fluorite. It's obtained through mining and chemical processing. Calcium is essential for various biological functions, including bone and teeth formation, nerve transmission, and muscle contraction. In industry, calcium compounds are used in construction materials (such as cement and plaster), water treatment (to remove impurities), and as dietary supplements to prevent osteoporosis. Additionally, calcium's role as a cofactor in enzymatic reactions and its ability to neutralize acidic soils highlight its significance in agriculture and environmental management.",
  },
  {
    name: "Scandium (Sc):",
    info: "Scandium is a rare earth metal found in various minerals, including thortveitite and euxenite. It's obtained as a byproduct of uranium and thorium extraction processes. Scandium's properties, such as its lightness and high melting point, make it valuable in aerospace and defense industries. It's used in lightweight, high-strength alloys for aircraft components, missile systems, and sports equipment. Scandium is also employed in solid oxide fuel cells, electronic ceramics, and as a catalyst in organic synthesis. Despite its scarcity, scandium's unique properties contribute to its increasing demand in advanced technology applications.",
  },
  {
    name: "Titanium (Ti):",
    info: "Titanium is a transition metal known for its exceptional strength-to-weight ratio, corrosion resistance, and biocompatibility. It's primarily found in minerals like ilmenite and rutile, with major producers including Australia, South Africa, and Canada. Titanium's versatility makes it indispensable in aerospace, medical, and automotive industries. It's used in aircraft components, prosthetic implants, and lightweight armor. Titanium alloys offer superior performance in harsh environments, such as marine and chemical processing applications. Additionally, titanium dioxide is employed as a pigment in paints, plastics, and sunscreen, highlighting its widespread use in various consumer products.",
  },
  {
    name: "Vanadium (V):",
    info: "Vanadium is a transition metal primarily obtained as a byproduct of mining for other metals like iron and uranium. It's found in minerals such as vanadinite and magnetite. Vanadium's unique properties, including its high melting point and corrosion resistance, make it valuable in steel production. It's used as an alloying element to improve steel's strength, toughness, and heat resistance, particularly in aerospace, automotive, and tooling applications. Vanadium compounds find applications in energy storage systems, such as rechargeable vanadium redox flow batteries, and as catalysts in chemical synthesis reactions.",
  },
  {
    name: "Chromium (Cr):",
    info: "Chromium is a transition metal commonly found in chromite ore deposits. It's obtained through mining and smelting processes. Chromium's corrosion resistance and lustrous finish make it valuable in various applications. It's used extensively in stainless steel production, providing durability and resistance to oxidation and staining. Chromium plating is employed to enhance the appearance and corrosion resistance of automotive parts, plumbing fixtures, and consumer goods. Additionally, chromium compounds find applications in pigments, tanning agents, and in the aerospace and electronics industries.",
  },
  {
    name: "Manganese (Mn):",
    info: "Manganese is a transition metal abundant in the Earth's crust, typically found in minerals like pyrolusite and rhodochrosite. It's obtained through mining and chemical processing. Manganese's diverse properties make it valuable in metallurgy, batteries, and chemical synthesis. It's used as an alloying element in steel production to improve strength, hardness, and resistance to abrasion and corrosion. Manganese dioxide is employed in alkaline batteries, water treatment, and as a pigment in ceramics and glass. Manganese compounds serve as catalysts in chemical reactions and as nutritional supplements in animal feed and fertilizers.",
  },
  {
    name: "Iron (Fe):",
    info: "Iron is the most abundant transition metal and fourth most abundant element in the Earth's crust. It's primarily found in minerals like hematite and magnetite, with major producers including Australia, Brazil, and China. Iron's importance in industry and infrastructure is unparalleled. It's used in steel production for construction, transportation, and machinery. Iron alloys, such as cast iron and stainless steel, offer versatility and durability in various applications. Additionally, iron compounds find applications in pharmaceuticals, pigments, and water treatment, highlighting its significance in modern society.",
  },
  {
    name: "Cobalt (Co):",
    info: "Cobalt is a transition metal typically found in association with nickel and copper ores. It's obtained through mining and refining processes. Cobalt's unique properties, including its high melting point and magnetic properties, make it valuable in numerous applications. It's used in high-performance alloys for aerospace, turbine engines, and medical implants. Cobalt compounds serve as catalysts in chemical reactions, as pigments in ceramics and glass, and as components in rechargeable batteries. Despite its essential role in technology, cobalt mining faces challenges related to environmental sustainability and ethical sourcing practices.",
  },
  {
    name: "Nickel (Ni):",
    info: "Nickel is a transition metal primarily found in nickel sulfide and laterite ores. It's obtained through mining and extraction processes. Nickel's versatility and corrosion resistance make it indispensable in various industries. It's used extensively in stainless steel production, offering durability and resistance to corrosion and high temperatures. Nickel alloys find applications in aerospace, marine, and chemical processing equipment. Additionally, nickel compounds are employed in batteries, catalysts, and as pigments in ceramics and plastics.",
  },
  {
    name: "Copper (Cu):",
    info: "Copper is a versatile transition metal known for its conductivity, malleability, and corrosion resistance. It's primarily found in sulfide and oxide ores, with major producers including Chile, Peru, and China. Copper's importance in electrical and thermal conductivity is unrivaled. It's used in electrical wiring, motors, transformers, and electronic devices. Copper alloys, such as brass and bronze, offer strength and antimicrobial properties in plumbing fixtures and architectural applications. Additionally, copper compounds find applications in agriculture, healthcare, and as catalysts in chemical synthesis reactions.",
  },
  {
    name: "Zinc (Zn):",
    info: "Zinc is a transition metal essential for life, primarily found in zinc sulfide ores like sphalerite. It's obtained through mining and extraction processes. Zinc's corrosion resistance and sacrificial protection make it valuable in various applications. It's used as a coating to prevent corrosion in steel (galvanization) and in alloys like brass and bronze. Zinc compounds find applications in batteries, rubber vulcanization, and as dietary supplements. Additionally, zinc oxide is employed in paints, cosmetics, and pharmaceuticals",
  },
  {
    name: "Gallium (Ga):",
    info: "Gallium is a post-transition metal with unique properties, including its low melting point and expansion upon solidification, making it suitable for specialized applications. It's primarily obtained as a byproduct of aluminum and zinc refining. Gallium's most notable use is in semiconductor technology, where it's used in high-speed integrated circuits and optoelectronic devices like LEDs and photovoltaic cells. It's also used in specialized alloys, such as gallium arsenide, and in medical applications as a radioactive tracer.",
  },
  {
    name: "Germanium (Ge):",
    info: "Germanium is a metalloid element primarily obtained as a byproduct of zinc ore processing. It's used as a semiconductor in electronics, particularly in infrared optical devices, solar cells, and transistors. Germanium's properties make it valuable in fiber optic systems for telecommunications and in infrared spectroscopy. Additionally, germanium dioxide is employed in the production of optical fibers, as a catalyst in polymerization reactions, and in phosphors for fluorescent lamps.",
  },
  {
    name: "Arsenic (As):",
    info: "Arsenic is a metalloid element found in various minerals and ores, with major sources including arsenopyrite and realgar. It's obtained through mining and smelting processes. Arsenic and its compounds have a long history of use in pesticides, wood preservatives, and medicines, albeit with significant toxicity concerns. Arsenic trioxide is used in the production of semiconductors, optical glass, and as a pigment in ceramics. However, due to its toxicity, arsenic has strict regulations governing its use and disposal to mitigate environmental and health risks.",
  },
  {
    name: "Selenium (Se):",
    info: "Selenium is a non-metal often found in sulfide ores like pyrite and selenide minerals. It's obtained as a byproduct of copper refining and from selenium-rich coal deposits. Selenium's semiconductor properties make it valuable in electronics, particularly in photovoltaic cells, rectifiers, and photocells. It's also used in glassmaking to decolorize glass and in pigments for ceramics and plastics. Additionally, selenium is an essential micronutrient in human and animal diets, playing a vital role in antioxidant enzymes and thyroid hormone metabolism.",
  },
  {
    name: "Bromine (Br):",
    info: "Bromine is a halogen element typically found in brine deposits and seawater. It's obtained through evaporation and extraction processes. Bromine's unique properties, including its volatility and reactivity, make it valuable in various applications. It's used as a flame retardant in textiles, plastics, and electronics. Bromine compounds are employed in pharmaceuticals, pesticides, and in the production of dyes, solvents, and photographic chemicals. Additionally, bromine-based compounds find applications in water treatment and as intermediates in organic synthesis reactions.",
  },
  {
    name: "Krypton (Kr):",
    info: "Krypton is a noble gas obtained through fractional distillation of liquid air. It's a minor component of the Earth's atmosphere, typically present in trace amounts. Krypton's lack of reactivity limits its applications, but it's used in specialized lighting, such as high-intensity discharge lamps and flash lamps, due to its intense spectral lines. It's also employed in gas-filled insulation panels for windows and as a filling gas in thermal insulation units.",
  },
  {
    name: "Rubidium (Rb):",
    info: "Rubidium is an alkali metal typically found in potassium minerals like lepidolite and carnallite. It's obtained through mining and extraction processes. Rubidium's low abundance and high reactivity limit its practical applications, but it's used in research laboratories for atomic clocks, laser cooling experiments, and in spectroscopy. Rubidium compounds find applications in specialty glasses, catalysts, and as a getter in vacuum tubes.",
  },
  {
    name: "Strontium (Sr):",
    info: "Strontium is an alkaline earth metal primarily found in minerals like celestite and strontianite. It's obtained through mining and chemical processing. Strontium's properties, including its ability to emit bright red light when burned, make it valuable in fireworks and flares. Strontium compounds are used in the production of cathode ray tubes (CRTs) for color television displays, as well as in pyrotechnic compositions, glassmaking, and in medical imaging for bone scans.",
  },
  {
    name: "Yttrium (Y):",
    info: "Yttrium is a transition metal found in rare earth minerals like monazite and xenotime. It's obtained as a byproduct of rare earth element extraction. Yttrium's properties, such as its high melting point and conductivity, make it valuable in various applications. It's used in alloys for aerospace components, in phosphors for display screens and energy-efficient lighting, and as a catalyst in organic synthesis reactions. Yttrium oxide is also employed in ceramics, glass polishing, and as a stabilizer in zirconia-based ceramics.",
  },
  {
    name: "Zirconium (Zr):",
    info: "Zirconium is a transition metal primarily found in minerals like zircon and baddeleyite. It's obtained through mining and chemical processing. Zirconium's corrosion resistance, low neutron absorption, and biocompatibility make it valuable in nuclear reactors, aerospace components, and medical implants. Zirconium alloys are used in nuclear fuel rods, reactor vessels, and in chemical processing equipment. Additionally, zirconium oxide is employed in ceramic applications, such as dental implants and thermal barrier coatings.",
  },
  {
    name: "Niobium (Nb):",
    info: "Niobium is a transition metal primarily found in minerals like columbite and pyrochlore. It's obtained through mining and refining processes. Niobium's high melting point, superconductivity, and corrosion resistance make it valuable in various applications. It's used in superalloys for aerospace and gas turbine engines, as well as in superconducting magnets for MRI machines and particle accelerators. Niobium compounds are employed in ceramic capacitors, catalysts, and as additives in glass and ceramics.",
  },
  {
    name: "Molybdenum (Mo):",
    info: "Molybdenum is a transition metal found in various minerals, including molybdenite and wulfenite. It's obtained through mining and flotation processes. Molybdenum's high melting point and corrosion resistance make it valuable in high-temperature applications. It's used in alloys for aerospace components, turbine blades, and in stainless steel production to enhance strength and corrosion resistance. Molybdenum disulfide is employed as a lubricant and in catalysts for petroleum refining and chemical synthesis.",
  },
  {
    name: "Technetium (Tc):",
    info: "Technetium is a synthetic element produced in nuclear reactors through neutron irradiation of molybdenum. It's the lightest element without stable isotopes and has no significant natural abundance. Technetium's short half-life and radioactivity limit its practical applications, but it's used in nuclear medicine for diagnostic imaging and cancer treatment. Technetium-99m is widely employed in medical imaging procedures like single-photon emission computed tomography (SPECT) due to its gamma radiation properties.",
  },
  {
    name: "Ruthenium (Ru):",
    info: "Ruthenium is a transition metal found in platinum ores, typically as a byproduct of nickel refining. It's obtained through chemical processing and electrolytic refining. Ruthenium's hardness, corrosion resistance, and catalytic properties make it valuable in various applications. It's used in electrical contacts, jewelry alloys, and as a catalyst in hydrogenation reactions, organic synthesis, and in the production of acetic acid and ammonia.",
  },
  {
    name: "Rhodium (Rh):",
    info: "Rhodium is a rare transition metal found in platinum group metal ores, primarily as a byproduct of platinum and palladium mining. It's obtained through chemical processing and electrolytic refining. Rhodium's high melting point, resistance to corrosion, and catalytic properties make it valuable in various applications. It's used in catalytic converters for automobiles, in jewelry alloys, and as a plating material for reflective surfaces in mirrors and searchlights.",
  },
  {
    name: "Palladium (Pd):",
    info: "Palladium is a precious metal found in platinum group metal ores, typically associated with nickel and copper deposits. It's obtained through mining and chemical processing. Palladium's catalytic properties, thermal stability, and electrical conductivity make it valuable in numerous applications. It's used in catalytic converters for automobiles, in electronics manufacturing, and as a catalyst in chemical synthesis reactions, hydrogen purification, and fuel cells.",
  },
  {
    name: "Silver (Ag):",
    info: "Silver is a precious metal known for its luster, ductility, and conductivity. It's primarily found in ores like argentite and horn silver, with major producers including Mexico, Peru, and China. Silver's conductivity and reflectivity make it invaluable in electrical contacts, photography, and mirrors. It's used in jewelry, coins, and as a decorative element in tableware and cutlery. Silver compounds find applications in medicine (silver sulfadiazine), photography (silver halides), and as antimicrobial agents in textiles and water purification.",
  },
  {
    name: "Cadmium (Cd):",
    info: "Cadmium is a transition metal often found in zinc ores, typically as a byproduct of zinc refining. It's obtained through mining and electrolytic refining. Cadmium's toxicity limits its applications, but it's used in electroplating, rechargeable nickel-cadmium batteries, and as a pigment in plastics, ceramics, and pigments. Cadmium compounds are employed in stabilizers for plastics, in nuclear reactors as control rods, and in semiconductors for photovoltaic cells and light-emitting diodes (LEDs).",
  },
  {
    name: "Indium (In):",
    info: "Indium is a post-transition metal found in zinc ores, primarily as a byproduct of zinc and lead refining. It's obtained through mining and extraction processes. Indium's properties, including its low melting point and ductility, make it valuable in various applications. It's used in alloys for solders, low-melting-point alloys, and in transparent conductive coatings for touchscreens and solar cells. Indium compounds find applications in electronics, semiconductors, and as catalysts in organic synthesis reactions.",
  },
  {
    name: "Tin (Sn):",
    info: "Tin is a post-transition metal known for its malleability and corrosion resistance. It's primarily obtained from cassiterite ore, with major producers including China, Indonesia, and Peru. Tin's versatility makes it valuable in various applications. It's used in soldering alloys, tin plating for food packaging, and as a component in bronze and pewter alloys. Tin compounds find applications in ceramics, glass coatings, and as catalysts in chemical reactions.",
  },
  {
    name: "Antimony (Sb):",
    info: "Antimony is a metalloid element found in stibnite and other minerals. It's primarily obtained through mining and smelting processes. Antimony's unique properties, including its flame retardancy and semiconductor behavior, make it valuable in various applications. It's used in flame retardants for plastics, textiles, and electronics, as well as in lead-acid batteries, ammunition, and semiconductor devices. Antimony compounds find applications in pigments, glassmaking, and as catalysts in the production of polyester.",
  },
  {
    name: "Tellurium (Te):",
    info: "Tellurium is a metalloid element found in various sulfide ores, including calaverite and sylvanite. It's obtained through mining and chemical extraction processes. Tellurium's semiconductor properties make it valuable in electronics, particularly in thermoelectric devices, solar cells, and as an alloying agent in metals like steel and copper. Tellurium compounds find applications in optical storage media, ceramics, and as catalysts in chemical reactions.",
  },
  {
    name: "Iodine (I):",
    info: "Iodine is a halogen element primarily found in seawater, brine deposits, and mineral ores like iodine-rich brines and caliche ore. It's obtained through extraction and evaporation processes. Iodine's unique properties, including its ability to form water-soluble compounds, make it valuable in various applications. It's used in pharmaceuticals (as an antiseptic and thyroid hormone precursor), in dyes and pigments, and as a nutritional supplement. Iodine compounds find applications in photography, water purification, and as additives in animal feed.",
  },
  {
    name: "Xenon (Xe):",
    info: "Xenon is a noble gas obtained through fractional distillation of liquid air. It's a minor component of the Earth's atmosphere, typically present in trace amounts. Xenon's lack of reactivity limits its practical applications, but it's used in specialized lighting, such as high-intensity discharge lamps and xenon arc lamps, due to its intense spectral lines and high luminosity. Xenon is also employed in medical imaging (xenon CT scans) and in anesthesia as a component of xenon-oxygen gas mixtures.",
  },
  {
    name: "Cesium (Cs):",
    info: "Cesium is an alkali metal found in minerals like pollucite and lepidolite. It's obtained through mining and chemical extraction processes. Cesium's low abundance and high reactivity limit its practical applications, but it's used in specialized equipment like atomic clocks, magnetometers, and in vacuum tubes as a getter. Cesium compounds find applications in photoelectric cells, catalysts, and in the production of specialty glasses and phosphors.",
  },
  {
    name: "Barium (Ba):",
    info: "Barium is an alkaline earth metal primarily found in minerals like barite and witherite. It's obtained through mining and chemical processing. Barium's properties, including its high density and ability to absorb X-rays, make it valuable in various applications. It's used in drilling fluids for oil and gas exploration, in the production of barium sulfate for contrast media in medical imaging, and in fireworks for green-colored flames. Barium compounds find applications in ceramics, glassmaking, and as pigments in paints and coatings.",
  },
  {
    name: "Lanthanum (La):",
    info: "Lanthanum is a rare earth metal found in minerals like monazite and bastnasite. It's obtained through mining and chemical extraction processes. Lanthanum's unique properties, including its high ductility and catalytic behavior, make it valuable in various applications. It's used in rechargeable batteries (nickel-metal hydride), as a catalyst in petroleum refining, and in optical glasses and lenses. Lanthanum compounds find applications in phosphors for lighting, in hydrogen storage alloys, and as additives in glass and ceramics.",
  },
  {
    name: "Cerium (Ce):",
    info: "Cerium is a rare earth metal found in minerals like monazite and bastnasite. It's obtained through mining and chemical extraction processes. Cerium's unique properties, including its high reactivity and oxidation states, make it valuable in various applications. It's used in catalytic converters for automobiles, in glass polishing and ceramics, and as a catalyst in chemical synthesis reactions. Cerium compounds find applications in phosphors for fluorescent lamps, in fuel additives to improve combustion efficiency, and in water purification.",
  },
  {
    name: "Praseodymium (Pr):",
    info: "Praseodymium is a rare earth metal found in minerals like monazite and bastnasite. It's obtained through mining and chemical extraction processes. Praseodymium's unique properties, including its magnetic behavior and high refractive index, make it valuable in various applications. It's used in rare earth magnets (NdFeB) for electric motors, in lighting phosphors, and as a component in alloys for aircraft engines. Praseodymium compounds find applications in catalysis, glass coloring, and as additives in ceramics and glass.",
  },
  {
    name: "Neodymium (Nd):",
    info: "Neodymium is a rare earth metal found in minerals like monazite and bastnasite. It's obtained through mining and chemical extraction processes. Neodymium's unique properties, including its high magnetic strength, make it valuable in various applications. It's used in rare earth magnets (NdFeB) for electric motors, generators, headphones, and in magnetic resonance imaging (MRI) machines. Neodymium compounds find applications in glass coloring, lasers, and as additives in ceramics and glass.",
  },
  {
    name: "Promethium (Pm):",
    info: "Promethium is a synthetic element with no stable isotopes. It's produced in nuclear reactors through neutron irradiation of uranium or by bombarding neodymium with neutrons. Promethium's radioactive properties limit its practical applications, but it's used in nuclear batteries, luminous paint, and as a radiation source for thickness gauges and medical research.",
  },
  {
    name: "Samarium (Sm):",
    info: "Samarium is a rare earth metal found in minerals like monazite and bastnasite. It's obtained through mining and chemical extraction processes. Samarium's unique magnetic properties make it valuable in various applications. It's used in rare earth magnets, samarium-cobalt magnets, and in nuclear reactor control rods. Samarium compounds find applications in catalysts, lasers, and as additives in ceramics and glass.",
  },
  {
    name: "Europium (Eu):",
    info: "Europium is a rare earth metal found in minerals like bastnasite and monazite. It's obtained through mining and chemical extraction processes. Europium's unique luminescent properties make it valuable in various applications. It's used in phosphors for fluorescent lamps, cathode ray tubes (CRTs), and in color television screens. Europium compounds find applications in security features for banknotes and passports, as well as in nuclear reactor control rods.",
  },
  {
    name: "Gadolinium (Gd):",
    info: "Gadolinium is a rare earth metal found in minerals like monazite and bastnasite. It's obtained through mining and chemical extraction processes. Gadolinium's unique magnetic properties make it valuable in various applications. It's used in magnetic resonance imaging (MRI) contrast agents, in neutron capture therapy for cancer treatment, and as a component in rare earth magnets. Gadolinium compounds find applications in optical lenses, scintillation detectors, and as additives in ceramics and glass.",
  },
  {
    name: "Terbium (Tb):",
    info: "Terbium is a rare earth metal found in minerals like xenotime and gadolinite. It's obtained through mining and chemical extraction processes. Terbium's unique luminescent properties make it valuable in various applications. It's used in phosphors for fluorescent lamps, color television tubes, and in solid-state lighting. Terbium compounds find applications in magneto-optical recording devices, catalysis, and as additives in ceramics and glass.",
  },
  {
    name: "Dysprosium (Dy):",
    info: "Dysprosium is a rare earth metal found in minerals like xenotime and monazite. It's obtained through mining and chemical extraction processes. Dysprosium's unique magnetic properties make it valuable in various applications. It's used in rare earth magnets (NdFeB) for electric motors, generators, and in wind turbines. Dysprosium compounds find applications in lasers, high-temperature ceramics, and as additives in glass and ceramics.",
  },
  {
    name: "Holmium (Ho):",
    info: "Holmium is a rare earth metal found in minerals like monazite and bastnasite. It's obtained through mining and chemical extraction processes. Holmium's unique magnetic properties make it valuable in various applications. It's used in magnetic resonance imaging (MRI) contrast agents, lasers for medical and scientific research, and in nuclear control rods. Holmium compounds find applications in optical filters, ceramic capacitors, and as additives in glass and ceramics.",
  },
  {
    name: "Erbium (Er):",
    info: "Erbium is a rare earth metal found in minerals like xenotime and euxenite. It's obtained through mining and chemical extraction processes. Erbium's unique optical properties make it valuable in various applications. It's used in fiber optic communications, lasers for medical and dental procedures, and in nuclear reactor control rods. Erbium compounds find applications in phosphors, glass coloring, and as additives in glass and ceramics.",
  },
  {
    name: "Thulium (Tm):",
    info: "Thulium is a rare earth metal found in minerals like monazite and euxenite. It's obtained through mining and chemical extraction processes. Thulium's unique properties, including its high magnetic susceptibility and thermal stability, make it valuable in various applications. It's used in portable X-ray machines, lasers for medical and scientific research, and in nuclear reactor control rods. Thulium compounds find applications in high-temperature superconductors, solid-state lasers, and as additives in glass and ceramics.",
  },
  {
    name: "Ytterbium (Yb):",
    info: "Ytterbium is a rare earth metal found in minerals like xenotime and euxenite. It's obtained through mining and chemical extraction processes. Ytterbium's unique properties, including its high thermal neutron capture cross-section, make it valuable in various applications. It's used in nuclear reactor control rods, lasers for medical and industrial applications, and in fiber optic amplifiers. Ytterbium compounds find applications in infrared lasers, solar cells, and as additives in glass and ceramics.",
  },
  {
    name: "Lutetium (Lu):",
    info: "Lutetium is a rare earth metal found in minerals like monazite and xenotime. It's obtained through mining and chemical extraction processes. Lutetium's unique properties, including its high density and stable isotopes, make it valuable in various applications. It's used in catalysts for petroleum refining, in cancer treatment drugs (lutetium-177), and in research laboratories for radiation detection. Lutetium compounds find applications in high-performance alloys, phosphors, and as additives in glass and ceramics.",
  },
  {
    name: "Hafnium (Hf):",
    info: "Hafnium is a transition metal found in minerals like zircon and baddeleyite. It's obtained through mining and chemical extraction processes. Hafnium's unique properties, including its high melting point and resistance to corrosion, make it valuable in various applications. It's used in nuclear reactor control rods, in superalloys for aerospace and gas turbine engines, and as a getter in vacuum tubes. Hafnium compounds find applications in catalysts, optical coatings, and as additives in superalloys.",
  },
  {
    name: "Tantalum (Ta):",
    info: "Tantalum is a transition metal found in minerals like tantalite and columbite. It's obtained through mining and chemical extraction processes. Tantalum's unique properties, including its high melting point and corrosion resistance, make it valuable in various applications. It's used in capacitors for electronic devices, in surgical implants, and in superalloys for aerospace and chemical processing equipment. Tantalum compounds find applications in carbide cutting tools, corrosion-resistant coatings, and as additives in glass and ceramics.",
  },
  {
    name: "Tungsten (W):",
    info: "Tungsten is a transition metal found in minerals like wolframite and scheelite. It's obtained through mining and chemical extraction processes. Tungsten's unique properties, including its high melting point and density, make it valuable in various applications. It's used in filaments for incandescent light bulbs, in electrical contacts and heating elements, and in alloys for cutting tools and armor-piercing ammunition. Tungsten compounds find applications in catalysts, radiation shielding, and as additives in glass and ceramics.",
  },
  {
    name: "Rhenium (Re):",
    info: "Rhenium is a transition metal found in minerals like molybdenite and gadolinite. It's obtained through mining and chemical extraction processes. Rhenium's unique properties, including its high melting point and resistance to corrosion, make it valuable in various applications. It's used in high-temperature superalloys for jet engine turbines, in catalysts for petroleum refining, and in filaments for mass spectrometers and X-ray tubes. Rhenium compounds find applications in catalysts, electrical contacts, and as additives in superalloys.",
  },
  {
    name: "Osmium (Os):",
    info: "Osmium is a transition metal found in platinum ores, typically as a byproduct of nickel refining. It's obtained through chemical processing and electrolytic refining. Osmium's unique properties, including its high density and hardness, make it valuable in various applications. It's used in fountain pen nibs, electrical contacts, and in alloys for instrument pivots and clock mechanisms. Osmium compounds find applications in staining biological specimens, as catalysts in chemical synthesis, and in fingerprint detection.",
  },
  {
    name: "Iridium (Ir):",
    info: "Iridium is a transition metal found in platinum ores, typically as a byproduct of nickel refining. It's obtained through chemical processing and electrolytic refining. Iridium's unique properties, including its extreme hardness and resistance to corrosion, make it valuable in various applications. It's used in spark plugs, electrical contacts, and in crucibles for growing single crystals. Iridium compounds find applications in catalysts, fountain pen nibs, and as additives in platinum alloys.",
  },
  {
    name: "Platinum (Pt):",
    info: "Platinum is a precious metal found in platinum ores, typically associated with nickel and copper deposits. It's obtained through mining and chemical processing. Platinum's unique properties, including its resistance to corrosion and catalytic activity, make it valuable in various applications. It's used in jewelry, catalytic converters for automobiles, and in fuel cells for electric vehicles. Platinum compounds find applications in chemotherapy drugs, in silicone implants, and as catalysts in chemical synthesis reactions.",
  },
  {
    name: "Gold (Au):",
    info: "Gold is a precious metal known for its luster, ductility, and resistance to corrosion. It's primarily found in placer deposits, with major producers including China, Australia, and Russia. Gold's scarcity and intrinsic value make it valuable in jewelry, currency, and as a store of value. It's used in electronics for contacts, connectors, and as a conductor in thin films. Gold compounds find applications in medicine (gold salts for arthritis treatment), in dental restorations, and in nanotechnology.",
  },
  {
    name: "Mercury (Hg):",
    info: "Mercury is a transition metal known for its liquid state at room temperature and high toxicity. It's found in cinnabar ore and obtained through mining and heating processes. Mercury's unique properties, including its high density and electrical conductivity, make it valuable in various applications. It's used in thermometers, barometers, and as a catalyst in the production of chlorine and caustic soda. Mercury compounds find applications in fluorescent lamps, dental amalgams, and in some pharmaceuticals.",
  },
  {
    name: "Thallium (Tl):",
    info: "Thallium is a post-transition metal found in minerals like crookesite and lorandite. It's obtained through mining and smelting processes. Thallium's unique properties, including its toxicity and electrical conductivity, make it valuable in various applications. Historically, it was used in rat poisons and insecticides, but due to its toxicity, its use is now restricted. Thallium compounds find limited applications in electronics, optical lenses, and as additives in glass and ceramics.",
  },
  {
    name: "Lead (Pb):",
    info: "Lead is a post-transition metal known for its malleability, low melting point, and toxicity. It's primarily found in galena ore, with major producers including China, Australia, and the United States. Lead's properties make it valuable in various applications, but its toxicity has led to significant restrictions on its use. Historically, lead was used in plumbing, paint, and gasoline additives. Lead compounds find applications in batteries, radiation shielding, and as additives in plastics and glass.",
  },
  {
    name: "Bismuth (Bi):",
    info: "Bismuth is a post-transition metal often found in association with lead, copper, and tin ores. It's obtained through mining and smelting processes. Bismuth's unique properties, including its low toxicity and diamagnetic behavior, make it valuable in various applications. It's used in pharmaceuticals (as bismuth subsalicylate), in cosmetics, and as an environmentally friendly replacement for lead in solders and shotgun pellets. Bismuth compounds find applications in pigments, catalysts, and as additives in alloys.",
  },
  {
    name: "Polonium (Po):",
    info: "Polonium is a radioactive metalloid element with no stable isotopes. It's produced in nuclear reactors through neutron irradiation of bismuth or by alpha decay of radium. Polonium's radioactive properties limit its practical applications, but it's used as a neutron source and in anti-static devices. Due to its high toxicity and radioactivity, polonium is primarily used in research and not in commercial products.",
  },
  {
    name: "Astatine (At):",
    info: "Astatine is a radioactive halogen element with no stable isotopes. It's produced in minute quantities through nuclear reactions or by bombarding bismuth with alpha particles. Astatine's extreme rarity and radioactivity limit its practical applications, but it's used in scientific research to study the behavior of halogens and in radiation therapy for cancer treatment.",
  },
  {
    name: "Radon (Rn):",
    info: "Radon is a radioactive noble gas obtained through decay processes of uranium and thorium in the Earth's crust. It's a minor component of the Earth's atmosphere, typically present in trace amounts. Radon's radioactivity and inertness limit its practical applications, but it's used in scientific research to study radioactive decay and in radiation therapy for cancer treatment.",
  },
  {
    name: "Francium (Fr):",
    info: "Francium is a radioactive alkali metal with no stable isotopes. It's produced in minute quantities through decay processes of actinium and thorium. Francium's extreme rarity and radioactivity limit its practical applications, and its properties are primarily studied for fundamental research purposes.",
  },
  {
    name: "Radium (Ra):",
    info: "Radium is a radioactive alkaline earth metal found in uranium and thorium ores. It's obtained through mining and chemical extraction processes. Radium's radioactive properties, including its decay into radon gas, were historically used in luminous paint and medical treatments. However, due to its high toxicity and radioactivity, its use is now highly restricted, and safer alternatives are preferred.",
  },
  {
    name: "Actinium (Ac):",
    info: "Actinium is a radioactive metal found in uranium and thorium ores. It's obtained through mining and decay processes of uranium and thorium. Actinium's radioactive properties limit its practical applications, but it's used in scientific research to study the behavior of actinides and in radiation therapy for cancer treatment.",
  },
  {
    name: "Thorium (Th):",
    info: "Thorium is a radioactive actinide metal found in various minerals, including monazite and thorite. It's obtained through mining and chemical extraction processes. Thorium's radioactive properties make it valuable in nuclear reactors as a potential fuel source for nuclear power generation. It's also used in gas mantles for lanterns and in alloys for aerospace and defense applications.",
  },
  {
    name: "Protactinium (Pa):",
    info: "Protactinium is a radioactive actinide metal found in uranium ores and thorium decay chains. It's obtained through mining and chemical extraction processes. Protactinium's radioactive properties limit its practical applications, but it's used in scientific research to study nuclear reactions and in the production of isotopes for medical and industrial purposes.",
  },
  {
    name: "Uranium (U):",
    info: "Uranium is a radioactive actinide metal found in various minerals, including pitchblende and uraninite. It's obtained through mining and chemical extraction processes. Uranium's radioactive properties make it valuable as a fuel source for nuclear power generation and in nuclear weapons. It's also used in radiation shielding, in the production of isotopes for medical diagnostics and cancer treatment, and in scientific research.",
  },
  {
    name: "Neptunium (Np):",
    info: "Neptunium is a radioactive actinide metal found in trace amounts in uranium ores. It's primarily produced artificially in nuclear reactors by neutron irradiation of uranium. Neptunium's radioactive properties limit its practical applications, but it's used in scientific research to study nuclear reactions and as a precursor for the production of plutonium-238 for radioisotope thermoelectric generators (RTGs).",
  },
  {
    name: "Plutonium (Pu):",
    info: "Plutonium is a radioactive actinide metal primarily produced in nuclear reactors by neutron irradiation of uranium-238. It's used in nuclear weapons and as a fuel source for nuclear reactors, particularly in breeder reactors for energy production and in radioisotope thermoelectric generators (RTGs) for space missions. Plutonium's radioactive properties make it highly toxic, and strict regulations govern its handling, storage, and disposal.",
  },
  {
    name: "Americium (Am):",
    info: "Americium is a radioactive actinide metal produced in nuclear reactors by neutron irradiation of plutonium. It's used in smoke detectors, where its decay emits alpha particles that ionize the air, triggering an alarm. Americium is also used in industrial gauges for thickness measurement and in density measurement devices. Its radioactive properties and toxicity require careful handling and disposal.",
  },
  {
    name: "Curium (Cm):",
    info: "Curium is a radioactive transuranic element produced artificially in nuclear reactors by neutron irradiation of plutonium or americium. It's primarily used in scientific research to study nuclear reactions and as a neutron source for various applications, including moisture gauges, well logging tools, and in space exploration for radioisotope thermoelectric generators (RTGs).",
  },
  {
    name: "Berkelium (Bk):",
    info: "Berkelium is a radioactive transuranic element produced artificially in nuclear reactors by neutron irradiation of americium. It's primarily used in scientific research to study nuclear reactions and as a neutron source for various applications, including nuclear instrumentation and in the synthesis of heavier elements.",
  },
  {
    name: "Californium (Cf):",
    info: "Californium is a radioactive transuranic element produced artificially in nuclear reactors by neutron irradiation of curium or berkelium. It's primarily used as a neutron source for various applications, including neutron radiography, nuclear reactor startup and shutdown mechanisms, and in moisture and metal detectors for security screening.",
  },
  {
    name: "Einsteinium (Es):",
    info: "Einsteinium is a radioactive transuranic element produced artificially in nuclear reactors by neutron irradiation of uranium or plutonium. It's primarily used in scientific research to study nuclear reactions and the properties of heavy elements. Due to its short half-life and limited availability, its practical applications are highly restricted.",
  },
  {
    name: "Fermium (Fm):",
    info: "Fermium is a radioactive transuranic element produced artificially in nuclear reactors by neutron irradiation of plutonium or curium. It's primarily used in scientific research to study nuclear reactions and the behavior of heavy elements. Its short half-life and limited availability restrict its practical applications to specialized research purposes.",
  },
  {
    name: "Mendelevium (Md):",
    info: "Mendelevium is a radioactive transuranic element produced artificially in nuclear reactors by neutron irradiation of einsteinium or fermium. It's named after Dmitri Mendeleev, the creator of the periodic table. Mendelevium is primarily used in scientific research to study nuclear reactions and the properties of heavy elements. Due to its short half-life and limited availability, its practical applications are highly restricted.",
  },
  {
    name: "Nobelium (No):",
    info: "Nobelium is a radioactive transuranic element produced artificially in nuclear reactors by neutron irradiation of curium. It's named after Alfred Nobel, the founder of the Nobel Prizes. Nobelium is primarily used in scientific research to study nuclear reactions and the behavior of heavy elements. Due to its short half-life and limited availability, its practical applications are highly restricted.",
  },
  {
    name: "Lawrencium (Lr):",
    info: "Lawrencium is a radioactive transuranic element produced artificially in nuclear reactors by neutron irradiation of californium. It's named after Ernest O. Lawrence, the inventor of the cyclotron. Lawrencium is primarily used in scientific research to study nuclear reactions and the properties of heavy elements. Due to its short half-life and limited availability, its practical applications are highly restricted.",
  },
  {
    name: "Rutherfordium (Rf):",
    info: "Rutherfordium is a synthetic radioactive element produced artificially in nuclear reactors by bombarding plutonium or californium with high-energy ions. It's named after Ernest Rutherford, the father of nuclear physics. Rutherfordium is primarily used in scientific research to study nuclear reactions and the properties of superheavy elements. Its short half-life and limited availability restrict practical applications to specialized research purposes.",
  },
  {
    name: "Dubnium (Db):",
    info: "Dubnium is a synthetic radioactive element produced artificially in nuclear reactors by bombarding americium or berkelium with high-energy ions. It's named after Dubna, Russia, the location of the Joint Institute for Nuclear Research. Dubnium is primarily used in scientific research to study nuclear reactions and the properties of superheavy elements. Its short half-life and limited availability restrict practical applications to specialized research purposes.",
  },
  {
    name: "Seaborgium (Sg):",
    info: "Seaborgium is a synthetic radioactive element produced artificially in nuclear reactors by bombarding californium or curium with high-energy ions. It's named after Glenn T. Seaborg, a prominent nuclear chemist. Seaborgium is primarily used in scientific research to study nuclear reactions and the properties of superheavy elements. Its short half-life and limited availability restrict practical applications to specialized research purposes.",
  },
  {
    name: "Bohrium (Bh):",
    info: "Bohrium is a synthetic radioactive element produced artificially in nuclear reactors by bombarding bismuth or lead with high-energy ions. It's named after Niels Bohr, a pioneer in quantum theory. Bohrium is primarily used in scientific research to study nuclear reactions and the properties of superheavy elements. Its short half-life and limited availability restrict practical applications to specialized research purposes.",
  },
  {
    name: "Hassium (Hs):",
    info: "Hassium is a synthetic radioactive element produced artificially in nuclear reactors by bombarding lead or bismuth with high-energy ions. It's named after the German state of Hesse. Hassium is primarily used in scientific research to study nuclear reactions and the properties of superheavy elements. Its short half-life and limited availability restrict practical applications to specialized research purposes.",
  },
  {
    name: "Meitnerium (Mt):",
    info: "Meitnerium is a synthetic radioactive element produced artificially in nuclear reactors by bombarding bismuth or lead with high-energy ions. It's named after Lise Meitner, a pioneering physicist. Meitnerium is primarily used in scientific research to study nuclear reactions and the properties of superheavy elements. Its short half-life and limited availability restrict practical applications to specialized research purposes.",
  },
  {
    name: "Darmstadtium (Ds):",
    info: "Darmstadtium is a synthetic radioactive element produced artificially in nuclear reactors by bombarding lead or bismuth with high-energy ions. It's named after the German city of Darmstadt, where it was first synthesized. Darmstadtium is primarily used in scientific research to study nuclear reactions and the properties of superheavy elements. Its short half-life and limited availability restrict practical applications to specialized research purposes.",
  },
  {
    name: "Roentgenium (Rg):",
    info: "Roentgenium is a synthetic radioactive element produced artificially in nuclear reactors by bombarding bismuth or lead with high-energy ions. It's named after Wilhelm Conrad Roentgen, the discoverer of X-rays. Roentgenium is primarily used in scientific research to study nuclear reactions and the properties of superheavy elements. Its short half-life and limited availability restrict practical applications to specialized research purposes.",
  },
  {
    name: "Copernicium (Cn):",
    info: "Copernicium is a synthetic radioactive element produced artificially in nuclear reactors by bombarding lead or bismuth with high-energy ions. It's named after Nicolaus Copernicus, the astronomer who formulated the heliocentric model of the universe. Copernicium is primarily used in scientific research to study nuclear reactions and the properties of superheavy elements. Its short half-life and limited availability restrict practical applications to specialized research purposes.",
  },
  {
    name: "Nihonium (Nh):",
    info: "Nihonium is a synthetic radioactive element produced artificially in nuclear reactors by bombarding bismuth or lead with high-energy ions. It's named after Japan, where it was first synthesized. Nihonium is primarily used in scientific research to study nuclear reactions and the properties of superheavy elements. Its short half-life and limited availability restrict practical applications to specialized research purposes.",
  },
  {
    name: "Flerovium (Fl):",
    info: "Flerovium is a synthetic radioactive element produced artificially in nuclear reactors by bombarding plutonium or curium with calcium ions. It's named after the Flerov Laboratory of Nuclear Reactions in Russia. Flerovium is primarily used in scientific research to study nuclear reactions and the properties of superheavy elements. Its short half-life and limited availability restrict practical applications to specialized research purposes.",
  },
  {
    name: "Moscovium (Mc):",
    info: "Moscovium is a synthetic radioactive element produced artificially in nuclear reactors by bombarding americium or berkelium with calcium ions. It's named after Moscow, Russia, where it was first synthesized. Moscovium is primarily used in scientific research to study nuclear reactions and the properties of superheavy elements. Its short half-life and limited availability restrict practical applications to specialized research purposes.",
  },
  {
    name: "Livermorium (Lv):",
    info: "Livermorium is a synthetic radioactive element produced artificially in nuclear reactors by bombarding curium or californium with calcium ions. It's named after the Lawrence Livermore National Laboratory in California, USA. Livermorium is primarily used in scientific research to study nuclear reactions and the properties of superheavy elements. Its short half-life and limited availability restrict practical applications to specialized research purposes.",
  },
  {
    name: "Tennessine (Ts):",
    info: "Tennessine is a synthetic radioactive element produced artificially in nuclear reactors by bombarding berkelium or californium with calcium ions. It's named after the state of Tennessee, USA, where it was first synthesized. Tennessine is primarily used in scientific research to study nuclear reactions and the properties of superheavy elements. Its short half-life and limited availability restrict practical applications to specialized research purposes.",
  },
  {
    name: "Oganesson (Og):",
    info: "Oganesson is a synthetic radioactive element produced artificially in nuclear reactors by bombarding californium or curium with calcium ions. It's named after Yuri Oganessian, a Russian nuclear physicist. Oganesson is primarily used in scientific research to study nuclear reactions and the properties of superheavy elements. Its short half-life and limited availability restrict practical applications to specialized research purposes.",
  },
];

const elements = document.getElementsByClassName("activate");
const model = document.getElementById("isolatedModal");
const x = document.getElementById("x");

for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  element.addEventListener("click", () => {
    console.log(element)
    model.style.display = "flex";
    const index = +element.id - 1;

    const name = document.getElementById("name");
    const info = document.getElementById("info");

    name.textContent = elementInfos[index].name;
    info.textContent = elementInfos[index].info;
  });
}

document.addEventListener(
  "click",
  function (event) {
    if (!model.contains(event.target)) {
      model.style.display = "none";
    }
  },
  true
);

x.addEventListener("click",()=>{
  model.style.display = "none";
})