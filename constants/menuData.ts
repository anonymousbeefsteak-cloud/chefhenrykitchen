
import type { MenuCategory } from '../types';

export const menuData: MenuCategory[] = [
    {
        title: "Breads & Soups",
        items: [
            { id: "b1", name: "HOME MADE BREAD", description: "focaccia with balsamic reduction & extra virgin olive oil, whipped butter", price: "$4.95", priceValue: 4.95, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/bread-1920w.jpg" },
            { id: "b2", name: "GARLIC BREAD", description: "sliced home made crusty french bread toasted with garlic butter", price: "$4.95", priceValue: 4.95, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/garlic-1920w.jpg" },
            { id: "b3", name: "PORK RILLETTES AND BREAD", description: "a rustic French pork pâté spread (brown pork jam) with homemade bread", price: "$6.95", priceValue: 6.95, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/pork+pate+bread-1920w.jpg" },
            { id: "b4", name: "TOMATO CHEESE BREAD", description: "tomato marinaram sauce, mazzarella & parmesan cheese melted on focaccia bread", price: "$8.95", priceValue: 8.95, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/tomato+bread-1920w.jpg" },
            { id: "s1", name: "FRENCH ONION SOUP", price: "$18.00", priceValue: 18.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/onion-soup-ff70c88d-1920w.jpg" },
            { id: "s2", name: "SEAFOOD CHOWDER", price: "$18.00", priceValue: 18.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/chowder-a2521c66-1920w.jpg" },
            { id: "s3", name: "LOBSTER BISQUE", description: "with lobster arancini", price: "$24.00", priceValue: 24.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/lobster-bisq-1920w.jpg" },
        ]
    },
    {
        title: "Appetizers & Salads",
        items: [
            { id: "sa1", name: "HOUSE SALAD", description: "spring mix and crisp romaine lettuce tossed with our house dressing and balsamic reduction", price: "(S) $14.95 (L)$16.95", priceValue: 14.95, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/hou.salad-1920w.jpg" },
            { id: "sa2", name: "CAESAR SALAD", description: "crisp romaine lettuce with homemade Caesar dressing, parmesan cheese and homemade garlic crouton", price: "(S) $14.95 (L)$16.95", priceValue: 14.95, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/ceaser-1920w.jpg" },
            { id: "sa3", name: "SALMON GRAVLAX", description: "with orange fennel salad", price: "$18.00", priceValue: 18.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/samoln+G-1920w.jpg" },
            { id: "sa4", name: "MUSHROOM FRICASSEE", description: "sautéed assorted mushrooms on baby spinach salad with balsamic reduction & walnuts", price: "$18.00", priceValue: 18.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/mushroom-Fri-1920w.jpg" },
            { id: "sa5", name: "BAKED GOAT CHEESE SALAD", description: "with pistachio crust on spinach, pear & mixed berry salad", price: "$18.00", priceValue: 18.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/GOAT-CHEESE-d558f8b1-afba1750-1920w.jpg" },
            { id: "sa6", name: "BEEF CARPACCIO", description: "Dressed with Dijon mustard, lemon, capers, parmigigiano, truffle oil", price: "$28.00", priceValue: 28.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/beef-carpio-1920w.jpg" },
        ]
    },
    {
        title: "Hot Appetizers",
        items: [
            { id: "ha1", name: "ESCARGOTS A LAD PARISIENNE", description: "baked snails in a cognac, garlic, & herb butter", price: "$18.00", priceValue: 18.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/ecsago-a9f326c4-1920w.jpg" },
            { id: "ha2", name: "SIGNATURE CRAB CAKE", description: "served on avocado, tomato salsa, mango couils & wasabi aioli", price: "$18.00", priceValue: 18.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/carb+cake-1920w.jpg" },
            { id: "ha3", name: "FROG LEGS FEUILLETTES", description: "sautéed with mushroom & Riesling cream sauce served in a flaky puff pastry", price: "$28.00", priceValue: 28.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/frog+legs-1920w.jpg" },
            { id: "ha4", name: "ROASTED QUAIL & FOIE GRAS", description: "Roasted quail stuffed with wild rice, mushroom & foie gras, wrapped in prosciutto, served with grapes & walnuts", price: "$28.00", priceValue: 28.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/quail+app-1920w.jpg" },
            { id: "ha5", name: "CRISP PRAWNS WRAPPED IN ANGEL HAIR", description: "served on carrot raisin salad with mango salsa", price: "$18.00", priceValue: 18.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/crisp-prawns-c7f0c313-1920w.jpg" },
        ]
    },
    {
        title: "The Classic Art of Pasta",
        items: [
            { id: "p1", name: "PENNE POMODORO", description: "with Italian plum tomatoes and fresh basil", price: "$30.00", priceValue: 30.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/tom-1920w.jpg" },
            { id: "p2", name: "PENNE ALFREDO", description: "tossed in a rich parmigiano cheese cream sauce", price: "$30.00", priceValue: 30.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/cream-1920w.jpg" },
            { id: "p3", name: "LINGUINE CARBONARA", description: "with pancetta, parmesan cheese, and custard cream sauce", price: "$32.00", priceValue: 32.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/caro-pasta-1920w.jpg" },
            { id: "p4", name: "LINGUINE POLLO PESTO", description: "with chicken tossed in fresh basil pesto cream sauce", price: "$32.00", priceValue: 32.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/pesto-1920w.jpg" },
            { id: "p5", name: "LINGUINE SALMON AFFUMICATO", description: "with smoked salmon and sun-dried tomatoes in a light cream sauce", price: "$35.00", priceValue: 35.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/salmon-pasta-1920w.jpg" },
            { id: "p6", name: "LINGUINE AGLIO OLIO", description: "with garlic, chili, white wine, butter, basil, parsley, and extra virgin olive oil", price: "$30.00", priceValue: 30.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/aliolo-6d7b7ab1-1920w.jpg" },
            { id: "p7", name: "LINGUINE AMATRICIANA", description: "with pancetta, garlic, shallot, chili, spicy tomatoes sauce", price: "$32.00", priceValue: 32.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/AM-8032bb9b-1920w.jpg" },
            { id: "p8", name: "LINGUINE SALSICCIA", description: "with sautéed Italian sausage in spicy tomato sauce", price: "$32.00", priceValue: 32.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/sausage-1920w.jpg" },
            { id: "p9", name: "LINGUINE PESCATORA", description: "with mussels, prawns, scallops, clams, and calamari in spicy tomato sauce", price: "$35.00", priceValue: 35.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/seafood+pasta-1920w.jpg" },
            { id: "p10", name: "LINGUINE VONGOLE", description: "with clam in garlic, chili, white wine & extra virgin olive oil", price: "$35.00", priceValue: 35.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/clam-1920w.jpg" },
            { id: "p11", name: "LINGUINE GAMBERONI", description: "with sautéed prawns in tomato Rosé sauce", price: "$35.00", priceValue: 35.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/ling+PARWNS-1920w.jpg" },
            { id: "p12", name: "RISOTTO FUNGHI", description: "with a medley of portobellini, shiitake & shimeji mushroom, aromatics with truffle oil", price: "$35.00", priceValue: 35.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/RISOTO-funghi-1920w.jpg" },
            { id: "p13", name: "RISOTTO DUCK", description: "smoked Duck Breast with artichokes, sun dried tomatoes, peas and parmigiano cheese", price: "$38.00", priceValue: 38.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/risoto-duck-1920w.jpg" },
        ]
    },
    {
        title: "Chef's Recommendations",
        items: [
            { id: "cr1", name: "BOUILLABAISSE MARSEILLAISE", description: "A medley of fish & shell fish cooked in aromatic fish soup served with rouille sauce & garlic crouton", price: "$68.00", priceValue: 68.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/bouiabsa-6c0226f0-1920w.jpg" },
            { id: "cr2", name: "PAN-SEARED RED SNAPPER", description: "mushroom vermouth sauce", price: "$38.00", priceValue: 38.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/snapper-1920w.jpg" },
            { id: "cr3", name: "BAKED BLACK SABLE FISH", description: "with Olive Tapende, Tomato confit, capers and lemon infused olive oil", price: "$48.00", priceValue: 48.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/sable-1920w.jpg" },
        ]
    },
    {
        title: "Henry's Specialties",
        items: [
            { id: "hs1", name: "BEEF BOURGUIGNON", description: "braised beef shank in a tasty rich burgundy wine with mushrooms & onions and served on herb risotto & vegetables", price: "$38.00", priceValue: 38.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/beef+stew-1920w.jpg" },
            { id: "hs2", name: "DUCK BREAST", description: "roasted to your preference in a Grand Marnier orange sauce", price: "$42.00", priceValue: 42.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/duck+brest-1920w.jpg" },
            { id: "hs3", name: "BEEF WELLINGTON", description: "tenderloin of beef wrapped with prosciutto, foie gras purée, mushroom & truffle duxelle, baked in a flaky puff pastry", price: "$65.00", priceValue: 65.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/wellington-1920w.jpg" },
            { id: "hs4", name: "RACK OF LAMB", description: "with a Provençale herbs crust and rosemary jus", price: "$65.00", priceValue: 65.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/lamb-1920w.jpg" },
            { id: "hs5", name: "PORK MEDALLION", description: "with caramelized apple & blue cheese", price: "$38.00", priceValue: 38.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/pork+cut-1920w.jpg" },
            { id: "hs6", name: "ROAST CHICKEN", description: "succulent boneless free range chicken marinated in lemon garlic & rosemary roasted to perfection", price: "$38.00", priceValue: 38.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/roast+chix-585accf2-1920w.jpg" },
            { id: "hs7", name: "ROASTED RABBIT SADDLE ROULADE", description: "wrapped with proscuitto and wild morel mushroom", price: "$45.00", priceValue: 45.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/rabbit-1920w.jpg" },
            { id: "hs8", name: "PORK KNUCKLE", description: "Roasted cracking pork hock with sauerkrout", price: "$38.00", priceValue: 38.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/pork-Kn-1920w.jpg" },
            { id: "hs9", name: "VEAL T-BONE", description: "Grilled Veal T-Bone rubbed with garlic, lemon juice rosemary & ex virgin olive oil, jus de viande", price: "$48.00", priceValue: 48.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/T+bone-2f1e27c1-1920w.jpg" },
            { id: "hs10", name: "CASSOULET TOULOUSE", description: "A hearty french bean stew, baked with duck confit, sausage, and pork", price: "$38.00", priceValue: 38.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/casslout+2-1920w.jpg" },
            { id: "hs11", name: "DUCK CONFIT PERIGOURDINE", description: "Traditional slow cooked duck leg with sauteed mushroom, foie gars mousse madeira wine & truffle jus", price: "$38.00", priceValue: 38.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/DUCK+CONFIT-d1436af0-1920w.jpg" },
        ]
    },
    {
        title: "Homemade Desserts",
        items: [
            { id: "d1", name: "SIGNATURE CHEESE CAKE", description: "with brandied blueberries", price: "$15.00", priceValue: 15.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/cheese+cake-1920w.jpg" },
            { id: "d2", name: "CHOCOLATE GANACHE", description: "Kahlua and chocolate mousse glazed with shiny ganache", price: "$15.00", priceValue: 15.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/chcoc-cake-1920w.jpg" },
            { id: "d3", name: "CRÈME BRULÉE", description: "(Not available for take-out) crisp caramelized vanilla cream custard with berries", price: "$15.00", priceValue: 15.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/crebe-4c7616e9-1920w.jpg" },
            { id: "d4", name: "LEMON TART", description: "with meringue and berries", price: "$15.00", priceValue: 15.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/lomon+t-1920w.jpg" },
            { id: "d5", name: "FRUITS SHERBET", price: "$15.00", priceValue: 15.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/SHERBET-6ccd5d65-1920w.jpg" },
            { id: "d6", name: "NOUGAT GLACEE", description: "nougat ice cream with almond, pistachios", price: "$15.00", priceValue: 15.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/ice+cream+2-1920w.jpg" },
        ]
    },
    {
        title: "Coffee & Tea",
        items: [
            { id: "ct1", name: "COFFEE", price: "$6.00", priceValue: 6.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/coffee-b6505900-1920w.jpg" },
            { id: "ct2", name: "TEA", price: "$6.00", priceValue: 6.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/tea-1920w.jpg" },
            { id: "ct3", name: "LATTE", price: "$6.00", priceValue: 6.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/latte-fde0fdcf-1920w.jpg" },
            { id: "ct4", name: "ESPRESSO", price: "$6.00", priceValue: 6.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/espso-e73c4940-1920w.jpg" },
            { id: "ct5", name: "AMERICANO", price: "$6.00", priceValue: 6.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/amico-8087362e-1920w.jpg" },
            { id: "ct6", name: "CAPUCCINO", price: "$6.50", priceValue: 6.50, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/cappio-86361fdc-1920w.jpg" },
            { id: "ct7", name: "ICED COFFEE", price: "$6.00", priceValue: 6.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/ice-coffee-1920w.jpg" },
        ]
    },
    {
        title: "Specialty Coffee/Tea",
        items: [
            { id: "sct1", name: "BLUEBERRY TEA", description: "amaretto Grand Mariner", price: "$15.00", priceValue: 15.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/bluetea-5afb2fb9-f0e9d2f8-1920w.jpg" },
            { id: "sct2", name: "MONTE CRISTO", description: "Kahlua, Grand Mariner, whipped cream", price: "$15.00", priceValue: 15.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/irish-coffee-1920w.jpg" },
            { id: "sct3", name: "SPANISH", description: "Kahlua, brandy", price: "$15.00", priceValue: 15.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/irish-coffee-1920w.jpg" },
            { id: "sct4", name: "IRISH", description: "whiskey, whipped cream", price: "$15.00", priceValue: 15.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/irish-coffee-1920w.jpg" },
            { id: "sct5", name: "TUSCAN", description: "sambuca, Baileys", price: "$15.00", priceValue: 15.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/irish-coffee-1920w.jpg" },
            { id: "sct6", name: "ITALIAN", description: "amaretto, Baileys", price: "$15.00", priceValue: 15.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/irish-coffee-1920w.jpg" },
            { id: "sct7", name: "B-52", description: "Kahlua, Baileys, Grand Mariner", price: "$15.00", priceValue: 15.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/irish-coffee-1920w.jpg" },
        ]
    },
    {
        title: "Wine List",
        items: [
            { id: "w1", name: "HOUSE RED (LE VILLAGEOIS)", description: "FRANCE (DRY)", price: "(8OZ) $15.00", priceValue: 15.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/HOUSE.RED-1920w.jpg" },
            { id: "w2", name: "HOUSE RED (SANGIOVESE)", description: "GIACONDI ITALY (DRY)", price: "(8OZ) $15.00", priceValue: 15.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/SANGIO-cb3f8e5f-1920w.jpg" },
            { id: "w3", name: "SHIRAZ BIN 555", price: "(8OZ) $15.00", priceValue: 15.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/555-f494f53e-08b89368-1920w.jpg" },
            { id: "w4", name: "PINOT NOIR", price: "(8OZ) $15.00", priceValue: 15.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/chianti-1920w.jpg" },
            { id: "w5", name: "CHIANTI", description: "GABBIANO ITALY", price: "(8OZ) $15.00", priceValue: 15.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/chianti-1920w.jpg" },
            { id: "w6", name: "CÔTES DU RHÔNE", description: "FRANCE", price: "(8OZ) $15.00", priceValue: 15.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/cote-9a70d986-1920w.jpg" },
            { id: "w7", name: "MERLOT", description: "SANDHILL BC", price: "(8OZ) $15.00", priceValue: 15.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/sandhill-259eaa5e-1920w.jpg" },
            { id: "w8", name: "MERLOT-CAB", description: "FRANCE", price: "(8OZ) $15.00", priceValue: 15.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/JP-Merlot-cab-1920w.jpg" },
            { id: "w10", name: "HOUSE WHITE (HOCHTALER)", description: "B.C. (DRY)", price: "(8OZ) $15.00", priceValue: 15.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/HOCHT-1920w.jpg" },
            { id: "w12", name: "GEWÜZTRAMINER", description: "PFAFFENHEIM FRANCE", price: "(8OZ) $15.00", priceValue: 15.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/gew-e80e0a27-1920w.jpg" },
            { id: "w13", name: "RIESLING", price: "(8OZ) $15.00", priceValue: 15.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/oysterbay-37dd48ea-1920w.jpg" },
            { id: "w14", name: "SAUVIGNON BLANC", description: "MISSION HILL RESERVE BC", price: "(8OZ) $15.00", priceValue: 15.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/oysterbay-37dd48ea-1920w.jpg" },
            { id: "w15", name: "PINOT GRIS", description: "PFAFFENHEIM", price: "(8OZ) $15.00", priceValue: 15.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/pinot-fris-1920w.jpg" },
            { id: "w17", name: "PINOT GRIGIO", description: "MASI ITALY", price: "(8OZ) $15.00", priceValue: 15.00, image: "https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/masi-white-1920w.jpg" },
        ]
    },
];
