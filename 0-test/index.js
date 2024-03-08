
const Weapon = require ("./models/Weapon");
const Image = require ("./models/Image");
const Category = require ("./models/Category");
const {countWeapon,getImageUrlByWeaponId, getWeaponById,createWeapon} = require ("./controllers/weapon");
const {getImageById,countImage,createImage} = require ("./controllers/image");
const {getCategoryById,countCategory,createCategory} = require ("./controllers/category")





//AQUI GENERE UNA INSTANCIA DE LA CLASE Category
const categoryAssaultRifles = new Category(1,"assault Rifles");
const categoryBattleRifles = new Category(2,"Battle Rifles");
const categorySubmachineGuns = new Category(3,"submachine Guns");
const categoryShotguns = new Category(4,"shotguns");
const categoryLightMachineGuns = new Category(5,"light Machine Guns");
createCategory(categoryAssaultRifles);
createCategory(categoryBattleRifles);
createCategory(categorySubmachineGuns);
createCategory(categoryShotguns);
createCategory(categoryLightMachineGuns);


//instancias de imagen
const imageSva545 = new Image (1,"https://cdn.vox-cdn.com/thumbor/L8cABu3eZ6Dc76uk8SU8t_JFYgU=/0x0:1920x1080/920x613/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72852638/mw3_best_sva_545_loadout_header.0.jpg");
const imageMtz556 = new Image (2,"https://cdn.oneesports.gg/cdn-data/2023/10/mtz-556-1024x576.jpg");
const imageHolger556 = new Image (3,"https://cdn.oneesports.gg/cdn-data/2023/11/mw3_best_holger_556_build-1024x576.jpg");
const imageMcw = new Image (4,"https://www.dexerto.com/cdn-cgi/image/width=828,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/11/11/mcw-header.jpg");
const imageOg58 = new Image (5,"https://dotesports.com/wp-content/uploads/2023/11/MW3-DG-58-LSW-2.png?w=1200");
const imageFr556 = new Image (6,"https://static1.thegamerimages.com/wordpress/wp-content/uploads/2023/11/modern-warfare-3-fr-5-56-general-use-build-preview.jpg?q=50&fit=contain&w=1140&h=570&dpr=1.5");
const imageBasB = new Image (7,"https://assetsio.reedpopcdn.com/mw3_guide_basbloadout_header.png?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp");
const imageSidewinder = new Image (8,"https://dotesports.com/wp-content/uploads/2023/11/mw3-sidewinder.jpg?w=1200");
const imageMtz762 = new Image (9,"https://static1.thegamerimages.com/wordpress/wp-content/uploads/2023/11/modern-warfare-3-mtz-762-build-preview.jpg?q=50&fit=contain&w=1140&h=570&dpr=1.5");
const imageStriker = new Image (10,"https://cdn.vox-cdn.com/thumbor/ms3RchRysfJz7LS2ZuVtcX0UOEg=/0x0:1920x1080/920x613/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72748673/mw3_beta_best_striker_loadout_header_2.6.jpg");
const imageWspSwarm = new Image (11,"https://assetsio.reedpopcdn.com/WSP-SWARM.jpg?width=880&quality=80&format=jpg&auto=webp");
const imageArm9 = new Image (12,"https://static.wikia.nocookie.net/callofduty/images/f/fa/AMR9_Gunsmith_MWIII.png/revision/latest/scale-to-width-down/1000?cb=20231007025105");
const imageWsp9 = new Image (13,"https://www.dexerto.com/cdn-cgi/image/width=1200,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/11/10/wsp-9-preview-hide-ui-mw3-1024x576.jpg");
const imageRival9 = new Image (14,"https://assetsio.reedpopcdn.com/MW3-Rival-9-Header.jpg?width=690&quality=75&format=jpg&auto=webp");
const imageStriker9 = new Image (15,"https://assetsio.reedpopcdn.com/Striker-9.jpg?width=880&quality=80&format=jpg&auto=webp");
const imageLockwood680 = new Image (16,"https://assetsio.reedpopcdn.com/MW3-Lockwood-680-Header.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp");
const imageHaymaker = new Image (17,"https://www.zleague.gg/theportal/wp-content/uploads/2023/11/MW3-Haymaker-1140x570.jpg.webp");
const imageRiveter = new Image (18,"https://assetsio.reedpopcdn.com/mw3-riveter.jpg?width=880&quality=80&format=jpg&auto=webp");
const imagePulemyot762 = new Image (19,"https://static1.thegamerimages.com/wordpress/wp-content/uploads/2023/11/modern-warfare-3-pulemyot-762-build-featured.jpg?q=50&fit=contain&w=1140&h=570&dpr=1.5");
const imageDg58Lsw = new Image (20,"https://cdn.gfinityesports.com/images/ncavvykf/gfinityesports/14114a3d980e15c53b00f301bca94814b2f4de3f-1920x1080.jpg?rect=0,36,1920,1008&w=1200&h=630&auto=format");
const imageHolger26 = new Image (21,"https://assetsio.reedpopcdn.com/mw3-holger-26.jpg?width=880&quality=80&format=jpg&auto=webp");
const imageBruenMk9 = new Image (22,"https://assetsio.reedpopcdn.com/mw3-bruen-mk9.jpg?width=880&quality=80&format=jpg&auto=webp");
const imageTaqEradictor = new Image (23,"https://assetsio.reedpopcdn.com/mw3-taq-eradicator_BYg96Cd.jpg?width=880&quality=80&format=jpg&auto=webp");
createImage(imageSva545);
createImage(imageMtz556);
createImage(imageHolger556);
createImage(imageMcw);
createImage(imageOg58);
createImage(imageFr556);
createImage(imageBasB);
createImage(imageSidewinder);
createImage(imageMtz762);
createImage(imageStriker);
createImage(imageWspSwarm);
createImage(imageArm9);
createImage(imageWsp9);
createImage(imageRival9);
createImage(imageStriker9);
createImage(imageLockwood680);
createImage(imageHaymaker);
createImage(imageRiveter);
createImage(imagePulemyot762);
createImage(imageDg58Lsw);
createImage(imageHolger26);
createImage(imageBruenMk9);
createImage(imageTaqEradictor);


