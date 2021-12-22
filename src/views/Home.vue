<template>
  <div class="home">

    <input v-model.number="operand1" type="number" />
    <input v-model.number="operand2" type="number"/>
    
    <p>={{result}},{{text}}</p>
    <br/>
    <button v-for="(operand,idx) in operands" :key="idx" 
    :disabled="operand=='/' && operand2===0"  
    @click="calculate(operand)">
    {{operand}}
    </button>

    <div class="strange-message">
      <template v-if="result <0">Отрицательное число</template>
      <template v-else-if="result <100">Число меньше ста</template>
      <template v-else>Число больше ста</template>

    </div>

    <div class="check">
      <input type="checkbox" id="keyboard" value="Клавиатура" v-model="keyboard"
      v-bind:true-value="on" v-bind:false-value="off">
      <label for="keyboard">Отобразить клавиатуру </label>
      
      <br/>
      <div v-if="keyboard===on" class="numbers">
        <button v-for="(number,idx) in numbers" :key="idx"
          @click="addNumber(number)"
      >{{number}}</button> 
      <button @click="clear()" >C</button> 
      <button @click="delAll()" >Del</button> 
      <br/>
     <input type="radio" value="oneOperand" v-model="selectOperand">
    <label>One operand</label>
    
    <input type="radio" value="twoOperand" v-model="selectOperand">
    <label>Two operand</label>
    <br/>
     <span>Выбрано: {{ selectOperand }}</span>
     {{errorSelect}}
      </div>
      
     
    </div>
    
   
     
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data(){
    return{
      operand1:'',
      operand2:'',
      operands:["+","-","*","/","^"],
      numbers:["1","2","3","4","5","6","7","8","9"],
      result:0,
      // logs:{},
      text: ' ',
      selectOperand:'',
      errorSelect:'',
      
       on: true,
       off:false,
      keyboard: false
       
    }
  },
  methods:{
    calculate(operation ="-"){
      switch(operation){
        case "+":
          this.plus()
          break;
        case "-":
          this.minus()
          break;
        case "*":
          this.multiplication()
          break;
        case "/":
          this.division()
          break;
        case "^":
          this.exponentiation()
          break;
      }
     
      // const {operand1,operand2} = this
      // const key= Date.now()
      // const value = `${operand1} ${operation} ${operand2} = ${this.result}`
      // this.$set(this.logs,key,value)
    },
    
    plus(){
      this.result =eval(this.operand1)+eval(this.operand2);
      
      this.text ='done'
      
    },
    minus(){
      this.result =eval(this.operand1)-eval(this.operand2);
      this.text ='done'
    },
    multiplication(){
      this.result = eval(this.operand1)*eval(this.operand2);
      this.text ='done'
    },
    division(){
      const {operand2} =this
      if (operand2===0){
        this.text= 'операция невозможна'
        return
      }
       this.result= Math.floor(eval(this.operand1)/eval(this.operand2)) //целочисленное деление
        this.text ='done' 
    },
    exponentiation(){
      this.result = Math.pow(eval(this.operand1),eval(this.operand2))
    },
    addNumber(num){
      if(this.selectOperand==='oneOperand'){
        
        this.operand1+=num
      } else if (this.selectOperand==='twoOperand'){
        this.operand2+=num
      } 
      // else {this.errorSelect='Выберете поле ввода'}
      
      
    }, 
  
     clear() {
       if(this.selectOperand==='oneOperand'){
        
        this.operand1 = (String(this.operand1).slice(0, -1));
      } else if (this.selectOperand==='twoOperand'){
       this.operand2 = (String(this.operand2).slice(0, -1));
      } 
     },
     delAll(){
      if(this.selectOperand==='oneOperand'){
        
        this.operand1 = '';
      } else if (this.selectOperand==='twoOperand'){
       this.operand2 = '';
      } 
     }
  }
}
</script>