/**
 * This class dynamically constructs a DOM section containing hyperlinks to the original index cards.
 * The DOM section is injected into the container for the index cards and feed to lightgallery for display
 * When the gallery is closed, the DOM section is destroyed.
 * 
 */
class IndexCard {
    constructor(name, array) {
        this.name = name;
        this.array = array;
    }

    source() {
        return this.name;
    }

    elements() {
        return this.array;
    }
}

let indexCards = new Map();
/* Map the cards to their collections in archive/ folder */
indexCards.set( 'assets/card1.jpg', new IndexCard( "1747-1", []));
indexCards.set( 'assets/card2.jpg', new IndexCard( "1747-2", []));
indexCards.set( 'assets/card3.jpg', new IndexCard( "1747-3", []));
indexCards.set( 'assets/card4.jpg', new IndexCard( "1747-4", []));
indexCards.set( 'assets/card5.jpg', new IndexCard( "1747-5", []));
indexCards.set( 'assets/card6.jpg', new IndexCard( "1747-6", []));
indexCards.set( 'assets/card7.jpg', new IndexCard( "1747-7", []));
indexCards.set( 'assets/card8.jpg', new IndexCard( "1747-8", []));
indexCards.set( 'assets/card9.jpg', new IndexCard( "1747-9", []));
indexCards.set( 'assets/card10.jpg', new IndexCard( "1747-10", []));
indexCards.set( 'assets/card11.jpg', new IndexCard( "1111-1", []));
indexCards.set( 'assets/card12.jpg', new IndexCard( "1111-2", []));
indexCards.set( 'assets/card13.jpg', new IndexCard( "1111-3", []));
indexCards.set( 'assets/card14.jpg', new IndexCard( "1111-4", []));
indexCards.set( 'assets/card15.jpg', new IndexCard( "1111-5", []));
indexCards.set( 'assets/card16.jpg', new IndexCard( "1111-6", []));
indexCards.set( 'assets/card17.jpg', new IndexCard( "1111-7", []));
indexCards.set( 'assets/card18.jpg', new IndexCard( "1111-8", []));
indexCards.set( 'assets/card19.jpg', new IndexCard( "1111-9", []));
indexCards.set( 'assets/card20.jpg', new IndexCard( "1111-10", []));
indexCards.set( 'assets/card21.jpg', new IndexCard( "2222-1", []));
indexCards.set( 'assets/card22.jpg', new IndexCard( "2222-2", []));
indexCards.set( 'assets/card23.jpg', new IndexCard( "2222-3", []));
indexCards.set( 'assets/card24.jpg', new IndexCard( "2222-4", []));
indexCards.set( 'assets/card25.jpg', new IndexCard( "2222-5", []));
indexCards.set( 'assets/card26.jpg', new IndexCard( "2222-6", []));
indexCards.set( 'assets/card27.jpg', new IndexCard( "2222-7", []));
indexCards.set( 'assets/card28.jpg', new IndexCard( "2222-8", []));
indexCards.set( 'assets/card29.jpg', new IndexCard( "2222-9", []));
indexCards.set( 'assets/card30.jpg', new IndexCard( "2222-10", []));
indexCards.set( 'assets/card31.jpg', new IndexCard( "3333-1", []));
indexCards.set( 'assets/card32.jpg', new IndexCard( "3333-2", []));
indexCards.set( 'assets/card33.jpg', new IndexCard( "3333-3", []));
indexCards.set( 'assets/card34.jpg', new IndexCard( "3333-4",  []));
indexCards.set( 'assets/card35.jpg', new IndexCard( "3333-5", []));
indexCards.set( 'assets/card36.jpg', new IndexCard( "3333-6", []));
indexCards.set( 'assets/card37.jpg', new IndexCard( "3333-7", []));
indexCards.set( 'assets/card38.jpg', new IndexCard( "3333-8", []));
indexCards.set( 'assets/card39.jpg', new IndexCard( "3333-9", []));
indexCards.set( 'assets/card40.jpg', new IndexCard( "3333-10", []));
indexCards.set( 'assets/card41.jpg', new IndexCard( "4444-1", []));
indexCards.set( 'assets/card42.jpg', new IndexCard( "4444-2", []));
indexCards.set( 'assets/card43.jpg', new IndexCard( "4444-3", []));
indexCards.set( 'assets/card44.jpg', new IndexCard( "4444-4", []));
indexCards.set( 'assets/card45.jpg', new IndexCard( "4444-5", []));
indexCards.set( 'assets/card46.jpg', new IndexCard( "4444-6", []));
indexCards.set( 'assets/card47.jpg', new IndexCard( "4444-7", []));
indexCards.set( 'assets/card48.jpg', new IndexCard( "4444-8", []));
indexCards.set( 'assets/card49.jpg', new IndexCard( "4444-9", []));
indexCards.set( 'assets/card50.jpg', new IndexCard( "4444-10", []));
indexCards.set( 'assets/card51.jpg', new IndexCard( "5555-1", []));
indexCards.set( 'assets/card52.jpg', new IndexCard( "5555-2", []));
indexCards.set( 'assets/card53.jpg', new IndexCard( "5555-3", []));
indexCards.set( 'assets/card54.jpg', new IndexCard( "5555-4", []));
indexCards.set( 'assets/card55.jpg', new IndexCard( "5555-5", []));
indexCards.set( 'assets/card56.jpg', new IndexCard( "5555-6", []));
indexCards.set( 'assets/card57.jpg', new IndexCard( "5555-7", []));
indexCards.set( 'assets/card58.jpg', new IndexCard( "5555-8", []));
indexCards.set( 'assets/card59.jpg', new IndexCard( "5555-9", []));
indexCards.set( 'assets/card60.jpg', new IndexCard( "5555-10", []));
indexCards.set( 'assets/card61.jpg', new IndexCard( "6666-1", []));
indexCards.set( 'assets/card62.jpg', new IndexCard( "6666-2", []));
indexCards.set( 'assets/card63.jpg', new IndexCard( "6666-3", []));
indexCards.set( 'assets/card64.jpg', new IndexCard( "6666-4", []));
indexCards.set( 'assets/card65.jpg', new IndexCard( "6666-5", []));
indexCards.set( 'assets/card66.jpg', new IndexCard( "6666-6", []));
indexCards.set( 'assets/card67.jpg', new IndexCard( "6666-7", []));
indexCards.set( 'assets/card68.jpg', new IndexCard( "6666-8", []));
indexCards.set( 'assets/card69.jpg', new IndexCard( "6666-9", []));
indexCards.set( 'assets/card70.jpg', new IndexCard( "6666-10", []));
indexCards.set( 'assets/card71.jpg', new IndexCard( "7777-1", []));
indexCards.set( 'assets/card72.jpg', new IndexCard( "7777-2", []));
indexCards.set( 'assets/card73.jpg', new IndexCard( "7777-3", []));
indexCards.set( 'assets/card74.jpg', new IndexCard( "7777-4", []));
indexCards.set( 'assets/card75.jpg', new IndexCard( "7777-5", []));
indexCards.set( 'assets/card76.jpg', new IndexCard( "7777-6", []));
indexCards.set( 'assets/card77.jpg', new IndexCard( "7777-7", []));
indexCards.set( 'assets/card78.jpg', new IndexCard( "7777-8", []));
indexCards.set( 'assets/card79.jpg', new IndexCard( "7777-9", []));
indexCards.set( 'assets/card80.jpg', new IndexCard( "7777-10", []));
indexCards.set( 'assets/card81.jpg', new IndexCard( "8888-1", []));
indexCards.set( 'assets/card82.jpg', new IndexCard( "8888-2", []));
indexCards.set( 'assets/card83.jpg', new IndexCard( "8888-3", []));
indexCards.set( 'assets/card84.jpg', new IndexCard( "8888-4", []));
indexCards.set( 'assets/card85.jpg', new IndexCard( "8888-5", []));
indexCards.set( 'assets/card86.jpg', new IndexCard( "8888-6", []));
indexCards.set( 'assets/card87.jpg', new IndexCard( "8888-7", []));
indexCards.set( 'assets/card88.jpg', new IndexCard( "8888-8", []));
indexCards.set( 'assets/card89.jpg', new IndexCard( "8888-9", []));
indexCards.set( 'assets/card90.jpg', new IndexCard( "8888-10", []));
indexCards.set( 'assets/card91.jpg', new IndexCard( "9999-1", []));
indexCards.set( 'assets/card92.jpg', new IndexCard( "9999-2", []));
indexCards.set( 'assets/card93.jpg', new IndexCard( "9999-3", []));
indexCards.set( 'assets/card94.jpg', new IndexCard( "9999-4", []));
indexCards.set( 'assets/card95.jpg', new IndexCard( "9999-5", []));
indexCards.set( 'assets/card96.jpg', new IndexCard( "9999-6", []));
indexCards.set( 'assets/card97.jpg', new IndexCard( "9999-7", []));
indexCards.set( 'assets/card98.jpg', new IndexCard( "9999-8", []));
indexCards.set( 'assets/card99.jpg', new IndexCard( "9999-9", []));
indexCards.set( 'assets/card100.jpg', new IndexCard( "9999-10", []));
indexCards.set( 'assets/card101.jpg', new IndexCard( "10000-1", []));

