'''
import tensorflow as tf
a = tf.constant(1)
b = tf.constant(2)
# 상수선언

c = tf.add(a,b)
#덧셈

sess = tf.Session()
#세션

print(sess.run(c))
'''
'''
import tensorflow as tf
a = tf.Variable(3)
b = tf.Variable(2)
c = tf.multiply(a,b)
init = tf.global_variables_initializer()
#변수 초기화
sess = tf.Session()
sess.run(init)
print( sess.run(c) )

b = tf.Variable(16)
c = tf.multiply(a,b)
init = tf.global_variables_initializer()
sess.run(init)
print(sess.run(c))
'''
'''
import tensorflow as tf
input = [1,2,3,4,5]
#placeholder
x = tf.placeholder(dtype=tf.float32)
y = x + 5
sess = tf.Session()
print(sess.run(y,feed_dict={x:input}))
#피딩작업
'''
'''
import tensorflow as tf
mathScore = [1,2,3,4,5]
englishScore = [10,2,3,33,55]
a = tf.placeholder(dtype=tf.float32)
b = tf.placeholder(dtype=tf.float32)

y = (a + b)/2
sess = tf.Session()
print( sess.run(y,feed_dict={a : mathScore , b : englishScore}))
'''
import tensorflow as tf
a = tf.constant(2)
b = tf.constant(3)
c = tf.add(a,b)
sess = tf.Session()
print(sess.run(c))

a = tf.constant(2)
b = tf.constant(9)
c = tf.subtract(a,b)
print(sess.run(c))

a = tf.constant(3)
b = tf.constant(10)
c = tf.multiply(a,b)
print(sess.run(c))

c = tf.truediv(a,b)
print(sess.run(c))
c = tf.mod(a,b)
print(sess.run(c))
