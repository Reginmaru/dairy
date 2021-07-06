class SecretDiary {
    constructor() {
         this._locked = true
         this._entries = []
     }
   
     lock() {
         this._locked = true
     }
   
     unlock() {
         this._locked = false
     }
   
     addEntry(str) {
         if (this._locked === true) {
             return 'Diary is locked: KEEP OUT'
         }
         else {
             this._entries.push(str)
         }
     }
   
     getEntries() {
         if (this._locked === true) {
             return 'Diary is locked: KEEP OUT'
         }
         else {
             console.log(this._entries)
         }
     }
    }
    let secretDairy = new SecretDiary ()
    secretDairy.unlock()
    secretDairy.addEntry("test")
    
    console.log(secretDairy.getEntries())