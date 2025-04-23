import { getRepositoryDetails } from "../../utils";

export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  [key: string]: any;
}

export const projects: Project[] = [
  {
    name: 'Role of CD44-ICD on hepatic inflammation in endotoxemic mice (master\'s thesis)',
    description:
      'Investigated how CD44‑ICD blockade reduces LPS‑induced sepsis in mice via blood biochemistry, immunohistochemistry, and Western blotting.',
    demoLink: '',
    tags: ['Thesis', 'Sepsis', 'IHC']
  },
  {
    name: 'The Effects of Sleep Deprivation on EAAT1 and EAAT2 Expression in the Hippocampus of Mice',
    description:
      'Observed neuronal edema in hippocampal CA1/CA2 with H&E staining and linked decreased EAAT1/2 to oxidative stress over time.',
    demoLink: '',
    tags: ['Neuro', 'H&E', 'Oxidative']
  },
  {
    name: 'The anti‑ulcerogenic potential of Gan‑Lu‑Yin against alcohol‑induced gastric ulcer in rats: Involvement of inflammatory cytokines inhibition and mucin secretion induction',
    description:
      'Completed data for juniors, ran rat ulcer models, and showed Gan‑Lu‑Yin’s anti‑inflammatory and mucin‑inducing effects via histology and Western blot.',
    demoLink: '',
    tags: ['Pharma', 'Ulcer', 'Histo']
  },
  {
    name: 'Efficacy of bone powder on Anterior Cruciate Ligament Resection‑induced Osteoarthritis in Rats',
    description:
      'Commissioned by ACRO Biomedical; used ACL surgery and nociceptive assays to demonstrate cartilage regeneration and pain reduction in rats.',
    demoLink: '',
    tags: ['OA', 'Animal', 'Cartilage']
  },
  {
    name: 'Evaluation of Hyaluronic Acid Derivatives for Vascular Embolization',
    description:
      'Compared a proprietary derivative vs. standard HA in rabbit ear vein models, showing reduced thrombosis via morphological analysis.',
    demoLink: '',
    tags: ['Thrombus', 'Embo', 'Animal']
  },
  {
    name: 'The protective effect of quercetin on sciatic nerve contusion rat',
    description:
      'Partnered with NCKU Orthopedics to induce sciatic crush injury in rats and found quercetin lowered inflammation through tissue analysis.',
    demoLink: '',
    tags: ['NeuroProt', 'Inflamm', 'Surgery']
  },
  {
    name: 'The effect of Tamarind Xyloglucan on TNBS‑induced Ulcerative Colitis in Mice',
    description:
      'Completed senior’s data: induced colitis in mice, applied pomegranate ellagitannin, and measured CBC, PAS staining, and Western blot outcomes.',
    demoLink: '',
    tags: ['Colitis', 'Ellagi', 'Inflamm']
  },
  {
    name: 'Synergistic effects of warming and carbon dioxide induced freshwater acidification on bioaccumulation of tilapia (Oreochromis niloticus) exposed to copper nanoparticles',
    description:
      'Simulated global warming and acidified water; used flame AA to show synergistic increase of copper bioaccumulation in tilapia gills.',
    demoLink: '',
    tags: ['Aquatic', 'Nano', 'Climate']
  },
  {
    name: 'Effect of size-dependent copper nanoparticles on grass crop (Ctenopharyngodon idellus): metabolic toxicity and histopathology',
    description:
      'Analyzed uptake and histopathology across nanoparticle sizes in grass carp, revealing size‑linked organ damage via H&E staining.',
    demoLink: '',
    tags: ['NanoTox', 'HistoPath', 'Fish']
  }
];


