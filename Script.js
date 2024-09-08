// Sample data for brands, products, and variations
const data = {
    "2K Ducol Ranges (Super White & Finishing Black)": {
        "Ducol": [
            { name: "2K Super White 1L (Requires Hardener & Thinner)", image: "Images/Ducol/2K Super White 1L.png", description: "9123401001 Gives A High Gloss White Finish" },
            { name: "2K Super White 5L (Requires Hardener & Thinner)", image: "Images/Ducol/2K Super White 5L.png", description: "9123401005 Hardener Needed Gives A High Gloss White Finish" },
            { name: "2K Finishing Black 1L (Requires Hardener & Thinner)", image: "Images/Ducol/Ducol 2K Finishing Black 1L.png", description: "9123401011 Gives A High Gloss Black Finish" },
            { name: "2K Finishing Black 5L (Requires Hardener & Thinner)", image: "Images/Ducol/Ducol 2K Finishing Black 5L.png", description: "9123401015 Gives A High Gloss Black Finish" }
        ]
    },
    
    "Body Fillers": {
        "UPOL (Best In The Range)": [
            { name: "P38 Body Filler", image: "Images/Upol & Raptor/P38.png", description: "9123100002 P.38 is a durable easy to use filler that’s been specially formulated to repair minor dents and scratches in most types of metal bodywork." },
            { name: "Body Filler Easy 2", image: "Images/Upol & Raptor/Fly3.png", description: "9123100004 FLYWEIGHT polyester filler offers great filling properties, a smooth creamy consistency and easy sanding, all at an economical price." },
            { name: "Body Filler Gold", image: "Images/Upol & Raptor/Gold.png", description: "9123100005 features a smooth, creamy formula, making this premium lightweight filler easy to work, spread and sand. The versatility of a non-sagging formula combined with superior filling properties and excellent DTM adhesion makes Liteweight Gold the top choice of bodyshop professionals." },
            { name: "Aluminium Filler", image: "Images/Upol & Raptor/Aluminium.png", description: "9123100006 U-POL D™ is an aluminum reinforced, heat resistant filler containing aluminum flakes. Can be used on SMC, fiberglass, steel, aluminum, rigid plastics, OEM paint, wood and is waterproof" },
            { name: "Dolphin One Filler 3L", image: "Images/Upol & Raptor/Doplhin.png", description: "9123100007 Dolphin One Fill is an All-In-One Premium Body Filler. One Fill’s intelligent micro-sphere technology formula builds like body filler yet is super smooth and pinhole free like glaze so you can skip the glaze and get on to priming and painting in 20 minutes." },
            { name: "Hardener BPO Red 40g Refill", image: "Images/Upol & Raptor/Hardener BPO.png", description: "9123100010 Hardening agent designed to be used with all U-POL polyester fillers." },
            { name: "Dolphin Glaze 440ml", image: "Images/Upol & Raptor/Dolphin Glaze.png", description: "9123100020 Used On Side Surfaces (Incl. 1x 20g Hardener) Dolphin Glaze is a premium, technically advanced finishing glaze designed to eliminate pinholes and surface imperfections prior to painting. Its self-leveling formulation gives a smooth ultra fine finish which requires minimal sanding." },
            { name: "Dolphin Glaze H/ Viscosity 440ml", image: "Images/Upol & Raptor/Dolphin Glaze High.png", description: "9123100021 Used On flat Surfaces (Incl. 1x 20g Hardener) Dolphin Glaze is a premium, technically advanced finishing glaze designed to eliminate pinholes and surface imperfections prior to painting. Its self-leveling formulation gives a smooth ultra fine finish which requires minimal sanding." },
            { name: "Fibral Glass Fibre Paste Bag 600ml", image: "Images/Upol & Raptor/Fibral.png", description: "9123100025 Fibre Glass Reinforced Filler (Incl. 1x 40g Hardener) Fibral Fiberglass Filler takes the place of short and long strand products and is ideal for bridging holes while providing a tough resistant GRP coating." },
            { name: "Fibral Glass Fibre Paste Bag 880ml", image: "Images/Upol & Raptor/Fibral.png", description: "9123100026 Fibre Glass Reinforced Filler (Incl. 1x 40g Hardener) Fibral Fiberglass Filler takes the place of short and long strand products and is ideal for bridging holes while providing a tough resistant GRP coating." },
            { name: "Stronghold Plastic Filler 600ml", image: "Images/Upol & Raptor/706I.png", description: "9123100032 Can be used on flexible plastics. Ideal to repair holes, scuffs and scratches in plastic parts." }
        ],
        "Luxor (1st Affordable Alternative)": [
            { name: "Fusion Filler 500gr", image: "Images/Luxor/Luxor Fusion Filler 1KG.png", description: "9123600021 This super lightweight polyester filler is easy to spread, smooth, and sand. It can be used on metal and wood. Tack free and can be sanded after 15 minutes Remains easy to sand even after several hours.  Provides excellent adhesion. Can use it on all metal surfaces, aluminium, galvanized steel. Can also be used on wood and various plastics." },
            { name: "Fusion Filler 1Kg", image: "Images/Luxor/Luxor Fusion Filler 1KG.png", description: "9123600020 This super lightweight polyester filler is easy to spread, smooth, and sand. It can be used on metal and wood. Tack free and can be sanded after 15 minutes Remains easy to sand even after several hours.  Provides excellent adhesion. Can use it on all metal surfaces, aluminium, galvanized steel. Can also be used on wood and various plastics." },
            { name: "Fusion Filler 4Kg", image: "Images/Luxor/Luxor Fusion Filler.png", description: "9123600025 This super lightweight polyester filler is easy to spread, smooth, and sand. It can be used on metal and wood. Tack free and can be sanded after 15 minutes Remains easy to sand even after several hours.  Provides excellent adhesion. Can use it on all metal surfaces, aluminium, galvanized steel. Can also be used on wood and various plastics." },
            { name: "Multi Body Filler 1Kg", image: "Images/Luxor/Luxor Multi Filler 1KG.png", description: "9123600026 Can be used on all metals, including steel, aluminium, and galvanized steel surfaces to obtain a pinhole-free finish." },
            { name: "Multi Body Filler 5Kg", image: "Images/Luxor/Luxor Multi Filler 1KG.png", description: "9123600027 Can be used on all metals, including steel, aluminium, and galvanized steel surfaces to obtain a pinhole-free finish." }
        ]
    },
    
    "Clearcoats": {
        "Nexa (Best In The Range)": [
            { name: "Ultra Clear Coat 1L(Requires Hardener & Thinner)", image: "Images/Nexa/Nexa Ultra Clear.png", description: "9124446840 ULTRA CLEAR is a very versatile and user friendly clearcoat, clean in can and flowing really well. This product can be used in all weather conditions using the range of hardeners available in the NEXAAUTOCOLOR product range." }
        ],
        "Ducol (1st Affordable Alternative)": [
            { name: "2K Clearcoat 500ml(Requires Hardener & Thinner)", image: "Images/Ducol/2K Clear 500ml.png", description: "9123409250 This competitively priced 2K product range offers a durable, long-lasting finish on both passenger and commercial vehicles." },
            { name: "2K Clearcoat 1L(Requires Hardener & Thinner)", image: "Images/Ducol/2K Clear 1L.png", description: "9123409251 This competitively priced 2K product range offers a durable, long-lasting finish on both passenger and commercial vehicles." },
            { name: "2K ClearCoat 5L(Requires Hardener & Thinner)", image: "Images/Ducol/2K Clear 5L.png", description: "9123409255 This competitively priced 2K product range offers a durable, long-lasting finish on both passenger and commercial vehicles." }
        ],
        "Speed (2nd Affordable Alternative)": [
            { name: "2K Topcoat Clear 1L(Requires Hardener & Thinner)", image: "Images/Speed & Challenger/Speed Clear.png", description: "9123200001 2K acrylic clearcoat suitable for air drying. It is especially formulated for spraying over basecoats. Speed 2k Clear does not require addition of thinner making its application easy while reducing the cycle time and inventory costs." },
            { name: "2K Topcoat Clear 5L(Requires Hardener & Thinner)", image: "Images/Speed & Challenger/Speed Clear 5L.png", description: "9123200002 2K acrylic clearcoat suitable for air drying. It is especially formulated for spraying over basecoats. Speed 2k Clear does not require addition of thinner making its application easy while reducing the cycle time and inventory costs." }
        ],
        "Luxor (3rd Affordable Alternative)": [
            { name: "2K Clearcoat 500ml(Requires Hardener & Thinner)", image: "Images/Luxor/Transline Clear 1L & 5L.png", description: "9123601001 This competitively priced 2K product range offers a durable, long-lasting finish on both passenger and commercial vehicles." },
            { name: "2K Clearcoat 1L(Requires Hardener & Thinner)", image: "Images/Luxor/Transline Clear 1L & 5L.png", description: "9123601002 This competitively priced 2K product range offers a durable, long-lasting finish on both passenger and commercial vehicles." },
            { name: "2K Clearcoat 5L(Requires Hardener & Thinner)", image: "Images/Luxor/Transline Clear 1L & 5L.png", description: "9123601003 This competitively priced 2K product range offers a durable, long-lasting finish on both passenger and commercial vehicles." },
            
        ]
    },
    
    "DART Tape/ Sponge Tape": {
        "Finixa ( Best In The Range)": [
            {name: "Tape Sponge 13mm x50m", image: "Images/Tack Rags & Cloths/Finixa Dart.png", description: "9106405337 A foam tape designed to be used in masking door jambs, hood or deck lid openings or other areas of a vehicle which need to be sealed during the painting operation. Provides a soft edge to prevent tape lines in the jamb areas."},
        ],
        "Speed (1st Affordable Alternative)": [
            {name: "Foam Tape Dart", image: "Images/Tack Rags & Cloths/Speed Dart.png", description: "9106401300 A foam tape designed to be used in masking door jambs, hood or deck lid openings or other areas of a vehicle which need to be sealed during the painting operation. Provides a soft edge to prevent tape lines in the jamb areas."},
        ],
        "3M (Limited Stock)": [
            {name: "Tape Dart 19mmx13mm", image: "Images/Tack Rags & Cloths/3M Dart.png", description: "9106042528 A foam tape designed to be used in masking door jambs, hood or deck lid openings or other areas of a vehicle which need to be sealed during the painting operation. Provides a soft edge to prevent tape lines in the jamb areas."},
        ]
    },

    
    "Hardeners": {
        "Nexa (Best In The Range)": [
            { name: "MS Normal Hardener 500ml", image: "Images/Nexa/Nexa MS Hard.png", description: "9124477960 Used In Everyday Conditions" },
            { name: "MS Normal Hardener 1L", image: "Images/Nexa/Nexa MS Hard 1L.png", description: "9124477961 Used In Everyday Conditions" },
            { name: "MS Slow Hardener 1L", image: "Images/Nexa/Nexa MS Slow 1L.png", description: "9124477981 Used In Warm/Hot Conditions" },
            { name: "MS Express Hardener 1L", image: "Images/Nexa/Nexa Express Hard.png", description: "9124478321 Used In Cold Conditions" }
        ],
        "Ducol (1st Affordable Alternative)": [
            { name: "2K Medium Hardener 500ml", image: "Images/Ducol/2K Medium Hardener 500ml.png", description: "9123409500 Used In Everyday Conditions" },
            { name: "2K Medium Hardener 1L", image: "Images/Ducol/2K Medium Hardener 1L.png", description: "9123409501 Used In Everyday Conditions" },
            { name: "2K Fast Hardener 500ml", image: "Images/Ducol/2K Fast Hardener 500ml.png", description: "9123409550 Used In Colder Conditions" },
            { name: "2K Fast Hardener 1L", image: "Images/Ducol/2K Fast Hardener 1L.png", description: "9123409551 Used In Colder Conditions" }
        ],
        "Speed ( 2nd Affordable Alternative)": [
            { name: "2K Hardener 1L", image: "Images/Speed & Challenger/Speed Hardener.png", description: "9123200005 Used In Everyday Conditions" },
            { name: "2K Hardener 5L", image: "Images/Speed & Challenger/Speed Hard 5L.png", description: "9123200006 Used In Everyday Conditions" }
        ],
        "Luxor (3rd Affordable Alternative)": [
            { name: "Fast Hardener 500ml", image: "Images/Luxor/Transline Fast Hardener 500ml.png", description: "9123601004 Used In Colder Conditions" },
            { name: "Fast Hardener 1L", image: "Images/Luxor/Transline Fast Hard 1L.png", description: "9123601005 Used In Colder Conditions" },
            { name: "Fast Hardener 5L", image: "Images/Luxor/Transline Fast Hardener 5L.png", description: "9123601006 Used In Colder Conditions" }
        ]
    },

    "Masking Tape": {
        "Speed/Avast": [
            { name: "AVAST 18mm", image: "Images/Speed/Avast 18.png", description: "9106401001 80 Degrees Celcuis Tolerance. Ideal For The Panel Shop." },
            { name: "Speed 18mm", image: "Images/Speed/Speed18.png", description: "9106401005 80 Degrees Celcuis Tolerance. Ideal For The Panel Shop." },
            { name: "Speed 24mm", image: "Images/Speed/Speed24.png", description: "9106401002 For Masking Of Larger Surfaces" },
            { name: "Speed 36mm", image: "Images/Speed/Speed36.png", description: "9106401003 For Masking Of Larger Surfaces" },
            { name: "Speed 48mm", image: "Images/Speed/Speed48.png", description: "9106401004 For Masking Of Larger Surfaces" }
        ]
    },

    "Masking Film": {
        "Finixa": [
            { name: "Masking Film 300mx 4m", image: "Images/Finixa Mixing Cups/Masking Film.png", description: "9106145252 A Transparent Film Used For Masking Vehicles During The Pianting Process" }
            
        ],
    },

    "Mixing Cups & Paint Strainers":{
        "Finixa Cups":[
            { name: "Mixing Unprinted 400ml 400ml", image: "Images/Finixa Mixing Cups/Unprinted.png", description: "9106145140 Used For Mixing Paints" },
            { name: "Mixing Printed 400ml", image: "Images/Finixa Mixing Cups/400ml.png", description: "9106145141 Used For Mixing Paints" },
            { name: "Lid Mixing 400ml", image: "Images/Finixa Mixing Cups/Lid.png", description: "9106145145 Lids For Mixing Cups" },
            { name: "Mixing Unprinted 650ml", image: "Images/Finixa Mixing Cups/Unprinted.png", description: "9106145150 Used For Mixing Paints" },
            { name: "Mixing Uprinted 650ml", image: "Images/Finixa Mixing Cups/650ml.png", description: "9106145151 Used For Mixing Paints" },
            { name: "Lid Mixing 650ml", image: "Images/Finixa Mixing Cups/Lid.png", description: "9106145155 Lids For Mixing Cups" },
            { name: "Mixing Unprinted 1300ml", image: "Images/Finixa Mixing Cups/Unprinted.png", description: "9106145160 Used For Mixing Paints" },
            { name: "Mixing printed 1300ml", image: "Images/Finixa Mixing Cups/1300ml.png", description: "9106145161 Used For Mixing Paints" },
            { name: "Lid Mixing 1300ml", image: "Images/Finixa Mixing Cups/Lid.png", description: "9106145165 Lids For Mixing Cups" },
            { name: "Mixing Unprinted 2400ml", image: "Images/Finixa Mixing Cups/Unprinted.png", description: "9106145170 Used For Mixing Paints" },
            { name: "Mixing printed 2400ml", image: "Images/Finixa Mixing Cups/2400ml.png", description: "9106145171 Used For Mixing Paints" },
            { name: "Lid Mixing 2400ml", image: "Images/Finixa Mixing Cups/Lid.png", description: "9106145175 Lids For Mixing Cups" },
            
        ],

        "Paint Strainers":[
            { name: "Nylon 125 Micron", image: "Images/Finixa Mixing Cups/125mi.png", description: "9106145200 For use with Water and Solvent based Paints." },
        { name: "Nylon 190 Micron", image: "Images/Finixa Mixing Cups/190mi.png", description: "9106145205 Used For Solvent Based Paints ONLY" },
        ]
    },

    "NC Ducol Range (Matt Black & Finishing Black)": {
        "Ducol": [
            { name: "NC Finishing White 1L (No Hardener Required)", image: "Images/Ducol/NC Finishing White 1L.png", description: "9123403011 A High Gloss Finish Without The Need For A Hardener" },
            { name: "NC Finishing White 5L (No Hardener Required)", image: "Images/Ducol/NC Finishing White.png", description: "9123403011 A High Gloss Finish Without The Need For A Hardener" },
            { name: "NC Finishing Black 1L (No Hardener Required)", image: "Images/Ducol/Ducol NC Finishing Black 1L.png", description: "9123403011 A High Gloss Finish Without The Need For A Hardener" },
            { name: "NC Finishing Black 5L (No Hardener Required)", image: "Images/Ducol/Ducol NC Finishing Black 5L.png", description: "9123403015 A High Gloss Finish Without The Need For A Hardener" },
            { name: "NC Matt Black 1L (No Hardener Required)", image: "Images/Ducol/Ducol NC Matt Black 1L.png", description: "9123403041 A MATT Finish Without The Need For A Hardener" },
            { name: "NC Matt Black 5L (No Hardener Required)", image: "Images/Ducol/Ducol NC Matt Black 5L.png", description: "9123403045 A MATT Finish Without The Need For A Hardener" },
            { name: "NC Fine Opalescent 5L (No Hardener Required)", image: "Images/Ducol/NC Fine Opalescent 5L.png", description: "9123403175 A Silver Finish Also Revered To As Wheel Silver Without The Need For A Hardener" }
        ]
    },
    
    "Orbital Discs/Velcro Discs & Sun Net Strips (AbraNet)": {
        "Speed (Affordable Range)": [
            { name: "Disc P80 (100 P/Pack)", image: "Images/Speed/SPEED-Hookit-1.png", description: "9106401230 For Body Filler Sanding With An Orbital Machine" },
            { name: "Disc P150 (100 P/Pack)", image: "Images/Speed/SPEED-Hookit-1.png", description: "9106401231 For Body Filler Sanding With An Orbital Machine" },
            { name: "Disc P220 (100 P/Pack)", image: "Images/Speed/SPEED-Hookit-1.png", description: "9106401232 For Body Filler Sanding Before Primer Application With An Orbital Machine" },
            { name: "Disc P320 (100 P/Pack)", image: "Images/Speed/SPEED-Hookit-1.png", description: "9106401233 For Primer Sanding With An Orbital Sander" },
            { name: "Disc P400 (100 P/Pack)", image: "Images/Speed/SPEED-Hookit-1.png", description: "9106401234 For Primer Sanding When 2K & Basecoat Will Be Sprayed" },
            { name: "Disc P500 (100 P/Pack)", image: "Images/Speed/SPEED-Hookit-1.png", description: "9106401250 Can Be used For Sanding a Blend Panel" },
            { name: "Disc P600 (100 P/Pack)", image: "Images/Speed/SPEED-Hookit-1.png", description: "9106401235 For Use When Blending" },
            { name: "Disc P800 (100 P/Pack)", image: "Images/Speed/SPEED-Hookit-1.png", description: "9106401236 Can Be Used For Polish Preparation" },
            { name: "Disc P1200 (100 P/Pack)", image: "Images/Speed/SPEED-Hookit-1.png", description: "9106401237 For Sanding Before Polish Application" },
            { name: "Disc P1500 (100 P/Pack)", image: "Images/Speed/SPEED-Hookit-1.png", description: "9106401238 For Sanding Before Polish Application" },
            { name: "Disc P2000 1(100 P/Pack)", image: "Images/Speed/SPEED-Hookit-1.png", description: "9106401239 For Sanding Before Polish Application" }
        ],

        "3M Hookit Discs (Limited Stock)": [
          { name: "Skinnies P80", image: "Images/Finixa Mixing Cups/Skinnie.png", description: "9106184286 Used For Body Filler Sanding. Requires a Velcro Sanding Block" },
          { name: "Skinnies P180", image: "Images/Finixa Mixing Cups/Skinnie.png", description: "9106184288 Used For Body Filler Sanding. Requires a Velcro Sanding Block" },
          { name: "Gold HKT P80 150mm", image: "Images/Finixa Mixing Cups/Gold Disc.png", description: "9106050443 Used For Body Filler Sanding. Requires an Orbital Sander" },
          { name: "Gold HKT P150 150mm", image: "Images/Finixa Mixing Cups/Gold Disc.png", description: "9106050446 Used For Body Filler Sanding. Requires an Orbital Sander" }, 
          { name: "Gold HKT P220 150mm", image: "Images/Finixa Mixing Cups/Gold Disc.png", description: "9106050448 Used For Body Filler Sanding. Requires an Orbital Sander" }, 
          { name: "Gold HKT P320 150mm", image: "Images/Finixa Mixing Cups/Gold Disc.png", description: "9106050451 Used For Primer Sanding. Requires an Orbital Sander" }, 
          { name: "Gold HKT P400 150mm", image: "Images/Finixa Mixing Cups/Gold Disc.png", description: "9106050453 Used For Primer Sanding When a 2K Is Applied. Requires an Orbital Sander" }, 
          { name: "Gold HKT P500 150mm", image: "Images/Finixa Mixing Cups/Gold Disc.png", description: "9106050454 Used For Body Filler Sanding When Basecoat Is Applied. Requires an Orbital Sander" }, 
          { name: "Gold HKT P600 150mm", image: "Images/Finixa Mixing Cups/Gold Disc.png", description: "9106050455 Used For Blending Sanding. Requires an Orbital Sander" }, 
          { name: "Hookit Micro Finishing Film P800 125mm", image: "Images/Finixa Mixing Cups/800.png", description: "9106012198 Used For Blending Sanding. This Product Has A Sponge Like Feel for A Smoother Edging As To Not Damage The Blend Panel Paint Work." }, 
          { name: "Hookit Micro Finishing Film P1200 150mm", image: "Images/Finixa Mixing Cups/1200 film.png", description: "9106012203 Used For Sanding Before Polish Application" }, 
          { name: "Hookit 1 Trizact P1500 150mm", image: "Images/Finixa Mixing Cups/1500 Tri.png", description: "9106012207 Used For Sanding Before Polish Application" }, 
          { name: "Hookit 1 Trizact P3000 150mm", image: "Images/Finixa Mixing Cups/3000 Tri.png", description: "9106012208 Used For Sanding Before Polish Application. This Product has a Sponge Like Feeling. Following The Correct Sanding Procedure Can Help With Less Polish Being Used" },   
          { name: "Hookit Foam Trizact P6000 150mm", image: "Images/Finixa Mixing Cups/6000 Tri.png", description: "9106012214 Used For Sanding Before Polish Application This Product Has A Sponge Like Feeling. Following The Correct Sanding Procedure Can Help With Less Polish Being Used" },
        ],
        "3M Fibre Discs (Grinding Disc)":[          
            { name: "581C P36 115mmx22mm", image: "Images/Finixa Mixing Cups/3m Fibre Disc.png", description: "9106012010 A stiff fiber backing and strong resin bond provide durability and tear resistance for heavy grinding applications, such as medium to high-pressure grinding, weld removal, and beveling — including robotic operations" }, 
          { name: "581C P60 115mmx22mm", image: "Images/Finixa Mixing Cups/3m Fibre Disc.png", description: "9106012015 A stiff fiber backing and strong resin bond provide durability and tear resistance for heavy grinding applications, such as medium to high-pressure grinding, weld removal, and beveling — including robotic operations" }, 
          { name: "581C P80 115mmx22mm", image: "Images/Finixa Mixing Cups/3m Fibre Disc.png", description: "9106012095 A stiff fiber backing and strong resin bond provide durability and tear resistance for heavy grinding applications, such as medium to high-pressure grinding, weld removal, and beveling — including robotic operations" }, 
          
        ],
        "Sunmight & Sanding Blocks": [
            { name: "Sun Net Valcro Ceramic P80 70x450mm", image: "Images/Sunmight/Sun Net Strips.png", description: "9106405633 Sunmight’s special abrasives coating technology on net backing provides excellent cutting performance and less clogging problem." },
            { name: "Sun Net Valcro Ceramic P150 70x450mm", image: "Images/Sunmight/Sun Net Strips.png", description: "9106405634 Sunmight’s special abrasives coating technology on net backing provides excellent cutting performance and less clogging problem." },
            { name: "Sun Net Valcro Ceramic P320 70x450mm", image: "Images/Sunmight/Sun Net Strips.png", description: "9106405635 Sunmight’s special abrasives coating technology on net backing provides excellent cutting performance and less clogging problem." },
            { name: "Sun Net Valcro Ceramic P400 70x450mm", image: "Images/Sunmight/Sun Net Strips.png", description: "9106405636 Sunmight’s special abrasives coating technology on net backing provides excellent cutting performance and less clogging problem." },
            { name: "Sanding Block Dust Free 70x198mm", image: "Images/Sunmight/Fixon Short.png", description: "9106405096" },
            { name: "Sanding Block Dust Free 70x400mm", image: "Images/Sunmight/Fixon Long.png", description: "9106405097" }

            


        ]
    },

    "Panel Bond": {
        "3M": [
            { name: "Panel Bond Regular 200ml", image: "Images/Panel Bond/8115.png", description: "9106058085"},
            { name: "Panel Bond For Alumininum 200ml PN08116", image: "Images/Panel Bond/8116.png", description: "9106058086"},
            { name: "Panel Bond Gun", image: "Images/Panel Bond/3M Panel Bond Gun.png", description: ""},
        ],
        "Gondolier": [
            { name: "Metal Bonding Black 220ml (60 minutes) FIN221 Finixa", image: "Images/Panel Bond/Finixa Metal Bond.png", description: "9106405417"},
        ],
        "Scott Bader": [
            { name: "Crestabond M1-05 400ml", image: "Images/Panel Bond/M05.png", description: "9123700060"},
            { name: "Crestabond M1-20 400ml", image: "Images/Panel Bond/M20.png", description: "9123700061"},
            { name: "Applicator Gun", image: "Images/Panel Bond/Crestabond Gun.png", description: ""},

        ],
    },

    "Polishes & Mops": {
        "Glissen Nitro (Best In The Range)": [
            { name: "Compound Single Stage 1kg", image: "Images/Glissen/Compound Single Stage 1kg GLI001 Glissen Nitro 9106405003.png", description: "Main Application Compound Used For All Purposes 9106405003" },
            { name: "Compound Finishing 1kg", image: "Images/Glissen/Compound Finishing 1kg GLI002 Glissen Nitro 9106405001.png", description: "9106405001 Final application compound used for dark colors" },
            { name: "Nitro Wax Incl. Microfiber Cloth", image: "Images/Glissen/GLI003-N1TRO-WAX.png", description: "9106405002 Liquid Wax compound used after the polishing and washing stage" },
            { name: "Wax Paste Kit 120gr", image: "Images/Glissen/GLI004-N1TRO-PASTE-WAX-120G.png", description: "9106405006 Paste Wax is used to give an extra shine to the surface after the car has been polished and washed. Usually on Dark Colors" },
            { name: "Scuff Liquid 1kg", image: "Images/Glissen/Scuff Liquid 1kg GLI006 Glissen Nitro 9106405013.png", description: "9106405013 Scuff Compound Used For Blending Applications. Usually accompanied with a Scotch Brite" },
            { name: "Compound Paste Ultimate 200gr", image: "Images/Glissen/Compound Paste Ultimate 200gr GLI104 Glissen Nitro 9106405037.png", description: "9106405037 Cheaper alternative of polish for light colors. Much like Strata-Crème" },
            { name: "Compound Paste Ultimate 500gr", image: "Images/Glissen/Compound Paste Ultimate 200gr GLI104 Glissen Nitro 9106405037.png", description: "9106405035 Cheaper alternative of polish for light colors. Much like Strata-Crème" },
            { name: "Compound Paste Ultimate Combo With Applicator", image: "Images/Glissen/Glissen-Ultimate-Paste-Compound-3Kg-768x925.png", description: "9106405036 Cheaper alternative of polish for light colors. Much like Strata-Crème" },
            { name: "Restorer Finish Black Trim 360ml", image: "Images/Glissen/Restorer Finish Black Trim 360ml SLF001 Solution Finish 9106405515.png", description: "9106405515 Restores most black trimmings on the car without fading afterwards" },
            { name: "Bolt Adaptor Generate 14mm", image: "Images/Glissen/Bolt Adaptor Generate 14mm GLI255 Glissen Nitro 9106405021.png", description: "9106405021 Adaptor for the Polish maschine and backup pad" },
            { name: "Plate Backing With Interface 150mm - 14mm Thread", image: "Images/Glissen/Plate Backing With Interface 150mm 14mm Therad GLI050 Glissen Nitro 9106405005.png", description: "9106405005 Backup pad that is used with the Purple/Black waffle pads" },
            { name: "Compounding Ultimate Applicator 150mm", image: "Images/Glissen/Compounding Ultimate Applicator 150mm GLI150 Glissen Nitro 9106405042.png", description: "9106405042 Can be used with the Single Stage Compound" },
            { name: "Compound Foam Applicator Purple 150mm (2)", image: "Images/Glissen/Compound Foam Applicator Purple 150mm GLI051 Glissen Nitro 9106405004.png", description: "9106405004 For use with the Single Stage Compound" },
            { name: "Applicator Waffle Finishing Foam Black 150mm (2)", image: "Images/Glissen/Applicator Waffle Finishing Foam Black 150mm GLI052 Glissen Nitro 9106405019.png", description: "9106405019 Used for a final finish on dark colors in conjuction with the Finishing Compound" },
            { name: "Interface Pad 150mm", image: "Images/Glissen/Interface.png", description: "9106405095 Used as a buffer between backing plate and orbital disc. Ideal for use when sanding edges and corners."},
            { name: "Clay Mitt 152x221mm", image: "Images/Glissen/Clay Mitt 152x221mm GLI009 Glissen Nitro 9106405015.png", description: "9106405015 Used for removing overspray. Requires a spray bottle with soapy water." },
            { name: "Wool Mop Double Sided 8mm", image: "Images/Glissen/Pad Wool Generate Double Sided_ 8mm GLI250 Glissen Nitro 9106405047.png", description: "9106405047 Alternative to the 3M Wool Mop" },
        ],
        "Scholl (Great Alternative)": [
            { name: "Super Cut Polish 1kg", image: "Images/Scholl/SuperCut.png", description: "9106406001 Can Be Used In The Place Of Strata Crème" },
            { name: "Super Cut Polish 5kg", image: "Images/Scholl/SuperCut.png", description: "9106406005 Can Be Used In The Place Of Strata Crème" },
            { name: "Gold One Step S3 1kg", image: "Images/Scholl/Scholl-S3.png", description: "9106406015 Excellent Cutting Polish. Used generally With A Spider Pad" },
            { name: "Paste Micro S22 1kg", image: "Images/Scholl/Scholl S22.png", description: "9106406020 Great Finish Polish" },
            { name: "Pad Spider 165mm - Orange/Purple", image: "Images/Scholl/Spider Pad.png", description: "9106406025 Requires A Backing Plate / Backup Pad" },
            
        ],

        "3M (Limited Stock)":[
            { name: "Fastcut Plus Extreme 1kg", image: "Images/Finixa Mixing Cups/Fastcut Plus.png", description: "9106058603 an advanced abrasive paste designed for the initial step in surface polishing processes. It is engineered for aggressive cutting, making it ideal for quickly removing surface defects." },
            { name: "Ultrafine Machine SE Blue", image: "Images/Finixa Mixing Cups/Ultrafine SE.png", description: "9106075996 specifically designed to remove swirl marks and holograms left by machine polishing, this polish results in a blemish free deep gloss appearance." },
            { name: "Hand Imperial 946ml", image: "Images/Finixa Mixing Cups/hand glaze.png", description: "9106075992 a non-silicone, non-wax hand glaze that is designed to be used by hand to refine and fill swirl marks after machine glazing." },
            { name: "3M Double Sided Wool Mop", image: "Images/Finixa Mixing Cups/Superbuff.png", description: "9106105700 Removes finishing abrasive sand scratches and other paint surface defects" },
            { name: "High Gloss Polishing Pad Blue", image: "Images/Finixa Mixing Cups/Blue.png", description: "9106601219 Used In Conjuction With 9106075996"},
            { name: "Compounding Pad Green", image: "Images/Finixa Mixing Cups/Green.png", description: "9106012216 Used In Conjuction With 9106058603"},
            { name: "Quick Connect Adaptor 14mm", image: "Images/3M/Connector.png", description: "9106400409 Quick Connect Adapter makes it easy to connect or disconnect double-sided buffing pads on rotary polishers."},
            { name: "Foam Compounding Pad White", image: "Images/3M/White Pad.png", description: "9106400410 Double sided foam compounding pad with quick connect/disconnect. Use with 3M compounds to remove sand scratches."},
            { name: "Foam Compounding Pad Green", image: "Images/3M/Green Pad.png" , description: "9106400411 This compounding pad is used for refining sand scratches, slow-speed polishing, denibbing and more. Foam face pattern provides more surface contact, holds compound better and reduces slinging."},
            
        ],
        
        "Speed/Aircraft": [ 
            { name: "Speed Double Sided Mop", image: "Images/Speed/MISC-WOOL-MOP.png", description: "9106401350 Wool Mop Alternative " },
        ],
    },
    
    "Polishers & Air Sanders": {
        "Aircraft": [
            { name: "Polisher Random Orbital 800W", image: "Images/Polishers & Sanders/POL4.png", description: "9106620008"},
            { name: "Polisher 1200w 180mm POL02", image: "Images/Polishers & Sanders/POL2.png", description: "9106620006"},
            { name: "Orbital Sander Air 150mm Inc", image: "Images/Polishers & Sanders/Sander AT0011.png", description: "9106620004 To Be Used With Orbital Discs"}
            
        ],

    },

    "Primers": {
        "Nexa (Best In The Range)": [
            
            { name: "White 1L (Requires Hardener & Thinner)", image: "Images/Nexa/SG 01 1L.png", description: "9124455011 Used for light colors such as whites Mixing ratio is 4:1 meaning 4L paint 1L hardener You can compress this down to 1L paint to 250ml Hardener. Thinners is always 15-20% of the mixed volume" },
            { name: "White 2L (Requires Hardener & Thinner)", image: "Images/Nexa/SG 01 2L.png", description: "9124455012 Used for light colors such as whites Mixing ratio is 4:1 meaning 4L paint 1L hardener You can compress this down to 1L paint to 250ml Hardener. Thinners is always 15-20% of the mixed volume" },
            { name: "Grey 1L (Requires Hardener & Thinner)", image: "Images/Nexa/SG 05 1L.png", description: "9124455051 Used for Medium colors such as Greys Mixing ratio is 4:1 meaning 4L paint 1L hardener You can compress this down to 1L paint to 250ml Hardener. Thinners is always 15-20% of the mixed volume" },
            { name: "Grey 2L (Requires Hardener & Thinner)", image: "Images/Nexa/SG 05 2L.png", description: "9124455052 Used for Medium colors such as Greys Mixing ratio is 4:1 meaning 4L paint 1L hardener You can compress this down to 1L paint to 250ml Hardener. Thinners is always 15-20% of the mixed volume" },
            { name: "Dark Grey 1L (Requires Hardener & Thinner)", image: "Images/Nexa/SG 07 1L.png", description: "9124455071 Used for Darker Colors such as Blacks Mixing ratio is 4:1 meaning 4L paint 1L hardener You can compress this down to 1L paint to 250ml Hardener. Thinners is always 15-20% of the mixed volume" },
            { name: "Dark Grey 2L (Requires Hardener & Thinner)", image: "Images/Nexa/SG 07 2L.png", description: "9124455072 Used for Darker colors such as Blacks Mixing ratio is 4:1 meaning 4L paint 1L hardener You can compress this down to 1L paint to 250ml Hardener. Thinners is always 15-20% of the mixed volume" },
            { name: "Etch Primer Chromate Free Wash 1L (Part 1 of 2)", image: "Images/Nexa/Nexa CFE.png", description: "9124469868 A primer that can be used on smooth surfaces such as Chrome. Requires An Activator. Mixing Ratio is 1:1 Meaning 50% Paint to 50% Activator"},
            { name: "Activator CFE Primer 1L (Part 2 Of 2)", image: "Images/Nexa/Nexa Activator.png", description: "9124469069 Activator for the Chromate Free Etch Primer" }
        ],
        "Ducol (1st Affordable Alternative)": [
            { name: "2K MS Primer Grey 1L (Requires Hardener & Thinner)", image: "Images/Ducol/2K MS Primer Grey.png", description: "9123408001 High-quality primer for various surfaces Ensures excellent adhesion for top coat applications Fast-drying formulation for quick project turnaround" },
            { name: "2K MS Primer Grey 5L (Requires Hardener & Thinner)", image: "Images/Ducol/2K MS Primer 5L.png", description: "9123601008 High-quality primer for various surfaces Ensures excellent adhesion for top coat applications Fast-drying formulation for quick project turnaround" },
            { name: "2K MS Primer Beige 1L (Requires Hardener & Thinner)", image: "Images/Ducol/MS Primer Beige 1L.png", description: "9123408002 High-quality primer for various surfaces Ensures excellent adhesion for top coat applications Fast-drying formulation for quick project turnaround" },
            { name: "NC Primer Grey 1L", image: "Images/Ducol/NC Primer Grey 1L.png", description: "9123408051 High-quality primer for various surfaces Ensures excellent adhesion for top coat applications Fast-drying formulation for quick project turnaround" },
            { name: "NC Primer Grey 5L", image: "Images/Ducol/NC Primer Grey 5L.png", description: "9123408055 High-quality primer for various surfaces Ensures excellent adhesion for top coat applications Fast-drying formulation for quick project turnaround" },
            { name: "NC Primer Beige 1L", image: "Images/Ducol/NC Primer Beige 1L.png", description: "9123408101 High-quality primer for various surfaces Ensures excellent adhesion for top coat applications Fast-drying formulation for quick project turnaround" },
            { name: "NC Primer Beige 5L", image: "Images/Ducol/NC Primer Beige 5L.png", description: "9123408105 High-quality primer for various surfaces Ensures excellent adhesion for top coat applications Fast-drying formulation for quick project turnaround" }
        ],
        "Speed (2nd Affordable Alternative)": [
            { name: "2K MS Primer Beige 1L(Requires Hardener & Thinner)", image: "Images/Speed & Challenger/Speed 2K MS Beige Primer 1L.png", description: "9123200020 Speed Ecoline MS Primer can be applied over PE putties/body fillers, 2K Epoxy Primers, 2K wash Primers, 1K Etch Primers, original OEM primers, GRP, and over well sanded old finishes in solid conditions." },
            { name: "2K MS Primer Beige 5L(Requires Hardener & Thinner)", image: "Images/Speed & Challenger/Speed 2K MS Primer Beige 5L.png", description: "9123200021 Speed Ecoline MS Primer can be applied over PE putties/body fillers, 2K Epoxy Primers, 2K wash Primers, 1K Etch Primers, original OEM primers, GRP, and over well sanded old finishes in solid conditions." },
            { name: "2K MS Grey Primer 1L(Requires Hardener & Thinner)", image: "Images/Speed & Challenger/Speed 2K MS Grey Primer 1L.png", description: "9123200022 Speed Ecoline MS Primer can be applied over PE putties/body fillers, 2K Epoxy Primers, 2K wash Primers, 1K Etch Primers, original OEM primers, GRP, and over well sanded old finishes in solid conditions." },
            { name: "2K MS Grey Primer 5L(Requires Hardener & Thinner)", image: "Images/Speed & Challenger/Speed 2K MS Primer Grey 5L.png", description: "9123200023 Speed Ecoline MS Primer can be applied over PE putties/body fillers, 2K Epoxy Primers, 2K wash Primers, 1K Etch Primers, original OEM primers, GRP, and over well sanded old finishes in solid conditions." },
            { name: "NC Grey Primer 1L (NO Hardener Required)", image: "Images/Speed & Challenger/Speed NC Grey Primer.png", description: "Speed grey Primer is a modified nitrocellulose based primer. Easy application and sanding, quick drying, has got good filling ability and provide excellent hiding power." }
        ],
        "Luxor (3rd Affordable Alternative)": [
            { name: "MS Primer Beige 1L(Requires Hardener & Thinner)", image: "Images/Luxor/MS Beige Primer Transline 1L.png", description: "9123504001 High-quality primer for various surfaces Ensures excellent adhesion for top coat applications Fast-drying formulation for quick project turnaround" },
        ],
    },
    
    "Primers Etch":{
        "Luxor": [
            { name: "Etch Primer Red Oxide 1L(Thinners ONLY)", image: "Images/Luxor/Luxcoat Self Etch Primer Red Oxide 1 & 5L.png", description: "9123602099 High-quality primer for various surfaces Ensures excellent adhesion for top coat applications Fast-drying formulation for quick project turnaround" },
            { name: "Etch Primer Red Oxide 5L(Thinners ONLY)", image: "Images/Luxor/Luxcoat Self Etch Primer Red Oxide 1 & 5L.png", description: "9123602100 High-quality primer for various surfaces Ensures excellent adhesion for top coat applications Fast-drying formulation for quick project turnaround" },
            { name: "Self Etch Black Primer 1L(Thinners ONLY)", image: "Images/Luxor/Luxcoat Self Etch Primer Black 1L.png", description: "9123602097 High-quality primer for various surfaces Ensures excellent adhesion for top coat applications Fast-drying formulation for quick project turnaround" },
            { name: "Self Etch Black Primer 5L(Thinners ONLY)", image: "Images/Luxor/Luxcoat Self Etch Primer Black 1L.png", description: "9123602101 High-quality primer for various surfaces Ensures excellent adhesion for top coat applications Fast-drying formulation for quick project turnaround" },
            { name: "Self Etch Grey Primer 5L(Thinners ONLY)", image: "Images/Luxor/Luxcoat Self Etch Primer Black Black.png", description: "9123602102 High-quality primer for various surfaces Ensures excellent adhesion for top coat applications Fast-drying formulation for quick project turnaround" }
            
        ],
    
    "Duram": [
            { name: "NS5 Metcote Etch Primer Black 500ml(Thinners ONLY)", image: "Images/NS5.png", description: "9123830088 This quality metal primer is solvent based and contains acids and adhesion promoters that etch the metal surface ensuring excellent adhesion." },
            { name: "NS5 Metcote Etch Primer Black 1L(Thinners ONLY)", image: "Images/NS5.png", description: "9123830090 This quality metal primer is solvent based and contains acids and adhesion promoters that etch the metal surface ensuring excellent adhesion." },
            { name: "NS5 Metcote Etch Primer Black 5L(Thinners ONLY)", image: "Images/NS5.png", description: "9123830095 This quality metal primer is solvent based and contains acids and adhesion promoters that etch the metal surface ensuring excellent adhesion." },
            { name: "NS5 Metcote Etch Primer Red Oxide 1L(Thinners ONLY)", image: "Images/NS5.png", description: "9123830105 This quality metal primer is solvent based and contains acids and adhesion promoters that etch the metal surface ensuring excellent adhesion." },
            { name: "NS5 Metcote Etch Primer Red Oxide 5L(Thinners ONLY)", image: "Images/NS5.png", description: "9123830110 This quality metal primer is solvent based and contains acids and adhesion promoters that etch the metal surface ensuring excellent adhesion." }
        ],
        "UPOL": [
            { name: "Acid Etch Aerosol Primer", image: "Images/Upol & Raptor/Acid Etch Aerosol.png", description: "9123100034 Ideal for rub throughs in primer prior to application of color and new bare metal panels." },
            
        ]
    },

    "Primers Plastic": {
        "Nexa": [
            { name: "1K Plastic Primer", image: "Images/Nexa/Plastic Primer Nexa.png", description: "9124469011 1K Adhesion Promoter for Plastics is a fast, transparent 1 pack primer suitable for use on the vast majority of paintable plastic substrates and avoids the need to identify the plastic prior to spraying."}
        ],
        "PPG": [
            { name: "1K Plastic Primer", image: "Images/Nexa/820.png", description: "9124400820 A ready for use, transparent formula for use on a wide range of plastic substrates. . Recommended to apply a 2k primer on top of before topcoating."}
        ],
        "UPOL": [
            { name: "1K Aerosol Plastic Primer", image: "Images/Upol & Raptor/Upol 1K Plastic Primer Aerosol.png", description: "9123100065. Ideal for all automotive surfaces such as plastics, aluminium, fibreglass, galvanised and painted surfaces."}
            
        ]
    },
    
    
    "Production Rolls": {
        "Speed": [
            { name: "Production Roll Speed P40", image: "Images/Speed/Production Roll.png", description: "9106401240 Used For Body Filler Sanding" },
            { name: "Production Roll Speed P80", image: "Images/Speed/Production Roll.png", description: "9106401242 Used For Body Filler Sanding" },
            { name: "Production Roll Cumi P150", image: "Images/Speed/Production Roll.png", description: "9106401244 Used For Body Filler Sanding" },
                    
        ],
        
    },

    "Sanding Sponge": {
        "Finixa": [
            { name: "320 Grit Pad", image: "Images/Sunmight/SharpFoamPad.png", description: "9106405447 2-sided abrasive. Super soft backing foam allowing the product to adapt perfectly to all profiled work pieces. Pressure distributing foam reduces sanding through and guarantees an even and uniform sanding pattern. Dry or wet application" },
            { name: "500 Grit Pad", image: "Images/Sunmight/SharpFoamPad.png", description: "9106405443 2-sided abrasive. Super soft backing foam allowing the product to adapt perfectly to all profiled work pieces. Pressure distributing foam reduces sanding through and guarantees an even and uniform sanding pattern. Dry or wet application" },
            { name: "800 Grit Pad", image: "Images/Sunmight/SharpFoamPad.png", description: "9106405446 2-sided abrasive. Super soft backing foam allowing the product to adapt perfectly to all profiled work pieces. Pressure distributing foam reduces sanding through and guarantees an even and uniform sanding pattern. Dry or wet application" },
            { name: "1000 Grit Pad", image: "Images/Sunmight/SharpFoamPad.png", description: "9106405448 2-sided abrasive. Super soft backing foam allowing the product to adapt perfectly to all profiled work pieces. Pressure distributing foam reduces sanding through and guarantees an even and uniform sanding pattern. Dry or wet application" }, 
        ],
        
        "3M":[
            { name: "Sponge Fine", image: "Images/3M/Sponges.png", description: "9106115527 P320 - P400. E–Coat Sanding (New Panels)" },
            { name: "Sponge Super Fine", image: "Images/3M/Sponges.png", description: "9106115530 P500 - P600 Grit. Primer Sanding (Awkward Areas)" },
            { name: "Sponge Ultra Fine", image: "Images/3M/Sponges.png", description: "9106115532 P800 - P1000 Grit. Primer Sanding (Awkward Areas, Critical Colours)" },
            { name: "Sponge Micro Fine", image: "Images/3M/Sponges.png", description: "9106115531 P1200 - P1500 Grit. Used For De-nibbing Of Base Coat, Prep Blending (Awkward Areas)" },

        ],
        
        
        "Speed (Affordable Alternative)": [
            { name: "Sponge Cumi Medium", image: "Images/Speed/CSSF_-_CUMI_FINE_SANDING_SPONGES.png", description: "9106401221 P120 - P180. Used After Body Filler Has Been Applied" },
           { name: "Sponge Cumi Fine", image: "Images/Speed/CSSF_-_CUMI_FINE_SANDING_SPONGES.png", description: "9106401220 P320 - P400. E–Coat Sanding (New Panels)" },
           { name: "Sponge Cumi Super Fine", image: "Images/Speed/CSSF_-_CUMI_FINE_SANDING_SPONGES.png", description: "9106401222 P500 - P600 Grit. Primer Sanding (Awkward Areas)" },
           { name: "Sponge Cumi Ultra Fine", image: "Images/Speed/CSSF_-_CUMI_FINE_SANDING_SPONGES.png", description: "9106401223 P800 - P1000 Grit. Primer Sanding (Awkward Areas, Critical Colours)" }
        ]
    },

    "Scotch Brite & Misc":{
        "3M": [
            {name: " Maroon Very Fine", image: "Images/3M/Maroon Pad.png", description: "9106107447 Used For Blending Application With Scuff Stuff"},
            {name: " Grey Ultra Fine", image: "Images/3M/Grey Pad.png", description: "9106107448 Used For Blending Application With Scuff Stuff" }

        ],
        
        "Sunmight": [
            {name: " Maroon Ultra Fine", image: "Images/Sunmight/Maroon.png", description: "9106405650 Used For Blending Application With Scuff Stuff"},
            {name: " Grey Ultra Fine", image: "Images/Sunmight/Grey.png", description: "9106405651 Used For Blending Application With Scuff Stuff" }

        ],
        "Tork Craft": [
            { name: "Grey Ultra Fine", image: "Images/Sunmight/Torkcraft.png", description: "9106407002 Used For Blending Application With Scuff Stuff" },
            { name: "Maroon Super Fine", image: "Images/Sunmight/Torkcraft.png", description: "9106407003 Used For Blending Application With Scuff Stuff" }

        ],
        
        "Ekamant": [
            { name: "Scotch Brite Hand Pad Grey Ultrafine", image: "Images/Scholl/Ekamant Gray.png", description: "9106406900 Alternative For 3M Scotch Brite Grey" },
            { name: "Scotch Buffrit Hand Pad Green", image: "Images/Scholl/Ekamant Green.png", description: "9106406910 Alternative For 3M Scotch Brite Maroon" },
        ]

    },

    "Spot Putty": {
        "UPOL Spot Putty": [
            { name: "Dolphin 1K Stopper Tube", image: "Images/Upol & Raptor/Upol 1K Stopper.png", description: "9123100030 Used For Filling Small Imperfections During The Body Filler & Primer Stages" }
        ],
        "PPG Spot Putty": [
            { name: "PPG A242 VBA Putty-Beige 0.2g", image: "Images/PPG Putty.png", description: "9124410242 Used For Filling Small Imperfections During The Body Filler & Primer Stages" }
        ]
    },

    "Spray Guns": {
        "Aircraft": [
            { name: "Spray Gun Gravity HVLP 1.4mm", image: "Images/Walcom Guns/Aircraft H827.png", description: "9106610050 For 2K Applications and Clearcoats" },
            { name: "Spray Gun Gravity HVLP 1.7mm", image: "Images/Walcom Guns/Aircraft H827.png", description: "9106610121 For Primer Applications and Selemix" }

    ],
    "DeVilbiss": [
        { name: "Spray Gun Prolite GTE10-14", image: "Images/Devilbiss/Gti Pro Lite 1.4.png", description: "9106610058 For Basecoat Applications" },
        { name: "Spray Gun Prolite GTE10-13", image: "Images/Devilbiss/Gti Pro Lite 1.3.png", description: "9106610059 For 2K Clearcoats and Colors" },
        { name: "Spray Gun GPG PR10-18", image: "Images/Devilbiss/GPG.png", description: "9106610075 For Primer Applications And Selemix" },
        { name: "Spray Gun HVLP FLG G5-13", image: "Images/Devilbiss/FLG.png", description: "9106610081 Cheaper Range. Used for 2K & Basecoat Applications" }
    ],
    "Walcom": [
        { name: "Spray Gun Slim X/Light HTE 1.3mm", image: "Images/Walcom Guns/AST128N.png", description: "9106405843 For 2K & Basecoat Applications" },
        { name: "Spray Gun Slim Kombat NERO Edition 1.3mm", image: "Images/Walcom Guns/AST075N.png", description: "9106405845 For 2K & Basecoat Applications" },
        { name: "Spray Gun Slim Kombat HET Edition 1.3mm", image: "Images/Walcom Guns/AST075K.png", description: "9106405842 For 2K & Basecoat Applications" },
        { name: "Spray Gun Slim HTE 1.7mm", image: "Images/Walcom Guns/AST123.png", description: "9106405840 For Primer & Selemix Applications" },
        { name: "Spray Gun Slim X/Light HTE", image: "Images/Walcom Guns/AST014.png", description: "9106405841 For 2K & Basecoat Applications" }
    ]
},

    "Stone Chip": {
        "Ducol Stonechip": [
            { name: "White 1L", image: "Images/Ducol/StoneChip White.png", description: "9123409600 Provides stone blast protection for the undersides of on- and off-road vehicles and protects battery boxes against acid spill. To be used on bare metal, paint, duco and fibre-glass." },  
            { name: "Grey 1L", image: "Images/Ducol/StoneChip Grey.png", description: "9123409602 Provides stone blast protection for the undersides of on- and off-road vehicles and protects battery boxes against acid spill. To be used on bare metal, paint, duco and fibre-glass." },
            { name: "Black 1L", image: "Images/Ducol/StoneChip Black.png", description: "9123409603 Provides stone blast protection for the undersides of on- and off-road vehicles and protects battery boxes against acid spill. To be used on bare metal, paint, duco and fibre-glass." }
        ],
        "Luxor Stonechip": [
            { name: "Black 1L", image: "Images/Luxor/Luxor Stonechip All.png", description: "9123600070 Provides stone blast protection for the undersides of on- and off-road vehicles and protects battery boxes against acid spill. To be used on bare metal, paint, duco and fibre-glass." },
            { name: "Grey 1L", image: "Images/Luxor/Luxor Stonechip All.png", description: "9123600071 Provides stone blast protection for the undersides of on- and off-road vehicles and protects battery boxes against acid spill. To be used on bare metal, paint, duco and fibre-glass." },
            { name: "White 1L", image: "Images/Luxor/Luxor Stonechip All.png", description: "9123600072 Provides stone blast protection for the undersides of on- and off-road vehicles and protects battery boxes against acid spill. To be used on bare metal, paint, duco and fibre-glass." }
        ],
        "Duram Stonechip": [
            { name: "White 1L", image: "Images/Duram Stone Chip/Duram White.png", description: "9123810005 Provides stone blast protection for the undersides of on- and off-road vehicles and protects battery boxes against acid spill. To be used on bare metal, paint, duco and fibre-glass." },
            { name: "Black 1L", image: "Images/Duram Stone Chip/Duram Black.png", description: "9123810010 Provides stone blast protection for the undersides of on- and off-road vehicles and protects battery boxes against acid spill. To be used on bare metal, paint, duco and fibre-glass." },
            { name: "Grey 1L", image: "Images/Duram Stone Chip/Duram Grey.png", description: "9123810015 Provides stone blast protection for the undersides of on- and off-road vehicles and protects battery boxes against acid spill. To be used on bare metal, paint, duco and fibre-glass." }
        ]
    },

    "Tack Cloths & Wipes": {
        "Finixa": [
            { name: "Degreasing Cloth_ 300x420mm", image:"Images/Tack Rags & Cloths/Degreasing Paper.png", description: "9106405327 Universal cleaning cloth with a large absorption capacity. Voluminous and soft; comfortable handling. Suited for all kinds of applications such as degreasing and cleaning with solvent-based products or oil."},
            { name: "Tack Rag Smooth 380x450mm", image:"Images/Tack Rags & Cloths/Tack Rag Blue.png", description: "9106405332 Impregnated with a water-based product: works anti-static, unlike other tack rags. Never leaves traces of glue that could possibly cause a reaction with any paint"},
            { name: "Cleaning Paper 3-Layer Roll_ 380x370mm", image:"Images/Tack Rags & Cloths/Cleaning Cloth Roll.png", description: "9106405331 High quality cleaning paper, 3-layer, good absorption capacity, solid when wet"}
        ],

    "Scholl": [
            { name: "Cloth Tac / I-Tack 430x310mm", image:"Images/Tack Rags & Cloths/I tack.png", description: "9106406042 Designed to swiftly and cleanly remove contaminants prior to painting, the. I-Tack range contains a water-based tackifier, and is compatible with all paint types. The cloths are cost efficient because they can be used up to eight sides"},
            { name: "Polish Roll__ A-8455500  Chicopee(D)", image:"Images/Tack Rags & Cloths/I Polish.png", description: "9106406044 The most efficient wipe on the market. No scratches. No excess polishing paste. Just pure sheen."},
            { name: "Solvent Wipe / Roll__ A-8455300  Chicopee(D) ", image:"Images/Tack Rags & Cloths/I solve.png", description: "9106406046 I-Solve is a solvent wipe cloth for cleaning before paint. Highly absorbent and silicone free. Leaves streak and smear free finish. Can be used wet or dry"},
        ],
        
    },
    
    "Spray Suites/ Overalls": {
        "Finixa": [
            { name: "Overall Spraypainter Blue M", image:"Images/Tack Rags & Cloths/Overall.png", description: "9106405502"},
            { name: "Overall Spraypainter Blue L", image:"Images/Tack Rags & Cloths/Overall.png", description: "9106405503"},
            { name: "Overall Spraypainter Blue XL", image:"Images/Tack Rags & Cloths/Overall.png", description: "9106405504"}

        ]
    },
    
    "Thinners": {
        "Nexa (Best In The Range)": [
            { name: "Fast Thinners 1L", image: "Images/Nexa/Nexa Fast Thinners.png", description: "9124481491 For Cold Weather Conditions" },
            { name: "Medium Thinners 1L", image: "Images/Nexa/Nexa Medium Thinners.png", description: "9124481492 For Intermate Weather Conditions" },
            { name: "Slow Thinners 1L", image: "Images/Nexa/Nexa Slow Thinners.png", description: "9124481493 For Hot Weather Conditions" }

        ],        
        "Speed (1st Affordable Alternative)": [
            { name: "Reducer Fast 1L", image: "Images/Speed & Challenger/Speed Thinners Fast.png", description: "9123200010 For Hot Weather Conditions" },
            { name: "Reducer Fast 5L", image: "Images/Speed & Challenger/Speed Thinners Fast 5L.png", description: "9123200011 For Hot Weather Conditions" },
            { name: "Reducer Medium 1L", image: "Images/Speed & Challenger/Speed Thinners Medium 1L.png", description: "9123200012 For Intermate Weather Conditions" },
            { name: "Reducer Medium 5L", image: "Images/Speed & Challenger/Speed Thinners Medium 1L.png", description: "9123200013 For Intermate Weather Conditions" }
        ],
        "Duco 300 (Most Affordable Alternative)": [
            { name: "B & R Thinners 300 750ml", image: "Images/B & R/750Thinners.png", description: "9123030002 Cleaning Thinners. Used ONLY for Cleaning. NOT RECOMMENDED for Spraying Cars As it will dull the paint work" },
            { name: "B & R Thinners 300 5L", image: "Images/B & R/BR 5.png", description: "9123030005 Cleaning Thinners. Used ONLY for Cleaning. NOT RECOMMENDED for Spraying Cars As it will dull the paint work" },
            { name: "B & R Thinners 300 25L", image: "Images/B & R/BR 25.png", description: "9123030025 Cleaning Thinners. Used ONLY for Cleaning. NOT RECOMMENDED for Spraying Cars As it will dull the paint work" },
            { name: "B & R Thinners Std 200L", image: "Images/B & R/BR 200.png", description: "9123030200 Cleaning Thinners. Used ONLY for Cleaning. NOT RECOMMENDED for Spraying Cars As it will dull the paint work" }
        ]
    },
    "Upol Raptor": {
        "Raptor Black": [
            { name: "Raptor Liner Black 1L Kit", image: "Images/Upol & Raptor/Raptor Black 1L.png", description: "9123100050 Spray or roll it on high traffic areas; it’s scratch and stain resistant and easy to clean. Its flexible formulation can handle impacts without cracking, making it perfect for its most popular application as a truck bed liner." },
            { name: "Raptor Liner Black 4L Kit", image: "Images/Upol & Raptor/Raptor Black 4L.png", description: "9123100052 Spray or roll it on high traffic areas; it’s scratch and stain resistant and easy to clean. Its flexible formulation can handle impacts without cracking, making it perfect for its most popular application as a truck bed liner." }
        ],
        "Raptor Tintable": [
            { name: "Raptor Liner Tintable 1L Kit", image: "Images/Upol & Raptor/Raptor Tint 1L.png", description: "9123100051 Spray or roll it on high traffic areas; it’s scratch and stain resistant and easy to clean. Its flexible formulation can handle impacts without cracking, making it perfect for its most popular application as a truck bed liner." },
            { name: "Raptor Liner Tintable 4L Kit", image: "Images/Upol & Raptor/Raptor Tint 4L.png", description: "9123100054 Spray or roll it on high traffic areas; it’s scratch and stain resistant and easy to clean. Its flexible formulation can handle impacts without cracking, making it perfect for its most popular application as a truck bed liner." }
        ],
        "Raptor White": [
            { name: "Raptor Liner White 3.8L Kit", image: "Images/Upol & Raptor/Raptor White 4L.png", description: "9123100055 Spray or roll it on high traffic areas; it’s scratch and stain resistant and easy to clean. Its flexible formulation can handle impacts without cracking, making it perfect for its most popular application as a truck bed liner." }
        ],

        "Raptor Aerosol": [
            { name: "Raptor 1K Aerosol Black 450ml", image: "Images/Upol & Raptor/1K Aerosol 450ml.png", description: "9123100059 Used For Touch Up Purposes" },
            { name: "Raptor 1K Aerosol White 450ml", image: "Images/Upol & Raptor/1K Aerosol White 450ml.png", description: "9123100060 Used For Touch Up Purposes" }
        ],

        "PPG Gladiator": [
            { name: "Tintable Kit 1L", image: "Images/Upol & Raptor/Gladiator Black 1L.png", description: "9124991001 Great Alternative To The Raptor Range" },
            { name: "Tintable Kit 4L", image: "Images/Upol & Raptor/Gladiator Black 4L.png", description: "9124991002 Great Alternative To The Raptor Range" },
            { name: "Black Kit 1L", image: "Images/Upol & Raptor/Gladiator Black 1L.png", description: "9124991003 Great Alternative To The Raptor Range" },
            { name: "Black Kit 4L", image: "Images/Upol & Raptor/Gladiator Black 4L.png", description: "9124991004 Great Alternative To The Raptor Range" },
            { name: "Spray Gun", image: "Images/Upol & Raptor/Gladiator Gun.png", description: "9124991005 Can Be Used For Raptor As Well" }
        ]
    },

    "VHB TAPE": {
        "3M": [
            { name: "Double Sided VHB White 12mmx1.1mm x15m", image: "Images/Finixa Mixing Cups/VHB White.png", description: "9106044263 a general purpose adhesive on both sides of a firm type foam core. It is specifically designed for good adhesion to metals, glass and other high surface energy materials."},  
            { name: "Double Sided VHB White 24mmx1.1mm x15m", image: "Images/Finixa Mixing Cups/VHB White.png", description: "9106044264 a general purpose adhesive on both sides of a firm type foam core. It is specifically designed for good adhesion to metals, glass and other high surface energy materials."},  
            { name: "Double Sided VHB Black 12mmx1.1mm x33m", image: "Images/Finixa Mixing Cups/VHB Black.png", description: "9106044265 UV and temperature stable, 3M™ VHB™ Tape can withstand the heat of Dubai to the cold of Canada. The unique acrylic chemistry is extremely durable and resistant to change over time, making this a long-lasting and powerful tape you can trust."},  
            { name: "Double Sided VHB Grey 12mmx1.1mm x33m", image: "Images/Finixa Mixing Cups/VHB Grey.png", description: "9106044270 a permanent bonding solution that can replace traditional mechanical fasteners and liquid adhesives in challenging, high temperature applications.ideal for powder coat or liquid paint processes which undergo a heat bake cycle."},  
            { name: "Double Sided VHB Grey 19mmx1.1mm x33m", image: "Images/Finixa Mixing Cups/VHB Grey.png", description: "9106044275 a permanent bonding solution that can replace traditional mechanical fasteners and liquid adhesives in challenging, high temperature applications.ideal for powder coat or liquid paint processes which undergo a heat bake cycle."},  
            { name: "Double Sided VHB Grey 25mmx1.1mm x33m", image: "Images/Finixa Mixing Cups/VHB Grey.png", description: "9106044280 a permanent bonding solution that can replace traditional mechanical fasteners and liquid adhesives in challenging, high temperature applications.ideal for powder coat or liquid paint processes which undergo a heat bake cycle."},  
        ]
    },

    "Water Paper": {
        "Speed": [
            { name: "P100", image: "Images/Speed/SPEED-Waterpaper-1.png", description: "9106401010 Used For Sanding Body Fillers" },
            { name: "P150", image: "Images/Speed/SPEED-Waterpaper-1.png", description: "9106401015 Used For Sanding Body Fillers" },
            { name: "P220", image: "Images/Speed/SPEED-Waterpaper-1.png", description: "9106401022 Used For Sanding Body Fillers" },
            { name: "P320", image: "Images/Speed/SPEED-Waterpaper-1.png", description: "9106401032 Used For Finishing Of Body Fillers Before Primer Applications" },
            { name: "P400", image: "Images/Speed/SPEED-Waterpaper-1.png", description: "9106401040" },
            { name: "P600", image: "Images/Speed/SPEED-Waterpaper-1.png", description: "9106401060 Used For Sanding Primer When A 2K Based Paint Will Be Applied" },
            { name: "P800", image: "Images/Speed/SPEED-Waterpaper-1.png", description: "9106401080 Used For Sanding Primer When A BaseCoat Based Paint Will Be Applied" },
            { name: "P1000", image: "Images/Speed/SPEED-Waterpaper-1.png", description: "9106401100 Used For Sanding Of Blending Panels" },
            { name: "P1200", image: "Images/Speed/SPEED-Waterpaper-1.png", description: "9106401120 Can Be Used Before Applying Polish" },
            { name: "P1500", image: "Images/Speed/SPEED-Waterpaper-1.png", description: "9106401150 Can Be Used Before Applying Polish" },
            { name: "P2000", image: "Images/Speed/SPEED-Waterpaper-1.png", description: "9106401200 Can Be Used Before Applying Polish" }
        ],

        "3M": [
            { name: "Waterpaper P150", image: "Images/Finixa Mixing Cups/Wet Or Dry.png", description: "9106000150 designed for sanding applications that require a fine grit and a light touch, such as auto body wet sanding and paint finishing."},
            { name: "Waterpaper P800", image: "Images/Finixa Mixing Cups/Wet Or Dry.png", description: "9106000800 designed for sanding applications that require a fine grit and a light touch, such as auto body wet sanding and paint finishing."},  
            { name: "Waterpaper P1200", image: "Images/Finixa Mixing Cups/Wet Or Dry.png", description: "9106001200 designed for sanding applications that require a fine grit and a light touch, such as auto body wet sanding and paint finishing."},  
            { name: "Waterpaper P1500", image: "Images/Finixa Mixing Cups/Wet Or Dry.png", description: "9106001210 designed for sanding applications that require a fine grit and a light touch, such as auto body wet sanding and paint finishing."},  
            { name: "Waterpaper P1000 Half Sheet", image: "Images/Finixa Mixing Cups/1000.png", description: "9106001225 built for very light sanding on often delicate automotive paint surfaces. Sharp silicon carbide mineral abrasive provides consistent sanding patterns without heavy pressure. Durable C-weight paper holds up during wet sanding. This sheet is ideal for creating excellent finishes on fully cured, hard-to-compound clear coats and on dark-colored paint."},  
            { name: "Waterpaper P1200 Half Sheet", image: "Images/Finixa Mixing Cups/1200 half.png", description: "9106001250 built for very light sanding on often delicate automotive paint surfaces. Sharp silicon carbide mineral abrasive provides consistent sanding patterns without heavy pressure. Durable C-weight paper holds up during wet sanding. This sheet is ideal for creating excellent finishes on fully cured, hard-to-compound clear coats and on dark-colored paint."},  
            { name: "Waterpaper P1500 Half Sheet", image: "Images/Finixa Mixing Cups/1500.png", description: "9106001300 built for very light sanding on often delicate automotive paint surfaces. Sharp silicon carbide mineral abrasive provides consistent sanding patterns without heavy pressure. Durable C-weight paper holds up during wet sanding. This sheet is ideal for creating excellent finishes on fully cured, hard-to-compound clear coats and on dark-colored paint."},  
            { name: "Waterpaper P2000 Half Sheet", image: "Images/Finixa Mixing Cups/2000.png", description: "9106001350 built for very light sanding on often delicate automotive paint surfaces. Sharp silicon carbide mineral abrasive provides consistent sanding patterns without heavy pressure. Durable C-weight paper holds up during wet sanding. This sheet is ideal for creating excellent finishes on fully cured, hard-to-compound clear coats and on dark-colored paint."},  
            { name: "Waterpaper P3000 Quarter Sheet", image: "Images/Finixa Mixing Cups/3000.png", description: "9106001400 built for very light sanding on often delicate automotive paint surfaces. Sharp silicon carbide mineral abrasive provides consistent sanding patterns without heavy pressure. Durable C-weight paper holds up during wet sanding. This sheet is ideal for creating excellent finishes on fully cured, hard-to-compound clear coats and on dark-colored paint."},  
            { name: "FreeCut Paper P150", image: "Images/Finixa Mixing Cups/Freecut.png", description: "9106002150 Open coat construction provides a more aggressive cut and minimizes dust clogging on the abrasive for increased productivity"},  
            { name: "FreeCut Paper P320", image: "Images/Finixa Mixing Cups/Freecut.png", description: "9106002320 Open coat construction provides a more aggressive cut and minimizes dust clogging on the abrasive for increased productivity"},  
            { name: "FreeCut Paper P500", image: "Images/Finixa Mixing Cups/Freecut.png", description: "9106002500 Open coat construction provides a more aggressive cut and minimizes dust clogging on the abrasive for increased productivity"},  
            { name: "FreeCut Paper P600", image: "Images/Finixa Mixing Cups/Freecut.png", description: "9106002600 Open coat construction provides a more aggressive cut and minimizes dust clogging on the abrasive for increased productivity"},
            { name: "FreeCut Paper P800", image: "Images/Finixa Mixing Cups/Freecut.png", description: "9106002800 Open coat construction provides a more aggressive cut and minimizes dust clogging on the abrasive for increased productivity"}  
            
        ]
    },
    
};


