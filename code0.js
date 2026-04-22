gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.idToCallbackMap = new Map();
gdjs.MainCode.GDDashboardObjects1= [];
gdjs.MainCode.GDDashboardObjects2= [];
gdjs.MainCode.GD_95951Objects1= [];
gdjs.MainCode.GD_95951Objects2= [];
gdjs.MainCode.GDIntroObjects1= [];
gdjs.MainCode.GDIntroObjects2= [];
gdjs.MainCode.GDDashboard_9595iconObjects1= [];
gdjs.MainCode.GDDashboard_9595iconObjects2= [];
gdjs.MainCode.GDConfgura_95231_95227o_9595iconObjects1= [];
gdjs.MainCode.GDConfgura_95231_95227o_9595iconObjects2= [];
gdjs.MainCode.GDConfigurationObjects1= [];
gdjs.MainCode.GDConfigurationObjects2= [];
gdjs.MainCode.GDInfoObjects1= [];
gdjs.MainCode.GDInfoObjects2= [];
gdjs.MainCode.GDLogoObjects1= [];
gdjs.MainCode.GDLogoObjects2= [];


gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GD_959595951Objects1Objects = Hashtable.newFrom({"_1": gdjs.MainCode.GD_95951Objects1});
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Dashboard_icon"), gdjs.MainCode.GDDashboard_9595iconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDDashboard_9595iconObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDDashboard_9595iconObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDDashboard_9595iconObjects1[k] = gdjs.MainCode.GDDashboard_9595iconObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDDashboard_9595iconObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Dashboard");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs.MainCode.GD_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GD_95951Objects1.length;i<l;++i) {
    if ( gdjs.MainCode.GD_95951Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GD_95951Objects1[k] = gdjs.MainCode.GD_95951Objects1[i];
        ++k;
    }
}
gdjs.MainCode.GD_95951Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.MainCode.GDInfoObjects1);
{for(var i = 0, len = gdjs.MainCode.GDInfoObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDInfoObjects1[i].getBehavior("Text").setText("Controle de Danos.\nControle como o seu produto danifica a natureza.");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs.MainCode.GD_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GD_95951Objects1.length;i<l;++i) {
    if ( gdjs.MainCode.GD_95951Objects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GD_95951Objects1[k] = gdjs.MainCode.GD_95951Objects1[i];
        ++k;
    }
}
gdjs.MainCode.GD_95951Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14231740);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.MainCode.GDInfoObjects1);
{for(var i = 0, len = gdjs.MainCode.GDInfoObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDInfoObjects1[i].getBehavior("Text").setText("Controle de Danos.");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs.MainCode.GD_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GD_959595951Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.MainCode.GDInfoObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}
{for(var i = 0, len = gdjs.MainCode.GDInfoObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDInfoObjects1[i].getBehavior("Text").setText("Selecione algum icone e veja o que ele é!");
}
}
}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDDashboardObjects1.length = 0;
gdjs.MainCode.GDDashboardObjects2.length = 0;
gdjs.MainCode.GD_95951Objects1.length = 0;
gdjs.MainCode.GD_95951Objects2.length = 0;
gdjs.MainCode.GDIntroObjects1.length = 0;
gdjs.MainCode.GDIntroObjects2.length = 0;
gdjs.MainCode.GDDashboard_9595iconObjects1.length = 0;
gdjs.MainCode.GDDashboard_9595iconObjects2.length = 0;
gdjs.MainCode.GDConfgura_95231_95227o_9595iconObjects1.length = 0;
gdjs.MainCode.GDConfgura_95231_95227o_9595iconObjects2.length = 0;
gdjs.MainCode.GDConfigurationObjects1.length = 0;
gdjs.MainCode.GDConfigurationObjects2.length = 0;
gdjs.MainCode.GDInfoObjects1.length = 0;
gdjs.MainCode.GDInfoObjects2.length = 0;
gdjs.MainCode.GDLogoObjects1.length = 0;
gdjs.MainCode.GDLogoObjects2.length = 0;

gdjs.MainCode.eventsList0(runtimeScene);
gdjs.MainCode.GDDashboardObjects1.length = 0;
gdjs.MainCode.GDDashboardObjects2.length = 0;
gdjs.MainCode.GD_95951Objects1.length = 0;
gdjs.MainCode.GD_95951Objects2.length = 0;
gdjs.MainCode.GDIntroObjects1.length = 0;
gdjs.MainCode.GDIntroObjects2.length = 0;
gdjs.MainCode.GDDashboard_9595iconObjects1.length = 0;
gdjs.MainCode.GDDashboard_9595iconObjects2.length = 0;
gdjs.MainCode.GDConfgura_95231_95227o_9595iconObjects1.length = 0;
gdjs.MainCode.GDConfgura_95231_95227o_9595iconObjects2.length = 0;
gdjs.MainCode.GDConfigurationObjects1.length = 0;
gdjs.MainCode.GDConfigurationObjects2.length = 0;
gdjs.MainCode.GDInfoObjects1.length = 0;
gdjs.MainCode.GDInfoObjects2.length = 0;
gdjs.MainCode.GDLogoObjects1.length = 0;
gdjs.MainCode.GDLogoObjects2.length = 0;


return;

}

gdjs['MainCode'] = gdjs.MainCode;
