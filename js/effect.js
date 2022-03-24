class Effect {

    constructor() {
        if (this.constructor === Effect) {
          throw new TypeError('Abstract class "Effect" cannot be instantiated directly.');
        }
    
        if (this.requiredMethod === undefined) {
          throw new TypeError('Classes extending the abstract class "Effect" must contain "requiredMethod()"');
        }
    }

    animate() {

    }

    instantiate() {

    }

}