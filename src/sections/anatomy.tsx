import { Accordion, type AccordionItem } from "@/components/accordion";
import { Section } from "@/components/section";

const muscleMedia: Record<string, { imageUrl?: string; videoUrl?: string }> = {
  "Oblicuo externo": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851275/OBLICUO_EXTERNO_c3mzcg.jpg",
    videoUrl:
      "https://res.cloudinary.com/deflpc2nl/video/upload/q_auto/f_auto/v1777851468/OBLICUO_EXTERNO_fq6zcl.mp4"
  },
  "Serrato anterior": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851277/SERRATO_ANTERIOR_dprszt.jpg",
    videoUrl:
      "https://res.cloudinary.com/deflpc2nl/video/upload/q_auto/f_auto/v1777851469/SERRATO_ANTERIOR_rzkn2c.mp4"
  },
  "Pared abdominal": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851276/PARED_ABDOMINAL_kqbtzq.jpg"
  },
  "Recto abdominal": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851276/RECTO_ABDOMINAL_n7fkk6.jpg",
    videoUrl:
      "https://res.cloudinary.com/deflpc2nl/video/upload/q_auto/f_auto/v1777851468/RECTO_ABDOMINAL_lwz60g.mp4"
  },
  "Transverso del abdomen": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851271/TRANSVERSO_DEL_ABDOMEN_dmkuf2.png"
  },
  "Pectoral mayor": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851276/PECTORAL_MAYOR_wziynx.jpg",
    videoUrl:
      "https://res.cloudinary.com/deflpc2nl/video/upload/q_auto/f_auto/v1777851469/PECTORAL_MAYOR_rwob3l.mp4"
  },
  "Deltoides anterior": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851290/DELTOIDES_ANTERIOR_zcuc8i.jpg",
    videoUrl:
      "https://res.cloudinary.com/deflpc2nl/video/upload/q_auto/f_auto/v1777851471/DELTOIDES_ANTERIOR_tm88nm.mp4"
  },
  "Deltoides medio": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851271/DELTOIDES_MEDIO_ilti2v.jpg",
    videoUrl:
      "https://res.cloudinary.com/deflpc2nl/video/upload/q_auto/f_auto/v1777851470/DELTOIDES_MEDIO_vgajmu.mp4"
  },
  "Deltoides posterior": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851272/DELTOIDES_POSTERIOR_bnct7e.jpg",
    videoUrl:
      "https://res.cloudinary.com/deflpc2nl/video/upload/q_auto/f_auto/v1777851471/DELTOIDES_POSTERIOR_a5voqm.mp4"
  },
  Supraespinoso: {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851277/SUPRAESPINOSO_hmjsxr.jpg",
    videoUrl:
      "https://res.cloudinary.com/deflpc2nl/video/upload/q_auto/f_auto/v1777851469/SUPRAESPINOSO_mehsg1.mp4"
  },
  Infraespinoso: {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851274/INFRAESPINOSO_jxxnyg.jpg",
    videoUrl:
      "https://res.cloudinary.com/deflpc2nl/video/upload/q_auto/f_auto/v1777851471/INFRAESPINOSO_lwpjp6.mp4"
  },
  Subescapular: {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851277/SUBESCAPULAR_yuuxwq.jpg",
    videoUrl:
      "https://res.cloudinary.com/deflpc2nl/video/upload/q_auto/f_auto/v1777851469/SUBESCAPULAR_sn3xhr.mp4"
  },
  "Redondo menor": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851277/REDONDO_MENOR_ejy0j8.jpg",
    videoUrl:
      "https://res.cloudinary.com/deflpc2nl/video/upload/q_auto/f_auto/v1777851468/REDONDO_MENOR_jdbwit.mp4"
  },
  "Redondo mayor": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851277/REDONDO_MAYOR_r5b7ko.jpg",
    videoUrl:
      "https://res.cloudinary.com/deflpc2nl/video/upload/q_auto/f_auto/v1777851468/REDONDO_MAYOR_szjko8.mp4"
  },
  "Dorsal ancho": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851272/DORSAL_ANCHO_phwpix.png",
    videoUrl:
      "https://res.cloudinary.com/deflpc2nl/video/upload/q_auto/f_auto/v1777851471/DORSAL_ANCHO_llzjwq.mp4"
  },
  "Manguito rotador": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851275/MANGUITO_ROTADOR_owbqnp.png",
    videoUrl:
      "https://res.cloudinary.com/deflpc2nl/video/upload/q_auto/f_auto/v1777851468/MANGUITO_ROTADOR_jng3ac.mp4"
  },
  Coracobraquial: {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851271/CORACOBRAQUIAL_yd4x7y.jpg",
    videoUrl:
      "https://res.cloudinary.com/deflpc2nl/video/upload/q_auto/f_auto/v1777851470/CORACOBRAQUIAL_zytybk.mp4"
  },
  "Bíceps braquial": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851271/B%C3%8DCEPS_BRAQUIAL_cabeza_larga_y_corta_klw7mw.jpg",
    videoUrl:
      "https://res.cloudinary.com/deflpc2nl/video/upload/q_auto/f_auto/v1777851470/B%C3%8DCEPS_BRAQUIAL_cabeza_larga_y_corta_eonwjw.mp4"
  },
  Braquiorradial: {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851271/BRAQUIORADIAL_jwyv1k.jpg"
  },
  Ancóneo: {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851271/AC%C3%93NEO_neqjni.jpg"
  },
  "Pronador redondo": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851276/PRONADOR_REDONDO_nife7c.png"
  },
  Supinador: {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851277/SUPINADOR_tro6ei.png"
  },
  "Abductor del pulgar": {
    videoUrl:
      "https://res.cloudinary.com/deflpc2nl/video/upload/q_auto/f_auto/v1777851469/ABDUCTOR_DEL_PULGAR_largo_y_corto_ae3yku.mp4"
  },
  "Aductor del pulgar": {
    videoUrl:
      "https://res.cloudinary.com/deflpc2nl/video/upload/q_auto/f_auto/v1777851469/ADUCTOR_DEL_PULGAR_olqsiw.mp4"
  },
  "Flexor corto del pulgar": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851273/FLEXOR_CORTO_DEL_PULGAR_v3ofj7.png"
  },
  "Oponente del pulgar": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851276/OPONENTE_DEL_PULGAR_dqbvt8.png"
  },
  "Abductor del meñique": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851271/ABDUCTOR_DEL_ME%C3%91IQUE_b9q08f.jpg"
  },
  "Oponente del meñique": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851276/OPONENTE_DEL_ME%C3%91IQUE_sxfvdf.jpg"
  },
  Lumbricales: {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851275/LUMBRICALES_grvtdx.jpg"
  },
  "Interóseos dorsales": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851274/INTEROSEOS_DORSALES_kgujez.png"
  },
  "Interóseos palmares": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851275/INTEROSEOS_PALMARES_bumkft.png"
  },
  "Palmar corto": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851276/PALMAR_CORTO_elwhfj.jpg"
  },
  "Flexor radial del carpo": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851274/FLEXOR_RADIAL_DEL_CARPO_pyusbw.png"
  },
  "Flexor cubital del carpo": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851273/FLEXOR_CUBITAL_DEL_CARPO_za3uc8.png"
  },
  "Palmar largo": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851276/PALMAR_LARGO_qcdzo4.png"
  },
  "Flexor superficial de los dedos": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851274/FLEXOR_SUPERFICIAL_DE_LOS_DEDOS_dvxscj.png"
  },
  "Flexor profundo de los dedos": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851274/FLEXOR_PROFUNDO_DE_LOS_DEDOS_gucuz1.png"
  },
  "Flexor largo del pulgar": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851273/FLEXOR_LARGO_DEL_PULGAR_jpdnqe.png"
  },
  "Extensor radial largo y corto del carpo": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851273/EXTENSOR_RADIAL_LARGO_Y_CORTO_DEL_CARPO_xrblpg.png"
  },
  "Extensor cubital del carpo": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851272/EXTENSOR_CUBITAL_DEL_CARPO_vcrjtx.png"
  },
  "Extensor de los dedos": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851272/EXTENSOR_DE_LOS_DEDOS_udcpgk.png"
  },
  "Extensor del meñique": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851273/EXTENSOR_DEL_ME%C3%91IQUE_eiht2o.png"
  },
  "Extensor del índice": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851273/EXTENSOR_DEL_%C3%8DNDICE_ji4iz7.png"
  },
  "Abductor largo del pulgar": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851271/ABDUCTOR_LARGO_DEL_PULGAR_zeneew.jpg"
  },
  "Glúteo mayor": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851274/GL%C3%9ATEO_MAYOR_edvxn4.png"
  },
  "Glúteo medio y menor": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851274/GL%C3%9ATEO_MEDIO_Y_MENOR_ourr8k.png"
  },
  Piriforme: {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851276/PIRIFORME_rbk3bk.png"
  },
  "Obturador interno": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851275/OBTURADOR_INTERNO_bpwttv.png"
  },
  "Géminos superior e inferior": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851274/GEMINOS_supinf_nnfi3r.png"
  },
  "Cuadrado femoral": {
    imageUrl:
      "https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777851271/CUADRADO_FEMORAL_l2boe5.jpg"
  }
};