//categoryAssaultRifles
const weaponSva545 = new Weapon (1,"SVA 545",categoryAssaultRifles.id,imageSva545.id);
const weaponMtz556 = new Weapon (2,"MTZ-556",categoryAssaultRifles.id,imageMtz556.id);
const weaponHolger556 = new Weapon (3,"Holger-556",categoryAssaultRifles.id,imageHolger556.id);
const weaponMcw = new Weapon (4,"MCW",categoryAssaultRifles.id,imageMcw.id);
const weaponOg58 = new Weapon (5,"OG-58",categoryAssaultRifles.id,imageOg58.id);
const weaponFr556 = new Weapon (6,"FR 5.56",categoryAssaultRifles.id,imageFr556.id);
createWeapon(weaponSva545);
createWeapon(weaponMtz556);
createWeapon(weaponHolger556);
createWeapon(weaponMcw);
createWeapon(weaponOg58);
createWeapon(weaponFr556);


// categoryBattleRifles
const weaponBasB = new Weapon (7,"BAS-sB",categoryBattleRifles.id,imageBasB.id);
const weaponSidewinder = new Weapon (8,"Sidewinder",categoryBattleRifles.id,imageSidewinder.id);
const weaponMtz762 = new Weapon (9,"MTZ-762",categoryBattleRifles.id,imageMtz762.id);
createWeapon(weaponBasB);
createWeapon(weaponSidewinder);
createWeapon(weaponMtz762);


// categorySubmachineGuns
const weaponStriker = new Weapon (10,"Striker",categorySubmachineGuns.id,imageStriker.id);
const weaponWspSwarm = new Weapon (11,"WSP Swarm",categorySubmachineGuns.id,imageWspSwarm.id);
const weaponArm9 = new Weapon (12,"ARM9",categorySubmachineGuns.id,imageArm9.id);
const weaponWsp9 = new Weapon (13,"WSP-9",categorySubmachineGuns.id,imageWsp9.id);
const weaponRival9 = new Weapon (14,"Rival-9",categorySubmachineGuns.id,imageRival9.id);
const weaponStriker9 = new Weapon (15,"Striker 9",categorySubmachineGuns.id,imageStriker9.id);
createWeapon(weaponStriker);
createWeapon(weaponWspSwarm);
createWeapon(weaponArm9);
createWeapon(weaponWsp9);
createWeapon(weaponRival9);
createWeapon(weaponStriker9);


// categoryShotguns
const weaponLockwood680 = new Weapon (16,"Lockwood 680",categoryShotguns.id,imageLockwood680.id);
const weaponHaymaker = new Weapon (17,"Haymaker",categoryShotguns.id,imageHaymaker.id);
const weaponRiveter = new Weapon (18,"Riveter",categoryShotguns.id,imageRiveter.id);
createWeapon(weaponLockwood680);
createWeapon(weaponHaymaker);
createWeapon(weaponRiveter);


//categoryLightMachineGuns
const weaponPulemyot762 = new Weapon (19,"Pulemyot 762",categoryLightMachineGuns.id,imagePulemyot762.id);
const weaponDg58Lsw = new Weapon (20,"DG-58 LSW",categoryLightMachineGuns.id,imageDg58Lsw.id);
const weaponHolger26 = new Weapon (21,"Holger 26",categoryLightMachineGuns.id,imageHolger26.id);
const weaponBruenMk9 = new Weapon (22,"Bruen Mk9",categoryLightMachineGuns.id,imageBruenMk9.id);
const weaponTaqEradictor = new Weapon (23,"TAQ Eradicator",categoryLightMachineGuns.id,imageTaqEradictor.id);
createWeapon(weaponPulemyot762);
createWeapon(weaponDg58Lsw);
createWeapon(weaponHolger26);
createWeapon(weaponBruenMk9);
createWeapon(weaponTaqEradictor);



console.log(countWeapon());

/* muestra como ahora va mi console.log
console.log(getImageUrlByWeaponId(3)); */