window.onload = function() {
    const selectProduct = document.getElementById('product');
    const selectBrand = document.getElementById('brand');
    const selectVariation = document.getElementById('variation');
    const variationDetails = document.getElementById('variationDetails');
    const variationImage = document.getElementById('variationImage');
    const variationDescription = document.getElementById('variationDescription');
    
    // Populate products dropdown
    for (let product in data) {
        selectProduct.options[selectProduct.options.length] = new Option(product, product);
    }

    selectProduct.onchange = function() {
        const selectedProduct = this.value;
        const brands = data[selectedProduct];

        selectBrand.innerHTML = '<option value="" disabled selected>Select a Brand</option>';
        selectVariation.innerHTML = '<option value="" disabled selected>Select Variation</option>';

        if (selectedProduct) {
            // Assuming only one brand per product in your data structure
            for (let brand in brands) {
                selectBrand.options[selectBrand.options.length] = new Option(brand, brand);
            }

            selectBrand.disabled = false;
        } else {
            selectBrand.disabled = true;
            selectVariation.disabled = true;
            variationDetails.style.display = 'none';
        }

        selectVariation.disabled = true;
        variationDetails.style.display = 'none';
    };

    selectBrand.onchange = function() {
        const selectedProduct = selectProduct.value;
        const selectedBrand = this.value;
        const variations = data[selectedProduct][selectedBrand];

        selectVariation.innerHTML = '<option value="" disabled selected>Select a Variation</option>';

        if (selectedBrand) {
            variations.forEach((variation, index) => {
                selectVariation.options[selectVariation.options.length] = new Option(variation.name, index);
            });

            selectVariation.disabled = false;
        } else {
            selectVariation.disabled = true;
            variationDetails.style.display = 'none';
        }
    };

    selectVariation.onchange = function() {
        const selectedProduct = selectProduct.value;
        const selectedBrand = selectBrand.value;
        const selectedVariationIndex = this.value;
        const variationInfo = data[selectedProduct][selectedBrand][selectedVariationIndex];

        if (variationInfo) {
            variationImage.src = variationInfo.image;
            variationDescription.textContent = variationInfo.description;
            variationDetails.style.display = 'block';
        } else {
            variationDetails.style.display = 'none';
        }
    };
};
