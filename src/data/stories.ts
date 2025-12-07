import { Story, Chapter } from "../types";

const chapter1: Story[] = [
  {
    id: 1,
    title: "Kot i Pies",
    contentPath: "/stories/dlaczego-zwierzeta-nie-zyja-w-zgodzie/kot-i-pies.md",
  },
  {
    id: 2,
    title: "Chatka",
    contentPath: "/stories/dlaczego-zwierzeta-nie-zyja-w-zgodzie/chatka.md",
  },
  {
    id: 3,
    title: "Lisia lekcja",
    contentPath:
      "/stories/dlaczego-zwierzeta-nie-zyja-w-zgodzie/lisia-lekcja.md",
  },
  {
    id: 4,
    title: "Najpiękniejsze",
    contentPath:
      "/stories/dlaczego-zwierzeta-nie-zyja-w-zgodzie/najpiekniejsze.md",
  },
  {
    id: 5,
    title: "Pszczółka",
    contentPath: "/stories/dlaczego-zwierzeta-nie-zyja-w-zgodzie/pszczolka.md",
  },
];

const chapter2: Story[] = [
  {
    id: 16,
    title: "Matyś i sroka",
    contentPath: "/stories/ludzie-i-zwierzeta/matys-i-sroka.md",
  },
  {
    id: 17,
    title: "Miodowa łaźnia",
    contentPath: "/stories/ludzie-i-zwierzeta/miodowa-laznia.md",
  },
  {
    id: 18,
    title: "Niedźwiedź i żniwiarka",
    contentPath: "/stories/ludzie-i-zwierzeta/niedzwiedz-i-zniwiarka.md",
  },
  {
    id: 19,
    title: "O leśnych ptakach i królewskiej brodzie",
    contentPath:
      "/stories/ludzie-i-zwierzeta/o-lesnych-ptakach-i-krolewskiej-brodzie.md",
  },
  {
    id: 20,
    title: "Osocznik i wąż",
    contentPath: "/stories/ludzie-i-zwierzeta/osocznik-i-waz.md",
  },
  {
    id: 21,
    title: "Wężowa wdzięczność",
    contentPath: "/stories/ludzie-i-zwierzeta/wezowa-wdziecznosc.md",
  },
];

const chapter3: Story[] = [
  {
    id: 6,
    title: "Czarcia orka",
    contentPath: "/stories/diabelskie-figle/czarcia-orka.md",
  },
  {
    id: 7,
    title: "Dlaczego dzisiaj diabły chat unikają",
    contentPath:
      "/stories/diabelskie-figle/dlaczego-dzisiaj-diably-chat-unikaja.md",
  },
  {
    id: 8,
    title: "Duch puszczy",
    contentPath: "/stories/diabelskie-figle/duch-puszczy.md",
  },
  {
    id: 9,
    title: "Graj grajku graj",
    contentPath: "/stories/diabelskie-figle/graj-grajku-graj.md",
  },
  {
    id: 10,
    title: "Zemsta",
    contentPath: "/stories/diabelskie-figle/zemsta.md",
  },
];

const chapter4: Story[] = [
  {
    id: 22,
    title: "Szewc",
    contentPath: "/stories/tropami-zbojcow-i-rabusiow/szewc.md",
  },
  {
    id: 23,
    title: "Tam gdzie sięga cień",
    contentPath: "/stories/tropami-zbojcow-i-rabusiow/tam-gdzie-siega-cien.md",
  },
  {
    id: 24,
    title: "Topidło, Pieremb i Końskie Góry",
    contentPath:
      "/stories/tropami-zbojcow-i-rabusiow/topidlo-pieremb-i-konskie-gory.md",
  },
  {
    id: 25,
    title: "Trzynasta kopa",
    contentPath: "/stories/tropami-zbojcow-i-rabusiow/trzynasta-kopa.md",
  },
];

const chapter5: Story[] = [
  {
    id: 11,
    title: "Błędny ognik",
    contentPath: "/stories/gdy-milknie-dzwon/bledny-ognik.md",
  },
  {
    id: 12,
    title: "Głaz",
    contentPath: "/stories/gdy-milknie-dzwon/glaz.md",
  },
  {
    id: 13,
    title: "Kmieć a zaraza",
    contentPath: "/stories/gdy-milknie-dzwon/kmiec-a-zaraza.md",
  },
  {
    id: 14,
    title: "O kukułce, jaskółce i słowiku",
    contentPath: "/stories/gdy-milknie-dzwon/o-kukulce-jaskolce-i-slowiku.md",
  },
  {
    id: 15,
    title: "Oniemiały dzwon",
    contentPath: "/stories/gdy-milknie-dzwon/oniemialy-dzown.md",
  },
];

const chapter6: Story[] = [
  {
    id: 26,
    title: "Cudzy rozum",
    contentPath: "/stories/w-pogoni-za-szczesciem/cudzy-rozum.md",
  },
  {
    id: 27,
    title: "Królewskie podarki",
    contentPath: "/stories/w-pogoni-za-szczesciem/krolewskie-podatki.md",
  },
  {
    id: 28,
    title: "O weselnicy w grochowej spódnicy",
    contentPath: "/stories/w-pogoni-za-szczesciem/o-weselnicy.md",
  },
  {
    id: 29,
    title: "Przygody drwala Moki",
    contentPath: "/stories/w-pogoni-za-szczesciem/przygody-drwala-moki.md",
  },
  {
    id: 30,
    title: "Szczęście",
    contentPath: "/stories/w-pogoni-za-szczesciem/szczescie.md",
  },
  {
    id: 31,
    title: "Jak piękno z pracowitością ślub wzięły",
    contentPath: "/stories/w-pogoni-za-szczesciem/jak-piekno-z-pracowitoscia.md",
  },
];

export const chapters: Chapter[] = [
  {
    title: "Dlaczego zwierzęta nie żyją w zgodzie",
    stories: chapter1,
  },
  {
    title: "Ludzie i zwierzęta",
    stories: chapter2,
  },
  {
    title: "Diabelskie figle",
    stories: chapter3,
  },
  {
    title: "Tropami zbójców i rabusiów",
    stories: chapter4,
  },
  {
    title: "Gdy milknie dzwon",
    stories: chapter5,
  },
  {
    title: "W pogoni za szczęściem",
    stories: chapter6,
  },
];

// Flattened stories array for backward compatibility (used in StoryPage)
export const stories: Story[] = chapters.flatMap((chapter) => chapter.stories);
