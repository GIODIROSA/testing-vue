// Importar Vue y el componente que se está probando.
import Vue from "vue";
import Prueba from "./Prueba.vue";
import { expect } from "chai";

describe("Prueba", () => {
  // Inspeccionar las opciones de componentes en bruto
  it("tiene un hook creado", () => {
    expect(typeof Prueba.created).toBe("function");
  });
  //2
  // Evaluar los resultados de las funciones en las opciones de componentes en bruto
  it("establecer los datos correctos por defecto", () => {
    const defaulData = Prueba.data();
    expect(defaulData.titulo).toBe("Bueno, es una prueba");
  });
  //3
  // Inspeccionar la instancia del componente en el montaje
  it("establece correctamente el mensaje cuando se crea", () => {
    const vm = new Vue(Prueba).$mount();
    expect(vm.titulo).toBe("okey, intentemos");
  });
  //4
  // Montar una instancia e inspeccionar la salida del render
  it("emite el mensaje correcto", () => {
    const Construtor = Vue.extend(Prueba);

    const vm = new Construtor().$mount();
    expect(vm.$el.textContent).toBe("okey, intentemos");
  });

  //5
  //observar atributos y comportamientos
  const wrapper = mount (Prueba)
  it('Dice: "Bueno, es una prueba"', () =>{
      let titulo = wrapper.find ('h1.titulo')
      expect(titulo.text()).to.be.equal('Bueno, es una prueba')
  })
});
