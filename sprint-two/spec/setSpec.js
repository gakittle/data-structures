describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should handle inputs of any type', function() {
    set.add(3);
    set.add(null);
    set.add(false);
    set.add({'hack' : 'reactor'});
    set.add(function() { return 'Nick improved my workflow'; });
    expect(set.contains(3)).to.equal(true);
    expect(set.contains(null)).to.equal(true);
    expect(set.contains(false)).to.equal(true);
    expect(set.contains({'hack' : 'reactor'})).to.eql(true);
    expect(set.contains(function() { return 'Nick improved my workflow'; })).to.eql(true);
    set.remove(3);
    set.remove(null);
    set.remove(false);
    set.remove({'hack' : 'reactor'});
    set.remove(function() { return 'Nick improved my workflow'; });
    expect(set.contains(3)).to.equal(false);
    expect(set.contains(null)).to.equal(false);
    expect(set.contains(false)).to.equal(false);
    expect(set.contains({'hack' : 'reactor'})).to.eql(false);
    expect(set.contains(function() { return 'Nick improved my workflow'; })).to.eql(false);
  });

});
