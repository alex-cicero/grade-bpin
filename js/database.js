/* Number of total semesters: */
window.semesters = 10;

/* List of available colors to toggle a course as completed */
/* The first color is default for selecting options as well, so make sure to choose that one wisely */
window.colors = ["#b1fca4", "#fac6ff", "#a8c9ff", "#ff6347", "#9400d3", "#19dfda", "#ff7373", "#223bf6"];


window.courses = [
    [
    { name: "Biologia Molecular", credits: 1, code: "BMH126", semester: 1},
    { name: "Embriologia", credits: 1, code: "BMH127", semester: 1},
    { name: "Bioquímica I", credits: 3, code: "BQM101", semester: 1},
    { name: "ICF", credits: 2, code: "FFC111", semester: 1},
    { name: "Metodologia Científica", credits: 2, code: "FFP111", semester: 1},
    { name: "Biofísica", credits: 3, code: "FFW112", semester: 1, corequirements: [1]},
    { name: "Química Geral I", credits: 4, code: "IQG114", semester: 1},
    { name: "Cálculo p/ Farmácia", credits: 3, code: "MAC108", semester: 1},
    { name: "PCI I ", credits: 8, code: "BMW203", semester: 2, requirements: [0, 2]},
    { name: "Bioquímica II", credits: 4, code: "BQM103", semester: 2, requirements: [2]},
    { name: "Química Geral II", credits: 3, code: "IQG127", semester: 2, requirements: [6]},
    { name: "Química Orgânica I", credits: 4, code: "IQO120", semester: 2, requirements: [6]},
    { name: "Bioestatística", credits: 3, code: "MAD237", semester: 2},
    { name: "Atividades Acad. Optativas", credits: 2, semester: 2},
    { name: "PCI II", credits: 11, code: "BMW204", semester: 3, requirements: [8]},
    { name: "Química Analítica I", credits: 2, code: "IQA123", semester: 3, requirements: [6], corequirements: [16]},
    { name: "Química Analítica Exp. I", credits: 2, code: "IQA124", semester: 3, requirements: [6], corequirements: [15]},
    { name: "Físico-Química ", credits: 4, code: "IQF235", semester: 3, requirements:[7]},
    { name: "Química Orgânica II", credits: 3, code: "IQO230", semester: 3, requirements:[11]},
    { name: "Química Orgânica Exp. I", credits: 2, code: "IQO242", semester: 3, requirements: [10, 11]},
    { name: "Farmacobotânica", credits: 3, code: "FFP600", semester: 4},
    { name: "Iniciacao Científica", credits: 2, code: "FFP111", semester: 4, requirements: [4]},
    { name: "Química Analítica II", credits: 2,code: "IQA233", semester: 4, requirements: [15, 16], corequirements: [23]},
    { name: "Química Analítica Exp. II", credits: 2, code: "IQA234", semester: 4, requirements: [15, 16], corequirements: [22]},
    { name: "Bioinorgânica", credits: 4, code: "IQG234", semester: 4, requirements: [10]},
    { name: "Métodos Espectrométricos", credits: 3, code: "IQO220", semester: 4, requirements: [18, 19]},
    { name: "Química Orgânica III", credits: 3, code: "IQO240", semester: 4, requirements: [18]},
    { name: "Atividades Acad. Optativas", credits: 3, semester: 4},
    { name: "Farmacocinética e Farmacodinâmica", credits: 2, code: "BMF310", semester: 5, requirements: [9, 14]},
    { name: "Saúde Coletiva", credits: 2, code: "FFC303", semester: 5},
    { name: "Análises Farmacêuticas", credits: 5, code: "FFM302", semester: 5, requirements: [17, 22, 23]},
    { name: "Política de Saúde", credits: 2, code: "FFM311", semester: 5},
    { name: "Microbiologia e Imunologia", credits: 8, code: "IMW360", semester: 5, requirements: [2]},
    { name: "Química Orgânica Exp. II", credits: 2, code: "IQO251", semester: 5, requirements: [19, 25, 26]},
    { name: "Atividades Acad. Optativas", credits: 2, semester: 5},
    { name: "Farmacologia Neuroendócrina", credits: 4, code: "BFM320", semester:6, requirements: [14, 28]},
    { name: "Parasitologia", credits: 3, code: "CFP215", semester: 6, requirements: [14, 32]},
    { name: "Micro Imuno Clínica", credits: 3, code: "FFC480", semester: 6, requirements: [32]},
    { name: "Metabolismo Integrado", credits: 4, code: "FFI311", semester: 6, requirements: [9]},
    { name: "Farmacotécnica I", credits: 4, code: "FFM313", semester: 6, requirements: [28]},
    { name: "Farmacognosia I", credits: 3, code: "FFP313", semester: 6, requirements: [20, 26]},
    { name: "Química de Alimentos", credits: 3, code: "FFP324", semester: 6, requirements: [9, 22]},
    { name: "Farmacologia Cardio/Quimio", credits: 4, code: "BMF410", semester: 7, requirements: [14, 35]},
    { name: "Bioquímica Clínica", credits: 3, code: "FFC304", semester: 7, requirements: [9, 14]},
    { name: "Diagnóstico Clínico Laboratorial", credits: 2, code: "FFC321", semester: 7, requirements: [32, 36]},
    { name: "Hematologia", credits: 2, code: "FFC322", semester:7, requirements: [14]},
    { name: "Farmacotécnica II", credits: 4, code: "FFM323", semester: 7, requirements: [39]},
    { name: "Assist. e Atenção Farm.", credits: 2, code: "FFM481", semester: 7, requirements: [35, 39]},
    { name: "Estágio Sup. Farm. Comun.", credits: 2, code: "FFM481", semester: 7, requirements: [28, 39]},
    { name: "Farmacognosia II", credits: 3, code: "FFP323", semester: 7, requirements: [40]},
    { name: "Análises de Alimentos", credits: 3, code: "FFP403", semester: 7, requirements: [41]},
    { name: "Parasitologia e Micologia Clínica", credits: 3, code: "FFC406", semester: 8, requirements: [36]},
    { name: "Química Farm. Med.", credits: 5, code: "FFI401", semester: 8, requirements: [26, 42]},
    { name: "Farmácia Hospitalar", credits: 2, code: "FFM300", semester: 8, corequirements: [42, 46]},
    { name: "Deonto. e Legisl. Farmacêutica", credits: 2, code: "FFM301", semester: 8},
    { name: "Farmaco-epidemiologia", credits: 2, code: "FFM402", semester: 8, requirements: [12, 29]},
    { name: "Farmacotécnica Hospitalar", credits: 2, code: "FFM403", semester: 8, requirements: [46], corequirements: [53]},
    { name: "Tecnologia Ind. Farm.", credits: 4, code: "FFM408", semester: 8, requirements: [10, 39]},
    { name: "Estág. Sup. Farm. Manip. Alopática", credits: 2, code: "FFMU07", semester: 8, corequirements: [42, 46]},
    { name: "Bromatologia em Saúde", credits: 3, code: "FFP402", semester: 8, requirements: [41]},
    { name: "Atividades Acad. Livre. Esc.", credits: 2, semester: 8},
    { name: "Atividades Acad. Optativas", credits: 2, semester: 8},
    { name: "Toxicologia Geral", credits: 3, code: "FFC314", semester: 9, requirements:[26, 28]},
    { name: "Con. Bio. Micro. Quali. Pro. Farma.", credits: 4, code: "FFI402", semester: 9, requirements:[28, 32]},
    { name: "Biofarmácia", credits: 2, code: "FFM405", semester: 9, requirements: [46]},
    { name: "Dermocosméticos", credits: 2, code: "FFM406", semester: 9, requirements: [39]},
    { name: "Biotecnologia Farmacêutica", credits: 3, code: "FFM426", semester: 9, requirements: [32, 38]},
    { name: "Estágio Sup. Farmácia Hosp.", credits: 2, code: "FFMU08", semester: 9, requirements: [42, 46, 53]},
    { name: "TCC", credits: 0, code: "FFWK02", semester: 9, requirements: [21]},
    { name: "Economia e Adm, Empr. Farm.", credits: 3, code: "IEEE326", semester: 9},
    { name: "Atividades Acad. Livre. Esc.", credits: 3, semester: 9},
    { name: "Atividades Acad. Optativas", credits: 6, semester: 9, step: 1},
    { name: "Estágio Sup Especialidades", credits:8, code: "FFWU06", semester: 10},
    ],
    [
    /*0*/ { name: "Gramática Txt L. Inglesa", credits: 5, code: "LEG113", semester: 1, category: 1, workload: 90},  
    /*1*/ { name: "Intro. L. Grega", credits: 4, code: "LEC111", semester: 1, category: 1, workload: 60},
    /*2*/ { name: "Prod. Leitura Txt. em LP", credits: 2, code: "LEV113", semester: 1, category: 1, workload: 60}, 
    /*3*/ { name: "Intro. L. Latina", credits: 4, code: "LEC160", semester: 1, category: 1, workload: 60},
    /*4*/ { name: "Fund. Linguística", credits: 4, code: "LEF140", semester: 1, category: 1, workload: 60},
    /*5*/ { name: "Teoria Literária I", credits: 4, code: "LEL100", semester: 1, category: 1, workload: 60},
    /*6*/ { name: "Prod. Escrita L. Inglesa", credits: 3, code: "LEG122", semester: 2, requirements: [0], category: 1, workload: 60},
    /*X*/ { name: "Intro. Lit. Grega", credits: 4, code: "LEC115", semester: 2, requirements: [1], workload: 60},
    /*7*/ { name: "Variação da LP", credits: 4, code: "LEV100", semester: 2, category: 1, workload: 60},
    /*8*/ { name: "Oratória Latim", credits: 4, code: "LEC166", semester: 2, requirements: [3], category: 1, workload: 60},
    /*9*/ { name: "Fund. Análise Fonológica", credits: 4, code: "LEF150", semester: 2, requirements: [4], category: 1, workload: 60},
    /*X*/ { name: "Teoria Literária II", credits: 4, code: "LEL110", semester: 2, workload: 60},
    /*X*/ { name: "Filosofia Educ. Mundo Ocid.", credits: 4, code: "EDF120", semester: 2, workload: 60},    
    /*10*/ { name: "Aq. Inglês Segunda L.", credits: 4, code: "LEG112", semester: 3, requirements: [0,6], category: 1, workload: 60},
    /*11*/ { name: "Intro. Lit. L. Inglesa", credits: 4, code: "LEG231", semester: 3, requirements: [0,6], category: 1, workload: 60},
    /*12*/ { name: "Fonologia da LP", credits: 4, code: "LEV112", semester: 3, requirements: [2,8], category: 1, workload: 60},
    /*13*/ { name: "Lírica Latim", credits: 4, code: "LEC262", semester: 3, requirements: [9], category: 1, workload: 60},
    /*X*/ { name: "Fund. Análise Sintática", credits: 4, code: "LEF240", semester: 3, requirements: [4], category: 1, workload: 60},
    /*X*/ { name: "Fund. Cult. Lit. Brasileira", credits: 2, code: "LEL287", semester: 3, requirements: [5], category: 1, workload: 60},
    /*14*/ { name: "Educ. Linguística L. Inglesa", credits: 3, code: "LEG241", semester: 4, requirements: [13,14], category: 1, workload: 60},
    /*15*/ { name: "Narrativa L. Inglesa I", credits: 4, code: "LEG222", semester: 4, category: 1, requirements: [13,14], workload: 60},
    /*16*/ { name: "Morfologia da LP", credits: 4, code: "LEV200", semester: 4, requirements: [2,8,15], category: 1, workload: 60},
    /*X*/ { name: "Ling. Lit. Latim: Narrativa", credits: 4, code: "LEC266", semester: 4, requirements: [13], category: 1, workload: 60},
    /*X*/ { name: "Linguística e suas Aplicações", credits: 2, code: "LEF244", semester: 4, requirements: [4], workload: 30},
    /*X*/ { name: "Teoria Literária III", credits: 4, code: "LEL230", semester: 4, workload: 60},
    /*17*/ { name: "Fonologia da L. Inglesa", credits: 4, code: "LEG301", semester: 5, requirements: [13], category: 1, workload: 75},
    /*18*/ { name: "Lógica Matemática", credits: 4, code: "LEG241", semester: 5, category: 1, workload: 60},
    /*19*/ { name: "Álg. Linear Computacional", credits: 4, code: "COC473", semester: 5, requirements: [7, 16], category: 1, workload: 60},
    /*X*/ { name: "Redes de Computadores I", credits: 4, code: "EEL878", semester: 5, category: 1, workload: 75},
    /*X*/ { name: "Sistemas Operacionais", credits: 5, code: "EEL770", semester: 5, category: 1, workload: 75},
    /*X*/ { name: "Química Experimental", credits: 2, code: "IQG112", semester: 5, category: 1, workload: 60},
    /*20*/ { name: "Otimização", credits: 4, semester: 6, code: "COS360", requirements: [0, ,7, 16], category: 1, workload: 60},
    /*21*/ { name: "Inteligência Computacional", credits: 4, code: "COC361", semester: 6, category: 1, workload: 60},
    /*22*/ { name: "Engenharia de Software", credits: 4, code: "EEL873", semester: 6, category: 1, workload: 75},
    /*23*/ { name: "Redes de Computadores II", credits: 4, code: "EEL879", semester: 6, category: 1, workload: 60},
    /*24*/ { name: "Telecomunic.", credits: 4, code: "COE363", semester: 6, category: 1, workload: 60},
    /*25*/ { name: "Programação Avançada", credits: 4, code: "EEL418", semester: 7, requirements: [13, 6], category: 1, workload: 75},
    /*26*/ { name: "Computação de Alto Desempenho", credits: 3, code: "COC472", semester: 7, category: 1, workload: 75},
    /*X*/ { name: "Sistemas Distribuídos", credits: 4, code: "COS470", semester: 7, category: 1, workload: 60},
    /*X*/ { name: "Gestão do Conhecimento", credits: 4, code: "COP232", semester: 7, category: 1, workload: 60},
    /*X*/ { name: "Computação Gráfica", credits: 4, code: "EEL882", semester: 7, category: 1, workload: 75},
    /*X*/ { name: "Atividades Acad. Optativas", credits: 8, semester: 7, step: 1, category: 2, workload: 120},
    /*X*/ { name: "Construção de Banco de Dados", credits: 4, code: "COS480", semester: 8, requirements: [26], category: 1, workload: 60},
    /*X*/ { name: "Empreend. I", credits: 4, code: "COP364", semester: 8, category: 1, workload: 60},
    /*X*/ { name: "Qualidade de Software", credits: 4, code: "COS482", semester: 8, requirements: [34], category: 1, workload: 60},
    /*X*/ { name: "Projeto de Graduação", credits: 4, code: "EEWX00", semester: 8, category: 1, workload: 180},
    /*X*/ { name: "Atividades Acad. Optativas", credits: 8, semester: 8, step: 1, category: 2, workload: 120},
    /*X*/ { name: "Estágio Obrigatório", credits: 160, code: "EEWU00", semester: 9, category: 1, workload: 160},
    /*X*/ { name: "Atividades Acad. Optativas", credits: 16, semester: 9, step: 1, category: 2, workload: 240},
    /*X*/ { name: "Atividades Acad. Optativas", credits: 8, semester: 10, step: 1, category: 2, workload: 120},
    /*X*/ { name: "Atividades Acad. Livre Escolha", credits: 8, semester: 10, step: 1, category: 3, workload: 120},
    /*X*/ { name: "Ativ. Compl. Especiais", credits: 405, semester: 10, step: 15, category: 5, workload: 405},
    ]
]
