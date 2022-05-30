// On clicking remove button the item should be removed from DOM as well as localstorage.
var bonusData = [
    {image:"https://slimages.macysassets.com/is/image/MCY/products/1/optimized/21647751_fpx.tif",name:"LONG-WEAR CREAM SHADOW STICK Our ultimate quick eye shadow stick",price:"$1,099.99",save:"$900",wasPrice:"$1,999.99"},
    {image:"https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E1LM01_600x600_0.jpg",name:"VITAMIN ENRICHED FACE BASE Multitasking, moisturizing primer",price:"$79.99",save:"$100",wasPrice:"$179.99"},
    {image:"https://cdn02.nnnow.com/web-images/large/styles/JLNCR1RHNYZ/1586177010539/1.jpg",name:"KIN LONG-WEAR WEIGHTLESS FOUNDATION SPF 15",price:"89.99",save:"$9.99",wasPrice:"$299.99"},
    {image:"https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/280290/bobbi-brown-skin-corrector-stick-dark-peach_1_display_1649394732_20df7fbd.jpg",name:"SKIN CORRECTOR STICK Discoloration neutralizer for undereyes & face",price:"$79.99",save:"$25",wasPrice:"$104.99"},
    {image:"https://m.bobbibrowncosmetics.ca/media/export/cms/products/v2_1080x1080/bb_sku_ET5K11_1080x1080_0.jpg",name:"SKIN WEIGHTLESS POWDER FOUNDATION Silky, oil-free powder formula",price:"$68.49",save:"$24",wasPrice:"$92.49"},
    {image:"https://m.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_ENHM04_1080x1080_0.jpg",name:"SKIN LONG-WEAR FLUID POWDER FOUNDATION SPF 20 Hybrid liquid-to-powder foundation",price:"$329.99",save:"$187",wasPrice:"$516.99"},
    {image:"https://cdn03.nnnow.com/web-images/large/styles/A8IL3DGTY0N/1609912887238/1.jpg",name:"SHEER FINISH PRESSED POWDER Oil-absorbing powder",price:"59.99",save:"$30",wasPrice:"$89.99"},
    {image:"https://m.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_EHP201_1080x1080_0.jpg",name:"EXTRA ILLUMINATING MOISTURE BALM Glow-amplifying moisturizer",price:"$259.99",save:"$640",wasPrice:"$899.99"},
    {image:"https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E96N01_600x600_0.jpg",name:"PRIMER PLUS PROTECTION SPF 50 Protective face prime",price:"$34.99",save:"$35",wasPrice:"$69.99"},
    {image:"https://m.bobbibrowncosmetics.com/media/export/cms/products/415x415/bb_prod_EH21_415x415_0.jpg",name:"CRUSHED LIP COLOR Playful, effortless color",price:"$149.99",save:"$30",wasPrice:"$179.99"},
    {image:"https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EM4201_600x600_0.jpg",name:"SOOTHING CLEANSING OIL Makeup remover and cleanser",price:"$89.99",save:"$89.99",wasPrice:"$299.99"},
    {image:"https://m.bobbibrown.in/media/export/cms/products/v2_1080x1080/bb_sku_EMCK02_1080x1080_0.jpg",name:"CRUSHED OIL-INFUSED GLOSS Hydrating, non-sticky lip gloss",price:"22.99",save:"Save $17",wasPrice:"wasPrice $39.99"},
    {image:"https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_E9TN01_1080x1080_0.jpg",name:"SMOKEY EYE MASCARA Long-wearing, volumizing mascara",price:"$19.99",save:"$10",wasPrice:"wasPrice $29.99"},
    {image:"https://m.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_EFX201_1080x1080_0.jpg",name:"SKIN CLARIFIER NO. 75 Concentrated pore-clarifying treatment",price:"$79.99",save:"$100",wasPrice:"wasPrice $179.99"},
    {image:"https://m.media-amazon.com/images/I/41OGyJYWFfS.jpg",name:"LONG-WEAR GEL EYELINER Waterproof, no-smudge eyeliner",price:"$204.99",save:"$145.99",wasPrice:"wasPrice $349.99"},
    {image:"https://m.bobbibrown.in/media/export/cms/products/600x600/bb_sku_EPH201_600x600_0.jpg",name:"MINI HIGHLIGHTING POWDER Pearlescent Glow on the Go",price:"$89.99",save:"$89.99",WasPrice:"wasPrice $299.99"}
]

var arrObj = JSON.parse(localStorage.getItem("cartData")) || [];

bonusData.map(function(elem){
    var img = document.createElement("img");
    img.src = elem.image;

    var name = document.createElement("h4");
    name.setAttribute("id","namee");
    name.innerText=elem.name;

    var price = document.createElement("h1");
    price.setAttribute("id","pricee");
    price.innerText=elem.price;

    var savePrice = document.createElement("p");
    savePrice.setAttribute("id","saveprice");
    savePrice.innerText = elem.save;

    var wasPrice = document.createElement("p");
    wasPrice.setAttribute("id","wasprice");
    wasPrice.innerText = elem.wasPrice;

    var btn = document.createElement("button");
    btn.innerText="Add To Cart";
    btn.addEventListener("click",function(){
        mufunction(elem);
    });

    var bonusBox = document.createElement("div");

    var x = document.querySelector("#bonus-deals");

    bonusBox.append(img,name,price,savePrice,wasPrice,btn);
    x.append(bonusBox);


})

function mufunction(elem)
{
    alert("Item added to cart");
    arrObj.push(elem);
    // console.log(arrObj)
    localStorage.setItem("cartData",JSON.stringify(arrObj));
}