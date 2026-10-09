const WHATSAPP_NUMBER='254703437442';
function wa(message){window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,'_blank','noopener');}
function ready(segment='General'){wa(`I'm ready. Tell me more. (${segment} - Norland Kenya website)`)}
function toggleMenu(){document.querySelector('.nav-inner').classList.toggle('open')}
function leadSubmit(e){e.preventDefault();const f=new FormData(e.target);const msg=`Hello Norland Kenya. I'm interested.\nName: ${f.get('name')}\nPhone: ${f.get('phone')}\nSegment: ${f.get('segment')}\nHow I heard about Norland: ${f.get('source')}`;wa(msg);e.target.reset();alert('Your WhatsApp conversation is ready. Please tap Send in WhatsApp to complete your enquiry.');}
function rsvp(eventName){wa(`I'd like to RSVP for ${eventName}. Please send me the details.`)}
const p=new URLSearchParams(location.search);const src=p.get('src');const ref=p.get('ref');if(src||ref){document.querySelectorAll('input[data-source]').forEach(i=>i.value=[src&&`src=${src}`,ref&&`ref=${ref}`].filter(Boolean).join(' | '));}