/*

// Metadata filter by dataset above

printIndexCards();


function printIndexCard(value,key,map) {
    let id = `${value.name}`;
    console.log(JSON.stringify(findMetadata(id),null, 4));
}

function printIndexCards() {
    indexCards.forEach(printIndexCard);
}
*/

function createLink(id, array) {
    var item = "";
    for(  var i = 0; i < array.length; i ++ ) {

        var seq = array[i];

        name = "archive/" + id + "/" + id + seq + ".jpg";

        item += "<a " + (i == 0 ? "id=\"first-index-card\"" : "" )  +  " href=\"" + name + "\"><img src=\""+ name + "\"></a>\n";
    }

    return item;
}

function createGallery(name,array)
{
    document.getElementById("lightgallery").innerHTML = createLink(name,array );
    lightGallery(document.getElementById('lightgallery'));      
}

function displayIndexCards(key) {
    let ic = indexCards.get(key);
    createGallery(ic.source(), ic.elements());
    document.getElementById("first-index-card").click();
    return true;
}

function createPlainTextNode(text,parent)
{
    let elem = document.createElement("p");
    elem.setAttribute("class", "metadata");
    elem.setAttribute("translate", "yes");
    elem.innerText = text;
    parent.append(elem);
}

function createPlainText(metadataObject, parent)
{
    let text = "";
   
    if(metadataObject.DESCRIPTION !== undefined && metadataObject.AUTHOR !== undefined && metadataObject.MATERIALS !== undefined && metadataObject.DIMENSIONS !== undefined) {
        text = metadataObject.DESCRIPTION;
        text += " (";
        text += metadataObject.AUTHOR;
        text += " )";

        createPlainTextNode(text,parent);        

        text = metadataObject.MATERIALS;

        createPlainTextNode(text,parent);

        text = metadataObject.DIMENSIONS;

        createPlainTextNode(text,parent);
    }
    else if(metadataObject.DESCRIPTION !== undefined && metadataObject.AUTHOR !== undefined && metadataObject.MATERIALS !== undefined) {
        text = metadataObject.DESCRIPTION;
        text += " (";
        text += metadataObject.AUTHOR;
        text += " )";

        createPlainTextNode(text,parent);        

        text = metadataObject.MATERIALS;

        createPlainTextNode(text,parent);
    }
    else if(metadataObject.DESCRIPTION !== undefined && metadataObject.AUTHOR !== undefined) {
        text = metadataObject.DESCRIPTION;
        text += " (";
        text += metadataObject.AUTHOR;
        text += " )";

        createPlainTextNode(text,parent);
    }
    else if( metadataObject.DESCRIPTION !== undefined ) {
        text = metadataObject.DESCRIPTION;

        createPlainTextNode(text,parent);
    }
    else if ( metadataObject.AUTHOR !== undefined ) {
        text = metadataObject.AUTHOR;

        createPlainTextNode(text,parent);
    }
}

