function form(){
    document.write("<form>");
    document.write('<input type="text" value="" placeholder="Enter Your Full Name" class="form-element" required>');
    document.write('<input type="email" value="" placeholder="Enter Your EMail" class="form-element" required>');
    document.write('<input type="number" value="" placeholder="Enter Number" class="form-element" required>');
    document.write('<select name="" id="select-element" class="form-element" required>');
    document.write('<><option value="choose">select test</option><option value="Test1">Test1</option><option value="Test2">Test2</option><option value="Test3">Test3</option></>');
    document.write('</select>');
    document.write('<input type="text" name="" id="" placeholder="District" class="form-element">');
    document.write('<input type="text" name="" id="" placeholder="city" class="form-element">');
    document.write('<input type="number" name="" id="" placeholder="pincode" class="form-element">');
    document.write('<textarea name="" id="" placeholder="address" cols="30" rows="3" class="form-element"></textarea>');
    document.write('<textarea name="" id="" placeholder="Message" cols="30" rows="3" class="form-element"></textarea>');
    document.write('<input type="submit" name="" id="submit" value="Get An Appoinment">');
    document.write('</form>');
}

