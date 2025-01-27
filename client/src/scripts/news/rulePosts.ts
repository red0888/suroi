/* eslint-disable quotes,@typescript-eslint/quotes */
export interface RulesPost {
    date: number
    author: string
    title: string
    content: string
    longContent?: string
}

export const rules: RulesPost[] = [
    {
        date: 1690908230000,
        author: "Katloo",
        title: "விதிமுறைகள்",
        content: `இந்த விளையாட்டை விளையாடுவதன் மூலம் நீங்கள் விதிமுறைகளை ஏற்றுக்கொள்கிறீர்கள். விதிமுறைகளை மீறுவது தடைக்கு வழிவகுக்கும்.`,
        longContent: `<ul>
  <li><strong>ஒற்றை வீரர் முறையில் குழு சேர்தல் கூடாது.</strong> ஒற்றை வீரர்களோடு அதிக நேரத்திற்கு சேர்ந்து விளையாட கூடாது.</li>
  <li><strong>ஹாக்கின்க் பண்ணக்கூடாது.</strong> ஸ்கிரிப்ட்ஸ், பிளகின், எக்ஸ்டென்ஷன், பயன்படுத்தி, எதிராளிகளை விட சாதகமாக விளையாட்டை மாற்றுவது முற்றிலும் தடை செய்யப்பட்டுள்ளது.</li>
  <li><strong>பொருத்தமில்லாத பயன்பட்ட பெயர்கள் வைத்திறுக்க கூடாது</strong> நம்மளோட தடைப் பட்டியல்கள் மிகவும் தளர்வானவாக இருக்கு. ஆனால் சில விஷயங்களுக்கு இன்னும் தடை விதிக்கப்பட்டிருக்கு. இந்த குறிப்பிட்ட வார்த்தைகளுக்கான வடிகட்டிகளை தாண்டி செயல்படப் பார்த்தீர்கள் என்றால், விளைவுகள் வரும். </li>
</ul>`
    },
    {
        date: 1690908230000,
        author: "Katloo",
        title: "Tutorial",
        content: `நீங்கள் புது வீரர் இருந்தால், இந்த விலக்கம்ம படிங்கள்.`,
        longContent: `<h2>விளையாட்டு கட்டுப்பாடுகள்</h2>
<p>நடக்க  - W, A, S, D அல்லது அம்பு விசைகள்.</p>
<p>நோக்கு - சுட்டி</p>
<p>அடிக்க - இடது-அமுத்து</p>
<p>ஆயுடங்கள் மாத - 1 இருந்து 3 அல்லது ஸ்குரோல் வீல்.</p>
<p>எடுக்க/புதையல்/தொடர்பு - F</p>
<p>ஏற்றவும் - R</p>
<p>குணபட்டும்ம பொருள்ள பயன்படுத்த- பொருள் மேல இடது-அமுத்து அல்லது 7 இருந்து 0</p>
<p>ரத்து செய்ய - X</p>
<p>ஃபுல் ஸ்கிரீன் மப் மாற்ற - G அல்லது M</p>
<p>சின்ன வரைபடம் மாற்ற - N</p>
<p>இமொட் வீல் பயன்படுத்த - வலது-அமுத்து புடிச்சு, இல்லுட்டி, விடுங்கள்.</p>
<p>பொருள் கீழ பொட - பொருள் மெளை வலது-அமுத்து</p>
<p>கடைசி பொருள் பயன்படுத்த  - Q</p>
<p>துப்பாக்கி இடத்தை மாத - T</p>
<p>இறந்தாடு துப்பாக்கி பயன்படுத்த - Space</p>
<p>Change Scope Zoom - Left-Click on Scope</p>

<h3>Keybinds can be changed in settings!</h3>

<h2>எப்புடி விளையாடுவது</h2>
<p>The goal of Suroi is to be the last player standing. You'll start with nothing, so move around the map to get weapons, scopes, armor, healing items, and ammo. If you see another player, eliminate them for their loot!</p>

<h2>Orange = Bad</h2>
<p>You have another enemy to watch out for: a deadly orange gas. The gas slowly fills the map as the game progresses, making the safe zone smaller and smaller. The damage increases each time it shrinks.</p>

<h2>Similar Games</h2>
<p>நீங்கள் பாட்னிட், அல்லது அபெக்ஸ் லேஜெண்ட்ஸ், அல்லது பப்ஜி அல்லது zombsroyale.io/surviv.io மாதிரி பாட்டில் ரோயல்கள் விலயடுர்கிங்கனா, suroi.io ஓட விளையாட்டு புரியும்.</p>
`
    }
];
