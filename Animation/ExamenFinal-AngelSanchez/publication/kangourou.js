(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"kangourou_atlas_", frames: [[0,0,1100,101],[1102,0,154,88]]}
];


// symbols:



(lib.herbes = function() {
	this.spriteSheet = ss["kangourou_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.kangourou_1 = function() {
	this.spriteSheet = ss["kangourou_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.kangourou_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.kangourou_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.kangourou_2, new cjs.Rectangle(0,0,154,88), null);


(lib.herbes_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.herbes();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.herbes_1, new cjs.Rectangle(0,0,1100,101), null);


(lib.btnsaut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgICKQgMgGgFgHQgGgIgCgNQgCgKAAgdIAAhaIgZAAIAAgsIAZAAIAAgoIA2ghIAABJIAmAAIAAAsIgmAAIAABTQAAAZABAFQABADAEAEQAEACAFAAQAIAAAOgFIAFArQgTAIgYAAQgPgBgLgEg");
	this.shape.setTransform(108.6,34.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag+BhQgQgJgIgRQgHgQAAgeIAAiCIA3AAIAABfQAAArADAKQADAKAIAFQAIAHAMAAQANAAALgIQALgIAEgLQAFgMAAgrIAAhYIA2AAIAADPIgzAAIAAggQgLARgSAJQgSAKgUAAQgVAAgRgJg");
	this.shape_1.setTransform(89.6,37.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhOBbQgSgRAAgbQAAgRAIgOQAIgOAQgGQAPgIAcgFQAmgHAOgHIAAgFQAAgQgHgHQgIgGgVAAQgPAAgIAFQgIAGgFAPIgygJQAJgeAUgPQAVgOAoAAQAkAAASAIQASAJAHAOQAHANAAAkIAAA/QAAAbACANQADANAHAPIg2AAIgFgQIgCgHQgOAOgQAHQgPAGgTAAQggAAgSgRgAgBANQgXAEgHAFQgLAIAAALQAAAMAJAIQAJAJANAAQAOAAANgKQAKgHADgLQACgHAAgUIAAgLQgKAEgWAFg");
	this.shape_2.setTransform(66.4,37.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag/BbQgZgRgIgdIA3gJQAEAQAKAJQALAIATAAQAVAAALgIQAHgFAAgKQAAgGgEgEQgEgEgOgDQhCgPgSgMQgYgQAAgeQAAgbAVgSQAVgSAtAAQAqAAAUAOQAVANAIAcIg0AJQgDgMgJgGQgKgHgQAAQgWAAgJAGQgGAEAAAHQAAAGAFAEQAIAGArAKQArAKASAOQARAOAAAaQAAAcgYAVQgYAUguAAQgqAAgYgRg");
	this.shape_3.setTransform(43.6,37.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("ALfAAQAACajYBrQjXBtkwAAQkwAAjXhtQjXhrAAiaQAAiZDXhsQDXhsEwAAQEwAADXBsQDYBsAACZg");
	this.shape_4.setTransform(73.5,37);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AoHEFQjXhsAAiZQAAiZDXhsQDXhsEwAAQEwAADYBsQDXBsAACZQAACZjXBsQjYBtkwAAQkwAAjXhtg");
	this.shape_5.setTransform(73.5,37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,149,76);


// stage content:
(lib.kangourou = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Arrêter la lecture à partir de cette image
		Le scénario arrête/met en pause la lecture à partir de cette image lorsque vous insérez ce code.
		Vous pouvez également utiliser ce code pour arrêter/mettre en pause le scénario des clips.
		*/
		
		this.stop();
		
		/* Cliquer pour atteindre l’image et démarrer la lecture
		Cliquez sur l’occurrence de symbole spécifiée pour déplacer la tête de lecture vers l’image sélectionnée dans le scénario et poursuivre la lecture à partir de cette image.
		Ce code peut être utilisé sur le scénario principal ou sur les scénarios des clips.
		
		Instructions :
		1. Dans le code ci-dessous, remplacez le chiffre 5 par le numéro de l’image vers laquelle vous souhaitez que la tête de lecture se déplace lorsque vous cliquez sur l’occurrence de symbole.
		2. Les numéros d’image dans EaselJS commencent à 0 au lieu de 1
		*/
		
		this.btn_saut.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(2);
		}
	}
	this.frame_20 = function() {
		/* Arrêter la lecture à partir de cette image
		Le scénario arrête/met en pause la lecture à partir de cette image lorsque vous insérez ce code.
		Vous pouvez également utiliser ce code pour arrêter/mettre en pause le scénario des clips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(1));

	// btn saut
	this.btn_saut = new lib.btnsaut();
	this.btn_saut.name = "btn_saut";
	this.btn_saut.parent = this;
	this.btn_saut.setTransform(86.6,351,1,1,0,0,0,73.5,37);
	new cjs.ButtonHelper(this.btn_saut, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_saut).wait(21));

	// herbes
	this.instance = new lib.herbes_1();
	this.instance.parent = this;
	this.instance.setTransform(547,354.5,1,1,0,0,0,550,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:87},20).wait(1));

	// kangourou
	this.instance_1 = new lib.kangourou_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,324,1,1,0,0,0,77,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:300},0).wait(1).to({y:276.2},0).wait(1).to({y:252.9},0).wait(1).to({y:230.5},0).wait(1).to({y:209.6},0).wait(1).to({y:191.6},0).wait(1).to({y:177.8},0).wait(1).to({y:169.1},0).wait(1).to({y:165},0).wait(1).to({y:164},0).wait(1).to({y:165},0).wait(1).to({y:169.4},0).wait(1).to({y:180.7},0).wait(1).to({y:202.5},0).wait(1).to({y:224.8},0).wait(1).to({y:244.6},0).wait(1).to({y:264.3},0).wait(1).to({y:284.1},0).wait(1).to({y:303.9},0).wait(1).to({y:324},0).wait(1));

	// fond
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FFFF").s().p("Egr0AgRMAAAhAhMBXpAAAMAAABAhg");
	this.shape.setTransform(276.5,201.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(271.1,195.1,1101,413);
// library properties:
lib.properties = {
	id: 'E07E66F52104DA42B5B1CC66B7B68BD7',
	width: 550,
	height: 400,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/kangourou_atlas_.png?1527528981832", id:"kangourou_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E07E66F52104DA42B5B1CC66B7B68BD7'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;