const rawAnatomyItems: AccordionItem[] = [
  {
    title: "Tronco",
    muscles: [
      {
        group: "Tronco",
        name: "Oblicuo externo",
        function: "Flexión y rotación del tronco hacia el mismo lado.",
        origin: "Costillas 5 a 12.",
        insertion: "Línea alba, labio externo de la cresta ilíaca y ligamento inguinal."
      },
      {
        group: "Tronco",
        name: "Serrato anterior",
        function: "Protracción y rotación de la escápula; ayuda a elevar el brazo.",
        origin: "Caras externas de las primeras 8 a 9 costillas.",
        insertion: "Cara anterior del borde medial de la escápula, con énfasis en el ángulo inferior."
      },
      {
        group: "Pared abdominal",
        name: "Pared abdominal",
        function: "Protege, estabiliza, permite movimiento y participa en funciones vitales.",
        origin: "Costillas inferiores, cresta ilíaca y estructuras de la pelvis según el músculo.",
        insertion: "Línea alba, pubis, cresta ilíaca, costillas inferiores y cartílagos costales."
      },
      {
        group: "Pared abdominal",
        name: "Recto abdominal",
        function: "Flexión del tronco.",
        origin: "Pubis, incluyendo sínfisis y cresta del pubis.",
        insertion: "Proceso xifoides del esternón y cartílagos costales de las costillas 5 a 7."
      },
      {
        group: "Pared abdominal",
        name: "Transverso del abdomen",
        function: "Comprime las vísceras y aporta estabilidad al core.",
        origin: "Cara interna de cartílagos costales 7 a 12, fascia toracolumbar, cresta ilíaca y ligamento inguinal.",
        insertion: "Línea alba, cresta y pecten del pubis mediante el tendón conjunto."
      }
    ]
  },
  {
    title: "Miembro superior",
    muscles: [
      {
        group: "Hombro",
        name: "Pectoral mayor",
        function: "Aduce, rota internamente y flexiona el brazo.",
        origin: "Clavícula medial, esternón y cartílagos costales superiores.",
        insertion: "Labio lateral del surco intertubercular del húmero."
      },
      {
        group: "Hombro",
        name: "Deltoides anterior",
        function: "Flexión y rotación interna del brazo.",
        origin: "Tercio lateral de la clavícula.",
        insertion: "Tuberosidad deltoidea del húmero."
      },
      {
        group: "Hombro",
        name: "Deltoides medio",
        function: "Abducción del brazo.",
        origin: "Acromion de la escápula.",
        insertion: "Tuberosidad deltoidea del húmero."
      },
      {
        group: "Hombro",
        name: "Deltoides posterior",
        function: "Extensión y rotación externa del brazo.",
        origin: "Espina de la escápula.",
        insertion: "Tuberosidad deltoidea del húmero."
      },
      {
        group: "Hombro",
        name: "Supraespinoso",
        function: "Inicia la abducción del brazo.",
        origin: "Fosa supraespinosa de la escápula.",
        insertion: "Tubérculo mayor del húmero, parte superior."
      },
      {
        group: "Hombro",
        name: "Infraespinoso",
        function: "Rotación externa del brazo.",
        origin: "Fosa infraespinosa de la escápula.",
        insertion: "Tubérculo mayor del húmero, parte media."
      },
      {
        group: "Hombro",
        name: "Subescapular",
        function: "Rotación interna del brazo.",
        origin: "Fosa subescapular de la escápula, cara anterior.",
        insertion: "Tubérculo menor del húmero."
      },
      {
        group: "Hombro",
        name: "Redondo menor",
        function: "Rotación externa del brazo.",
        origin: "Borde lateral de la escápula.",
        insertion: "Tubérculo mayor del húmero, parte inferior."
      },
      {
        group: "Hombro",
        name: "Redondo mayor",
        function: "Aducción, extensión y rotación interna del brazo.",
        origin: "Ángulo inferior de la escápula.",
        insertion: "Labio medial del surco intertubercular del húmero."
      },
      {
        group: "Hombro",
        name: "Dorsal ancho",
        function: "Extensión, aducción y rotación interna del brazo.",
        origin: "Vértebras torácicas inferiores, fascia toracolumbar, cresta ilíaca y costillas inferiores.",
        insertion: "Fondo del surco intertubercular del húmero."
      },
      {
        group: "Hombro",
        name: "Manguito rotador",
        function: "Estabiliza la articulación del hombro.",
        origin: "Fosas y bordes de la escápula según sus cuatro músculos.",
        insertion: "Supraespinoso, infraespinoso y redondo menor en el tubérculo mayor; subescapular en el tubérculo menor."
      },
      {
        group: "Brazo",
        name: "Coracobraquial",
        function: "Flexiona y aduce el brazo.",
        origin: "Apófisis coracoides de la escápula.",
        insertion: "Cara medial del húmero, zona media."
      },
      {
        group: "Brazo",
        name: "Bíceps braquial",
        function: "Flexión del codo y supinación.",
        origin: "Cabeza larga: tubérculo supraglenoideo; cabeza corta: apófisis coracoides de la escápula.",
        insertion: "Tuberosidad del radio y aponeurosis bicipital."
      },
      {
        group: "Brazo",
        name: "Braquial anterior",
        function: "Principal flexor del codo.",
        origin: "Cara anterior del húmero, mitad distal.",
        insertion: "Tuberosidad de la ulna y apófisis coronoides."
      },
      {
        group: "Antebrazo",
        name: "Braquiorradial",
        function: "Flexión del codo en posición neutra.",
        origin: "Cresta supracondílea lateral del húmero.",
        insertion: "Apófisis estiloides del radio."
      },
      {
        group: "Antebrazo",
        name: "Ancóneo",
        function: "Ayuda a la extensión del codo.",
        origin: "Epicóndilo lateral del húmero.",
        insertion: "Olécranon y parte superior posterior de la ulna."
      },
      {
        group: "Antebrazo",
        name: "Pronador redondo",
        function: "Pronación y flexión débil del antebrazo.",
        origin: "Epicóndilo medial del húmero y apófisis coronoides de la ulna.",
        insertion: "Cara lateral del radio, zona media."
      },
      {
        group: "Antebrazo",
        name: "Pronador cuadrado",
        function: "Pronación del antebrazo.",
        origin: "Cara anterior distal de la ulna.",
        insertion: "Cara anterior distal del radio."
      },
      {
        group: "Antebrazo",
        name: "Supinador",
        function: "Supinación del antebrazo.",
        origin: "Epicóndilo lateral del húmero, ligamentos colateral radial y anular, y cresta del supinador de la ulna.",
        insertion: "Superficies lateral, anterior y posterior del radio proximal."
      },
      {
        group: "Mano",
        name: "Abductor del pulgar",
        function: "Separa el pulgar.",
        origin: "No detallado en el contenido base para las porciones larga y corta.",
        insertion: "Abductor largo: base del primer metacarpiano; abductor corto: base de la falange proximal del pulgar."
      },
      {
        group: "Mano",
        name: "Aductor del pulgar",
        function: "Acerca el pulgar.",
        origin: "Cabeza oblicua: huesos del carpo y bases del 2.º y 3.º metacarpianos; cabeza transversa: cara anterior del 3.er metacarpiano.",
        insertion: "Base de la falange proximal del pulgar, lado medial."
      },
      {
        group: "Mano",
        name: "Flexor corto del pulgar",
        function: "Flexiona el pulgar.",
        origin: "Cabeza superficial: retináculo flexor y trapecio; cabeza profunda: trapecio, trapezoide y grande.",
        insertion: "Base de la falange proximal del pulgar, cara lateral, con sesamoideos."
      },
      {
        group: "Mano",
        name: "Oponente del pulgar",
        function: "Oposición del pulgar para el agarre.",
        origin: "Retináculo flexor y hueso trapecio.",
        insertion: "Cara lateral y anterior del primer metacarpiano."
      },
      {
        group: "Mano",
        name: "Abductor del meñique",
        function: "Separa el quinto dedo.",
        origin: "Hueso pisiforme.",
        insertion: "Base de la falange proximal del meñique."
      },
      {
        group: "Mano",
        name: "Oponente del meñique",
        function: "Oposición del meñique.",
        origin: "Gancho del hueso ganchoso y retináculo flexor.",
        insertion: "Borde medial del quinto metacarpiano."
      },
      {
        group: "Mano",
        name: "Lumbricales",
        function: "Flexión MCP y extensión IP.",
        origin: "Tendones del flexor profundo de los dedos.",
        insertion: "Expansión dorsal de los dedos."
      },
      {
        group: "Mano",
        name: "Interóseos dorsales",
        function: "Abducción de los dedos.",
        origin: "Caras adyacentes de los metacarpianos.",
        insertion: "Base de la falange proximal de los dedos 2.º, 3.º y 4.º."
      },
      {
        group: "Mano",
        name: "Interóseos palmares",
        function: "Aducción de los dedos.",
        origin: "Caras de los metacarpianos 2.º, 4.º y 5.º.",
        insertion: "Base de la falange proximal de los dedos 2.º, 4.º y 5.º, hacia el dedo medio."
      },
      {
        group: "Mano",
        name: "Palmar corto",
        function: "Tensa la piel de la palma.",
        origin: "Aponeurosis palmar y retináculo flexor.",
        insertion: "Piel del borde medial de la mano."
      },
      {
        group: "Flexores",
        name: "Flexor radial del carpo",
        function: "Flexión y abducción de la muñeca.",
        origin: "Epicóndilo medial del húmero.",
        insertion: "Base del 2.º metacarpiano y, a veces, base del 3.º metacarpiano."
      },
      {
        group: "Flexores",
        name: "Flexor cubital del carpo",
        function: "Flexión y aducción de la muñeca.",
        origin: "Epicóndilo medial del húmero, olécranon y borde posterior de la ulna.",
        insertion: "Pisiforme, con expansiones al ganchoso y 5.º metacarpiano."
      },
      {
        group: "Flexores",
        name: "Palmar largo",
        function: "Flexión de muñeca.",
        origin: "Epicóndilo medial del húmero.",
        insertion: "Aponeurosis palmar y retináculo flexor."
      },
      {
        group: "Flexores",
        name: "Flexor superficial de los dedos",
        function: "Flexiona los dedos en las falanges medias.",
        origin: "Epicóndilo medial del húmero, apófisis coronoides de la ulna y parte del radio.",
        insertion: "Falanges medias de los dedos 2 a 5, en sus lados."
      },
      {
        group: "Flexores",
        name: "Flexor profundo de los dedos",
        function: "Flexiona las falanges distales.",
        origin: "Cara anterior y medial de la ulna y membrana interósea.",
        insertion: "Falanges distales de los dedos 2 a 5."
      },
      {
        group: "Flexores",
        name: "Flexor largo del pulgar",
        function: "Flexiona el pulgar.",
        origin: "Cara anterior del radio y membrana interósea.",
        insertion: "Falange distal del pulgar."
      },
      {
        group: "Extensores",
        name: "Extensor radial largo y corto del carpo",
        function: "Extensión de muñeca.",
        origin: "No detallado en el contenido base.",
        insertion: "Largo: 2.º metacarpiano; corto: 3.er metacarpiano."
      },
      {
        group: "Extensores",
        name: "Extensor cubital del carpo",
        function: "Extensión y aducción de la muñeca.",
        origin: "Epicóndilo lateral del húmero y borde posterior de la ulna.",
        insertion: "Base del quinto metacarpiano."
      },
      {
        group: "Extensores",
        name: "Extensor de los dedos",
        function: "Extensión de los dedos.",
        origin: "Epicóndilo lateral del húmero.",
        insertion: "Expansión dorsal de los dedos 2 a 5."
      },
      {
        group: "Extensores",
        name: "Extensor del meñique",
        function: "Extensión del quinto dedo.",
        origin: "Epicóndilo lateral del húmero.",
        insertion: "Expansión dorsal del meñique."
      },
      {
        group: "Extensores",
        name: "Extensor del índice",
        function: "Extensión del índice.",
        origin: "Cara posterior de la ulna y membrana interósea.",
        insertion: "Expansión dorsal del índice."
      },
      {
        group: "Extensores",
        name: "Abductor largo del pulgar",
        function: "Abduce el pulgar.",
        origin: "Caras posteriores de la ulna y el radio, más membrana interósea.",
        insertion: "Base del primer metacarpiano."
      }
    ]
  },
  {
    title: "Miembro inferior",
    muscles: [
      {
        group: "Cadera",
        name: "Glúteo mayor",
        function: "Extensión y rotación externa de la cadera.",
        origin: "Cresta ilíaca, sacro y cóccix.",
        insertion: "Tracto iliotibial y tuberosidad glútea."
      },
      {
        group: "Cadera",
        name: "Glúteo medio y menor",
        function: "Abducción y estabilidad pélvica.",
        origin: "Glúteo medio: cara externa del ilion. Glúteo menor: porción inferior del ilion.",
        insertion: "Trocánter mayor."
      },
      {
        group: "Cadera",
        name: "Piriforme",
        function: "Rotación externa de la cadera.",
        origin: "Sacro.",
        insertion: "Trocánter mayor."
      },
      {
        group: "Cadera",
        name: "Obturador interno",
        function: "Rotación externa de la cadera.",
        origin: "Membrana obturatriz.",
        insertion: "Trocánter mayor."
      },
      {
        group: "Cadera",
        name: "Géminos superior e inferior",
        function: "Rotación externa de la cadera.",
        origin: "No detallado en el contenido base.",
        insertion: "Se unen al tendón del obturador interno hacia el trocánter mayor."
      },
      {
        group: "Cadera",
        name: "Cuadrado femoral",
        function: "Rotación externa de la cadera.",
        origin: "Tuberosidad isquiática, borde lateral del isquion.",
        insertion: "Tubérculo cuadrado en la cresta intertrocantérica del fémur."
      },
      {
        group: "Flexores de cadera",
        name: "Psoas mayor, psoas menor e ilíaco",
        function: "Flexión de cadera.",
        origin: "No detallado en el contenido base.",
        insertion: "Psoas mayor e ilíaco: trocánter menor del fémur mediante tendón común. Psoas menor: eminencia iliopúbica y línea pectínea del pubis."
      },
      {
        group: "Muslo anterior",
        name: "Tensor de la fascia lata",
        function: "Abducción y estabilización.",
        origin: "Espina ilíaca anterosuperior y parte adyacente de la cresta ilíaca.",
        insertion: "Cintilla iliotibial, que desciende hasta el tubérculo de Gerdy de la tibia."
      },
      {
        group: "Muslo anterior",
        name: "Sartorio",
        function: "Flexión, abducción y rotación externa.",
        origin: "Espina ilíaca anterosuperior.",
        insertion: "Tibia medial, en la pata de ganso."
      },
      {
        group: "Muslo anterior",
        name: "Recto femoral",
        function: "Flexiona la cadera y extiende la rodilla.",
        origin: "Espina ilíaca anteroinferior y surco supraacetabular.",
        insertion: "Rótula, ligamento patelar y tibia."
      },
      {
        group: "Muslo anterior",
        name: "Vastos medial y lateral",
        function: "Extensión de rodilla.",
        origin: "Vasto lateral: trocánter mayor del fémur y labio lateral de la línea áspera. Vasto medial: línea intertrocantérica y labio medial de la línea áspera.",
        insertion: "Rótula mediante el tendón del cuádriceps; continúan como ligamento patelar hasta la tuberosidad de la tibia."
      },
      {
        group: "Aductores",
        name: "Pectíneo",
        function: "Aducción y flexión del muslo.",
        origin: "Pecten del pubis, en la rama superior del pubis.",
        insertion: "Línea pectínea del fémur, justo por debajo del trocánter menor."
      },
      {
        group: "Aductores",
        name: "Aductores corto, largo y magno",
        function: "Aducción del muslo.",
        origin: "Aductor corto: cuerpo y rama inferior del pubis. Aductor largo: cuerpo del pubis cerca de la sínfisis. Aductor magno: rama inferior del pubis, rama del isquion y tuberosidad isquiática.",
        insertion: "Aductor corto: línea pectínea y parte proximal de la línea áspera. Aductor largo: tercio medio de la línea áspera. Aductor magno: línea áspera y tubérculo del aductor del fémur."
      },
      {
        group: "Aductores",
        name: "Grácil",
        function: "Aducción y flexión de rodilla.",
        origin: "Cuerpo y rama inferior del pubis.",
        insertion: "Cara medial de la tibia, formando parte de la pata de ganso."
      },
      {
        group: "Muslo posterior",
        name: "Bíceps femoral",
        function: "Flexión de rodilla y extensión de cadera.",
        origin: "Cabeza larga: tuberosidad isquiática. Cabeza corta: parte posterior del fémur.",
        insertion: "Cabeza del peroné o fíbula, en la parte lateral de la rodilla."
      },
      {
        group: "Muslo posterior",
        name: "Semitendinoso",
        function: "Flexión de rodilla y extensión de cadera.",
        origin: "Tuberosidad isquiática del hueso coxal.",
        insertion: "Cara medial de la tibia, en su parte superior."
      },
      {
        group: "Muslo posterior",
        name: "Semimembranoso",
        function: "Flexión de rodilla y extensión de cadera.",
        origin: "Tuberosidad isquiática.",
        insertion: "Cara posterior del cóndilo medial de la tibia; también emite una expansión que forma el ligamento poplíteo oblicuo."
      },
      {
        group: "Pierna posterior",
        name: "Gastrocnemios",
        function: "Flexión plantar y flexión de rodilla.",
        origin: "Cabeza medial en el cóndilo medial del fémur y cabeza lateral en el cóndilo lateral del fémur.",
        insertion: "Ambas cabezas forman el tendón calcáneo o tendón de Aquiles, que se inserta en el calcáneo."
      },
      {
        group: "Pierna posterior",
        name: "Sóleo",
        function: "Flexión plantar.",
        origin: "Línea del sóleo en la cara posterior de la tibia, cabeza y cara posterior de la fíbula, y arco tendinoso entre tibia y fíbula.",
        insertion: "Calcáneo a través del tendón calcáneo o tendón de Aquiles."
      },
      {
        group: "Pierna posterior",
        name: "Tibial posterior",
        function: "Inversión del pie.",
        origin: "Cara posterior de la tibia por debajo de la línea del sóleo, cara posterior de la fíbula y membrana interósea.",
        insertion: "Tuberosidad del navicular, con expansiones hacia cuneiformes, cuboides y bases de metatarsianos."
      },
      {
        group: "Pierna posterior",
        name: "Flexor largo del hallux",
        function: "Flexiona el dedo gordo.",
        origin: "Dos tercios inferiores de la cara posterior de la fíbula y membrana interósea.",
        insertion: "Base de la falange distal del hallux."
      },
      {
        group: "Pierna posterior",
        name: "Flexor largo de los dedos",
        function: "Flexión de los dedos.",
        origin: "Cara posterior de la tibia, por debajo de la línea del sóleo.",
        insertion: "Bases de las falanges distales de los dedos 2 a 5."
      },
      {
        group: "Pierna lateral",
        name: "Peroneo largo y corto",
        function: "Eversión del pie.",
        origin: "Peroneo largo: cabeza y dos tercios proximales de la fíbula. Peroneo corto: dos tercios distales de la fíbula.",
        insertion: "Peroneo largo: base del primer metatarsiano y cuneiforme medial. Peroneo corto: base del quinto metatarsiano."
      },
      {
        group: "Pierna lateral",
        name: "Tercer peroneo",
        function: "Ayuda a la dorsiflexión.",
        origin: "Tercio distal de la cara anterior de la fíbula y membrana interósea.",
        insertion: "Cara dorsal de la base del quinto metatarsiano."
      },
      {
        group: "Pierna anterior",
        name: "Tibial anterior",
        function: "Dorsiflexión e inversión.",
        origin: "Cóndilo lateral de la tibia, dos tercios superiores de la cara lateral de la tibia y membrana interósea.",
        insertion: "Cuneiforme medial y base del primer metatarsiano."
      },
      {
        group: "Pierna anterior",
        name: "Extensor largo de los dedos",
        function: "Extensión de los dedos.",
        origin: "Cóndilo lateral de la tibia, cara anterior de la fíbula y membrana interósea.",
        insertion: "Falanges media y distal de los dedos 2 a 5 mediante expansiones dorsales."
      },
      {
        group: "Pierna anterior",
        name: "Extensor largo del hallux",
        function: "Extensión del dedo gordo.",
        origin: "Cara anterior de la fíbula, especialmente en su porción media, y membrana interósea.",
        insertion: "Base de la falange distal del hallux."
      }
    ]
  }
];

const anatomyItems: AccordionItem[] = rawAnatomyItems.map((section) => ({
  ...section,
  muscles: section.muscles.map((muscle) => ({
    ...muscle,
    ...muscleMedia[muscle.name]
  }))
}));

export function Anatomy() {
  return (
    <Section
      id="anatomia"
      eyebrow="Anatomía"
      title="Mapa muscular por regiones"
      description="El tronco conecta la cabeza con las extremidades. Desde esta región central se organizan músculos de la pared abdominal, hombro, brazo, antebrazo, mano, cadera, muslo y pierna."
      className="bg-slate-950/35"
    >
      <Accordion items={anatomyItems} />
    </Section>
  );
}