function findMetadata(key)
{
    /*
     If you decide to load the arts.js ,photography.js and texts.js metadata files, uncomment the following loops:
     */
    /* for( let x = 0; x < metadataArt.length; x++ ) {
        if( metadataArt[x].INVENTORY.includes(key) ) {
            return metadataArt[x];
        }
        
    }

    for( let x = 0; x < metadataPhotography.length; x++ ) {
        if( metadataPhotography[x].INVENTORY.includes(key)) {
            return metadataPhotography[x];
        }
        
    }

    for( let x = 0; x < metadataTexts.length; x++ ) {
        if( metadataTexts[x].INVENTORY.includes(key)) {
            return metadataTexts[x];
        }
    } */

    for( let x = 0; x < metadataInformation.length; x ++ ) {
        if( metadataInformation[x].INVENTORY.includes(key)) {
            return metadataInformation[x];
        }
    }

    return null;
}

function clearMetadata() {
    console.log("Clear metadata");
    let elem = document.getElementById("metadata-container");
    while(elem.hasChildNodes()) {
        elem.removeChild(elem.firstChild);
    }
}

function createMetadataElement(key)
{
    let ic = indexCards.get(key);
    clearMetadata();
    let metadata = findMetadata(ic.source());
    let parent = document.getElementById("metadata-container");
    if(metadata != null) {
        createPlainText(metadata,parent);
        console.log(metadata);
    }
    else {
        console.log("There is no metadata about object " + key);
    }

    createPlainTextNode("Double-click the card to see the original",parent);
}
