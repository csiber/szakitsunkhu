export interface Template {
  id: number;
  title: string;
  content: string;
}

export const templates: Template[] = [
  {
    id: 1,
    title: "Kedves és együttérző",
    content: "Kedves {name},\n\nNehéz szívvel írom ezt a levelet. Az elmúlt időszak ráébresztett, hogy {reason}. Tudom, hogy ez fájdalmas lehet, de őszintének kell lennem magammal és veled is. Remélem, idővel megérted a döntésemet.\n\nMinden jót kívánok,\n{sender}"
  },
  {
    id: 2,
    title: "Határozott és egyenes",
    content: "Szia {name}!\n\nÚgy döntöttem, hogy véget vetek a kapcsolatunknak. {reason} Kérlek, ne keress többet.\n\nTisztelettel,\n{sender}"
  },
  {
    id: 3,
    title: "Költői és érzelmes",
    content: "Drága {name},\n\nNéha az élet olyan utakra vezet minket, amelyeket egyedül kell bejárnunk. {reason} A szívem sajog, de tudom, hogy ez a helyes döntés mindkettőnk számára.\n\nSzeretettel búcsúzom,\n{sender}"
  },
  {
    id: 4,
    title: "Rövid és tömör",
    content: "{name},\n\nVége. {reason}\n\n{sender}"
  },
  {
    id: 5,
    title: "Baráti és megértő",
    content: "Kedves {name},\n\nTudom, hogy ez váratlanul érhet, de őszintének kell lennem. {reason} Remélem, idővel barátok tudunk maradni, de most térre és időre van szükségem.\n\nÖleléssel,\n{sender}"
  }
];