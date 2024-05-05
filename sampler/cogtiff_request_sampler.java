///usr/bin/env jbang "$0" "$@" ; exit $?


import static java.lang.System.*;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Random;

public class cogtiff_request_sampler {
    public static final int SAMPLES_COUNT = 10000;
    public static final long MAX_BYTES = 32533562148L;
    public static final int RANGE_SIZE_MIN = 200000;
    public static final int RANGE_SIZE_MAX = 2000000;

    static Random random = new Random();

    public static void main(String... args) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("./ranges.csv"))) {
            writer.write("range,");
            writer.newLine(); 

            for (int i=0; i<SAMPLES_COUNT; i++) {
                // Range randommässig zwischen den gesetzten Limit berechnen.
                int range_size = random.nextInt(RANGE_SIZE_MAX - RANGE_SIZE_MIN + 1) + RANGE_SIZE_MIN;
                out.println(range_size);

                // Das untere absolute Limit des Ranges darf maximal so gross ein, 
                // wie die absolute Grösse der Datei minus der Random-Range-grösse, 
                // die wir requesten wollen.
                long max_lower_limit = MAX_BYTES - range_size;
                long lower_limit = random.nextLong(max_lower_limit);
                out.println(lower_limit);
                long upper_limit = lower_limit + range_size;

                writer.write("bytes="+lower_limit+"-"+upper_limit);
                writer.newLine(); 
            }
        
        } catch (IOException e) {
            e.printStackTrace();
            System.err.println("Error writing to file: " + e.getMessage());
        }
        
        
        out.println("Hello World");
    }
}
